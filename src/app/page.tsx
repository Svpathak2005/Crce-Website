import Image from 'next/image'
import Industry from '@/components/industry'
import HeroSection from '@/components/hero-section'

import Newsandupcoming from '@/components/newsandupcoming'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <Newsandupcoming />
      <Industry />
    </main>
  )
}
