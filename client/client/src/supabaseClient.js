// client/src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kyhvtgqdcmebtsxsxhhv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5aHZ0Z3FkY21lYnRzeHN4aGh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NjQzNjMsImV4cCI6MjA2NzQ0MDM2M30.EghMTvRsF8z4zWCVvlOHB7zrUoMk2vT4om7kr818wzo';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
