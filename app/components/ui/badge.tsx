'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose' | 'default';
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = 'default',
  className,
  dot = false,
}: BadgeProps) {
  const variants = {
    default: 'bg-slate-700/50 text-slate-300 border border-slate-600/50',
    cyan: 'badge-cyan border border-cyan-500/20',
    purple: 'badge-purple border border-purple-500/20',
    emerald: 'badge-emerald border border-emerald-500/20',
    amber: 'badge-amber border border-amber-500/20',
    rose: 'badge-rose border border-rose-500/20',
  };

  const dotColors = {
    default: 'bg-slate-400',
    cyan: 'bg-cyan-400',
    purple: 'bg-purple-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    rose: 'bg-rose-400',
  };

  return (
    <span className={cn('badge', variants[variant], className)}>
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full', dotColors[variant])} />
      )}
      {children}
    </span>
  );
}
