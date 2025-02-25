import { useEffect, useState } from 'react'
import { defaultTenantConfig } from '../types/tenant'

export function useClientTenant() {
  const [tenantId, setTenantId] = useState(defaultTenantConfig.defaultTenant)

  useEffect(() => {
    const tenantElement = document.querySelector('[data-tenant-id]')
    if (tenantElement) {
      const id = tenantElement.getAttribute('data-tenant-id')
      if (id) setTenantId(id)
    }
  }, [])

  return {
    tenant: defaultTenantConfig.tenants[tenantId],
    isDefault: tenantId === defaultTenantConfig.defaultTenant,
  }
}
