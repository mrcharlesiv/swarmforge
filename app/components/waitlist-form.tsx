'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('waitlist').insert({ email });
    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('success');
    }
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-xl p-4 mb-8 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Join the Waitlist — Be first to access new templates
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2 w-full md:w-72 border focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg px-6 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-feedback"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
        </div>

        {status === 'success' && (
          <p className="text-green-400 text-sm">You&apos;re on the list! 🎉</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm">{errorMsg}</p>
        )}
      </form>
    </div>
  );
}
