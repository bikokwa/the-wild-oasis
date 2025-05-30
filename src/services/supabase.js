import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dfxsvzgnwxhxmkllvkrt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmeHN2emdud3hoeG1rbGx2a3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTE1MjQsImV4cCI6MjA1NjA2NzUyNH0.pztfb_CQWso28DHPIN29sP91M5Uq9EIj51JsKDtlz7g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
