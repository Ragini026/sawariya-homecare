'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, RefreshCw, AlertCircle } from 'lucide-react';
import type { GoogleReviewsApiResponse } from '@/app/api/reviews/route';
import {
  GENUINE_GOOGLE_REVIEWS_COLLECTION,
  TEMPORARY_SAMPLE_TESTIMONIALS,
  type GenuineGoogleReview,
} from '@/lib/data';

// Official Google "G" 4-color SVG Icon (displayed exclusively on genuine Google review cards)
export function GoogleIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// Unified item representation for mixed carousel
export interface TestimonialItem {
  id: string;
  isGoogleReview: boolean;
  authorName: string;
  authorPhotoUrl?: string | null;
  rating: number; // Always 5
  text: string;
  relativeTime: string;
  serviceCategory?: string;
}

// Card Component: Standardized fixed-height card for consistent visual alignment
function TestimonialCard({ item }: { item: TestimonialItem }) {
  const [imageError, setImageError] = useState(false);

  // Derive up to 2 uppercase initials for avatar fallback
  const initials =
    item.authorName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || '')
      .join('') || (item.isGoogleReview ? 'G' : 'C');

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-start h-[285px] sm:h-[280px] lg:h-[285px] w-full group relative">
      {/* Card Header: Reviewer Info & Badge */}
      <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          {/* Reviewer Profile Photo or Initials Avatar */}
          {item.authorPhotoUrl && !imageError ? (
            <Image
              src={item.authorPhotoUrl}
              alt={item.authorName}
              width={44}
              height={44}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-200/80 bg-slate-100"
            />
          ) : (
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#F87808] to-[#C2410C] text-white font-semibold text-sm flex items-center justify-center shrink-0 shadow-xs">
              {initials}
            </div>
          )}

          <div className="min-w-0">
            <span
              className="text-sm sm:text-base font-semibold text-slate-900 truncate block"
              title={item.authorName}
            >
              {item.authorName}
            </span>
            <span className="text-xs text-slate-400 block mt-0.5">
              {item.relativeTime}
            </span>
          </div>
        </div>

        {/* Badge: Google Logo & label ONLY on Google review cards */}
        {item.isGoogleReview ? (
          <div className="flex items-center gap-1.5 shrink-0 px-2 py-1 rounded-md bg-slate-50 border border-slate-200/60">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
              Google Review
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 shrink-0 px-2 py-1 rounded-md bg-[#FFF1E6]/80 border border-[#F0D9C6]/60">
            <span className="text-[11px] font-medium text-[#C2410C]">
              {item.serviceCategory || 'Client Review'}
            </span>
          </div>
        )}
      </div>

      {/* 5 Gold Stars */}
      <div className="flex items-center gap-1 pt-3.5 pb-2.5 shrink-0" aria-label="Rated 5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review Content Area: Fixed height container with clean display and no "Read more" buttons */}
      <div className="flex-1 overflow-hidden flex flex-col justify-start">
        <p className="text-sm text-slate-700 leading-relaxed font-normal break-words line-clamp-6">
          {item.text}
        </p>
      </div>
    </div>
  );
}

