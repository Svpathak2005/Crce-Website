import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const TeachingLearningProcessPage = () => {
  const navigationItems = [{ label: 'Home', url: '/' }]

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-gray-50 to-[#E5F0FF] text-gray-900">
      <div className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            Teaching Learning Process
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-16">
        <div className="mb-16">
          <h2
            className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f] md:text-4xl`}
          >
            Teaching Learning Process Overview
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              The academic calendar is prepared at the beginning of the academic
              year based on the academic calendar provided by the University.
              This calendar includes academic and co-curricular activities.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Term commencement</li>
              <li>Lesson plan and CO submission</li>
              <li>Faculty meetings</li>
              <li>Academic activities timelines</li>
              <li>Cultural, sports, and technical events</li>
              <li>Conferences and seminars</li>
              <li>Practical and oral examination schedule</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h3
            className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-3xl`}
          >
            Department-Level Activities
          </h3>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              Further, the department refines the academic calendar by adding
              schedules for various department-level activities:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Final year project work schedule</li>
              <li>Faculty Development Programs (FDPs)</li>
              <li>Industrial visits</li>
              <li>Submission dates</li>
              <li>Co-curricular activities</li>
              <li>Department meetings</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h3
            className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-3xl`}
          >
            Faculty Process
          </h3>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              Faculty members follow the process to ensure effective teaching
              and learning:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Formulate Course Outcomes (COs) for assigned subjects</li>
              <li>
                Map COs to Program Outcomes (POs) and Program Specific Outcomes
                (PSOs)
              </li>
              <li>Identify tools to measure CO attainment</li>
              <li>Collect and analyze data to assess student performance</li>
              <li>
                Identify weak/strong students and take appropriate actions
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h3
            className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-3xl`}
          >
            Support for Weak and Bright Students
          </h3>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              Faculty members take various initiatives to support weak students
              and encourage bright students:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Regular feedback and guidance</li>
              <li>Extra practice sessions for weak students</li>
              <li>Encouragement to participate in technical competitions</li>
              <li>Motivation for publishing papers and attending seminars</li>
            </ul>
          </div>
        </div>

        <div>
          <h3
            className={`${zilla.className} mb-6 text-2xl font-bold text-[#001f3f] md:text-3xl`}
          >
            Monitoring Academic Performance
          </h3>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <ul className="list-disc pl-6 text-gray-700">
              <li>Regular monitoring by class teachers and HODs</li>
              <li>Internal assessment tests and mid-term reports</li>
              <li>Periodic evaluation of final year projects</li>
              <li>Continuous evaluation of term work</li>
              <li>Feedback collection and analysis</li>
              <li>Academic audit and departmental advisory board meetings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachingLearningProcessPage
