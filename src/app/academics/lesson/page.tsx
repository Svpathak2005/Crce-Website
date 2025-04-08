'use client'
import React, { useState } from 'react'
import { Zilla_Slab, Inter } from 'next/font/google'
import {
  ChevronDown,
  BookOpen,
  School,
  Calendar,
  List,
  Users,
  FileText,
} from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const LessonPlanPage = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  const departments = [
    { id: 4, name: 'Computer Engineering' },
    { id: 5, name: 'Production Engineering' },
    { id: 8, name: 'Mechanical Engineering' },
    { id: 9, name: 'Electronics and Computer Science' },
    { id: 68, name: 'First Year Engineering' },
    { id: 74, name: 'Science & Humanities' },
    { id: 135, name: 'Artificial Intelligence & Data Science' },
  ]

  const lessonPlanSteps = [
    {
      title: 'Academic Calendar Planning',
      content:
        'Executive Committee (EC) approves the Institute Academic Calendar prepared on the basis of the University academic calendar at the beginning of the semester. This calendar includes semester wise schedules for Institute-level Curricular, Co-curricular and extracurricular activities.',
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: 'Department Academic Planning',
      content:
        'Program Assessment Committee (PAC) at department level plans and monitors academic activities for effective curriculum delivery. Departmental Academic Calendar is prepared by adding timelines and schedules for department-level activities and events.',
      icon: <School className="h-6 w-6" />,
    },
    {
      title: 'Lesson Plan Preparation',
      content:
        'Faculty prepares Lesson Plan consisting of Course Outcomes (COs), CO-PO-PSO Mappings, Targets, Tools used for attainment, Curriculum Gaps, Content beyond Syllabus and detailed Lecture Plan/Lab Plan. PAC reviews the lesson plans.',
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: 'Teaching & Learning Activities',
      content:
        'Regular classroom teaching is supplemented with Guest Lectures, Seminars, Assignments, Quizzes, Tutorials, Case Studies, hands-on-sessions, Mini projects, Industry visits, Internships, Online resources, NPTEL lectures.',
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: 'Assessment & Feedback',
      content:
        'Internal Assessment tests, continuous evaluation, mid-term and end-term feedback, course exit surveys, and CO attainment calculation are conducted to ensure quality education.',
      icon: <List className="h-6 w-6" />,
    },
    {
      title: 'Quality Assurance',
      content:
        'Academic audit is conducted yearly to evaluate curriculum delivery. Departmental Advisory Board (DAB) meeting evaluates department performance and recommends steps for curriculum enhancement.',
      icon: <Users className="h-6 w-6" />,
    },
  ]

  return (
    <div
      className={`${inter.className} mt-[110px] min-h-screen bg-gradient-to-b from-white to-[#E5F0FF]`}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <div className="rounded-xl bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 text-white shadow-xl">
          <h1
            className={`${zilla.className} mb-4 text-3xl font-bold md:text-4xl`}
          >
            Academic Lesson Plans
          </h1>
          <p className="max-w-3xl text-blue-100">
            Fr. Conceicao Rodrigues College of Engineering (FR.CRCE) is
            affiliated to the University of Mumbai. Our lesson plans are
            carefully designed to provide a comprehensive educational experience
            with regular updates based on industry needs and academic standards.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-4 grid gap-8 md:grid-cols-12">
          {/* Lesson Plan Process */}
          <div className="space-y-6 md:col-span-8">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h2
                className={`${zilla.className} mb-6 text-2xl font-bold text-blue-800`}
              >
                Curriculum Delivery Process
              </h2>

              <div className="space-y-4">
                {lessonPlanSteps.map((step, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg border border-blue-100"
                  >
                    <button
                      onClick={() => toggleSection(index)}
                      className="flex w-full items-center justify-between bg-blue-50 p-4 text-left transition-colors hover:bg-blue-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-blue-600">{step.icon}</div>
                        <h3 className="font-medium text-blue-900">
                          {step.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-blue-500 transition-transform ${expandedSection === index ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {expandedSection === index && (
                      <div className="bg-white p-4 text-gray-700">
                        <p>{step.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Department Links */}
          <div className="md:col-span-4">
            <div className="sticky top-6 rounded-xl bg-white p-6 shadow-md">
              <h2
                className={`${zilla.className} mb-4 text-2xl font-bold text-blue-800`}
              >
                Department Plans
              </h2>
              <p className="mb-6 text-gray-600">
                Access lesson plans by department to find specific course
                information.
              </p>
              <div className="space-y-3">
                {departments.map((dept) => (
                  <a
                    key={dept.id}
                    href={`/index.php/academics/tlp/lesson-plan/category/${dept.id}-${dept.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                    className="flex items-center justify-between rounded-lg bg-blue-50 p-3 text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    <span>{dept.name}</span>
                    <span className="text-xs text-blue-400">(0)</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonPlanPage
