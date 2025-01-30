import Link from 'next/link'

interface ResourceCardProps {
  title: string
  description?: string
  phone?: string
  website?: string
  other?: { url: string; label: string }[]
}

export default function ResourceCard({ title, description, phone, website, other }: ResourceCardProps) {
  return (
    <div className='flex h-full flex-col justify-center rounded-lg bg-gray-100 p-4 sm:rounded-xl sm:p-6'>
      <div className={`${!description ? 'sm:flex sm:items-center sm:justify-between' : ''}`}>
        <h3 className={`text-base font-bold sm:text-lg ${description ? 'mb-3 sm:mb-4' : ''}`}>{title}</h3>
        {!description && (
          <div className='mt-auto flex flex-col gap-2 sm:flex-row sm:gap-2.5'>
            {phone && (
              <Link
                href={`tel:${phone}`}
                className='w-full rounded-full bg-blue-500 px-4 py-2.5 text-center text-xs font-medium text-white transition-colors hover:bg-blue-600 sm:w-auto sm:px-5 sm:text-sm'
              >
                تماس
              </Link>
            )}
            {website && (
              <Link
                href={website}
                target='_blank'
                className='w-full rounded-full bg-blue-500 px-4 py-2.5 text-center text-xs font-medium text-white transition-colors hover:bg-blue-600 sm:w-auto sm:px-5 sm:text-sm'
              >
                بیشتر بدانید
              </Link>
            )}
            {other &&
              other.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  target='_blank'
                  className='w-full rounded-full bg-blue-500 px-4 py-2.5 text-center text-xs font-medium text-white transition-colors hover:bg-blue-600 sm:w-auto sm:px-5 sm:text-sm'
                >
                  {item.label}
                </Link>
              ))}
          </div>
        )}
      </div>
      {description && (
        <>
          <p className='mb-4 text-sm leading-relaxed sm:mb-5 sm:text-base'>{description}</p>
          <div className='mt-auto flex flex-col gap-2 sm:flex-row sm:gap-2.5'>
            {phone && (
              <Link
                href={`tel:${phone}`}
                className='w-full rounded-full bg-blue-500 px-4 py-2.5 text-center text-xs font-medium text-white transition-colors hover:bg-blue-600 hover:text-white sm:w-auto sm:px-5 sm:text-sm'
              >
                تماس
              </Link>
            )}
            {website && (
              <Link
                href={website}
                className='w-full rounded-full bg-blue-500 px-4 py-2.5 text-center text-xs font-medium text-white transition-colors hover:bg-blue-600 hover:text-white sm:w-auto sm:px-5 sm:text-sm'
              >
                بیشتر بدانید
              </Link>
            )}
            {other &&
              other.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  target='_blank'
                  className='w-full rounded-full bg-blue-500 px-4 py-2.5 text-center text-xs font-medium text-white transition-colors hover:bg-blue-600 hover:text-white sm:w-auto sm:px-5 sm:text-sm'
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </>
      )}
    </div>
  )
}
