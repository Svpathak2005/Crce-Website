'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import {
  BookOpenText,
  GraduationCap,
  School,
  UsersRound,
  Youtube,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  return (
    <main className="mt-[100px] flex w-full flex-col items-center justify-center">
      <div
        id="about"
        className="w-full bg-gradient-to-b from-white to-[#E5F0FF] py-20"
        style={{ minHeight: 'calc(100vh - 100px)' }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="md:w-1/2">
              <h2
                className={`${zilla.className} mb-6 text-4xl font-bold text-blue-950 md:text-5xl`}
              >
                About Our College
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Fr. Conceicao Rodrigues College of Engineering (Fr.CRCE),
                  located in the heart of Mumbai, is a premier private
                  engineering college known for its unique approach to
                  engineering education and holistic development.
                </p>
                <p className="mb-4">
                  Established by Agnel Ashram, which began as an orphanage and
                  trade school in 1957, the institute has evolved into a
                  significant technical complex.
                </p>
                <p className="mb-4">
                  Fr.CRCE began in 1984 with a Production Engineering program
                  and has since expanded to include Electronics, Computer,
                  Information Technology, and Mechanical Engineering, along with
                  Master's and Doctoral programs.
                </p>
                <p>
                  The college is consistently ranked highly in surveys by TOI,
                  INDIA TODAY, and others, and is accredited by both NBA and
                  NAAC with a grade 'A'.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                alt="College campus view"
                src="/college.jpg"
                height={600}
                width={800}
                className="h-auto w-full rounded-lg object-cover shadow-xl transition-shadow duration-300 hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#E5F0FF] py-20">
        <div className="container mx-auto px-6">
          <h2
            className={`${zilla.className} mb-4 text-center text-4xl font-bold text-blue-950 md:text-5xl`}
          >
            At A Glance
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-xl text-blue-900">
            Excellence in numbers: Our legacy of education, innovation, and
            growth
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="transform rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-950">
                <GraduationCap size={32} />
              </div>
              <h3 className="mb-2 text-5xl font-bold text-blue-950">9,000+</h3>
              <p className="font-medium text-blue-700">Graduates</p>
            </div>

            <div className="transform rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-950">
                <BookOpenText size={32} />
              </div>
              <h3 className="mb-2 text-5xl font-bold text-blue-950">8</h3>
              <p className="font-medium text-blue-700">Programs</p>
            </div>

            <div className="transform rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-950">
                <School size={32} />
              </div>
              <h3 className="mb-2 text-5xl font-bold text-blue-950">23</h3>
              <p className="font-medium text-blue-700">Classrooms</p>
            </div>

            <div className="transform rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-950">
                <UsersRound size={32} />
              </div>
              <h3 className="mb-2 text-5xl font-bold text-blue-950">1,200</h3>
              <p className="font-medium text-blue-700">Students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Tour Section */}
      <div className="w-full bg-gradient-to-b from-[#E5F0FF] to-white py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2
              className={`${zilla.className} mb-4 text-4xl font-bold text-blue-950 md:text-5xl`}
            >
              Take A Tour
            </h2>
            <p className="mb-4 text-xl text-blue-900">
              OUR CAMPUSES ARE A LIVING LABORATORY FOR SUSTAINABILITY
            </p>
            <p className="text-lg text-gray-700">
              The college is located at Bandstand, Bandra, Mumbai in a
              picturesque environment surrounded by the Arabian Sea
            </p>
          </div>

          <Link
            href="https://youtu.be/ZMDlPfqqAsY?si=y2gZUALPeEHLMqN2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:shadow-3xl relative block overflow-hidden rounded-xl shadow-2xl transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-blue-950">
              <div className="absolute inset-0 z-0 opacity-30">
                <Image
                  src="/college.jpg"
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="transform rounded-full bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-110">
                  <Youtube size={64} className="text-blue-950" />
                </div>
              </div>
              <div className="absolute right-0 bottom-0 left-0 z-10 bg-gradient-to-t from-blue-950 to-transparent p-4 text-center">
                <p className="text-lg font-medium text-white">
                  Watch our campus tour video
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
