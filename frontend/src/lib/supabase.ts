import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpleWxnbnFneXVlZWdxcnJrZW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTYyNjYsImV4cCI6MjA4NjI3MjI2Nn0.yJ2JuccAxQaADdWCawk3TKdEdOmLZ0g7F8YQ-6wUv64
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseUrl="https://jeylgnqgyueegqrrkemq.supabase.co"

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseKey)
