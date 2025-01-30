import CategorySection from '@/components/CategorySection'
import Header from '@/components/Header'
import { categories } from '@/data/categories'

export default function Home() {
  return (
    <>
      <Header />

      <main className='mb-16 flex-grow'>
        {categories.map((category, index) => (
          <CategorySection key={index} {...category} />
        ))}
      </main>
    </>
  )
}
