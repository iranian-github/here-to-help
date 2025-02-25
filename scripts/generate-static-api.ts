import fs from 'fs'
import path from 'path'
import { categories } from '../data/categories'
import { testCenters } from '../data/freeHIVTestCenters'

const PUBLIC_API_DIR = path.join(process.cwd(), 'public', 'api')

// Ensure the api directory exists
if (!fs.existsSync(PUBLIC_API_DIR)) {
  fs.mkdirSync(PUBLIC_API_DIR, { recursive: true })
}

// Write categories
fs.writeFileSync(path.join(PUBLIC_API_DIR, 'categories.json'), JSON.stringify(categories, null, 2))

// Write centers
fs.writeFileSync(path.join(PUBLIC_API_DIR, 'free-hiv-test-centers.json'), JSON.stringify(testCenters, null, 2))

console.log('Static API files generated successfully!')
