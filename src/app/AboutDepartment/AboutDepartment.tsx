import React from 'react'
import Image from 'next/image'
import { Video } from 'lucide-react'

// Add Google Fonts import
import { Roboto, Lato } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

interface CareerProspect {
  name: string
  image: string
}

interface AboutDepartmentProps {
  name: string
  p1: string
  p2: string
  p3: string
  p4: string
  pointers?: string[]
  image: string
  careerProspects: {
    description: string
    careers: CareerProspect[]
  }
}

const AboutDepartment: React.FC<AboutDepartmentProps> = ({
  name,
  p1,
  p2,
  p3,
  p4,
  pointers = [],
  image,
  careerProspects,
}) => {
  return (
    <div className={`min-h-screen w-full bg-[#fafafa] ${roboto.className}`}>
      <div className="bg-white p-6 md:p-10 lg:p-16">
        <h2
          className={`mb-8 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl ${lato.className}`}
        >
          {name}
        </h2>

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <p className="mb-6 text-base text-gray-700 sm:text-lg">{p1}</p>
            <p className="text-base text-gray-700 sm:text-lg">{p2}</p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="h-full w-full"
                src="/compsdepttour.mp4"
                allowFullScreen
                title="Embedded Video"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-base text-gray-700 sm:text-lg">{p3}</p>
          <p className="text-base text-gray-700 sm:text-lg">{p4}</p>
          {pointers.length > 0 && (
            <ul className="ml-6 list-disc space-y-2">
              {pointers.map((point, index) => (
                <li key={index} className="text-base text-gray-700 sm:text-lg">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="bg-sky-50 p-6 md:p-10 lg:p-16">
        <h2
          className={`mb-8 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl ${lato.className}`}
        >
          Career Prospects
        </h2>
        <p className="mb-10 text-base text-gray-700 sm:text-lg">
          {careerProspects.description}
        </p>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gray-300"></div>
          <div className="relative z-10 flex flex-wrap justify-between">
            {careerProspects.careers.map((career, index) => (
              <div
                key={index}
                className="mb-8 flex w-1/2 flex-col items-center sm:w-1/3 md:w-1/4 lg:w-auto"
              >
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full shadow-md transition-transform duration-300 hover:scale-110">
                  <Image
                    src={career.image}
                    alt={career.name}
                    width={80}
                    height={80}
                    objectFit="cover"
                  />
                </div>
                <div className="mb-2 h-3 w-3 rounded-full bg-blue-500"></div>
                <p className="text-center text-sm font-medium text-gray-800 transition-colors duration-300 hover:text-blue-600">
                  {career.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDepartment
