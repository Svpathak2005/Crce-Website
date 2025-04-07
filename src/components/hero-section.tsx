'use client'
import { useState, useEffect } from 'react'
import { ChevronRight, X } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [windowHeight, setWindowHeight] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    // Check for mobile and get window height
    const updateDimensions = () => {
      setIsMobile(window.innerWidth < 640) // 640px is Tailwind's sm breakpoint
      setWindowHeight(window.innerHeight)
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Limit the transform to stay within viewport
  const x = useTransform(
    scrollY,
    [0, windowHeight],
    [0, 400], // Negative value to move left, adjust 300 as needed
    {
      clamp: true, // This prevents the value from exceeding the defined range
    }
  )

  const isAdmission = false //During addmission time make this TRUE , other time keep it FALSE!!
  const handleToggle = () => {
    setIsVisible(!isVisible)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-gray-600">
      <div className="absolute inset-0">
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source src="intro3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {isAdmission ? (
        //TRUE
        <div className="relative z-10 flex min-h-screen items-center justify-end px-5 py-24 text-center sm:px-20">
          <div className="sm:relative">
            <div
              className={`fixed top-1/2 left-0 w-4/5 max-w-sm -translate-y-1/2 transform rounded-r-lg bg-white/95 p-8 shadow-lg backdrop-blur-sm transition-transform duration-500 sm:relative sm:top-auto sm:left-auto sm:w-full sm:max-w-md sm:translate-x-0 sm:translate-y-0 sm:rounded-lg ${
                isVisible ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <button
                onClick={handleToggle}
                className="absolute top-4 right-4 rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 sm:hidden"
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
                <button className="group text-md w-full rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:shadow-md focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
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
        <div className="relative z-40 flex min-h-screen items-center justify-end text-center">
          <div className="sm:relative">
            <div
              className={`fixed top-1/2 left-0 w-4/5 max-w-fit -translate-y-1/2 transform rounded-r-lg transition-transform duration-500 sm:relative sm:top-auto sm:left-auto sm:w-full sm:max-w-md sm:translate-x-0 sm:translate-y-0 sm:rounded-lg ${
                isVisible ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <button
                onClick={handleToggle}
                className="absolute top-0 right-0 rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200 sm:hidden"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>
              <div className="mb-2 sm:hidden">
                <h2 className=" w-fit px-2 text-2xl font-bold text-white sm:text-4xl">
                  Quick Glance
                </h2>
              </div>
              <motion.div
                className="flex w-full flex-col items-end gap-3"
                style={{
                  x: isMobile ? 0 : isVisible ? 0 : x,
                }}
                transition={{ duration: 1.0 }}
              >
                <motion.button className="group text-md 0 w-full rounded-sm bg-blue-700 p-2 font-semibold text-white shadow-sm duration-300 ease-in-out hover:bg-white hover:text-blue-900 hover:shadow-md focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  <span className="flex pl-2">Faculty Recruitment Advt</span>
                </motion.button>
                <motion.button className="group text-md hover:to- w-full rounded-sm bg-gradient-to-r from-white to-gray-100 p-2 font-semibold text-blue-900 shadow-sm duration-100 ease-in-out hover:bg-gradient-to-r hover:from-blue-700 hover:shadow-md hover:text-white focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  <span className="flex pl-2">NIRF</span>
                </motion.button>
                <motion.button className="group text-md w-full rounded-sm bg-gradient-to-r from-white to-gray-100 p-2 font-semibold text-blue-900 shadow-sm transition-all duration-100 ease-in-out hover:from-blue-700 hover:to-gray-100 hover:shadow-md focus:ring-2 hover:text-white focus:ring-blue-400 focus:ring-offset-2">
                  <span className="flex pl-2">Students Bytes</span>
                </motion.button>
                <motion.button className="group text-md w-full rounded-sm bg-gradient-to-r from-white to-gray-100 p-2 font-semibold text-blue-900 shadow-sm transition-all duration-100 ease-in-out hover:from-blue-700 hover:to-gray-100 hover:shadow-md focus:ring-2 hover:text-white focus:ring-blue-400 focus:ring-offset-2">
                  <span className="flex pl-2">Alumni Spotlight</span>
                </motion.button>
              </motion.div>
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
