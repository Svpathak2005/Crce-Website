import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-white text-gray-900">
      <div
        className="flex h-full w-full flex-col bg-[#001f3f] md:flex-row"
        id="admission"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 text-white md:w-2/3">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            ADMISSIONS & AID
          </h1>
          <p className="rounded bg-[#003366] px-3 py-1 text-sm font-light text-white">
            Home {'>'} Admissions & Aid
          </p>
        </div>
        <div className="mb-10 mr-16 mt-32 flex w-full flex-col justify-center space-y-4 bg-[#003366] p-8 text-white md:w-1/3 md:rounded-md">
          <h2 className="text-2xl font-semibold">
            Enquiry Form for Admissions
          </h2>
          <Link
            href="/"
            className="rounded-md bg-[#4a90e2] px-4 py-2 text-center font-semibold transition-colors hover:bg-[#357abd]"
          >
            Fill Form
          </Link>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Meet for Enquiries</h3>
            <p>Monday to Friday</p>
            <p>1:30pm to 2:30pm</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/5 bg-gray-100 p-8">
          <h2 className="mb-4 text-2xl font-bold">Quick Links</h2>
          <div className="flex flex-col space-y-4">
            <Link
              href="/graduate-admissions"
              className="rounded bg-gray-200 p-4 text-center font-semibold transition-colors hover:bg-gray-300"
            >
              Graduate Admissions
            </Link>
            <Link
              href="/plan-visit"
              className="rounded bg-gray-200 p-4 text-center font-semibold transition-colors hover:bg-gray-300"
            >
              Plan a Visit
            </Link>
            <Link
              href="/tuition-costs"
              className="rounded bg-gray-200 p-4 text-center font-semibold transition-colors hover:bg-gray-300"
            >
              Tuition & Costs
            </Link>
            <Link
              href="/scholarships"
              className="rounded bg-gray-200 p-4 text-center font-semibold transition-colors hover:bg-gray-300"
            >
              Scholarships
            </Link>
            <Link
              href="/financial-aid"
              className="rounded bg-gray-200 p-4 text-center font-semibold transition-colors hover:bg-gray-300"
            >
              Financial Aid
            </Link>
            <Link
              href="/international-students"
              className="rounded bg-gray-200 p-4 text-center font-semibold transition-colors hover:bg-gray-300"
            >
              International Students
            </Link>
          </div>
        </div>
        <div className="flex-grow p-8">
          <h2 className="mb-4 text-3xl font-bold">Undergraduate Admissions</h2>
          <p className="mb-4">
            We accept applications for the fall semester from August through
            January (through March for transfer applicants) for undergraduate
            admission to our School of Arts and Sciences and/or our School of
            Engineering.
          </p>
          <button className="mb-8 rounded bg-[#4a90e2] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#357abd]">
            MORE ABOUT UNDERGRADUATE ADMISSIONS
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
