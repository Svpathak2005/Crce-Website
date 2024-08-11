import React, { FC, ReactElement } from 'react'

interface AboutDepartmentProps {
  name: string
  description: string
//   programs: string[]
//   courses: string[]
//   features: string[]
 
}

const AboutDepartment: FC<AboutDepartmentProps> = ({
  name,
  description,
//   programs,
//   courses,
//   features,
  
}): ReactElement => {
  return (
    <div className="rounded-lg bg-white p-8 mx-10 shadow-sm">
      <h2 className="mb-4 text-3xl font-bold">{name}</h2>
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

export default AboutDepartment
