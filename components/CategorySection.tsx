'use client'
import { useState } from 'react'
import ResourceCard from './ResourceCard'

interface CategorySectionProps {
  slug: string
  title: string
  description?: string
  resources: Array<{
    title: string
    description?: string
    phone?: string
    website?: string
    other?: { url: string; label: string; newTab?: boolean }[]
  }>
}

export default function CategorySection({ slug, title, description, resources }: CategorySectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='category-container'>
      <h2 id={`category-${slug}`} className='m-0'>
        <button
          type='button'
          aria-expanded={isOpen}
          aria-controls={`content-${slug}`}
          onClick={() => setIsOpen(!isOpen)}
          className={`category-title w-full text-start ${!isOpen ? 'hover:bg-card-hover' : ''}`}
        >
          {title}
          <span
            aria-hidden='true'
            className={`accordion-icon text-base font-light transition-transform duration-500 select-none lg:text-2xl ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            +
          </span>
        </button>
      </h2>
      <div
        id={`content-${slug}`}
        inert={!isOpen}
        className={`category-content grid ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className='min-h-0 overflow-hidden'>
          <p className='px-5 text-sm leading-relaxed sm:px-7 sm:text-base'>{description}</p>
          <div className='category-resources-grid'>
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
