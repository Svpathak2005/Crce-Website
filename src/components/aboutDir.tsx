'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const DirectorPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-16">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-10 text-center font-ptserif text-5xl font-semibold text-blue-950">
            Principal's Message
          </h2>
          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <Image
                src="/principal-image.jpg"
                alt="Principal"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="lg:ml-12 lg:w-1/2">
              <h3 className="mb-6 font-roboto text-2xl font-semibold text-gray-800">
                Welcome to CRCE
              </h3>
              <p className="mb-4 font-roboto leading-relaxed text-gray-700">
                Today's global education landscape is rapidly evolving, driven
                by advancements in science and technology. At CRCE, we prepare
                our students to meet the challenges of tomorrow's world.
              </p>
              <p className="mb-4 font-roboto leading-relaxed text-gray-700">
                Our teaching-learning pedagogy aims to develop engineers with
                both analytical and action-oriented skills, ready to become
                organizational leaders in challenging environments.
              </p>
              <p className="mb-6 font-roboto leading-relaxed text-gray-700">
                We pride ourselves on providing affordable, quality technical
                education at all levels, as evidenced by our strong track record
                in admissions, training, and placements.
              </p>
              <Link
                href="#"
                className="inline-block rounded-lg bg-blue-900 px-6 py-3 font-roboto font-semibold text-white transition-colors duration-300 hover:bg-blue-800"
              >
                Explore CRCE
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
