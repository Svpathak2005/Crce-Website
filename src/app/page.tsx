import Industry from '@/components/industry'
import HeroSection from '@/components/hero-section'

import Newsandupcoming from '@/components/newsandupcoming'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      {/* <div className='bg-gradient-to-b from-gray-50 to-[#E5F0FF] w-full'> */}
        <Newsandupcoming />
        <Industry />
      {/* </div> */}
    </main>
  )
}
