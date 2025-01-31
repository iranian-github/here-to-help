import Header from '@/components/Header'
import { testCenters } from '@/data/freeHIVTestCenters'
import { toFarsiNumber } from '@/utils/farsiNumber'
import Link from 'next/link'

const FreeHIVTestCenters = () => {
  return (
    <>
      <Header />
      <main className='flex-grow lg:mb-16'>
        <h1 className='mb-12 text-center text-3xl font-bold'>
          لیست مراکز آزمایش رایگان ایدز و مشاوره بیماری های رفتاری
        </h1>

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
                  <td className='font-mono border border-gray-300 p-3 text-center'>
                    {center.phoneNumbers.map((phone, idx) => (
                      <span key={idx}>
                        <Link href={`tel:${phone}`} key={idx}>
                          {toFarsiNumber(parseInt(phone))}
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

export default FreeHIVTestCenters
