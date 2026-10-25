import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export interface CleanGoogleReview {
  id: string;
  authorName: string;
  authorPhotoUrl: string | null;
  authorUri: string | null;
  rating: number; // Always 5
  text: string;
  relativeTime: string;
  publishTime: string | null;
}

export interface GoogleReviewsApiResponse {
  success: boolean;
  configured: boolean;
  source: 'places_api' | 'business_profile_api';
  businessName: string;
  overallRating: number;
  totalUserRatings: number;
  googleMapsUri: string;
  reviews: CleanGoogleReview[];
  totalFiveStarReviews: number;
  businessProfileApiAvailable: boolean;
  notes?: string;
  cachedAt?: number;
  error?: string;
  message?: string;
}

// In-memory cache for 1 hour to prevent excessive outbound API requests
interface CacheEntry {
  timestamp: number;
  data: GoogleReviewsApiResponse;
}

let reviewsCache: CacheEntry | null = null;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const forceRefresh = url.searchParams.get('refresh') === 'true';

    // Check in-memory cache first unless forceRefresh is requested
    const now = Date.now();
    if (!forceRefresh && reviewsCache && now - reviewsCache.timestamp < CACHE_DURATION_MS) {
      return NextResponse.json({
        ...reviewsCache.data,
        cachedAt: reviewsCache.timestamp,
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
        },
      });
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        {
          success: false,
          configured: false,
          source: 'places_api',
          businessName: 'Sawariya Home Care',
          overallRating: 0,
          totalUserRatings: 0,
          googleMapsUri: 'https://maps.google.com/?q=Sawariya+Home+Care',
          reviews: [],
          totalFiveStarReviews: 0,
          businessProfileApiAvailable: false,
          error: 'MISSING_CREDENTIALS',
          message: 'GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID is not configured in environment variables.',
        } satisfies GoogleReviewsApiResponse,
        { status: 200 }
      );
    }

    // Google Places API (New) Place Details endpoint
    const endpoint = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const fieldMask = [
      'id',
      'displayName',
      'rating',
      'userRatingCount',
      'googleMapsUri',
      'reviews.name',
      'reviews.rating',
      'reviews.text',
      'reviews.relativePublishTimeDescription',
      'reviews.publishTime',
      'reviews.authorAttribution',
    ].join(',');

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': fieldMask,
      },
      // Cache at fetch layer as well (Next.js 15)
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      let errorBody: unknown = null;
      try {
        errorBody = await response.json();
      } catch {
        // Ignored
      }

      console.error(`[Google Places API Error] Status: ${response.status}`, errorBody);

      return NextResponse.json(
        {
          success: false,
          configured: true,
          source: 'places_api',
          businessName: 'Sawariya Home Care',
          overallRating: 0,
          totalUserRatings: 0,
          googleMapsUri: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
          reviews: [],
          totalFiveStarReviews: 0,
          businessProfileApiAvailable: false,
          error: `API_HTTP_${response.status}`,
          message: `Google Places API returned status ${response.status}.`,
        } satisfies GoogleReviewsApiResponse,
        { status: 502 }
      );
    }

    interface RawGoogleReview {
      name?: string;
      rating?: number;
      text?: {
        text?: string;
        languageCode?: string;
      };
      relativePublishTimeDescription?: string;
      publishTime?: string;
      authorAttribution?: {
        displayName?: string;
        uri?: string;
        photoUri?: string;
      };
    }

    interface RawPlaceDetailsResponse {
      id?: string;
      displayName?: {
        text?: string;
        languageCode?: string;
      };
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: RawGoogleReview[];
    }

    const data = (await response.json()) as RawPlaceDetailsResponse;

    const businessName = data.displayName?.text || 'Sawariya Home Care';
    const overallRating = typeof data.rating === 'number' ? data.rating : 0;
    const totalUserRatings = typeof data.userRatingCount === 'number' ? data.userRatingCount : 0;
    const googleMapsUri = data.googleMapsUri || `https://www.google.com/maps/place/?q=place_id:${placeId}`;

    // Filter genuine 5-star reviews ONLY
    // Must have rating === 5, non-empty text, and valid author attribution
    const rawReviews = Array.isArray(data.reviews) ? data.reviews : [];
    const seenTexts = new Set<string>();
    const fiveStarReviews: CleanGoogleReview[] = [];

    for (let i = 0; i < rawReviews.length; i++) {
      const rev = rawReviews[i];
      // Strictly numeric 5 stars
      if (rev.rating !== 5) {
        continue;
      }

      const text = rev.text?.text?.trim();
      // Ensure review text is not empty
      if (!text) {
        continue;
      }

      // Deduplicate reviews by text
      const normalizedText = text.toLowerCase();
      if (seenTexts.has(normalizedText)) {
        continue;
      }
      seenTexts.add(normalizedText);

      const authorName = rev.authorAttribution?.displayName?.trim() || 'Google Reviewer';
      const authorPhotoUrl = rev.authorAttribution?.photoUri || null;
      const authorUri = rev.authorAttribution?.uri || null;
      const relativeTime = rev.relativePublishTimeDescription || 'Recently';
      const publishTime = rev.publishTime || null;
      const id = rev.name || `review-${i}-${Date.now()}`;

      fiveStarReviews.push({
        id,
        authorName,
        authorPhotoUrl,
        authorUri,
        rating: 5,
        text,
        relativeTime,
        publishTime,
      });

      // Stop once target of up to 12 is reached
      if (fiveStarReviews.length >= 12) {
        break;
      }
    }

    const result: GoogleReviewsApiResponse = {
      success: true,
      configured: true,
      source: 'places_api',
      businessName,
      overallRating,
      totalUserRatings,
      googleMapsUri,
      reviews: fiveStarReviews,
      totalFiveStarReviews: fiveStarReviews.length,
      businessProfileApiAvailable: false,
      notes:
        'Retrieved genuine reviews via Google Places API (New). Places API returns up to 5 most helpful reviews. To retrieve full paginated review history (10-12+ reviews), Google Business Profile OAuth 2.0 authorization for the verified location is required.',
    };

    // Save in cache
    reviewsCache = {
      timestamp: now,
      data: result,
    };

    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
      },
    });
  } catch (error) {
    console.error('[Reviews API Route Exception]', error);
    return NextResponse.json(
      {
        success: false,
        configured: false,
        source: 'places_api',
        businessName: 'Sawariya Home Care',
        overallRating: 0,
        totalUserRatings: 0,
        googleMapsUri: 'https://maps.google.com/?q=Sawariya+Home+Care',
        reviews: [],
        totalFiveStarReviews: 0,
        businessProfileApiAvailable: false,
        error: 'INTERNAL_ERROR',
        message: 'An unexpected error occurred while fetching reviews.',
      } satisfies GoogleReviewsApiResponse,
      { status: 500 }
    );
  }
}
