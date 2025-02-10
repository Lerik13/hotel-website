import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/app/_lib/auth'

export default async function Navigation() {
  const session = await auth()

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <div className="relative h-8 w-8">
                <Image
                  fill
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                  className="rounded-full object-cover"
                  src={session.user.image}
                  alt="User image"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span>{session.user.name}</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
