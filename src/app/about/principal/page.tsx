import Image from 'next/image'

import PresidentPage from '@/components/aboutssr'

export default function Home() {
  return (
    <main className="mt-[80px] flex flex-col items-center justify-between">
      <PresidentPage />
    </main>
  )
}
