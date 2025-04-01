import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import Link from 'next/link'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const PhDAdmissionsPage = () => {
  const navigationItems = [
    { label: 'Admission', url: '/' },
    { label: 'Ph.D.', url: '/admission/phd' },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-gray-50 to-[#E5F0FF] text-center text-gray-900">
      <div className="flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-[#001f3f] to-[#003366] pt-20 md:pt-36">
        <div className="flex w-full flex-col items-center justify-center p-8 text-white md:w-2/3 md:p-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            Ph.D. Admissions
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-16">
        <div className="mb-16">
          <h2
            className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f] md:text-4xl`}
          >
            Ph.D. Programmes
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <h3 className="text-center text-xl font-semibold text-gray-800">
              The college offers Ph.D. programmes in Mechanical Engineering,
              Electronics Engineering &amp; Computer Engineering
            </h3>
            <div className="my-8 flex justify-center">
              <Image
                src="/phd/PhD_2023.jpg"
                alt="Ph.D. Admissions"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center">
              <Link
                href="/phd/candidates.pdf"
                className="rounded-md bg-yellow-500 px-6 py-2 font-bold text-black transition duration-300 hover:bg-yellow-600"
              >
                View Selected Candidates
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="https://admission.fragnel.edu.in/PhDAdmission/Apply/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-blue-600 underline transition duration-300 hover:text-blue-800"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhDAdmissionsPage
