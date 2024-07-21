import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-y-auto bg-white text-gray-900">
      <div
        className="flex h-2/3 w-full flex-col bg-[#001f3f] md:flex-row"
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
        <div className="mr-16 mt-32 flex w-full flex-col justify-center space-y-4 bg-[#003366] text-white md:w-1/3">
          <h2 className="text-xl font-semibold">
            Enquiry Form for Admissions:
          </h2>
          <Link
            href="/"
            className="rounded-md bg-[#4a90e2] px-4 py-2 text-center font-semibold transition-colors hover:bg-[#357abd]"
          >
            Fill Form
          </Link>
          <div className="mt-4">
            <h3 className="font-semibold">Meet for Enquiries</h3>
            <p>Monday to Friday</p>
            <p>1:30pm to 2:30pm</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="mb-4 text-3xl font-bold">Undergraduate Admissions</h2>
        <p className="mb-4">
          We accept applications for the fall semester from August through
          January (through March for transfer applicants) for undergraduate
          admission to our School of Arts and Sciences and/or our School of
          Engineering.
        </p>
        <button className="rounded bg-[#4a90e2] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#357abd]">
          MORE ABOUT UNDERGRADUATE ADMISSIONS
        </button>
      </div>
    </div>
  )
}

export default Page
