import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Франшиза Yaposhkin Rolls | Доставка роллов с прибылью от 2.8 млн ₽/год',
    template: '%s | Yaposhkin Rolls'
  },
  icons: {
    icon: '/favicon.ico',             // Стандартная иконка
    shortcut: '/icon.png',            // Альтернативная иконка
    apple: '/apple-touch-icon.png',   // Для Apple устройств
  },
  description: 'Откройте доставку роллов за 6 недель с готовой бизнес-моделью. Чистая прибыль от 2 800 000 ₽ в год. Получите презентацию франшизы.',
  keywords: [
    'франшиза доставки роллов',
    'открыть доставку суши',
    'бизнес на роллах',
    'франшиза Yaposhkin',
    'dark kitchen франшиза'
  ],
  openGraph: {
    title: 'Франшиза Yaposhkin Rolls | От 2.8 млн ₽ чистой прибыли',
    description: 'Готовая бизнес-модель доставки роллов с запуском за 6 недель',
    url: 'https://yaposhkinrolls.com',
    siteName: 'Yaposhkin Rolls Franchise',
    images: [
      {
        url: 'https://yaposhkinrolls.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Франшиза Yaposhkin Rolls',
    description: 'Доходный бизнес на доставке роллов с поддержкой',
    images: ['https://yaposhkinrolls.com/logo.jpg'],
  },
  themeColor: '#FF6B00',
  alternates: {
    canonical: 'https://yaposhkinrolls.com/',
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='bg-[#52e0ff]'>{children}</body>
    </html>
  )
}
