'use client'

import { useEffect, useState } from 'react'
import { Earth, Instagram, Linkedin, FileInput } from 'lucide-react'
import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const dummyData = Array.from({ length: 15 }, (_, i) => ({
  id: `${i + 1}`,
  status: 'published',
  name: `Council ${i + 1}`,
  website: 'https://example.com',
  image: '/councils/gdsc.jpg',
  report: '',
  data: '',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
}))

export default function Council() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [cards, setCards] = useState(dummyData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const councils = await getCouncils()
        // if (councils.length > 0) setCards(councils)
      } catch (error) {
        console.warn('Falling back to dummy data due to error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 w-full lg:w-1/2">
          <h1 className={`${zilla.className} mb-6 text-5xl font-bold`}>
            Councils
          </h1>
          <div className="h-1 w-32 rounded-sm bg-blue-900"></div>
        </div>
        <div className="-m-4 flex flex-wrap">
          {cards.map((card, index) => (
            <div key={card.id} className="p-4 md:w-1/2 xl:w-1/4">
              <div
                className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-2xl"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative mb-6 h-40 w-full">
                  <Image
                    className="rounded-md object-cover"
                    src={card.image}
                    alt={`${card.name} council`}
                    fill
                    priority
                  />
                </div>

                <h2 className="mb-4 text-lg font-semibold text-gray-900">{card.name}</h2>

                <div
                  className={`bg-opacity-95 absolute inset-0 z-10 flex flex-col justify-between rounded-xl bg-white p-6 transition-transform duration-300 ease-in-out ${
                    hoveredCard === index ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  <h2 className="mb-4 text-lg font-semibold text-gray-900">{card.name}</h2>
                  <div className="mt-4 flex justify-center space-x-4">
                    <Link href={card.website} target="_blank">
                      <Earth className="text-2xl text-blue-600 hover:text-blue-700" />
                    </Link>
                    <Link href={`/councils/${card.id}`}>
                      <FileInput className="text-2xl text-blue-800 hover:text-blue-900" />
                    </Link>
                    <Link href={card.linkedin} target="_blank">
                      <Linkedin className="text-2xl text-blue-500 hover:text-blue-600" />
                    </Link>
                    <Link href={card.instagram} target="_blank">
                      <Instagram className="text-2xl text-pink-500 hover:text-pink-600" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
