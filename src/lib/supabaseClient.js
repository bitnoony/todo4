import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://bjmzkdrmftmvwqwybkot.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqbXprZHJtZnRtdndxd3lia290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzNDQ1NjksImV4cCI6MjAxNzkyMDU2OX0.yd_vB4gdn0MFdWnw1IFAL-8GDrWJd_XTznczvQKXouk')