-- Family OS — waitlist leads table
-- Run this once in the Supabase SQL editor for your project.

create table if not exists public.waitlist_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  whatsapp text not null,
  child_age text[] not null,
  pain_point text not null,
  pain_point_other text,
  willingness_to_pay text not null,
  family_setup_interest boolean not null default false,
  utm_source text,
  utm_medium text,
  utm_campaign text
);

create index if not exists waitlist_leads_email_idx on public.waitlist_leads (email);
create index if not exists waitlist_leads_created_at_idx on public.waitlist_leads (created_at desc);

-- Row Level Security: the anon key (used by the API route) can only
-- insert new leads — no select/update/delete policy exists, so it can
-- never read or modify existing rows even if the key leaked. Reading
-- leads back requires the Supabase dashboard or the service_role key.
alter table public.waitlist_leads enable row level security;

create policy "Allow anonymous insert" on public.waitlist_leads
  for insert
  to anon
  with check (true);
