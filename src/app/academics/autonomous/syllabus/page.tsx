'use server'

import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import getSyllabus from '@/app/api/syllabus'
import type { Syllabus, SyllabusResponse } from '@/app/api/syllabus'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface SyllabusFileDisplay {
  class: string
  name: string
  pdf: string // file ID
}

interface Course {
  name: string
  years: SyllabusFileDisplay[]
}

interface Props {
  syllabus: Syllabus[] | null
}

const SyllabusTable = ({ course }: { course: Course }) => (
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
            <td className="border px-4 py-2">{item.class}</td>
            <td className="border px-4 py-2">
              <a
                href={`${process.env.NEXT_PUBLIC_ASSET_URL || ''}/${item.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {item.name}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const AutonomousSyllabus = ({ syllabus }: Props) => {
  if (!syllabus || syllabus.length === 0) {
    return (
      <div className="mt-10 rounded-lg bg-red-100 px-6 py-8 text-center text-red-800 shadow-md">
        <h2 className="mb-2 text-2xl font-bold">Oops!</h2>
        <p className="text-lg">
          Couldn’t load the syllabus at the moment. Please check back later.
        </p>
      </div>
    )
  }

  const formattedCourses: Course[] = syllabus.map((s) => {
    const years: SyllabusFileDisplay[] =
      s.documents?.map((doc) => ({
        class: s.class,
        name: doc.name,
        pdf: doc.file,
      })) || []

    return {
      name: s.class,
      years,
    }
  })

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <h2
        className={`${zilla.className} mb-6 text-4xl font-bold text-gray-800`}
      >
        Autonomous Syllabus
      </h2>
      <p className="mb-8 text-xl text-gray-600">A.Y. 2024-2025 (Autonomous)</p>
      {formattedCourses.length > 0 ? (
        formattedCourses.map((course, index) => (
          <SyllabusTable key={index} course={course} />
        ))
      ) : (
        <p className="text-lg text-gray-600">
          No syllabus files available yet.
        </p>
      )}
    </div>
  )
}

export default async function Page() {
  let syllabus: Syllabus[] | null = null

  try {
    const response: SyllabusResponse = await getSyllabus()
    syllabus = response.data
  } catch (error) {
    syllabus = null
  }

  return (
    <div className="flex h-fit w-full flex-col bg-white text-gray-900">
      <div
        className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] md:flex-row md:pt-36"
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
      <AutonomousSyllabus syllabus={syllabus} />
    </div>
  )
}
