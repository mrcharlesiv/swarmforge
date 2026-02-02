'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/templates', label: 'Templates' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/builder', label: 'Builder' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar-glass">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg" aria-label="SwarmForge - Home">
            <div className="relative">
              <Sparkles className="h-7 w-7 text-cyan-400 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-white">
              Swarm<span className="text-cyan-400">Forge</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md px-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/dashboard"
              className="btn-primary text-sm py-2.5 px-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          )}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="py-4 space-y-4 border-t border-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-slate-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-slate-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="block btn-primary text-center text-sm py-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
