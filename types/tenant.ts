export interface Tenant {
  id: string
  name: string
  domain?: string // For subdomain-based tenancy
  path?: string // For path-based tenancy
  theme?: {
    brandColor: string
  }
}

export interface TenantConfig {
  tenants: Record<string, Tenant>
  defaultTenant: string
}

// This will be loaded dynamically
export async function getTenantConfig(): Promise<TenantConfig> {
  const config = await import('../data/tenants.json')
  return config as TenantConfig
}

export const defaultTenantConfig: TenantConfig = {
  tenants: {
    default: {
      id: 'default',
      name: 'Here to Help',
      path: '/',
      theme: {
        brandColor: '#8B5CF6', // Purple
      },
    },
    companyA: {
      id: 'companyA',
      name: 'Company A Help Center',
      domain: 'help.companya.localhost:3000',
      theme: {
        brandColor: '#06DF70', // Snap
      },
    },
    companyB: {
      id: 'companyB',
      name: 'Company B Support',
      path: '/help',
      theme: {
        brandColor: '#F97316', // Orange
      },
    },
  },
  defaultTenant: 'default',
}
