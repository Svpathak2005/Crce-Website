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
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      <div
        className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row"
        id="naac"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-center text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            NAAC Accreditations
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <section className="mb-8">
          <h2 className={`${zilla.className} mb-4 text-3xl font-bold`}>
            About NAAC
          </h2>
          <p className="mb-4 text-justify">
            The National Assessment and Accreditation Council (NAAC) is an
            autonomous body established by the University Grants Commission
            (UGC) of India to assess and accredit institutions of higher
            education in the country. NAAC's assessment provides a quality
            status to the institution and helps in quality assurance of an
            institution.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            Our NAAC Accreditation
          </h3>
          <p className="mb-4 text-justify">
            We are proud to announce that our institution has been accredited by
            NAAC. This accreditation is a testament to our commitment to quality
            education and continuous improvement in all aspects of our academic
            and administrative processes.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            NAAC Certificate 2023
          </h3>
          <div className="h-[600px] w-full">
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
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            Self Study Report (SSR) 2022-2023
          </h3>
          <p className="mb-4 text-justify">
            The Self Study Report (SSR) is a comprehensive document that
            provides detailed information about our institution's performance
            across various parameters set by NAAC. It reflects our strengths,
            weaknesses, opportunities, and challenges.
          </p>
          <div className="text-center">
            <Link
              href="/naac/ssr_22_23.pdf"
              className="inline-block rounded-full bg-gradient-to-r from-[#4a90e2] to-[#357abd] px-6 py-3 font-semibold text-white transition-all hover:from-[#357abd] hover:to-[#4a90e2] hover:shadow-lg"
            >
              Download SSR 2022-2023 PDF
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            Benefits of NAAC Accreditation
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Facilitates global recognition of the degrees offered by the
              institution
            </li>
            <li>Acts as a quality indicator for funding agencies</li>
            <li>
              Creates sound basis for decision-making for all educational
              reforms
            </li>
            <li>Enhances employability of graduates</li>
            <li>Promotes intra and inter-institutional interactions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            Our Commitment
          </h3>
          <p className="text-justify">
            We are committed to maintaining and improving the high standards set
            by NAAC. Our goal is to continuously enhance the quality of
            education we provide and to contribute to the overall development of
            our students and society at large.
          </p>
        </section>
      </div>
    </div>
  )
}

export default NAACAccreditationsPage
