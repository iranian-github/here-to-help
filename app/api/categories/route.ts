import { NextResponse } from 'next/server'
import { categories } from '@/data/categories'

export async function GET() {
  try {
    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}
