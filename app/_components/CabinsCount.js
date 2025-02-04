import { getCabins } from '@/app/_lib/data-service'

async function CabinsCount() {
  const cabins = await getCabins()

  if (!cabins.length) return <span>0</span>

  return <span>{cabins.length}</span>
}

export default CabinsCount
