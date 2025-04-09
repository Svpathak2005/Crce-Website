'use client'
import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { FileText, Download, Menu } from 'lucide-react'

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
    name: 'Computer Science and Engineering',
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

const SyllabusPage = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section */}
     
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-28 pt-36 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            SYLLABUS
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto w-full px-4 py-8 sm:px-8 md:px-16 md:py-16 lg:px-28">
        <div className="mb-8 md:mb-16">
          <h2
            className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
          >
            Autonomous Syllabus
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
            <p className="mb-3 text-lg font-semibold text-[#4a90e2] md:mb-4 md:text-xl">
              "A.Y. 2024-2025 (Autonomous)"
            </p>
            <p className="text-sm text-gray-700 md:text-base">
              Fr. Conceicao Rodrigues College of Engineering offers
              comprehensive syllabi for all academic programs, designed to equip
              students with the knowledge and skills required for professional
              excellence in their respective fields.
            </p>
          </div>
        </div>

        {/* Department Sections */}
        {syllabusData.map((department, dIndex) => (
          <div key={dIndex} className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              {department.name}
            </h2>

            <div className="space-y-3 md:space-y-4">
              {department.years.map((yearData, yIndex) => (
                <div
                  key={yIndex}
                  className="flex items-start rounded-lg bg-gray-100 p-3 shadow-lg md:p-4"
                >
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    {yIndex + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="mb-1 text-base font-semibold text-[#001f3f] md:mb-2 md:text-lg">
                      {yearData.year}
                    </h4>
                    <a
                      href={`/syllabus/${yearData.pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-[#4a90e2] hover:underline md:text-base"
                    >
                      <FileText className="mr-1 h-4 w-4 md:mr-2 md:h-5 md:w-5" />
                      View Syllabus
                    </a>
                  </div>
                </div>
              ))}

              {/* M.Tech if available */}
              {department.mtech && (
                <div className="flex items-start rounded-lg bg-gray-100 p-3 shadow-lg md:p-4">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    {department.years.length + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="mb-1 text-base font-semibold text-[#001f3f] md:mb-2 md:text-lg">
                      M.Tech
                    </h4>
                    <a
                      href={`/syllabus/${department.mtech.pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-[#4a90e2] hover:underline md:text-base"
                    >
                      <FileText className="mr-1 h-4 w-4 md:mr-2 md:h-5 md:w-5" />
                      View M.Tech Syllabus
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Special Courses Section */}
        <div className="mb-8 md:mb-16">
          <h2
            className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
          >
            Special Courses
          </h2>

          <div className="space-y-3 md:space-y-4">
            {specialCourses.map((course, index) => (
              <div
                key={index}
                className="flex items-start rounded-lg bg-gray-100 p-3 shadow-lg md:p-4"
              >
                <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h4 className="mb-1 text-base font-semibold text-[#001f3f] md:mb-2 md:text-lg">
                    {course.name}
                  </h4>
                  <a
                    href={`/syllabus/${course.pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#4a90e2] hover:underline md:text-base"
                  >
                    <FileText className="mr-1 h-4 w-4 md:mr-2 md:h-5 md:w-5" />
                    View Syllabus
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download All Link */}
        <div className="mt-6 flex justify-center md:mt-10">
          <a
            href="/syllabus/All_Syllabi_Compiled_2024_25.pdf"
            className="flex items-center rounded-lg bg-[#4a90e2] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg sm:px-6 md:px-8 md:py-4 md:text-base"
            download
          >
            <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Download All Syllabi
          </a>
        </div>
      </div>
    </div>
  )
}

export default SyllabusPage
