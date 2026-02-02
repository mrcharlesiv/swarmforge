'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'template' | 'pricing' | 'glass' | 'popular';
  hover?: boolean;
}

export function Card({
  children,
  className,
  variant = 'default',
  hover = true,
}: CardProps) {
  const variants = {
    default: 'bg-slate-800/50 border border-slate-700 rounded-2xl p-6',
    feature: 'card-feature',
    template: 'card-template',
    pricing: 'card-pricing',
    popular: 'card-pricing-popular p-8',
    glass: 'card-glass',
  };

  const isInteractive = hover && (variant === 'feature' || variant === 'template');

  return (
    <div
      className={cn(
        variants[variant],
        isInteractive && 'cursor-pointer focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 focus-within:ring-offset-slate-900',
        className
      )}
      role={isInteractive ? 'article' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return <h3 className={cn('text-xl font-semibold text-white', className)}>{children}</h3>;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return <p className={cn('text-slate-400 mt-2', className)}>{children}</p>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('', className)}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn('mt-6 pt-6 border-t border-slate-700/50', className)}>{children}</div>;
}
