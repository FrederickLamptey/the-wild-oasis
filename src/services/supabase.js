import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://gqhhezakcqggzsvnhufd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxaGhlemFrY3FnZ3pzdm5odWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMjMwNDEsImV4cCI6MjA0Nzc5OTA0MX0.i0tXdOSHse65L5hK9FxckDp5xSjQiGTgu7UtwyIFuyE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
