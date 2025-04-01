import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const syllabusData = [
  {
    name: 'Computer Engineering',
    years: [
      { year: 'First Year (FE)', pdf: 'curriculum_FE_FrCRCE-1_CS.pdf' },
      { year: 'Second Year (SE)', pdf: 'currirulum_SE_FrCRCE-1_CE_v2_AC.pdf' },
      { year: 'Third Year (TE)', pdf: 'CE_TE_Syallbus_AC_2024-25.pdf' },
      { year: 'Fourth Year (BE)', pdf: 'CE_BE_Syllabus_AC_2024-25.pdf' },
    ],
    mtech: { pdf: 'CE_MTech_Syllabus_2024-25.pdf' },
  },
  {
    name: 'AI & Data Science',
    years: [
      { year: 'First Year (FE)', pdf: 'curriculum_FE_FrCRCE_ECS_1.pdf' },
      { year: 'Second Year (SE)', pdf: 'currirulum_SE_FrCRCE-1_AIDS.pdf' },
      { year: 'Third Year (TE)', pdf: 'currirulum_TE_FrCRCE-1_AIDS.pdf' },
      { year: 'Fourth Year (BE)', pdf: 'currirulum_BE_FrCRCE-1_AIDS.pdf' },
    ],
  },
  {
    name: 'Electronics & Computer Science',
    years: [
      { year: 'First Year (FE)', pdf: 'curriculum_FE_FrCRCE_ECS_1.pdf' },
      { year: 'Second Year (SE)', pdf: 'curriculum_SE_FrCRCE_ECS_1.pdf' },
      { year: 'Third Year (TE)', pdf: 'currriculum_TE_FrCRCE_ECS_1.pdf' },
      { year: 'Fourth Year (BE)', pdf: 'curriculum_BE_FrCRCE_ECS_1.pdf' },
    ],
  },
  {
    name: 'Mechanical Engineering',
    years: [
      { year: 'First Year (FE)', pdf: 'currirulum_FY_BTECH_FrCRCE-3_ME.pdf' },
      { year: 'Second Year (SE)', pdf: 'currirulum_SE_FrCRCE-1_ME.pdf' },
      { year: 'Third Year (TE)', pdf: 'currirulum_TE_FrCRCE-1_ME.pdf' },
      { year: 'Fourth Year (BE)', pdf: 'currirulum_BE_FrCRCE-1_ME.pdf' },
    ],
    mtech: { pdf: 'currirulum_MTECH_FrCRCE-2_ME.pdf' },
  },
]

const specialCourses = [
  {
    name: 'Liberal Learning Courses (LLC)',
    pdf: 'Liberal_Leanring_Courses_LLC.pdf',
  },
  { name: 'Honors/Minors', pdf: 'Curriculum_FrCRCE-Honors_minors.pdf' },
]

const SyllabusTable = ({ course }) => (
  <div className="mb-8 w-full max-w-2xl overflow-hidden rounded-lg shadow-lg">
    <h3
      className={`${zilla.className} bg-blue-600 px-4 py-2 text-xl font-semibold text-white`}
    >
      {course.name}
    </h3>
    <table className="min-w-full bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">Year</th>
          <th className="px-4 py-2 text-left">Syllabus</th>
        </tr>
      </thead>
      <tbody>
        {course.years.map((item, index) => (
          <tr
            key={index}
            className="transition-colors duration-300 hover:bg-gray-50"
          >
            <td className="border px-4 py-2">{item.year}</td>
            <td className="border px-4 py-2">
              <a
                href={`/syllabus/${item.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Syllabus
              </a>
            </td>
          </tr>
        ))}
        {course.mtech && (
          <tr className="transition-colors duration-300 hover:bg-gray-50">
            <td className="border px-4 py-2">M.Tech</td>
            <td className="border px-4 py-2">
              <a
                href={`/syllabus/${course.mtech.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View M.Tech Syllabus
              </a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

const SpecialCoursesSection = () => (
  <div className="mb-8 w-full max-w-2xl overflow-hidden rounded-lg shadow-lg">
    <h3
      className={`${zilla.className} bg-green-600 px-4 py-2 text-xl font-semibold text-white`}
    >
      Special Courses
    </h3>
    <table className="min-w-full bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">Course Type</th>
          <th className="px-4 py-2 text-left">Syllabus</th>
        </tr>
      </thead>
      <tbody>
        {specialCourses.map((course, index) => (
          <tr
            key={index}
            className="transition-colors duration-300 hover:bg-gray-50"
          >
            <td className="border px-4 py-2">{course.name}</td>
            <td className="border px-4 py-2">
              <a
                href={`/syllabus/${course.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Syllabus
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const AutonomousSyllabus = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <h2
        className={`${zilla.className} mb-6 text-4xl font-bold text-gray-800`}
      >
        Autonomous Syllabus
      </h2>
      <p className="mb-8 text-xl text-gray-600">A.Y. 2024-2025 (Autonomous)</p>
      {syllabusData.map((course, index) => (
        <SyllabusTable key={index} course={course} />
      ))}
      <SpecialCoursesSection />
    </div>
  )
}

const Page = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-white text-gray-900">
      <div
        className="flex h-full w-full flex-col justify-center bg-linear-to-br from-[#001f3f] to-[#003366] md:flex-row md:pt-36"
        id="admission"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-center text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            Welcome to Our Institution
          </h1>
          <p
            className={`${zilla.className} mb-6 text-center text-lg md:text-xl lg:text-2xl`}
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
