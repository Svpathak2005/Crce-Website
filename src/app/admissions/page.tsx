import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Page = () => {
  const navigationItems = [{ label: 'Admission', url: '/admissions' }]
  return (
    <div className="flex h-fit w-full flex-col bg-white text-gray-900">
      <div
        className="flex h-full w-full flex-col bg-gradient-to-br from-[#001f3f] to-[#003366] md:flex-row"
        id="admission"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            ADMISSIONS & AID
          </h1>
          <Navigation items={navigationItems} />{' '}
        </div>
        <div className="relative mb-8 mt-8 flex w-full flex-col justify-center space-y-6 rounded-lg bg-white p-8 shadow-2xl md:mb-16 md:mr-16 md:mt-32 md:w-1/3 lg:p-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-[#4a90e2] px-6 py-2 text-white">
            <h2
              className={`${zilla.className} text-xl font-semibold md:text-2xl`}
            >
              Enquiry Form
            </h2>
          </div>
          <p className="mt-4 text-center text-gray-600">
            We&apos;re here to help you with your admissions journey
          </p>
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-[#4a90e2] to-[#357abd] px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:from-[#357abd] hover:to-[#4a90e2] hover:shadow-lg md:text-base"
          >
            Fill Out Enquiry Form
          </Link>
          <div className="mt-6 rounded-lg bg-gray-100 p-4">
            <h3
              className={`${zilla.className} mb-2 text-lg font-semibold text-[#001f3f] md:text-xl`}
            >
              Meet for Enquiries
            </h3>
            <p className="text-sm text-gray-600 md:text-base">
              Monday to Friday
            </p>
            <p className="text-sm font-semibold text-[#4a90e2] md:text-base">
              1:30pm to 2:30pm
            </p>
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
            <Link
              href="/academics"
              className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
            >
              Academics
            </Link>
            <Link
              href="/schools-divisions"
              className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
            >
              Schools & Divisions
            </Link>
            <Link
              href="/admissions-aid"
              className="border-b border-gray-200 py-2 text-sm font-bold text-[#001f3f] lg:text-base"
            >
              Admissions & Aid
            </Link>
            <div className="ml-4 flex flex-col border-l border-gray-200 pl-2">
              <Link
                href="/undergraduate-admissions"
                className="py-1 text-xs text-gray-600 hover:text-[#001f3f] lg:text-sm"
              >
                Undergraduate Admissions
              </Link>
              <Link
                href="/graduate-admissions"
                className="py-1 text-xs text-gray-600 hover:text-[#001f3f] lg:text-sm"
              >
                Graduate Admissions
              </Link>
              <Link
                href="/plan-visit"
                className="py-1 text-xs text-gray-600 hover:text-[#001f3f] lg:text-sm"
              >
                Plan a Visit
              </Link>
              <Link
                href="/tuition-costs"
                className="py-1 text-xs text-gray-600 hover:text-[#001f3f] lg:text-sm"
              >
                Tuition & Costs
              </Link>
              <Link
                href="/financial-aid"
                className="py-1 text-xs text-gray-600 hover:text-[#001f3f] lg:text-sm"
              >
                Financial Aid
              </Link>
            </div>
            <Link
              href="/research-faculty"
              className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
            >
              Research & Faculty
            </Link>
            <Link
              href="/campus-life"
              className="py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
            >
              Campus Life
            </Link>
          </nav>
        </div>
        <div className="flex-grow p-6 text-[#534a43] md:p-8 lg:p-12">
          <div className="mx-auto max-w-3xl">
            {[
              'Undergraduate Admissions',
              'Graduate Admissions',
              'Scholarships and Loans',
            ].map((title, index) => (
              <div key={index} className="mb-12">
                <h2
                  className={`${zilla.className} mb-4 text-3xl font-bold text-[#001f3f] md:text-4xl lg:text-5xl`}
                >
                  {title}
                </h2>
                <p className="mb-6 text-base leading-relaxed md:text-lg">
                  {index === 0
                    ? 'We accept applications for the fall semester from August through January (through March for transfer applicants) for undergraduate admission to our School of Arts and Sciences and/or our School of Engineering.'
                    : index === 1
                      ? "Our faculty and students study, teach, and learn in and across more than 180 programs regularly recognized as being among the nation's best. All nine of our academic divisions offer full-time graduate programs."
                      : 'We aim to bring the best students to campus. In order to do that, we are committed to making their education affordable. We expect the best from our students, and they can expect the same from us.'}
                </p>
                <button className="rounded-full bg-gradient-to-r from-[#4a90e2] to-[#357abd] px-6 py-3 text-sm font-semibold text-white transition-all hover:from-[#357abd] hover:to-[#4a90e2] hover:shadow-lg md:text-base">
                  MORE ABOUT {title.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
