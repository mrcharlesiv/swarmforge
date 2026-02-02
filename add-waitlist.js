const { Client } = require('pg');

const client = new Client({
  host: 'aws-0-us-east-1.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
  user: 'postgres.ugnjzsxiyrbzwopundfs',
  password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnbmp6c3hpeXJiendvcHVuZGZzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTk4OTI4NiwiZXhwIjoyMDg1NTY1Mjg2fQ.0DBXwpzROVxl8L5bi5R51P6pLU-Dyj-UgQh4Lz--VXI',
  ssl: { rejectUnauthorized: false }
});

async function addWaitlistTable() {
  try {
    console.log('Connecting to Supabase...');
    await client.connect();
    console.log('Connected! Creating waitlist table...');
    
    const waitlistSchema = `
      -- Waitlist Table (for pre-launch signups)
      CREATE TABLE IF NOT EXISTS waitlist (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT NOT NULL UNIQUE,
        source TEXT DEFAULT 'swarmforge_prelaunch',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

      CREATE POLICY "Allow public insert to waitlist"
        ON waitlist FOR INSERT
        TO anon
        WITH CHECK (true);

      CREATE POLICY "Allow authenticated select on waitlist"
        ON waitlist FOR SELECT
        TO authenticated
        USING (true);

      CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
      CREATE INDEX IF NOT EXISTS idx_waitlist_created ON waitlist(created_at);
    `;
    
    await client.query(waitlistSchema);
    
    // Verify
    const result = await client.query("SELECT COUNT(*) FROM waitlist");
    console.log('✅ Waitlist table created successfully!');
    console.log(`Current waitlist entries: ${result.rows[0].count}`);
    
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

addWaitlistTable();
