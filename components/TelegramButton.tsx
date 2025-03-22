'use client'

import Telegram from '@/assets/icons/Telegram'

export default function TelegramButton() {
  const telegramUrl = process.env.NEXT_PUBLIC_TG_BOT_URL || 'https://t.me/iran_here_to_help_bot'

  const handleClick = () => {
    window.open(telegramUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      className='fixed bottom-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110'
      aria-label='Open Telegram Bot'
      title='ربات تلگرام ما'
    >
      <Telegram width={20} height={20} />
    </button>
  )
}
