'use client'

import { useState } from 'react'
import Link from 'next/link'
import { toFarsiNumber } from '@/utils/farsiNumber'
import { citySlug } from '@/utils/citySlug'

interface Center {
  city: string
  address: string
  phoneNumbers: string[]
}

// Arabic ye/kaf, Persian/Arabic digits and ZWNJ differ per keyboard; fold them so any typing matches.
const normalize = (s: string) =>
  s
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[‌\s]+/g, '')
    .toLowerCase()

export default function CentersTable({ centers, searchable = true }: { centers: Center[]; searchable?: boolean }) {
  const [query, setQuery] = useState('')
  const q = normalize(query)
  const filtered = q ? centers.filter((c) => normalize(c.city).includes(q)) : centers

  return (
    <>
      {searchable && (
        <div className='mx-auto mb-8 max-w-md'>
          <label htmlFor='city-search' className='mb-2 block text-center text-sm text-gray-600'>
            نام شهرتون رو بنویسین
          </label>
          <input
            id='city-search'
            type='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='مثلاً: شیراز'
            className='w-full rounded-lg border border-gray-300 bg-white/90 p-3 text-center'
          />
        </div>
      )}

      {filtered.length === 0 ? (
        <p role='status' className='mx-auto max-w-md text-center leading-relaxed text-gray-600'>
          برای «{query}» مرکزی پیدا نشد. ممکنه اسم شهر رو جور دیگه‌ای ثبت کرده باشیم؛ نزدیک‌ترین شهر بزرگ رو امتحان
          کنین، یا برای راهنمایی با ۱۲۳ یا ۱۴۸۰ تماس بگیرین.
        </p>
      ) : (
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
              {filtered.map((center) => (
                <tr key={center.city + center.address} className='hover:bg-gray-50'>
                  <td className='border border-gray-300 p-3 text-center'>
                    <Link
                      href={`/free-hiv-test-centers/${citySlug(center.city)}`}
                      className='text-blue-600 hover:underline'
                    >
                      {center.city}
                    </Link>
                  </td>
                  <td className='border border-gray-300 p-3 text-center'>{center.address}</td>
                  <td className='border border-gray-300 p-3 text-center font-mono'>
                    {center.phoneNumbers.map((phone) => (
                      <span key={phone}>
                        <Link href={`tel:${phone}`} className='resource-button my-1 block sm:inline-block'>
                          تماس: {toFarsiNumber(phone)}
                        </Link>
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className='mt-6 text-center text-sm text-gray-600'>
        شماره یا آدرسی اشتباهه یا مرکزی جا افتاده؟{' '}
        <Link
          href='https://github.com/iranian-github/here-to-help/issues/new?template=wrong_data.md'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline'
        >
          به ما خبر بدین
        </Link>
        .
      </p>
    </>
  )
}
