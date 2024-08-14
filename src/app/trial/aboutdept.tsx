import React, { FC, ReactElement } from 'react'
import { Zilla_Slab } from 'next/font/google'

interface AboutDepartmentContainerProps {
  name: string
  description: string
  video:Boolean
//   programs: string[]
//   courses: string[]
//   features: string[]
 
}
const zilla = Zilla_Slab({
  weight: ['400','500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const AboutDepartmentContainer: FC<AboutDepartmentContainerProps> = ({
  name,
  description,
  video
//   programs,
//   courses,
//   features,
  
}): ReactElement => {
  return (
    <div className="mx-10 rounded-lg bg-white ">
      <h2
        className={`${zilla.className} mb-4 text-3xl font-bold text-blue-950 md:text-4xl lg:text-6xl`}
      >
        {name}
      </h2>
      {video && (
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            className="h-full w-full"
            src="/compsdepttour.mp4"
            allowFullScreen
            title="Embedded Video"
          />
        </div>
      )}
      <p className="mb-6 text-gray-700">{description}</p>

      {/* <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="mb-2 text-lg font-bold">Programs</h3>
          <ul className="list-disc pl-6">
            {programs.map((program, index) => (
              <li key={index} className="text-gray-700">
                {program}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Courses</h3>
          <ul className="list-disc pl-6">
            {courses.map((course, index) => (
              <li key={index} className="text-gray-700">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-2 text-lg font-bold">Key Features</h3>
        <ul className="list-disc pl-6">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}

export default AboutDepartmentContainer
