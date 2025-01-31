import CategorySection from '@/components/CategorySection'
import Header from '@/components/Header'
import { categories } from '@/data/categories'

export default function Home() {
  return (
    <>
      <Header />

      <main className='flex-grow lg:mb-16'>
        {categories.map((category, index) => (
          <CategorySection key={index} {...category} />
        ))}
      </main>
    </>
  )
}
