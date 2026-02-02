-- Waitlist table for pre-launch
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'swarmforge_prelaunch',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on waitlist
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for signup form)
CREATE POLICY "Allow public insert to waitlist"
  ON waitlist FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view waitlist
CREATE POLICY "Allow authenticated select on waitlist"
  ON waitlist FOR SELECT
  TO authenticated
  USING (true);
