import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='container mx-auto px-4 py-8 text-center'>
      <h1 className='mb-3 text-3xl font-bold'>متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد</h1>
      <Link href='/'>بازگشت به صفحه اصلی</Link>
    </main>
  )
}
