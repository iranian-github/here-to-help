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
      <h2
        id={`category-${slug}`}
        onClick={() => setIsOpen(!isOpen)}
        className={`category-title ${!isOpen ? 'hover:bg-card-hover' : ''}`}
      >
        {title}
        <span
          className={`accordion-icon text-base font-light transition-transform duration-500 select-none lg:text-2xl ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </h2>
      <div
        className={`category-content ${
          isOpen ? 'max-h-[1000px] translate-y-0 opacity-100' : 'max-h-0 translate-y-4 opacity-0'
        }`}
      >
        <p className='px-5 text-sm leading-relaxed sm:px-7 sm:text-base'>{description}</p>
        <div className='category-resources-grid'>
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  )
}
