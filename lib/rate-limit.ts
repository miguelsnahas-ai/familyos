// Basic in-memory rate limiter: 5 requests per IP per hour. Good enough
// to deter casual spam on a single-instance smoke test; it resets on
// cold start and doesn't share state across serverless instances, so
// swap for Upstash Redis (or similar) if this needs to be airtight.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(ip, timestamps);
  return false;
}
