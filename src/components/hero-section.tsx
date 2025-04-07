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
          <source src="intro3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-end px-5 py-24 sm:px-20">
        <div className="sm:relative">
          <div
            className={`fixed top-1/2 left-0 w-4/5 max-w-sm -translate-y-1/2 transform rounded-r-lg bg-white p-6 shadow-md transition-transform duration-500 sm:relative sm:top-auto sm:left-auto sm:w-full sm:max-w-md sm:translate-x-0 sm:translate-y-0 sm:rounded-lg ${
              isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <button
              onClick={handleToggle}
              className="absolute top-2 right-2 rounded-full bg-gray-200 p-2 sm:hidden"
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>
            <div className="mb-4">
              <h2 className="text-xl leading-tight font-medium text-gray-900 sm:text-3xl">
                Welcome new graduate students
              </h2>
            </div>
            <p className="mb-2 text-sm text-gray-600">
              Admission: Applications Opened
            </p>
            <p className="mb-6 text-sm font-semibold text-gray-900">
              Deadline: 8th July, 2024
            </p>
            <button className="w-full rounded-md bg-yellow-500 px-6 py-3 text-shadow-red-950 font-semibold text-black transition duration-300 hover:bg-yellow-600 focus:outline-hidden">
              Get Started
            </button>
          </div>
          <button
            onClick={handleToggle}
            className={`fixed top-1/2 left-0 -translate-y-1/2 transform rounded-r-md bg-white p-2 shadow-md transition-all duration-500 sm:hidden ${
              isVisible
                ? 'pointer-events-none translate-x-full opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <ChevronRight className="h-8 w-8 text-black" />
          </button>
        </div>
      </div>
    </section>
  )
}
