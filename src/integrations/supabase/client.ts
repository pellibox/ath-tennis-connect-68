
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Use direct values instead of environment variables
const supabaseUrl = 'https://kcsgaqbmguazebsbwkiz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjc2dhcWJtZ3VhemVic2J3a2l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NDk5OTgsImV4cCI6MjA1OTMyNTk5OH0.34FvdU9h5RLZCjEx0cmivZnJy0948b5Yrj-vujXHh5s';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
