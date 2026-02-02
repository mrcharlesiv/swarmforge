import { NextResponse } from 'next/server'

// Stripe webhook disabled for pre-launch
// Will be enabled when Pro plans go live

export async function POST(request: Request) {
  // Return placeholder response during pre-launch
  return NextResponse.json({ 
    received: true,
    message: 'Webhook handler disabled during pre-launch'
  })
}
