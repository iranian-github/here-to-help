import Link from 'next/link'

interface ResourceCardProps {
  title: string
  description?: string
  phone?: string
  website?: string
  other?: { url: string; label: string; newTab?: boolean }[]
}

export default function ResourceCard({ title, description, phone, website, other }: ResourceCardProps) {
  return (
    <div className='resource-card'>
      <div className={`${!description ? 'sm:flex sm:items-center sm:justify-between' : ''}`}>
        <h3 className={`text-base font-bold sm:text-lg ${description ? 'mb-3 sm:mb-4' : 'mb-4 sm:mb-0'}`}>{title}</h3>
        {!description && (
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
            {phone && (
              <Link href={`tel:${phone}`} className='resource-button'>
                تماس
              </Link>
            )}
            {website && (
              <Link href={website} target='_blank' className='resource-button'>
                بیشتر بدانید
              </Link>
            )}
            {other &&
              other.map((item) => (
                <Link key={item.url} href={item.url} target='_blank' className='resource-button'>
                  {item.label}
                </Link>
              ))}
          </div>
        )}
      </div>
      {description && (
        <>
          <p className='mb-4 text-sm leading-relaxed sm:mb-5 sm:text-base'>{description}</p>
          <div className='resource-buttons-container'>
            {phone && (
              <Link href={`tel:${phone}`} className='resource-button'>
                تماس
              </Link>
            )}
            {website && (
              <Link href={website} target='_blank' rel='noopener noreferrer' className='resource-button'>
                وب‌سایت
              </Link>
            )}
            {other &&
              other.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  target={item.newTab ? '_blank' : '_self'}
                  className='resource-button'
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
