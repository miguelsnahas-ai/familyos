import { createClient } from "@supabase/supabase-js";

// Strips accidental quotes/whitespace from a pasted env var value —
// a common copy-paste mistake when setting these in a dashboard.
function sanitizeEnvValue(value: string) {
  return value.trim().replace(/^['"]|['"]$/g, "");
}

// Uses the anon/publishable key — safe by design here because
// waitlist_leads only has an INSERT policy for the anon role (no
// select/update/delete), so this key can never read or modify existing
// leads even if it leaked. Used exclusively by the /api/waitlist route.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) return null;

  return createClient(sanitizeEnvValue(url), sanitizeEnvValue(anonKey), {
    auth: { persistSession: false },
  });
}
