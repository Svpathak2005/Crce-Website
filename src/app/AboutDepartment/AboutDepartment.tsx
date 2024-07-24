import React from 'react'
import Image from 'next/image'
import { Video } from 'lucide-react'

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
    <div className="min-h-screen w-full bg-[#fafafa]">
      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-12">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl md:my-6 md:text-6xl lg:text-7xl">
          {name}
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="mb-6 mt-8 w-full lg:mb-0 lg:w-1/2 lg:pr-8">
            <p className="mb-4 font-roboto text-base text-gray-600 sm:text-lg">
              {p1}
            </p>
            <p className="font-roboto text-base text-gray-600 sm:text-lg">
              {p2}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto mt-10 aspect-video w-full max-w-2xl">
              <div className="absolute inset-0 overflow-hidden rounded-lg bg-black">
                <iframe
                  className="h-full w-full"
                  src="/compsdepttour.mp4"
                  allowFullScreen
                  title="Embedded Video"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <p className="font-roboto text-base text-gray-600 sm:text-lg">{p3}</p>
          <p className="font-roboto text-base text-gray-600 sm:text-lg">{p4}</p>
        </div>
      </div>

      <div className="bg-sky-200/20 p-4 sm:p-6 md:p-8 lg:p-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
          Career Prospects
        </h2>
        <p className="mb-10 text-gray-700 sm:text-lg">
          {careerProspects.description}
        </p>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-gray-300"></div>
          <div className="relative z-10 flex flex-wrap justify-between p-10">
            {careerProspects.careers.map((career, index) => (
              <div
                key={index}
                className="mb-6 flex w-1/2 flex-col items-center sm:w-1/3 md:w-1/4 lg:w-auto"
              >
                <div className="mb-2 h-16 w-16 transform overflow-hidden rounded-full transition-transform duration-300 hover:scale-110">
                  <Image
                    src={career.image}
                    alt={career.name}
                    width={64}
                    height={64}
                    objectFit="cover"
                  />
                </div>
                <div className="mb-2 h-3 w-3 rounded-full bg-blue-300"></div>
                <p className="text-center text-sm transition-colors duration-300 hover:text-blue-800">
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
