import { headers } from 'next/headers'
import { getTenantConfig, type Tenant } from '../types/tenant'

async function getTenant(): Promise<Tenant> {
  const headersList = await headers()
  const config = await getTenantConfig()
  const tenantId = headersList.get('x-tenant-id') ?? config.defaultTenant
  return config.tenants[tenantId]
}

export default async function TenantProvider({ children }: { children: React.ReactNode }) {
  const tenant = await getTenant()

  return (
    <div
      data-tenant-id={tenant.id}
      style={
        {
          '--primary-color': tenant.theme?.brandColor,
          '--link-color': tenant.theme?.brandColor,
          '--link-hover-color': tenant.theme?.brandColor,
          '--card-bg': `color-mix(in srgb, ${tenant.theme?.brandColor} 5%, white)`,
        } as React.CSSProperties
      }
      className='tenant-container'
    >
      {children}
    </div>
  )
}
