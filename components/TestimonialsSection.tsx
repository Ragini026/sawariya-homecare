'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import type { CleanGoogleReview, GoogleReviewsApiResponse } from '@/app/api/reviews/route';

// Official Google "G" 4-color SVG Icon
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

// Minimal Google Review Card
interface ReviewCardProps {
  review: CleanGoogleReview;
  businessGoogleUrl: string;
}

function GoogleReviewCard({ review, businessGoogleUrl }: ReviewCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Derive up to 2 uppercase initials for avatar fallback
  const initials = review.authorName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('') || 'G';

  // Truncate reviews longer than 150 characters
  const shouldTruncate = review.text.length > 150;
  const displayText = shouldTruncate && !isExpanded
    ? `${review.text.slice(0, 150)}...`
    : review.text;

  const targetLink = review.authorUri || businessGoogleUrl;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group relative">
      <div>
        {/* Card Header: Reviewer Info & Google Badge */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3 min-w-0">
            {/* Reviewer Google Profile Photo or Initials Avatar */}
            {review.authorPhotoUrl && !imageError ? (
              <Image
                src={review.authorPhotoUrl}
                alt={review.authorName}
                width={44}
                height={44}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-200/80 bg-slate-100"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center shrink-0 shadow-xs">
                {initials}
              </div>
            )}

            <div className="min-w-0">
              <a
                href={targetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                title={review.authorName}
              >
                {review.authorName}
              </a>
              <span className="text-xs text-slate-400 block mt-0.5">
                {review.relativeTime}
              </span>
            </div>
          </div>

          {/* Small Google Logo & "Google Review" Label */}
          <div className="flex items-center gap-1.5 shrink-0 px-2 py-1 rounded-md bg-slate-50 border border-slate-200/60">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
              Google Review
            </span>
          </div>
        </div>

        {/* 5 Gold Stars */}
        <div className="flex items-center gap-1 pt-3.5 pb-2.5" aria-label="Rated 5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Genuine Review Text */}
        <p className="text-sm text-slate-700 leading-relaxed break-words font-normal">
          {displayText}
        </p>

        {shouldTruncate && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline focus:outline-hidden cursor-pointer"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Discreet bottom link to Google */}
      <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs text-slate-400">
        <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
          <GoogleIcon className="w-3 h-3" />
          Verified 5-Star Review
        </span>
        <a
          href={targetLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors inline-flex items-center gap-1 text-[11px] font-medium"
        >
          View on Maps
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

// Skeleton Card for Loading State
function ReviewCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs animate-pulse flex flex-col justify-between h-56">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-slate-200 shrink-0" />
            <div className="space-y-1.5">
              <div className="w-24 h-4 bg-slate-200 rounded-sm" />
              <div className="w-16 h-3 bg-slate-100 rounded-sm" />
            </div>
          </div>
          <div className="w-20 h-6 bg-slate-100 rounded-md" />
        </div>
        <div className="flex gap-1 py-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-amber-100 rounded-sm" />
          ))}
        </div>
        <div className="space-y-2">
          <div className="w-full h-3 bg-slate-100 rounded-sm" />
          <div className="w-5/6 h-3 bg-slate-100 rounded-sm" />
        </div>
      </div>
      <div className="w-24 h-3 bg-slate-100 rounded-sm mt-4" />
    </div>
  );
}

export function TestimonialsSection() {
  const [data, setData] = useState<GoogleReviewsApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Responsive items-per-page detection
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
      if (json && json.success) {
        setData(json);
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
          if (json && json.success) {
            setData(json);
          } else {
            setError(json?.message || 'Unable to retrieve genuine Google reviews.');
          }
          setLoading(false);
        }
      } catch (err) {
        if (active) {
          console.error('Failed to fetch reviews:', err);
          setError('A network error occurred while loading Google reviews.');
          setLoading(false);
        }
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  const reviews = data?.reviews || [];
  const totalReviewsCount = reviews.length;
  const maxIndex = Math.max(0, totalReviewsCount - itemsPerPage);

  const handleNext = () => {
    if (totalReviewsCount <= itemsPerPage) return;
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (totalReviewsCount <= itemsPerPage) return;
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  // Sync mobile scroll position
  const handleMobileScroll = () => {
    if (isProgrammaticScroll.current || !mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const itemWidth = container.clientWidth;
    if (itemWidth > 0) {
      const newIndex = Math.round(container.scrollLeft / itemWidth);
      if (newIndex >= 0 && newIndex < totalReviewsCount && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const scrollToMobileSlide = (index: number) => {
    if (mobileScrollRef.current) {
      isProgrammaticScroll.current = true;
      mobileScrollRef.current.scrollTo({
        left: index * mobileScrollRef.current.clientWidth,
        behavior: 'smooth',
      });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 400);
    }
  };

  const googleMapsUrl =
    data?.googleMapsUri ||
    'https://www.google.com/maps/place/?q=place_id:ChIJE2MRcUvdKDoRxnpOIIH9QPk';


  return (
    <section
      id="testimonials"
      className="py-18 sm:py-24 lg:py-28 bg-[#F7FAFC] relative overflow-hidden border-b border-slate-200/70"
    >
      {/* Background Soft Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#E8F7EF]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EAF3FF]/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-slate-700 text-xs font-bold uppercase tracking-wider">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span>GOOGLE REVIEWS</span>
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

        {/* Error / Fallback State */}
        {!loading && (error || reviews.length === 0) && (
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-slate-900">
                Real Reviews on Google Business Profile
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {error ||
                  'No reviews currently returned by the Google Places API. You can read all verified patient and family testimonials directly on Google Maps.'}
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#22A06B] hover:bg-[#1c8457] text-white text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Read Verified Reviews on Google</span>
                <ExternalLink className="w-4 h-4" />
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

        {/* Reviews Carousel (When loaded with reviews) */}
        {!loading && reviews.length > 0 && (
          <div className="relative max-w-7xl mx-auto px-2 sm:px-8 lg:px-12">
            {/* Left Navigation Arrow */}
            {totalReviewsCount > itemsPerPage && (
              <button
                type="button"
                onClick={handlePrev}
                className="hidden md:flex absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
                aria-label="Previous Google reviews"
                id="prev-google-review-btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Mobile View: Horizontal Snap Carousel */}
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x py-2"
            >
              {reviews.map((review, idx) => (
                <div
                  key={`mobile-${review.id}-${idx}`}
                  className="w-full shrink-0 snap-center px-1"
                >
                  <GoogleReviewCard
                    review={review}
                    businessGoogleUrl={googleMapsUrl}
                  />
                </div>
              ))}
            </div>

            {/* Desktop / Tablet Grid View (Window of itemsPerPage cards) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((review, idx) => (
                  <div key={`desktop-${review.id}-${idx}`} className="h-full">
                    <GoogleReviewCard
                      review={review}
                      businessGoogleUrl={googleMapsUrl}
                    />
                  </div>
                ))}
            </div>

            {/* Right Navigation Arrow */}
            {totalReviewsCount > itemsPerPage && (
              <button
                type="button"
                onClick={handleNext}
                className="hidden md:flex absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer focus:outline-hidden"
                aria-label="Next Google reviews"
                id="next-google-review-btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Carousel Indicator Dots */}
            {totalReviewsCount > 1 && (
              <div className="flex justify-center gap-2 mt-8 sm:mt-10">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx > maxIndex ? maxIndex : idx);
                      scrollToMobileSlide(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-[#0B2545]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
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
