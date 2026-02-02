import { NextResponse } from 'next/server'

// Stripe checkout disabled for pre-launch
// Will be enabled when Pro plans go live

export async function POST(request: Request) {
  // Return placeholder response during pre-launch
  return NextResponse.json({ 
    message: 'Pro plans coming soon. Join the waitlist to be notified!',
    status: 'pre-launch'
  }, { status: 503 })
}
