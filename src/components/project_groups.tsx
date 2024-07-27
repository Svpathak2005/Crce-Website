'use client'
import { useState } from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ProjectGroups() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const cards = [
    {
      title: 'Chichen Itza',
      subtitle: 'SUBTITLE',
      image: 'https://dummyimage.com/720x400',
    },
    {
      title: 'Colosseum Roma',
      subtitle: 'SUBTITLE',
      image: 'https://dummyimage.com/721x401',
    },
    {
      title: 'Great Pyramid of Giza',
      subtitle: 'SUBTITLE',
      image: 'https://dummyimage.com/722x402',
    },
    {
      title: 'San Francisco',
      subtitle: 'SUBTITLE',
      image: 'https://dummyimage.com/723x403',
    },
    {
      title: 'Colosseum Roma',
      subtitle: 'SUBTITLE',
      image: 'https://dummyimage.com/721x401',
    },
    {
      title: 'Great Pyramid of Giza',
      subtitle: 'SUBTITLE',
      image: 'https://dummyimage.com/722x402',
    },
    {
      title: 'San Francisco',
      subtitle: 'SUBTITLE',
      image: 'https://dummyimage.com/723x403',
    },
  ]

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1
              className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
            >
              Project Groups
            </h1>
            <div className="h-1 w-32 rounded bg-blue-900"></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {cards.map((card, index) => (
            <div key={index} className="p-4 md:w-1/2 xl:w-1/4">
              <div
                className="relative h-full overflow-hidden rounded-lg bg-gray-100 p-6"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  className="mb-6 h-40 w-full rounded object-cover object-center"
                  src={card.image}
                  alt="content"
                />
                <h3 className="title-font text-xs font-medium tracking-widest text-blue-500">
                  {card.subtitle}
                </h3>
                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  {card.title}
                </h2>

                <div
                  className={`absolute inset-0 flex flex-col justify-between bg-white bg-opacity-90 p-6 transition-transform duration-300 ease-in-out ${
                    hoveredCard === index ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  <div>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      {card.title}
                    </h2>
                    <p className="text-base leading-relaxed">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center space-x-4">
                    <Facebook className="text-2xl text-blue-600" />
                    <Linkedin className="text-2xl text-blue-400" />
                    <Instagram className="text-2xl text-pink-600" />
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
