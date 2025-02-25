import { headers } from 'next/headers'
import { defaultTenantConfig } from '../types/tenant'

export async function useTenant() {
  let tenantId = defaultTenantConfig.defaultTenant
  try {
    const headersList = await headers()
    const tenantHeader = headersList.get('x-tenant-id')
    if (tenantHeader) {
      tenantId = tenantHeader
    }
  } catch {
    // Fallback to default tenant if headers are not available
  }

  const tenant = defaultTenantConfig.tenants[tenantId]

  return {
    tenant,
    isDefault: tenantId === defaultTenantConfig.defaultTenant,
  }
}
