'use client'

import { useCallback, useEffect } from 'react'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import XIcon from '@/components/svg/XIcon'

const EscapeButton = () => {
  const handleEscape = useCallback(() => {
    // Show overlay
    const overlay = document.getElementById('escape-overlay')
    if (overlay) {
      overlay.classList.remove('hidden')
    }

    // Redirect after brief delay
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.location.replace('https://www.google.com')
      }
    }, 50)
  }, [])

  useEffect(() => {
    // Check if the tour has been shown before
    const hasSeenTour = localStorage.getItem('hasSeenEscapeButtonTour')

    if (!hasSeenTour) {
      const driverObj = driver({
        showProgress: false,
        animate: true,
        allowClose: false,
        nextBtnText: 'متوجه شدم',
        doneBtnText: 'متوجه شدم',
        showButtons: ['next'],
        popoverClass: 'driverjs-theme',
        steps: [
          {
            element: '#escape-button',
            popover: {
              title: 'دکمه خروج سریع',
              description: 'در صورت نیاز به خروج سریع، این دکمه شما را به صفحه گوگل منتقل می‌کند',
              side: 'bottom',
              align: 'start',
            },
          },
        ],
      })
      // Start the tour with a slight delay to ensure the button is rendered
      setTimeout(() => {
        driverObj.drive()
        localStorage.setItem('hasSeenEscapeButtonTour', 'true')
      }, 1000)
    }
  }, [])

  return (
    <button
      id='escape-button'
      onClick={handleEscape}
      className='fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 p-2 text-gray-700 shadow-lg backdrop-blur transition-all duration-200 hover:bg-gray-100 hover:text-red-600 sm:h-12 sm:w-12 sm:p-3'
      aria-label='خروج سریع'
    >
      <XIcon />
    </button>
  )
}

export default EscapeButton
