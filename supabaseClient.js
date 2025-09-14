import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://YOUR_PROJECT.supabase.co";  // from Supabase
const supabaseKey = "YOUR_PUBLIC_ANON_KEY";              // from Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
