'use client';

import Link from 'next/link';
import { Sparkles, Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/30 rounded-xl blur-lg group-hover:bg-cyan-400/50 transition-all duration-300" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>
          <span className="text-2xl font-bold text-white">
            Swarm<span className="text-cyan-400">Forge</span>
          </span>
        </Link>

        {/* 404 Display */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-extrabold text-white/10 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-900 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link 
            href="/templates"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-xl transition-all duration-200"
          >
            <Search className="h-4 w-4" />
            Browse Templates
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm">
            Need help?{' '}
            <Link 
              href="/dashboard" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
