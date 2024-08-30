import { createClient, SupabaseClient } from "@supabase/supabase-js";

const projectURL: string = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const projectKey: string = import.meta.env.VITE_SUPABASE_PROJECT_KEY;

export const supabase: SupabaseClient = createClient(projectURL, projectKey);