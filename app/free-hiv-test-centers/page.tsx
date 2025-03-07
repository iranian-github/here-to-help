import Header from '@/components/Header'
import { testCenters } from '@/data/freeHIVTestCenters'
import { toFarsiNumber } from '@/utils/farsiNumber'
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

        <div className='overflow-x-auto'>
          <table className='min-w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border border-gray-300 p-3'>شهر</th>
                <th className='border border-gray-300 p-3'>آدرس</th>
                <th className='border border-gray-300 p-3'>شماره تماس</th>
              </tr>
            </thead>
            <tbody>
              {testCenters.map((center, index) => (
                <tr key={index} className='hover:bg-gray-50'>
                  <td className='border border-gray-300 p-3 text-center'>{center.city}</td>
                  <td className='border border-gray-300 p-3 text-center'>{center.address}</td>
                  <td className='border border-gray-300 p-3 text-center font-mono'>
                    {center.phoneNumbers.map((phone, idx) => (
                      <span key={idx}>
                        <Link href={`tel:${phone}`} key={idx}>
                          {toFarsiNumber(phone)}
                        </Link>
                        {idx < center.phoneNumbers.length - 1 && <br />}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
