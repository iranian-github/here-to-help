import { MetadataRoute } from 'next'
import { testCenters } from '@/data/freeHIVTestCenters'
import { citySlug } from '@/utils/citySlug'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://heretohelp.ir'

  const routes: string[] = [
    '',
    '/free-hiv-test-centers',
    ...new Set(testCenters.map((c) => `/free-hiv-test-centers/${citySlug(c.city)}`)),
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: '2025-03-05',
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }))
}
