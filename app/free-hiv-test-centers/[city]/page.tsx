import CentersTable from '@/components/CentersTable'
import Header from '@/components/Header'
import { testCenters } from '@/data/freeHIVTestCenters'
import { citySlug } from '@/utils/citySlug'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamicParams = false

export const generateStaticParams = () =>
  [...new Set(testCenters.map((c) => citySlug(c.city)))].map((city) => ({ city }))

// Next may hand us the segment percent-encoded or decoded depending on route; accept both.
const centersFor = async (params: Promise<{ city: string }>) => {
  const slug = decodeURIComponent((await params).city)
  return { slug, centers: testCenters.filter((c) => citySlug(c.city) === slug) }
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { centers } = await centersFor(params)
  if (!centers.length) return {}
  const title = `مراکز آزمایش رایگان ایدز در ${centers[0].city}`
  const description = `آدرس و شماره تماس مراکز آزمایش رایگان ایدز و مشاوره بیماری‌های رفتاری در ${centers[0].city}`
  return {
    title,
    description,
    alternates: { canonical: `/free-hiv-test-centers/${citySlug(centers[0].city)}` },
    openGraph: { title, description },
    twitter: { title, description },
  }
}

export default async function CityCenters({ params }: { params: Promise<{ city: string }> }) {
  const { centers } = await centersFor(params)
  if (!centers.length) notFound()

  return (
    <>
      <Header />
      <main className='flex-grow lg:mb-16'>
        <h2 className='mb-6 text-center text-xl font-bold md:text-3xl'>
          مراکز آزمایش رایگان ایدز در {centers[0].city}
        </h2>
        <p className='mx-auto mb-8 max-w-xl text-center leading-relaxed text-gray-600'>
          اگه خواستین قبل از رفتن تماس بگیرین و ساعت کاری رو بپرسین، شماره‌ی مرکز کنار آدرسش هست.
        </p>
        <CentersTable centers={centers} searchable={false} />
        <p className='mt-6 text-center'>
          <Link href='/free-hiv-test-centers' className='text-blue-600 hover:underline'>
            مشاهده‌ی مراکز همه‌ی شهرها
          </Link>
        </p>
      </main>
    </>
  )
}
