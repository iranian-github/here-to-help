import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-tenant-id',
            value: ':tenantId',
          },
        ],
      },
    ]
  },
  images: {
    domains: [
      'localhost',
      process.env.NEXT_PUBLIC_MAIN_DOMAIN || '',
      // Add other domains that might serve images here
    ].filter(Boolean),
  },
}

export default nextConfig
