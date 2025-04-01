import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const VisionMissionPage = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] text-gray-900">
      <div className="flex h-full w-full flex-col justify-center bg-linear-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            VISION & MISSION
          </h1>
          <p className="rounded-full bg-white/20 px-4 py-2 text-sm font-light text-white backdrop-blur-xs md:text-base">
            Home {'>'} About {'>'} Vision & Mission
          </p>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-16">
        <div className="mb-16">
          <h2
            className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f] md:text-4xl`}
          >
            Our Vision
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              "Moulding Engineers Who Can Build The Nation"
            </p>
            <p className="text-gray-700">
              CRCE will be a center of Excellence in Engineering Education,
              moulding engineers with state-of-the-art technologies, innovative
              skills and human values matching with the growing expectations of
              the corporates and the society and thus play an effective role in
              nation-building.
            </p>
          </div>
        </div>

        <div>
          <h2
            className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f] md:text-4xl`}
          >
            Our Mission
          </h2>
          <ul className="space-y-4">
            {[
              'Create an excellent scholastic ambiance for students and faculty, by providing facilities with state-of-the-art technologies and continuously updating based on the needs of user organizations.',
              'Attract, develop and retain teaching faculty of academic excellence, dedication and commitment.',
              'Design the academic administration system to ensure effective teaching-learning process facilitating participation from students and teachers and enabling continuous improvement through evaluation and feedback.',
              'Provide avenues for the holistic development of students to become competent engineers with interpersonal skills, leadership qualities, and social concern.',
              'Maintain economic discipline, continuously work for optimal utilization of resources and resource generation through consultancy to make quality education affordable. Everybody in the organization to be a role model for integrity, upholding ethical values, fairness, and transparency in all dealings.',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                  {index + 1}
                </span>
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VisionMissionPage
