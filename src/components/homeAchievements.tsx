'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface Achievement {
  id: number
  title: string
  description: string
  date: string
  image: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'NAAC A+ Accreditation',
    description:
      'Fr. CRCE has been awarded an A+ grade by the National Assessment and Accreditation Council (NAAC) in recognition of its academic excellence and institutional quality.',
    date: 'December 2023',
    image: '/crce-building.png',
  },
  {
    id: 2,
    title: 'NBA Accreditation',
    description:
      'The National Board of Accreditation (NBA) has accredited several programs at Fr. CRCE, ensuring that our courses meet the highest standards of quality and relevance.',
    date: 'November 2023',
    image: '/crce-building.png',
  },
  {
    id: 3,
    title: 'ISO Certification',
    description:
      'Fr. CRCE has achieved ISO certification, demonstrating our commitment to maintaining high standards in education and administration.',
    date: 'October 2023',
    image: '/crce-building.png',
  },
  {
    id: 4,
    title: 'Top 10 Engineering Colleges in Mumbai',
    description:
      'Fr. CRCE has been ranked among the top 10 engineering colleges in Mumbai by various educational surveys, reflecting our dedication to quality education and student success.',
    date: 'September 2023',
    image: '/crce-building.png',
  },
  // Add more achievements as needed
]

const HomeAchievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === achievements.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="relative mt-10 mb-8 text-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 border-t border-gray-300"></div>
          </div>
          <h1 className="relative z-10 inline-block bg-white px-4 font-serif text-4xl text-gray-800">
            Achievements
          </h1>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl bg-gray-50 shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="relative h-64 w-full md:h-[400px] md:w-1/2">
                    <Image
                      src={achievements[currentIndex].image}
                      alt={achievements[currentIndex].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                    <div className="mb-2 text-sm font-medium text-blue-600">
                      {achievements[currentIndex].date}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                      {achievements[currentIndex].title}
                    </h3>
                    <p className="text-base text-gray-600 sm:text-lg">
                      {achievements[currentIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="mt-4 flex justify-center gap-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAchievements