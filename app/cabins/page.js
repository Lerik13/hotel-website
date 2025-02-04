import { Suspense } from 'react'
import CabinList from '../_components/CabinList'
import Spinner from '../_components/Spinner'

export const metadata = {
  title: 'Cabins',
}
// Revalidate data every 1 hour
export const revalidate = 3600

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins nestled in the heart of British Columbia.
        Imagine waking up to breathtaking mountain views, spending your days
        exploring lush forests and serene lakes, or unwinding in your private
        hot tub under the stars. Experience nature’s beauty while enjoying the
        comfort of your own little retreat. The perfect getaway for a peaceful
        and rejuvenating escape. Welcome to your mountain paradise.
      </p>

      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  )
}
