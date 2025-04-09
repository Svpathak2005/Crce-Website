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

const NAACAccreditationsPage = () => {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'NAAC Accreditations', url: '/academics/naac' },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] text-gray-900">
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-28 pt-36 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            NAAC ACCREDITATIONS
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      <div className="container mx-auto w-full px-28 py-16">
        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            About NAAC
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              "Assessment and Accreditation for Quality Excellence"
            </p>
            <p className="text-gray-700">
              The National Assessment and Accreditation Council (NAAC) is an
              autonomous body established by the University Grants Commission
              (UGC) of India to assess and accredit institutions of higher
              education in the country. NAAC's assessment provides a quality
              status to the institution and helps in quality assurance of an
              institution.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Our NAAC Accreditation
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="text-gray-700">
              We are proud to announce that our institution has been accredited by
              NAAC. This accreditation is a testament to our commitment to quality
              education and continuous improvement in all aspects of our academic
              and administrative processes.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            NAAC Certificate 2023
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="h-[500px] w-full">
              <object
                data="/naac/NAAC_Certificate_2023.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="border border-gray-300"
              >
                <p>
                  Your browser does not support PDFs. Please download the PDF to
                  view it:
                  <a href="/naac/NAAC_Certificate_2023.pdf">Download PDF</a>
                </p>
              </object>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Self Study Report (SSR) 2022-2023
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-6 text-gray-700">
              The Self Study Report (SSR) is a comprehensive document that
              provides detailed information about our institution's performance
              across various parameters set by NAAC. It reflects our strengths,
              weaknesses, opportunities, and challenges.
            </p>
            <div className="text-center">
              <Link
                href="/naac/ssr_22_23.pdf"
                className="inline-block rounded-full bg-linear-to-r from-[#4a90e2] to-[#357abd] px-6 py-3 font-semibold text-white transition-all hover:from-[#357abd] hover:to-[#4a90e2] hover:shadow-lg"
              >
                Download SSR 2022-2023 PDF
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Benefits of NAAC Accreditation
          </h2>
          <ul className="space-y-4">
            {[
              'Facilitates global recognition of the degrees offered by the institution',
              'Acts as a quality indicator for funding agencies',
              'Creates sound basis for decision-making for all educational reforms',
              'Enhances employability of graduates',
              'Promotes intra and inter-institutional interactions',
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

        <div>
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f] md:text-2xl`}>
            Our Commitment
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="text-gray-700">
              We are committed to maintaining and improving the high standards set
              by NAAC. Our goal is to continuously enhance the quality of
              education we provide and to contribute to the overall development of
              our students and society at large.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NAACAccreditationsPage