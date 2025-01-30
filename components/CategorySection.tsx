'use client'
import { useState } from 'react'
import ResourceCard from './ResourceCard'

interface CategorySectionProps {
  title: string
  description?: string
  resources: Array<{
    title: string
    description?: string
    phone?: string
    website?: string
    other?: { url: string; label: string }[]
  }>
}

export default function CategorySection({ title, description, resources }: CategorySectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='category-section mx-0 mb-3 overflow-hidden rounded-xl border-r-4 border-[#8B5CF6] bg-white shadow-md transition-all duration-500 sm:mx-2.5 sm:mb-4 sm:rounded-2xl sm:border-r-8'>
      <h2
        onClick={() => setIsOpen(!isOpen)}
        className={`group m-0 flex cursor-pointer select-none items-center justify-between bg-white p-5 text-base transition-colors sm:p-7 md:text-xl lg:text-2xl ${
          !isOpen ? 'hover:bg-card-hover' : ''
        }`}
      >
        {title}
        <span
          className={`accordion-icon select-none text-base font-light transition-transform duration-500 lg:text-2xl ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </h2>
      <div
        className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px] translate-y-0 opacity-100' : 'max-h-0 translate-y-4 opacity-0'
        } }`}
      >
        <p className='px-5 text-sm leading-relaxed sm:px-7 sm:text-base'>{description}</p>
        <div className='mb-5 grid w-full grid-cols-1 gap-3 p-4 sm:p-7 md:grid-cols-2 lg:grid-cols-3'>
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  )
}
