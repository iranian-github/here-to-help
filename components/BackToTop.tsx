'use client'

import { useEffect, useState } from 'react'
import SvgChevronDown from '@/components/svg/ChevronDown'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  const checkVisibility = () => {
    const scrolled = window.scrollY
    const viewportHeight = window.innerHeight
    const contentHeight = document.documentElement.scrollHeight

    // Show button if we've scrolled down and there's overflow
    setIsVisible(scrolled > 300 && contentHeight > viewportHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility)
    return () => window.removeEventListener('scroll', checkVisibility)
  }, [])

  useEffect(() => {
    if (isVisible) setShouldRender(true)
    else {
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 300) // Same duration as our animation
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!shouldRender) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 bottom-4 z-50 rounded-full bg-blue-500 p-2 text-white shadow-lg transition-all duration-300 hover:bg-blue-600 ${
        isVisible ? 'animate-fade-in' : 'animate-fade-out'
      }`}
      aria-label='Back to top'
    >
      <SvgChevronDown />
    </button>
  )
}
