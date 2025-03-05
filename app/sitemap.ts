import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://heretohelp.ir'

  const routes = [
    '',
    '/free-hiv-test-centers',
    // TODO: We can make this dynamic
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: '2025-03-05',
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }))
}
