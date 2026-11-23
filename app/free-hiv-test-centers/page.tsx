import Header from '@/components/Header'
import { testCenters } from '@/data/freeHIVTestCenters'
import CentersTable from '@/components/CentersTable'
import Link from 'next/link'
import { Metadata } from 'next'

const title = 'لیست مراکز آزمایش رایگان HIV'
const description = 'لیست مراکز آزمایش رایگان ایدز و مشاوره بیماری های رفتاری در ایران'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['مراکز آزمایش رایگان ایدز', 'مراکز مشاوره بیماری های رفتاری'],
  openGraph: { title, description },
  twitter: { title, description },
}

export default function FreeHIVTestCenters() {
  return (
    <>
      <Header />
      <main className='flex-grow lg:mb-16'>
        <h2 className='mb-12 text-center text-xl font-bold md:text-3xl'>
          لیست مراکز آزمایش رایگان ایدز و مشاوره بیماری های رفتاری
        </h2>
        <p className='mx-auto mb-8 max-w-xl text-center leading-relaxed text-gray-600'>
          آزمایش دادن یعنی مراقبت از خودتون، و این کار رو می‌تونین رایگان انجام بدین. شهرتون رو پیدا کنین و اگه خواستین
          قبلش تماس بگیرین و بپرسین.
        </p>

        <CentersTable centers={testCenters} />
        <p className='mt-4 text-sm text-gray-600'>
          منبع:{' '}
          <Link
            href='https://doctoreto.com/blog/free-aids-test-centers/'
            className='text-blue-600 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            دکترتو
          </Link>
        </p>
      </main>
    </>
  )
}
