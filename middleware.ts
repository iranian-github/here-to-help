import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultTenantConfig } from './types/tenant'

export function middleware(request: NextRequest) {
  // Get hostname (e.g. help.example.com, demo.example.com)
  const hostname = request.headers.get('host') || ''
  const path = request.nextUrl.pathname
  console.log('Hostname:', hostname)
  console.log('Path:', path)

  // First try to find tenant by full hostname
  let tenant = Object.values(defaultTenantConfig.tenants).find((t) => t.domain === hostname)

  // If no tenant found by hostname, try path
  if (!tenant) {
    tenant = Object.values(defaultTenantConfig.tenants).find((t) => t.path && path === t.path)
  }

  // If still no tenant found, use default
  if (!tenant) {
    tenant = defaultTenantConfig.tenants[defaultTenantConfig.defaultTenant]
  }

  console.log('Selected tenant:', tenant.id)

  // Add tenant information to headers
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-tenant-id', tenant.id)

  // Return response with modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