// Skeleton Card for Loading State
function ReviewCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs animate-pulse flex flex-col justify-start h-[285px] sm:h-[280px] lg:h-[285px]">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-slate-200 shrink-0" />
          <div className="space-y-1.5">
            <div className="w-24 h-4 bg-slate-200 rounded-sm" />
            <div className="w-16 h-3 bg-slate-100 rounded-sm" />
          </div>
        </div>
        <div className="w-20 h-6 bg-slate-100 rounded-md" />
      </div>
      <div className="flex gap-1 py-3 shrink-0">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-amber-100 rounded-sm" />
        ))}
      </div>
      <div className="space-y-2 flex-1 pt-1">
        <div className="w-full h-3 bg-slate-100 rounded-sm" />
        <div className="w-5/6 h-3 bg-slate-100 rounded-sm" />
        <div className="w-4/6 h-3 bg-slate-100 rounded-sm" />
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [googleReviews, setGoogleReviews] = useState<GenuineGoogleReview[]>(
    GENUINE_GOOGLE_REVIEWS_COLLECTION
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [googleMapsUrl, setGoogleMapsUrl] = useState<string>(
    'https://www.google.com/maps/place/?q=place_id:ChIJE2MRcUvdKDoRxnpOIIH9QPk'
  );

  // Responsive items-per-page detection (1 on mobile, 2 on tablet, 3 on desktop)
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const fetchReviews = useCallback(async (bustCache: boolean = false) => {
    try {
      setLoading(true);
      setError(null);
      const url = bustCache ? '/api/reviews?refresh=true' : '/api/reviews';
      const res = await fetch(url);
      const json = (await res.json()) as GoogleReviewsApiResponse;
      if (json && json.success && Array.isArray(json.reviews) && json.reviews.length > 0) {
        // Merge API reviews with latest supplied screenshots reviews, deduplicating by authorName
        const seenNames = new Set<string>();
        const merged: GenuineGoogleReview[] = [];

        // Add latest genuine supplied reviews first (Ayushi Bhoi, Madhu Nidhad, Tamma V)
        for (const rev of GENUINE_GOOGLE_REVIEWS_COLLECTION) {
          const key = rev.authorName.toLowerCase().trim();
          if (!seenNames.has(key)) {
            seenNames.add(key);
            merged.push(rev);
          }
        }

        // Add additional genuine reviews returned from Google Places API
        for (const rev of json.reviews) {
          const key = rev.authorName.toLowerCase().trim();
          if (!seenNames.has(key)) {
            seenNames.add(key);
            merged.push({
              id: rev.id,
              authorName: rev.authorName,
              authorPhotoUrl: rev.authorPhotoUrl,
              authorUri: rev.authorUri,
              rating: rev.rating,
              text: rev.text,
              relativeTime: rev.relativeTime,
              publishTime: rev.publishTime,
            });
          }
        }

        // Sort by text length so detailed reviews are prominently featured
        merged.sort((a, b) => {
          const aWords = a.text.trim().split(/\s+/).length;
          const bWords = b.text.trim().split(/\s+/).length;
          return bWords - aWords;
        });

        // Retain top 6 genuine Google reviews
        setGoogleReviews(merged.slice(0, 6));

        if (json.googleMapsUri) {
          setGoogleMapsUrl(json.googleMapsUri);
        }
      } else if (json && json.success) {
        setGoogleReviews(GENUINE_GOOGLE_REVIEWS_COLLECTION.slice(0, 6));
      } else {
        setError(json?.message || 'Unable to retrieve genuine Google reviews.');
      }
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
      setError('A network error occurred while loading Google reviews.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch('/api/reviews');
        const json = (await res.json()) as GoogleReviewsApiResponse;
        if (active) {
          if (json && json.success && Array.isArray(json.reviews) && json.reviews.length > 0) {
            const seenNames = new Set<string>();
            const merged: GenuineGoogleReview[] = [];

            // Add latest supplied genuine reviews first
            for (const rev of GENUINE_GOOGLE_REVIEWS_COLLECTION) {
              const key = rev.authorName.toLowerCase().trim();
              if (!seenNames.has(key)) {
                seenNames.add(key);
                merged.push(rev);
              }
            }

            // Add Google Places API reviews
            for (const rev of json.reviews) {
              const key = rev.authorName.toLowerCase().trim();
              if (!seenNames.has(key)) {
                seenNames.add(key);
                merged.push({
                  id: rev.id,
                  authorName: rev.authorName,
                  authorPhotoUrl: rev.authorPhotoUrl,
                  authorUri: rev.authorUri,
                  rating: rev.rating,
                  text: rev.text,
                  relativeTime: rev.relativeTime,
                  publishTime: rev.publishTime,
                });
              }
            }

            // Prioritize longer detailed reviews
            merged.sort((a, b) => {
              const aWords = a.text.trim().split(/\s+/).length;
              const bWords = b.text.trim().split(/\s+/).length;
              return bWords - aWords;
            });

            setGoogleReviews(merged.slice(0, 6));

            if (json.googleMapsUri) {
              setGoogleMapsUrl(json.googleMapsUri);
            }
          } else {
            setGoogleReviews(GENUINE_GOOGLE_REVIEWS_COLLECTION.slice(0, 6));
          }
          setLoading(false);
        }
      } catch (err) {
        if (active) {
          console.error('Failed to fetch reviews:', err);
          setGoogleReviews(GENUINE_GOOGLE_REVIEWS_COLLECTION.slice(0, 6));
          setLoading(false);
        }
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  // Build the 12-item collection by alternating 6 genuine Google reviews and 6 temporary sample reviews
  const combinedTestimonials: TestimonialItem[] = useMemo(() => {
    const formattedGoogle: TestimonialItem[] = googleReviews.slice(0, 6).map((rev) => ({
      id: rev.id,
      isGoogleReview: true,
      authorName: rev.authorName,
      authorPhotoUrl: rev.authorPhotoUrl,
      rating: rev.rating || 5,
      text: rev.text,
      relativeTime: rev.relativeTime,
    }));

    const formattedSample: TestimonialItem[] = TEMPORARY_SAMPLE_TESTIMONIALS.slice(0, 6).map(
      (sample) => ({
        id: sample.id,
        isGoogleReview: false,
        authorName: sample.authorName,
        authorPhotoUrl: null,
        rating: sample.rating,
        text: sample.text,
        relativeTime: sample.relativeTime,
        serviceCategory: sample.serviceCategory,
      })
    );

    // Alternate: [Google 0, Sample 0, Google 1, Sample 1, Google 2, Sample 2, ...]
    const interleaved: TestimonialItem[] = [];
    const maxLen = Math.max(formattedGoogle.length, formattedSample.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < formattedGoogle.length) {
        interleaved.push(formattedGoogle[i]);
      }
      if (i < formattedSample.length) {
        interleaved.push(formattedSample[i]);
      }
    }

    // Limit collection to exactly 12 reviews (divisible cleanly by 3 on desktop for 4 exact groups)
    return interleaved.slice(0, 12);
  }, [googleReviews]);

  const totalReviewsCount = combinedTestimonials.length;
  // Calculate dynamic total pages based on visible items per page
  const totalPages = Math.max(1, Math.ceil(totalReviewsCount / itemsPerPage));
  const activePage = Math.min(currentPage, totalPages - 1);

  const scrollToMobileSlide = (page: number) => {
    if (mobileScrollRef.current) {
      isProgrammaticScroll.current = true;
      mobileScrollRef.current.scrollTo({
        left: page * mobileScrollRef.current.clientWidth,
        behavior: 'smooth',
      });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 400);
    }
  };

  const handleNext = () => {
    if (totalPages <= 1) return;
    const nextPage = (activePage + 1) % totalPages;
    setCurrentPage(nextPage);
    scrollToMobileSlide(nextPage);
  };

  const handlePrev = () => {
    if (totalPages <= 1) return;
    const prevPage = (activePage - 1 + totalPages) % totalPages;
    setCurrentPage(prevPage);
    scrollToMobileSlide(prevPage);
  };

  // Sync mobile scroll position with active page
  const handleMobileScroll = () => {
    if (isProgrammaticScroll.current || !mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const itemWidth = container.clientWidth;
    if (itemWidth > 0) {
      const newPage = Math.round(container.scrollLeft / itemWidth);
      if (newPage >= 0 && newPage < totalPages && newPage !== activePage) {
        setCurrentPage(newPage);
      }
    }
  };

  // Cards to display in current group on desktop/tablet
  const displayedReviews = useMemo(() => {
    const startIndex = activePage * itemsPerPage;
    return combinedTestimonials.slice(startIndex, startIndex + itemsPerPage);
  }, [combinedTestimonials, activePage, itemsPerPage]);

  return (
    <section
      id="testimonials"
      className="py-18 sm:py-24 lg:py-28 bg-[#FFFCF8] relative overflow-hidden border-b border-slate-200/70"
    >
      {/* Background Soft Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FFF1E6]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFF1E6]/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-12 sm:mb-16">
          {/* Eyebrow: Orange dot + CUSTOMER TESTIMONIALS */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-slate-700 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F87808] shrink-0" aria-hidden="true" />
            <span>CUSTOMER TESTIMONIALS</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-tight leading-tight">
            What Families Say About Sawariya
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 font-normal pt-0.5 max-w-2xl mx-auto">
            Trusted experiences shared by families who chose Sawariya Home Care.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6">
            <ReviewCardSkeleton />
            <ReviewCardSkeleton />
            <ReviewCardSkeleton />
          </div>
        )}

        {/* Error Fallback State */}
        {!loading && error && combinedTestimonials.length === 0 && (
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-slate-900">
                Customer Testimonials
              </h3>
              <p className="text-sm text-slate-600 mt-1">{error}</p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F87808] hover:bg-[#C2410C] text-white text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Read Verified Reviews on Google</span>
              </a>
              <button
                type="button"
                onClick={() => fetchReviews(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-medium transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
            </div>
          </div>
        )}

        {/* Reviews Carousel (Alternating Google Reviews & Sample Testimonials) */}
        {!loading && combinedTestimonials.length > 0 && (
          <div className="relative max-w-7xl mx-auto px-2 sm:px-8 lg:px-12">
            {/* Left Navigation Arrow */}
            {totalPages > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="hidden md:flex absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#F87808] hover:border-[#F87808]/50 items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
                aria-label="Previous testimonial group"
                id="prev-testimonial-btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Mobile View: Horizontal Snap Carousel (1 card per view) */}
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x py-2"
            >
              {combinedTestimonials.map((item, idx) => (
                <div
                  key={`mobile-${item.id}-${idx}`}
                  className="w-full shrink-0 snap-center px-1"
                >
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>

            {/* Desktop / Tablet Grid View (Exactly 3 distinct cards on desktop, 2 on tablet per group) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {displayedReviews.map((item, idx) => (
                <div key={`desktop-${item.id}-${idx}`} className="h-full">
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>

            {/* Right Navigation Arrow */}
            {totalPages > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="hidden md:flex absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#F87808] hover:border-[#F87808]/50 items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
                aria-label="Next testimonial group"
                id="next-testimonial-btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Carousel Indicator Dots: Calculated dynamically based on actual pages */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8 sm:mt-10">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setCurrentPage(idx);
                      scrollToMobileSlide(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activePage === idx
                        ? 'w-8 bg-[#F87808]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial group ${idx + 1}`}
                    aria-current={activePage === idx ? 'true' : undefined}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
