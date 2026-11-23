// Persian slug: drop parentheses, join words with "-". Unique per city name; same-city centers share a page.
export const citySlug = (city: string) =>
  city
    .replace(/[()]/g, '')
    .replace(/\s*-\s*/g, '-')
    .trim()
    .replace(/\s+/g, '-')
