'use client'

import { useState } from 'react'
import { ChevronRight, X } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => {
    setIsVisible(!isVisible)
  }

  return (
    <section className="relative min-h-screen w-full text-gray-600">
      <div className="absolute inset-0">
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source src="vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-end px-5 py-24 sm:mr-20 sm:mt-[-10] sm:justify-end">
        <div
          className={`absolute left-0 top-1/2 m-4 w-4/5 max-w-sm -translate-y-1/2 transform bg-white p-6 shadow-md transition-transform duration-500 sm:relative sm:mr-20 sm:mt-[-10] sm:w-full sm:max-w-md sm:translate-x-0 sm:rounded-lg ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-medium leading-tight text-gray-900 sm:text-4xl">
              Welcome new graduate students
            </h2>
            <button onClick={handleToggle} className="sm:hidden">
              <X className="h-6 w-6 text-gray-900" />
            </button>
          </div>
          <p className="mb-2 text-lg text-gray-600">
            Admission: Applications Opened
          </p>
          <p className="mb-6 text-lg font-bold text-gray-900">
            Deadline: 8th July, 2024
          </p>
          <button className="w-full rounded-md bg-yellow-500 px-6 py-3 text-lg font-semibold text-black transition duration-300 hover:bg-yellow-600 focus:outline-none">
            Get Started
          </button>
        </div>
        <button
          onClick={handleToggle}
          className={`absolute left-0 top-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-white p-2 transition-opacity duration-500 ${isVisible ? 'opacity-0' : 'opacity-100'} sm:hidden`}
        >
          <ChevronRight
            className={`h-8 w-8 text-black transition-transform duration-500 ${isVisible ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </section>
  )
}
