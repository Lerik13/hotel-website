import Link from 'next/link'
import Navigation from './components/Navigation'

export default function Page() {
  return (
    <div>
      <h1>Mountain Villa! Welcome to paradise</h1>

      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  )
}
