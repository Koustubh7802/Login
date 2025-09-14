import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://soigiczuwbsvkemxirzt.supabase.co";  // from Supabase
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvaWdpY3p1d2JzdmtlbXhpcnp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NDkwMjcsImV4cCI6MjA3MzQyNTAyN30.j-Avrsh9bE1XYjhMlPSiKj3jHb84MjIi5kpkaINjgyg";              // from Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
