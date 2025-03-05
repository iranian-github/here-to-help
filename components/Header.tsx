import Link from 'next/link'

export default function Header() {
  return (
    <header className='mt-12 mb-8 text-center sm:mb-12 lg:mt-32 lg:mb-16'>
      <h1 className='mb-3 text-3xl font-bold sm:text-4xl lg:mb-5 lg:text-5xl'>
        <Link href='/' className='text-black hover:text-black'>
          اینجائیم برای کمک
        </Link>
      </h1>
      <p className='mx-auto max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg'>
        لازم نیست به تنهایی از این مسیر عبور کنید.
      </p>
    </header>
  )
}
