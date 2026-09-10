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

-- Row Level Security: only the service role (used by the API route) can
-- read/write. No public policies are added on purpose — the anon key
-- should never be able to touch this table directly.
alter table public.waitlist_leads enable row level security;
