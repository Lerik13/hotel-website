import CabinCard from '@/app/_components/CabinCard'
import { getCabins } from '@/app/_lib/data-service'

export const metadata = {
  title: 'Cabins',
}

export default async function Page() {
  const cabins = await getCabins()

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

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  )
}
