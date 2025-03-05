import type { Metadata, Viewport } from 'next'
import './globals.css'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import EscapeButton from '@/components/EscapeButton'
import Overlay from '@/components/Overlay'

export const metadata: Metadata = {
  metadataBase: new URL('https://heretohelp.ir'),
  title: 'Here to Help | اینجائیم برای کمک',
  description:
    'منابع و خدمات رایگان برای کمک به شما در مواقع بحرانی - ارائه اطلاعات و منابع ضروری برای حمایت از شما در شرایط دشوار',
  keywords: ['کمک رسانی', 'خدمات رایگان', 'منابع بحران', 'حمایت اجتماعی', 'کمک اضطراری'],
  openGraph: {
    type: 'website',
    locale: 'fa',
    url: 'https://heretohelp.ir/',
    title: 'Here to Help | اینجائیم برای کمک',
    description:
      'منابع و خدمات رایگان برای کمک به شما در مواقع بحرانی - ارائه اطلاعات و منابع ضروری برای حمایت از شما در شرایط دشوار',
    siteName: 'Here to Help',
    images: [
      {
        url: 'https://heretohelp.ir/website-social-card.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'Here to Help | اینجائیم برای کمک',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Here to Help | اینجائیم برای کمک',
    description: 'منابع و خدمات رایگان برای کمک به شما در مواقع بحرانی',
    images: {
      url: 'https://heretohelp.ir/website-social-card.png',
      type: 'image/png',
      alt: 'Here to Help | اینجائیم برای کمک',
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'health',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1.0 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='fa' dir='rtl'>
      <body className='relative m-0 min-h-screen leading-relaxed antialiased'>
        <Overlay />
        <Image
          src='images/background.svg'
          alt='Background image'
          className='fixed top-0 left-0 -z-10 h-full w-full opacity-75 blur-[100px]'
          width={1920}
          height={1080}
        />
        <EscapeButton />
        <div className='mx-auto flex min-h-screen max-w-[1100px] flex-col px-4 sm:px-6 lg:px-8'>
          {children}
          <BackToTop />
          <Footer />
        </div>
      </body>
    </html>
  )
}
