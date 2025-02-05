import { Suspense } from 'react'
import FilterCabins from '@/app/_components/FilterCabins'
import Spinner from '@/app/_components/Spinner'
import CabinList from '@/app/_components/CabinList'
import ReservationReminder from '@/app/_components/ReservationReminder'

export const metadata = {
  title: 'Cabins',
}
// Revalidate data every 1 hour for Static Page
//export const revalidate = 3600

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? 'all'

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

      <div className="flex justify-end mb-8">
        <FilterCabins />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  )
}
