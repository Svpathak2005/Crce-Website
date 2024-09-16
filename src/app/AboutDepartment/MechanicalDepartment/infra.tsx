import React from 'react'
import Image from 'next/image'

import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'

// the font for main headings
const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface InfrasProps {
  title: string
  description: string
  imageUrl: string
}

const Infras: React.FC<InfrasProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="container mx-auto p-6">
      <h2
        className={`${zilla.className} mb-8 text-center text-4xl font-bold text-blue-950 md:text-5xl lg:text-6xl`}
      >
        Infrastructure
      </h2>

      {/* Section for Department Details */}
      <section className="mb-8 rounded-lg bg-gray-100 p-8 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-blue-800">
          Department Details
        </h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          The Department is headed by Dr. Sapna Prabhu, who has been
          instrumental in leading several initiatives aimed at modernizing our
          infrastructure and curriculum.
          {/* Add more content here */}
        </p>
        <div className="flex justify-center">
          <div className="group relative">
            <Image
              src="/ssr.png"
              alt="Department Head"
              height={300}
              width={300}
              className="transform rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Section for Laboratory Details */}
      <section className="mb-8 rounded-lg bg-gray-100 p-8 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-blue-800">
          Laboratory Details
        </h2>
        <h3 className="mb-2 text-xl font-semibold text-blue-700">
          Computing Laboratory - I
        </h3>
        <ul className="mb-6 list-disc pl-6 text-gray-700">
          <li>Equipped with 21 desktop computers, each with 16GB RAM...</li>
          <li>Software setup includes the latest versions of...</li>
          {/* Add more details here */}
        </ul>

        <div className="flex justify-center">
          <div className="group relative">
            <Image
              src="/ssr.png"
              alt="Computing Lab"
              height={300}
              width={300}
              className="transform rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Add another section for Computing Laboratory - II similarly */}
    </div>
  )
}

export default Infras
