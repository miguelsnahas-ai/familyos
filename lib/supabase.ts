import { createClient } from "@supabase/supabase-js";

// Server-only client using the service role key — never import this
// from a client component. Used exclusively by the /api/waitlist route.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) return null;

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
