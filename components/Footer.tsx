'use client'

import { toFarsiNumber } from '@/utils/farsiNumber'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState<string>('')

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYear(toFarsiNumber(currentYear))
  }, [])

  return (
    <footer className='text-brand-footer mt-auto p-4 pt-8 text-xs font-normal text-gray-500 sm:p-5 sm:pt-12'>
      <p className='footer-text pb-6'>
        این وب‌سایت تنها برای اطلاع‌رسانی است و فقط فهرستی از منابعی که می‌توانند برای این مسائل کمک ارائه دهند را فراهم
        می‌کند و جایگزینی برای مشاوره یا درمان حرفه‌ای نیست. ما هیچ‌یک از سازمان‌ها را تأیید یا رد نکرده و هیچ‌یک از
        منابع ذکر شده در این وب‌سایت را اداره نمی‌کنیم.
      </p>
      <p className='footer-text border-b border-[#d2d2d7] pb-3'>
        این یک{' '}
        <Link target='_blank' href='https://github.com/iranian-github/here-to-help'>
          پروژه‌ی متن باز
        </Link>{' '}
        است. اگر مایل به مشارکت هستید، از{' '}
        <Link target='_blank' href='https://github.com/iranian-github/here-to-help/issues/new/choose'>
          اینجا
        </Link>{' '}
        می‌توانید کمک کنید.
      </p>

      <p className='footer-text mb-2 pt-6 text-center'>
        کپی‌رایت © <span>{year}</span>.<span> اینجا برای کمک هستیم. تمامی حقوق محفوظ است.</span>
      </p>
    </footer>
  )
}
