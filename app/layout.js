import Header from './_components/Header'

import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

import '@/app/_styles/globals.css'

export const metadata = {
  //title: 'Mountain Villa',
  title: {
    template: '%s / Mountain Villa',
    default: 'Welcome / Mountain Villa',
  },
  description:
    'Luxurious cabin hotel, located in the beautiful British Columbia in Canada, surrounded by magnificent mountains and green forests',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-900 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
