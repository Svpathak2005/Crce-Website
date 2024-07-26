"use client"
import { useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ProjectGroups() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { title: "Chichen Itza", subtitle: "SUBTITLE", image: "https://dummyimage.com/720x400" },
    { title: "Colosseum Roma", subtitle: "SUBTITLE", image: "https://dummyimage.com/721x401" },
    { title: "Great Pyramid of Giza", subtitle: "SUBTITLE", image: "https://dummyimage.com/722x402" },
    { title: "San Francisco", subtitle: "SUBTITLE", image: "https://dummyimage.com/723x403" },
    { title: "Colosseum Roma", subtitle: "SUBTITLE", image: "https://dummyimage.com/721x401" },
    { title: "Great Pyramid of Giza", subtitle: "SUBTITLE", image: "https://dummyimage.com/722x402" },
    { title: "San Francisco", subtitle: "SUBTITLE", image: "https://dummyimage.com/723x403" },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
            >Project Groups</h1>
            <div className="h-1 w-32 bg-blue-900 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.map((card, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div
                className="bg-gray-100 p-6 rounded-lg relative overflow-hidden h-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={card.image} alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">{card.subtitle}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{card.title}</h2>

                <div
                  className={`absolute inset-0 bg-white bg-opacity-90 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${hoveredCard === index ? 'translate-y-0' : 'translate-y-full'
                    }`}
                >
                  <div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{card.title}</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                  <div className="flex justify-center space-x-4 mt-4">
                    <Facebook className="text-blue-600 text-2xl" />
                    <Linkedin className="text-blue-400 text-2xl" />
                    <Instagram className="text-pink-600 text-2xl" />
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
