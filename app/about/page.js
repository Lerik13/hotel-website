import Image from 'next/image'
import image1 from '@/public/about-1.jpg'
import image2 from '@/public/about-2.jpg'
import CabinsCount from '@/app/_components/CabinsCount'

//revalidate data (Cabins quantity) 1 times per day
export const revalidate = 86400

export const metadata = {
  title: 'About',
}

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Tucked away in the heart of British Columbia, this is your perfect
            escape. But it’s more than just luxurious cabins—it’s about
            reconnecting with nature and cherishing simple moments with loved
            ones.
          </p>
          <p>
            Our <CabinsCount /> cozy yet elegant cabins offer a welcoming
            retreat, but the true freedom lies in the breathtaking mountains
            around you. Stroll through lush forests, breathe in the crisp
            mountain air, and unwind under a starlit sky—whether by a crackling
            campfire or in your private hot tub.
          </p>
          <p>
            This is where unforgettable memories are made, surrounded by
            nature’s serenity. A place to slow down, recharge, and experience
            the joy of togetherness in a stunning setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1975, Whispering Pines Retreat has been a beloved family-owned
            getaway. Founded by our parents, this peaceful haven has been
            carefully nurtured over generations, built with love and a deep
            appreciation for nature’s beauty.
          </p>
          <p>
            Through the years, we’ve preserved the heart and soul of Whispering
            Pines, seamlessly blending the charm of the mountains with the
            warmth of a family-run retreat. Here, you’re more than just a
            guest—you’re part of our story. We invite you to experience the
            tranquility, tradition, and heartfelt hospitality that make every
            stay feel like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
