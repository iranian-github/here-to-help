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
    setIsVisible(scrolled > 300 && contentHeight > viewportHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility)
    return () => window.removeEventListener('scroll', checkVisibility)
  }, [])

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true)
    } else if (!isVisible && shouldRender) {
      const timer = setTimeout(() => setShouldRender(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isVisible, shouldRender])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!shouldRender) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 bottom-4 z-50 rounded-full bg-blue-500 p-2 text-white shadow-lg ${
        isVisible ? 'animate-fade-in opacity-100' : 'animate-fade-out opacity-0'
      }`}
      aria-label='Back to top'
    >
      <SvgChevronDown />
    </button>
  )
}
