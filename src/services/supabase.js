import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zmobglhjayylkvifiupi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptb2JnbGhqYXl5bGt2aWZpdXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3ODI2MDQsImV4cCI6MjA4MzM1ODYwNH0.IeOntY5PEktGU4yRpTZxQRHd9MU47FI208nH1rNhNr4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
