import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Page = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-white text-gray-900">
      <div
        className="flex h-full w-full flex-col bg-[#001f3f] md:flex-row"
        id="admission"
      >
        <div className="flex w-full flex-col items-center justify-center p-4 text-white md:w-2/3 md:p-8">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-6xl">
            ADMISSIONS & AID
          </h1>
          <p className="rounded bg-[#003366] px-3 py-1 text-xs font-light text-white md:text-sm">
            Home {'>'} Admissions & Aid
          </p>
        </div>
        <div className="mb-4 mt-8 flex w-full flex-col justify-center space-y-4 bg-[#003366] p-4 text-white md:mb-10 md:mr-16 md:mt-32 md:w-1/3 md:rounded-md md:p-8">
          <h2 className="text-xl font-semibold md:text-2xl">
            Enquiry Form for Admissions
          </h2>
          <Link
            href="/"
            className="rounded-md bg-[#4a90e2] px-4 py-2 text-center text-sm font-semibold transition-colors hover:bg-[#357abd] md:text-base"
          >
            Fill Form
          </Link>
          <div className="mt-4">
            <h3 className="text-base font-semibold md:text-lg">
              Meet for Enquiries
            </h3>
            <p className="text-sm md:text-base">Monday to Friday</p>
            <p className="text-sm md:text-base">1:30pm to 2:30pm</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="hidden w-full border-r border-gray-200 p-4 md:block md:w-1/4 lg:p-6">
          <h2 className="mb-4 text-lg font-bold text-[#001f3f] lg:text-xl">
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
        <div className="flex-grow p-4 text-[#534a43] md:p-6 lg:p-8">
          <div className="mx-auto max-w-3xl">
            <div className={zilla.className}>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Undergraduate Admissions
              </h2>
            </div>
            <p className="mb-4 text-sm md:text-base">
              We accept applications for the fall semester from August through
              January (through March for transfer applicants) for undergraduate
              admission to our School of Arts and Sciences and/or our School of
              Engineering.
            </p>
            <button className="mb-8 rounded bg-[#4a90e2] px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-[#357abd] md:px-4 md:py-2 md:text-base">
              MORE ABOUT UNDERGRADUATE ADMISSIONS
            </button>

            <div className={zilla.className}>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Graduate Admissions
              </h2>
            </div>
            <p className="mb-4 text-sm md:text-base">
              Our faculty and students study, teach, and learn in and across
              more than 180 programs regularly recognized as being among the
              nation's best. All nine of our academic divisions offer full-time
              graduate programs.
            </p>
            <button className="mb-8 rounded bg-[#4a90e2] px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-[#357abd] md:px-4 md:py-2 md:text-base">
              MORE ABOUT GRADUATE ADMISSIONS
            </button>

            <div className={zilla.className}>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Scholarships and Loans
              </h2>
            </div>
            <p className="mb-4 text-sm md:text-base">
              We aim to bring the best students to campus. In order to do that,
              we are committed to making their education affordable. We expect
              the best from our students, and they can expect the same from us.
            </p>
            <button className="rounded bg-[#4a90e2] px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-[#357abd] md:px-4 md:py-2 md:text-base">
              MORE ABOUT FINANCING YOUR EDUCATION
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
