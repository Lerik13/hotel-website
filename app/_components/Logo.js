import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="logo" /> */}
      <Image src={logo} height="60" width="60" quality={100} alt="logo" />

      <span className="text-xl font-semibold text-primary-100">
        Mountain Villa
      </span>
    </Link>
  )
}

export default Logo
