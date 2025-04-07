'use client'
import React, { useState } from 'react'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Users,
  Award,
  BarChart,
  Calendar,
} from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const TeachingLearningProcessPage = () => {
  const navigationItems = [{ label: 'About', url: '/' }]
  const [activeSection, setActiveSection] = useState('overview')

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  // Section data
  const sections = [
    {
      id: 'overview',
      title: 'Teaching Learning Process Overview',
      icon: <BookOpen className="h-6 w-6" />,
      content: {
        text: 'The academic calendar is prepared at the beginning of the academic year based on the academic calendar provided by the University. This calendar includes academic and co-curricular activities.',
        items: [
          'Term commencement',
          'Lesson plan and CO submission',
          'Faculty meetings',
          'Academic activities timelines',
          'Cultural, sports, and technical events',
          'Conferences and seminars',
          'Practical and oral examination schedule',
        ],
      },
    },
    {
      id: 'department',
      title: 'Department-Level Activities',
      icon: <Calendar className="h-6 w-6" />,
      content: {
        text: 'Further, the department refines the academic calendar by adding schedules for various department-level activities:',
        items: [
          'Final year project work schedule',
          'Faculty Development Programs (FDPs)',
          'Industrial visits',
          'Submission dates',
          'Co-curricular activities',
          'Department meetings',
        ],
      },
    },
    {
      id: 'faculty',
      title: 'Faculty Process',
      icon: <Users className="h-6 w-6" />,
      content: {
        text: 'Faculty members follow the process to ensure effective teaching and learning:',
        items: [
          'Formulate Course Outcomes (COs) for assigned subjects',
          'Map COs to Program Outcomes (POs) and Program Specific Outcomes (PSOs)',
          'Identify tools to measure CO attainment',
          'Collect and analyze data to assess student performance',
          'Identify weak/strong students and take appropriate actions',
        ],
      },
    },
    {
      id: 'support',
      title: 'Support for Weak and Bright Students',
      icon: <Award className="h-6 w-6" />,
      content: {
        text: 'Faculty members take various initiatives to support weak students and encourage bright students:',
        items: [
          'Regular feedback and guidance',
          'Extra practice sessions for weak students',
          'Encouragement to participate in technical competitions',
          'Motivation for publishing papers and attending seminars',
        ],
      },
    },
    {
      id: 'monitoring',
      title: 'Monitoring Academic Performance',
      icon: <BarChart className="h-6 w-6" />,
      content: {
        text: '',
        items: [
          'Regular monitoring by class teachers and HODs',
          'Internal assessment tests and mid-term reports',
          'Periodic evaluation of final year projects',
          'Continuous evaluation of term work',
          'Feedback collection and analysis',
          'Academic audit and departmental advisory board meetings',
        ],
      },
    },
  ]

  // Process steps for visual representation
  const processSteps = [
    {
      label: 'Planning',
      description: 'Academic calendar preparation and course allocation',
    },
    {
      label: 'Preparation',
      description: 'Lesson plans and course materials development',
    },
    {
      label: 'Delivery',
      description: 'Classroom teaching and practical sessions',
    },
    { label: 'Assessment', description: 'Continuous evaluation and feedback' },
    {
      label: 'Improvement',
      description: 'Data analysis and enhancement measures',
    },
  ]

  return (
    <div className="mt-[80px] min-h-screen bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#001f3f] to-[#003366] pt-36 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <h1
              className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-6xl`}
            >
              Teaching Learning Process
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-white/90">
              A comprehensive approach to education that ensures quality
              learning experiences and academic excellence for all students.
            </p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 h-16 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute -bottom-1 h-16 w-full text-white"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.86,82.75Q274.6,67.28,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      {/* Process Visual Timeline */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2
            className={`${zilla.className} mb-10 text-center text-3xl font-bold text-[#001f3f] md:text-4xl`}
          >
            Our Teaching Learning Cycle
          </h2>

          <div className="relative mx-auto flex w-full max-w-4xl justify-between">
            {/* Connection line */}
            <div className="absolute top-9 left-0 h-2 w-full rounded-full bg-gradient-to-r from-[#001f3f] to-[#4a90e2]"></div>

            {/* Process steps */}
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#001f3f] to-[#003366] text-2xl font-bold text-white shadow-lg">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.label}</h3>
                <p className="mt-2 max-w-[120px] text-center text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Sections */}
          {sections.map((section) => (
            <div
              key={section.id}
              className={`mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 ${
                activeSection === section.id ? 'shadow-lg' : ''
              }`}
            >
              {/* Section Header */}
              <button
                className={`flex w-full items-center justify-between p-6 text-left transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-[#001f3f]/10 to-[#4a90e2]/10'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleSection(section.id)}
                aria-expanded={activeSection === section.id}
              >
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#001f3f]/10 text-[#001f3f]">
                    {section.icon}
                  </div>
                  <h3
                    className={`${zilla.className} text-xl font-bold text-[#001f3f] md:text-2xl`}
                  >
                    {section.title}
                  </h3>
                </div>
                {activeSection === section.id ? (
                  <ChevronUp className="h-6 w-6 text-[#001f3f]" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-[#001f3f]" />
                )}
              </button>

              {/* Section Content */}
              {activeSection === section.id && (
                <div className="border-t border-gray-100 bg-white p-6">
                  {section.content.text && (
                    <p className="mb-4 text-gray-700">{section.content.text}</p>
                  )}
                  <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {section.content.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start rounded-lg border border-gray-100 bg-gray-50 p-3"
                      >
                        <div className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 rounded-full bg-[#4a90e2]/20 text-center text-sm font-bold text-[#001f3f]">
                          •
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-[#001f3f] to-[#003366] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`${zilla.className} mb-6 text-3xl font-bold text-white md:text-4xl`}
          >
            Excellence in Education
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Our teaching-learning process is continuously evolving to provide
            the best educational experience for our students.
          </p>
          <button className="rounded-lg bg-white px-8 py-3 font-bold text-[#001f3f] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl">
            Learn More About Our Programs
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeachingLearningProcessPage
