'use client'
import { useState } from 'react'
import { ChevronRight, Divide, X } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const isAdmission = false //During addmission time make this TRUE , other time keep it FALSE!!
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
      {isAdmission ? (
        //TRUE
        <div className="relative text-center z-10 flex min-h-screen items-center justify-end px-5 py-24 sm:px-20">
          <div className="sm:relative">
            <div
              className={`fixed top-1/2 left-0 w-4/5 max-w-sm -translate-y-1/2 transform rounded-r-lg bg-white/95 p-8 shadow-lg transition-transform duration-500 backdrop-blur-sm sm:relative sm:top-auto sm:left-auto sm:w-full sm:max-w-md sm:translate-x-0 sm:translate-y-0 sm:rounded-lg ${
              isVisible ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <button
              onClick={handleToggle}
              className="absolute top-4 right-4 rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors sm:hidden"
              >
              <X className="h-5 w-5 text-gray-700" />
              </button>
              <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
                Welcome New Under Graduate Students
              </h2>
              </div>
              <div className="flex flex-col gap-3">
              <p className="text-md text-gray-600">
                Admission: Applications Opened
              </p>
              <p className="text-md font-bold text-gray-900">
                Deadline: 8th July, 2024
              </p>
              <button className="group w-full rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 text-md font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:shadow-md focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                <span className="flex items-center justify-center gap-2">
                Get Started
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              </div>
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
      ) : (
        //FALSE
        <div className="relative z-10 flex min-h-screen text-center items-center justify-end px-5 py-24 sm:px-20">
          <div className="sm:relative">
            <div
              className={`fixed top-1/2 left-0 w-4/5 max-w-sm -translate-y-1/2 transform rounded-r-lg bg-white/95 p-8 shadow-lg transition-transform duration-500 backdrop-blur-sm sm:relative sm:top-auto sm:left-auto sm:w-full sm:max-w-md sm:translate-x-0 sm:translate-y-0 sm:rounded-lg ${
              isVisible ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <button
              onClick={handleToggle}
              className="absolute top-4 right-4 rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors sm:hidden"
              >
              <X className="h-5 w-5 text-gray-700" />
              </button>
              <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
                Quick Glance
              </h2>
              </div>
              <div className='flex flex-col gap-3'>
              <button className="group w-full rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 text-md font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:shadow-md focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                <span className="flex items-center justify-center gap-2">
                Faculty Recruitment Advt
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button className="group w-full rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 text-md font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:shadow-md focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                <span className="flex items-center justify-center gap-2">
                NIRF
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button className="group w-full rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 text-md font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:shadow-md focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                <span className="flex items-center justify-center gap-2">
                Students Bytes
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button className="group w-full rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 text-md font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:shadow-md focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                <span className="flex items-center justify-center gap-2">
                Alumni Spotlight
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              </div>
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
      )}
    </section>
  )
}
