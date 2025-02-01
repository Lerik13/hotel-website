import Logo from '@/app/_components/Logo'
import Navigation from '@/app/_components/Navigation'

import '@/app/_styles/globals.css'

export const metadata = {
  title: 'The Mountain Villa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-900 text-primary-100 min-h-screen">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by the Mountain Villa</footer>
      </body>
    </html>
  )
}
