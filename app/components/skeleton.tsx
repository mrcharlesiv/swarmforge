'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'card' | 'text' | 'avatar' | 'button';
  count?: number;
}

export function Skeleton({
  className,
  variant = 'default',
  count = 1,
}: SkeletonProps) {
  const baseClasses = 'animate-shimmer bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%] rounded-lg';

  const variants = {
    default: 'h-4 w-full',
    card: 'h-48 w-full',
    text: 'h-4 w-3/4',
    avatar: 'h-10 w-10 rounded-full',
    button: 'h-10 w-24',
  };

  if (count > 1) {
    return (
      <div className={cn('space-y-3', className)}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={cn(baseClasses, variants[variant])}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn(baseClasses, variants[variant], className)} />
  );
}

// Card skeleton with multiple elements
export function CardSkeleton() {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 space-y-4">
      <div className="flex items-start gap-4">
        <Skeleton variant="avatar" className="h-12 w-12 rounded-xl" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" className="w-1/2" />
          <Skeleton variant="text" className="w-full" />
        </div>
      </div>
      <div className="flex gap-2">
        <Skeleton variant="button" className="h-6 w-16 rounded-md" />
        <Skeleton variant="button" className="h-6 w-20 rounded-md" />
      </div>
    </div>
  );
}

// Template card skeleton
export function TemplateCardSkeleton() {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <Skeleton variant="avatar" className="h-12 w-12 rounded-xl" />
          <Skeleton variant="button" className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton variant="text" className="w-2/3" />
        <Skeleton className="h-12 w-full" />
        <div className="flex gap-2">
          <Skeleton variant="button" className="h-6 w-16 rounded-md" />
          <Skeleton variant="button" className="h-6 w-16 rounded-md" />
        </div>
      </div>
      <div className="px-6 py-4 border-t border-slate-700/50 bg-slate-800/30">
        <Skeleton variant="button" className="h-10 w-full rounded-xl" />
      </div>
    </div>
  );
}

// Stats skeleton
export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="text-center space-y-2">
          <Skeleton className="h-10 w-20 mx-auto" />
          <Skeleton variant="text" className="w-24 mx-auto" />
        </div>
      ))}
    </div>
  );
}

// Pricing card skeleton
export function PricingCardSkeleton() {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-6">
      <div className="space-y-2">
        <Skeleton variant="text" className="w-1/3" />
        <Skeleton variant="text" className="w-1/2" />
      </div>
      <Skeleton className="h-12 w-24" />
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton variant="avatar" className="h-5 w-5 rounded-full" />
            <Skeleton variant="text" className="flex-1" />
          </div>
        ))}
      </div>
      <Skeleton variant="button" className="h-12 w-full rounded-xl" />
    </div>
  );
}
