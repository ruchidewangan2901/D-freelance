const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://kyhvtgqdcmebtsxsxhhv.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5aHZ0Z3FkY21lYnRzeHN4aGh2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTg2NDM2MywiZXhwIjoyMDY3NDQwMzYzfQ.5XVyKd0Q8EoHohRPDhQCa5A5cq61kLJ3hqnTib4B6wM';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

module.exports = supabase;
