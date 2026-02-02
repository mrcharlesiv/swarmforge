import { NextResponse } from 'next/server'
import { stripe, createCheckoutSession } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, email } = body

    // Get or create customer
    let { data: subscription } = await supabase
      .from('subscriptions')
      .select('stripe_customer_id')
      .eq('user_id', userId)
      .single()

    let customerId = subscription?.stripe_customer_id

    if (!customerId) {
      const customer = await stripe.customers.create({
        email,
        metadata: { userId },
      })
      customerId = customer.id

      await supabase.from('subscriptions').insert({
        user_id: userId,
        stripe_customer_id: customerId,
        plan: 'free',
        status: 'active',
      })
    }

    const checkoutSession = await createCheckoutSession(customerId)

    return NextResponse.json({ sessionId: checkoutSession.id })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
