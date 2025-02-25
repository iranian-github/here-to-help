import { NextResponse } from 'next/server'
import { testCenters } from '@/data/freeHIVTestCenters'

export const dynamic = 'force-static'

export async function GET() {
  try {
    return NextResponse.json(testCenters)
  } catch (error) {
    console.error('Error fetching free HIV test centers:', error)
    return NextResponse.json({ error: 'Failed to fetch free HIV test centers' }, { status: 500 })
  }
}
