'use client'

import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'
import { useState } from 'react'
import ChatBot from './chatBot'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const quickLinks = [
  {
    name: 'FE Admission Process',
    url: 'https://www.youtube.com/live/thjcEVavoGg?si=EdlsDXKJZa1665Jc',
  },
  { name: 'Education Loan', url: '/admission/Education.mp4' },
  { name: 'Prospectus 23-24', url: '/admission/CRCEProspectus2024.pdf/' },
  { name: 'Medical Certificate', url: '/admission/Medical_certificate.pdf' },
  { name: 'Listen to Leadership team', url: '/admission/leadership' },
]

const feAdmissionData = [
  {
    title: 'FE CAP Reporting Form',
    description: 'Fill out the First Year Engineering CAP reporting form.',
    link: 'http://granth.fragnel.edu.in:5186/pinfo/feadm/FEMnu.php',
    buttonText: 'Go to Form',
  },
  {
    title: 'FE Admission Notice 24-25',
    description: 'View the admission notice for FE 2024-25.',
    link: '/admission/fe-admission-notice-24-25.pdf',
    buttonText: 'View PDF',
  },
  {
    title: 'FE CAP Reporting Documents',
    description: 'Download the required documents for FE CAP reporting.',
    link: '/admission/fe-cap-reporting-documents.pdf',
    buttonText: 'Download PDF',
  },
]

const dseAdmissionData = [
  {
    title: 'DSE CAP Reporting Form',
    description:
      'Fill out the Direct Second Year Engineering CAP reporting form.',
    link: 'http://granth.fragnel.edu.in:5186/pinfo/seadm/SEMnu.php',
    buttonText: 'Go to Form',
  },
  {
    title: 'DSE CAP Reporting Documents',
    description: 'Download the required documents for DSE CAP reporting.',
    link: '/admission/dse-cap-reporting-documents.pdf',
    buttonText: 'Download PDF',
  },
]

type AdmissionCardProps = {
  title: string
  description: string
  link: string
  buttonText: string
}

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gray-100">
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed right-4 bottom-4 z-50 rounded-full bg-[#131929] p-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden"
        >
          FAQs
        </button>
      )}

      {isChatbotOpen && (
        <div className="fixed right-4 bottom-4 z-50 h-[500px] w-[350px] rounded-lg bg-white shadow-xl sm:h-[600px] sm:w-[550px]">
          <ChatBot onClose={() => setIsChatbotOpen(false)} />
        </div>
      )}

      <section className="hero relative min-h-screen overflow-hidden bg-gray-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={'/college2.avif'}
            alt="Campus background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
        </div>
        <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-6 py-24 sm:px-12 sm:py-32 md:px-20 md:py-40 lg:px-28 lg:py-48">
          <div className="mt-20 max-w-3xl sm:mt-32 md:mt-40 lg:mt-52">
            <h1 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              MOULDING ENGINEERS WHO CAN BUILD THE NATION
            </h1>
            <p className="mb-8 text-lg text-blue-100 sm:text-xl md:text-2xl">
              Join a community of innovative thinkers and future leaders at
              FR.CRCE
            </p>
            <a
              href="#admissions"
              className="inline-block rounded-full bg-[#00122a] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#002452] sm:px-8 sm:py-3"
            >
              Explore Admissions
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-gray-100"></div>
      </section>

      <section id="admissions" className="m-6 sm:m-10 md:m-16 lg:m-28">
        <div className="container mx-auto px-4">
          <h2
            className={`mb-8 text-3xl font-bold text-[#001a3c] sm:mb-12 sm:text-4xl`}
          >
            Admissions
          </h2>

          <div className="mb-12 sm:mb-16">
            <h3
              className={`mb-6 text-xl font-bold text-[#001a3c] sm:mb-8 sm:text-2xl`}
            >
              First Year Engineering (FE) Admissions through CAP
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {feAdmissionData.map((item, index) => (
                <AdmissionCard key={index} {...item} />
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`mb-6 text-xl font-bold text-[#001a3c] sm:mb-8 sm:text-2xl`}
            >
              Direct Second Year (DSE) Admissions through CAP
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {dseAdmissionData.map((item, index) => (
                <AdmissionCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 sm:px-12 sm:py-16 md:px-20 lg:px-28">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Quick Links Section */}
            <div className="w-full lg:w-3/4">
              <h2 className="mb-6 text-xl font-bold text-[#001a3c] sm:mb-8 sm:text-2xl">
                Quick Links
              </h2>
              <div className="flex flex-col space-y-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="rounded-lg bg-gray-50 p-4 font-semibold text-[#131929] transition-all hover:bg-blue-50 hover:text-[#131929] hover:shadow-md"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Program Details Card Section */}
            <div className="mt-8 w-full lg:mt-0 lg:w-2/3">
              <h2 className="mb-6 text-xl font-bold text-[#001a3c] sm:mb-8 sm:text-2xl">
                Fee Details for All Programs
              </h2>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="space-y-4 bg-blue-50 p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Duration
                    </h3>
                    <p className="text-2xl font-bold text-[#131929] sm:text-3xl">
                      4 Years
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Last Date To Apply: 26 July 2024
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Programmes:{' '}
                    </h3>
                    <p className="text-sm text-gray-800">
                      B.Tech Computer Engineering
                    </p>
                    <p className="text-sm text-gray-800">
                      B.Tech Electronics and Computer Science
                    </p>
                    <p className="text-sm text-gray-800">
                      B.Tech Mechanical Engineering
                    </p>
                    <p className="text-sm text-gray-800">
                      B.Tech Computer Science and Engineering
                    </p>
                    <p className="text-sm text-gray-800">
                      B.Tech Science and Humanities
                    </p>
                  </div>
                </div>

                <div className="space-y-6 bg-[#131929] p-6 text-white sm:p-8">
                  <div>
                    <p className="text-base text-gray-300 sm:text-lg">
                      Fee Per Year
                    </p>
                    <h2 className="mt-1 text-lg font-bold sm:text-xl">
                      Rs. 1,67,000
                    </h2>
                  </div>

                  <button className="w-full rounded-lg bg-yellow-500 px-4 py-3 font-semibold text-black transition-colors hover:bg-yellow-600 sm:px-6 sm:py-4">
                    Apply Online Now <span className="">→</span>
                  </button>

                  <div className="flex flex-col space-y-3 pt-2">
                    <a
                      href="#"
                      className="flex items-center text-white hover:text-blue-300"
                    >
                      <span className="underline">Brochure</span>
                      <span className="ml-2">→</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-white hover:text-blue-300"
                    >
                      <span className="underline">Course Structure</span>
                      <span className="ml-2">→</span>
                    </a>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-base text-gray-300 sm:text-lg">
                      Highest CTC
                    </p>
                    <p className="mt-1 text-xl font-semibold sm:text-2xl">
                      INR 17.75 LPA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const AdmissionCard = ({
  title,
  description,
  link,
  buttonText,
}: AdmissionCardProps) => (
  <div className="flex flex-col rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
    <h4 className="mb-2 text-lg font-bold text-[#131929] sm:text-xl">
      {title}
    </h4>
    <p className="mb-4 grow text-sm text-gray-600 sm:text-base">
      {description}
    </p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-block rounded-full bg-[#001a3c] px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#002452] sm:px-6"
    >
      {buttonText}
    </a>
  </div>
)
