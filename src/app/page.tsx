import Image from 'next/image'
import Industry from '@/components/industry'
import HeroSection from '@/components/hero-section'

export default function Home() {
  return (
    <main className="flex mt-[160px] flex-col items-center justify-between">
      <HeroSection />
      <Industry />
    </main>
  )
}
