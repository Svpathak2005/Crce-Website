import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'
import { Phone, Users } from 'lucide-react'
import Navigation from '@/components/navigation'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Page = () => {
  const navigationItems = [
    { label: 'Placements Overview', url: '/students/placements' },
  ]

  const quickLinks = [
    {
      label: 'Campus Placement Policy AY 2023',
      url: '/placement/campus-placement-policy.pdf',
    },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-gray-50 to-[#E5F0FF] text-gray-900">
      <div
        className="flex h-full w-full flex-col bg-linear-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row"
        id="placements"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            PLACEMENTS
          </h1>
          <Navigation items={navigationItems} />
        </div>
        <div className="relative mb-8 mt-8 flex w-full flex-col justify-center space-y-6 rounded-lg bg-white p-8 shadow-2xl md:mb-16 md:mr-16 md:mt-32 md:w-1/3 lg:p-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-[#4a90e2] px-6 py-2 text-white">
            <h2
              className={`${zilla.className} text-xl font-semibold md:text-2xl`}
            >
              Contact Details
            </h2>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Mr. Mahesh R. Sharma, Training & Placement Officer
          </p>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Phone className="mr-2" /> +91 22-67114045, 9969813735
          </div>
          <div className="mt-6 rounded-lg bg-gray-100 p-4">
            <h3
              className={`${zilla.className} mb-2 text-lg font-semibold text-[#001f3f] md:text-xl`}
            >
              Placement Team Members
            </h3>
            <div className="flex items-center">
              <Users className="mr-2 text-[#4a90e2]" />
              <p className="text-sm text-gray-600 md:text-base">
                Mr. Saurabh Korgaonkar - Coordinator, Mechanical Engineering{' '}
                <br />
                Mr. Jayen Modi - Coordinator, Electronics & Computer Science{' '}
                <br />
                Mr. Vijay Shelake - Coordinator, Computer Engineering <br />
                Ms. Swapnali Makadey - Coordinator, AI & Data Science
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="hidden w-full border-r border-gray-200 p-6 md:block md:w-1/4 lg:p-8">
          <h2
            className={`${zilla.className} mb-6 text-xl font-bold text-[#001f3f] lg:text-2xl`}
          >
            Quick Links
          </h2>
          <nav className="flex flex-col">
            {quickLinks.map(({ label, url }, index) => (
              <Link
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="grow p-6 text-[#534a43] md:p-8 lg:p-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <h2
                className={`${zilla.className} mb-4 text-3xl font-bold text-[#001f3f] md:text-4xl lg:text-5xl`}
              >
                Training & Placement Office (TPO)
              </h2>
              <p className="mb-6 text-base leading-relaxed md:text-lg">
                The Training & Placement Office (TPO), also called the TPO cell,
                implements the placement process that aims to match the
                necessities of the corporate world with the objectives of the
                students, thereby expediting the achievement of synergy between
                the two. The TPO cell is involved in this process right from the
                beginning of each academic year. Starting from the preparation
                of the placement brochure to the pre-placement sessions to the
                final recruitments, the efforts are always directed towards
                providing the best interface suited to both, the students and
                the company.
              </p>
              <p className="mb-6 text-base leading-relaxed md:text-lg">
                The TPO cell also caters to the industrial training needs of
                students through internships, skilled courses, and provides
                placement services to students through on-campus, off-campus &
                pooled campus interviews. Many multi-national and several
                well-known Indian conglomerates regularly visit our campus every
                year for their requirement of high-caliber human resources.
              </p>
              <p className="mb-6 text-base leading-relaxed md:text-lg">
                The Training & Placement Office (TPO) motivates and prepares
                students for the interviews and prospective workplaces. Careful
                and systematic preparation is initiated and sustained for this
                purpose. The TPO cell takes pride in offering student services
                like a consultation on a wide range of issues such as
                employment, career planning, opportunities available, etc.
                thereby preparing students effectively for their careers. As a
                result of the highly focused and continuous efforts of the TPO
                cell, every year almost all eligible students are placed. Many
                students also fetch multiple placement offers.
              </p>
              <p className="mb-6 text-base leading-relaxed md:text-lg">
                The present team under the aegis of the Training & Placement
                Office (TPO) is comprised of the following staff members, all of
                whom report to the Institute’s training & placement officer as
                given below:
              </p>
              <h3
                className={`${zilla.className} mb-4 mt-8 text-3xl font-bold text-[#001f3f] md:text-4xl lg:text-5xl`}
              >
                Attachments
              </h3>
              <p className="mb-6 text-base leading-relaxed md:text-lg">
                <Link
                  href="/placement/campus-placement-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001f3f] hover:underline"
                >
                  Campus Placement Policy AY 2023
                </Link>
              </p>
            </div>

            <h3
              className={`${zilla.className} mb-4 mt-8 text-3xl font-bold text-[#001f3f] md:text-4xl lg:text-5xl`}
            >
              Placement Statistics
            </h3>
            <div className="relative mb-12 h-96 w-full">
              <Image
                src="/placement/statistics.png"
                alt="Placement Statistics"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-md"
              />
            </div>

            <div itemProp="articleBody">
              <h2
                className={`${zilla.className} mb-4 text-3xl font-bold text-[#001f3f] md:text-4xl lg:text-5xl`}
                itemProp="name"
              >
                Internship Policy
              </h2>
              <p
                className="mb-6 text-base leading-relaxed md:text-lg"
                style={{ textAlign: 'justify' }}
              >
                Every year students apply for Industry Internships at various
                organizations. Institute helps them in the identification of
                internships at reputed companies. Students do internships in the
                semester end vacation period. Institute also started internal
                internships to the students.{' '}
                <span style={{ color: '#ff0000' }}>
                  The number of students enrolling for Internships has increased
                  over the years. Stipend is generally in range from 10k to 65K
                  per month.
                </span>
              </p>
              <p
                className="mb-6 text-base leading-relaxed md:text-lg"
                style={{ textAlign: 'justify' }}
              >
                Training and placement cell helps students in getting the
                internships through contacts. Internship fairs were organized by
                the cell regularly.
              </p>
              <p
                className="mb-6 text-base leading-relaxed md:text-lg"
                style={{ textAlign: 'justify' }}
              >
                In B.E Production Engineering course students do internships at
                various organizations for the period of 6 months.
              </p>
            </div>
          </div>
        </div>
      </div>
      <meta itemProp="inLanguage" content="en-GB" />
    </div>
  )
}

export default Page
