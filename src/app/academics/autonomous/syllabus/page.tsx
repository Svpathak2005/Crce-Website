import React from 'react'
import { FileText } from 'lucide-react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const syllabusData = [
  { year: 'FE', courses: ['CE', 'CSE', 'ECS', 'MECH'] },
  { year: 'SE', courses: ['CE', 'AI & DS', 'ECS', 'MECH'] },
  { year: 'TE', courses: ['CE', 'AI & DS', 'ECS', 'MECH'] },
  { year: 'BE', courses: ['CE', 'AI & DS', 'ECS', 'MECH'] },
  { year: 'M.Tech.', courses: ['CE', 'MECH'] },
]

const courseDetails = [
  { code: 'CE', name: 'Computer Engineering' },
  { code: 'CSE', name: 'Computer Science and Engineering' },
  { code: 'AI & DS', name: 'Artificial Intelligence and Data Science' },
  { code: 'ECS', name: 'Electronics and Computer Science' },
  { code: 'MECH', name: 'Mechanical Engineering' },
]

const SyllabusTable = () => (
  <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
    <table className="min-w-full bg-white">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-4 py-2 text-left">Year</th>
          <th className="px-4 py-2 text-left">Courses</th>
        </tr>
      </thead>
      <tbody>
        {syllabusData.map((item, index) => (
          <tr
            key={index}
            className="transition-colors duration-300 hover:bg-gray-100"
          >
            <td className="border px-4 py-2">{item.year}</td>
            <td className="border px-4 py-2">
              {item.courses.map((course, i) => (
                <span key={i} className="mr-2 inline-block">
                  {course}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const CourseDetails = () => (
  <div className="mt-6 w-full max-w-lg overflow-hidden rounded-lg shadow-lg">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2 text-left">Code</th>
          <th className="px-4 py-2 text-left">Course Name</th>
        </tr>
      </thead>
      <tbody>
        {courseDetails.map((course, index) => (
          <tr
            key={index}
            className="transition-colors duration-300 hover:bg-gray-100"
          >
            <td className="border px-4 py-2">{course.code}</td>
            <td className="border px-4 py-2">{course.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const AutonomousSyllabus = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-10">
      <h2
        className={`${zilla.className} mb-6 text-4xl font-bold text-gray-800`}
      >
        Autonomous Syllabus
      </h2>
      <p className="mb-4 text-xl text-gray-600">A.Y. 2024-2025 (Autonomous)</p>
      <SyllabusTable />
      <div className="mt-4">
        <h3 className="mb-2 text-center text-lg font-semibold text-gray-800">
          Honors / Minor (All Branches)
        </h3>
        <CourseDetails />
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-white text-gray-900">
      <div
        className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row"
        id="admission"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            Welcome to Our Institution
          </h1>
          <p
            className={`${zilla.className} mb-6 text-lg md:text-xl lg:text-2xl`}
          >
            We are committed to providing the best educational experience.
          </p>
          <button className="transform rounded-full bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl">
            Learn More
          </button>
        </div>
      </div>
      <AutonomousSyllabus />
    </div>
  )
}

export default Page
