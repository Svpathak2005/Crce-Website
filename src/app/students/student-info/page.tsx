'use client'

import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Link from 'next/link'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const quickLinks = [
  {
    name: 'Placement Policy',
    url: '/students/Campus_Placement_Policy_AY_2023.pdf',
  },
  {
    name: 'Student Data Bank',
    url: 'http://granth.fragnel.edu.in:5186/pinfo/index.php',
  },
  {
    name: 'Ethics Handbook',
    url: '/students/Essentials_of_Ethics.pdf',
  },
  {
    name: 'Awards for Extracurricular Activities',
    url: '/students/awards.pdf',
  },
  {
    name: 'List of Extension Activities',
    url: '/extension activities.pdf',
  },
]

const StudentInformation: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="relative overflow-hidden pt-40">
        <div className="container relative z-10 mx-auto px-4 py-20 text-center text-blue-900">
          <h1 className={`${zilla.className} mb-6 text-5xl font-bold`}>
            Student Information
          </h1>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2
            className={`${zilla.className} mb-8 text-3xl font-bold text-blue-900`}
          >
            Quick Links
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="flex h-full items-center justify-center rounded-lg bg-gray-100 p-4 text-center font-semibold text-blue-800 shadow-sm transition-all hover:bg-blue-100 hover:shadow-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Student Progression to Higher Education Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2
            className={`${zilla.className} mb-12 text-4xl font-bold text-blue-900`}
          >
            Student Progression to Higher Education
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            Education is a life-long exercise. So FRCRCE motivates students to
            acquire higher education to gain the most recent skills and the
            inclination for making profitable use of knowledge. Our students
            have been admitted to reputed universities, including:
          </p>
          <ul className="mb-8 list-inside list-disc text-gray-700">
            <li>University Of Texas, Dallas</li>
            <li>Clemson University</li>
            <li>Boston University</li>
            <li>Georgia Tech</li>
            <li>Arizona State University</li>
            <li>Northeastern University</li>
            <li>Rutger University</li>
            <li>And many more...</li>
          </ul>
          <h3 className="mb-4 text-2xl font-bold text-blue-800">
            Recent Admissions:
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h4 className="font-semibold text-blue-900">Boston University</h4>
              <p className="text-gray-600">9 students admitted</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h4 className="font-semibold text-blue-900">
                Northeastern University
              </h4>
              <p className="text-gray-600">9 students admitted</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h4 className="font-semibold text-blue-900">
                University of Texas Dallas
              </h4>
              <p className="text-gray-600">4 students admitted</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h4 className="font-semibold text-blue-900">
                University of California
              </h4>
              <p className="text-gray-600">3 students admitted</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h4 className="font-semibold text-blue-900">Rutger University</h4>
              <p className="text-gray-600">3 students admitted</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <h4 className="font-semibold text-blue-900">
                Santa Clara University
              </h4>
              <p className="text-gray-600">2 students admitted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities & Awards Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2
            className={`${zilla.className} mb-12 text-4xl font-bold text-blue-900`}
          >
            List of Activities & Awards
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            The Institute promotes a variety of social and technical activities
            to ensure students' holistic development. Activities include:
          </p>
          <ul className="mb-8 list-inside list-disc text-gray-700">
            <li>Marathon for health awareness</li>
            <li>Juhu Beach Cleanliness Drive</li>
            <li>Mount Mary Fair Traffic regulation</li>
            <li>
              IEEE student chapter training for economically backward children
            </li>
            <li>
              Technical events like BAHA, Go-Kart, Robocon, Formula Racing
            </li>
          </ul>
          <p className="text-lg text-gray-700">
            Through these activities, students develop essential skills such as
            project management, communication, and technical expertise. The
            Institute's goal is to encourage students to be both technically
            sound and socially responsible.
          </p>
        </div>
      </section>
    </main>
  )
}

export default StudentInformation
