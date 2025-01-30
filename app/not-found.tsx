import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='container mx-auto flex h-[calc(100vh-200px)] flex-col items-center justify-center px-4'>
      <h1 className='mb-5 text-3xl font-bold'>متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد</h1>
      <Link href='/'>بازگشت به صفحه اصلی</Link>
    </main>
  )
}
