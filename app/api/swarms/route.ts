import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  
  if (!userId) {
    return NextResponse.json({ error: 'User ID required' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('swarms')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ swarms: data })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { userId, name, templateId, config } = body

  const { data, error } = await supabase
    .from('swarms')
    .insert({
      user_id: userId,
      name,
      template_id: templateId,
      config,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ swarm: data })
}
