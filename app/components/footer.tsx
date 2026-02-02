'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Github, Twitter, Linkedin, Mail, Loader2, CheckCircle } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'Templates', href: '/templates' },
    { label: 'Builder', href: '/builder' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Dashboard', href: '/dashboard' },
  ],
  resources: [
    { label: 'Documentation', href: '/dashboard' },
    { label: 'API Reference', href: '/dashboard' },
    { label: 'Guides', href: '/dashboard' },
    { label: 'Blog', href: '/dashboard' },
  ],
  company: [
    { label: 'About', href: '/dashboard' },
    { label: 'Careers', href: '/dashboard' },
    { label: 'Contact', href: '/dashboard' },
    { label: 'Press Kit', href: '/dashboard' },
  ],
  legal: [
    { label: 'Privacy', href: '/dashboard' },
    { label: 'Terms', href: '/dashboard' },
    { label: 'Security', href: '/dashboard' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setStatus('loading');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
    // Reset after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <footer className="border-t border-slate-800/50 bg-slate-900/50">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <Sparkles className="h-6 w-6 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-lg font-bold text-white">
                Swarm<span className="text-cyan-400">Forge</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Build autonomous AI agent teams that work together to complete complex tasks — no coding required.
            </p>
            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full pl-9 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success' || !email.trim()}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : status === 'success' ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-emerald-400 text-xs mt-2">Thanks for subscribing!</p>
            )}
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 SwarmForge. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
