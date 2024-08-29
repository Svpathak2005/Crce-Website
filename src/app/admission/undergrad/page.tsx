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
  { name: 'FE Admission Process', url: '/admission-process' },
  { name: 'Education Loan', url: '/education-loan' },
  { name: 'Prospectus 23-24', url: '/prospectus' },
  { name: 'Medical Certificate', url: '/medical-certificate' },
  { name: 'Listen to Leadership team', url: '/leadership-team' },
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

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gray-100">
      {/* ChatBot Toggle Button */}
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 p-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          FAQs
        </button>
      )}

      {/* ChatBot Component */}
      {isChatbotOpen && (
        <div className="fixed bottom-4 right-4 z-50 h-[500px] w-[350px] rounded-lg bg-white shadow-xl sm:h-[600px] sm:w-[550px]">
          <ChatBot onClose={() => setIsChatbotOpen(false)} />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/college2.avif"
            alt="Campus background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              MOULDING ENGINEERS WHO CAN BUILD THE NATION
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Join a community of innovative thinkers and future leaders at
              FR.CRCE
            </p>
            <a
              href="#admissions"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-900 transition-colors hover:bg-blue-100"
            >
              Explore Admissions
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-white"></div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2
            className={`${zilla.className} mb-8 text-3xl font-bold text-blue-900`}
          >
            Quick Links
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="rounded-lg bg-gray-100 p-4 text-center font-semibold text-blue-800 shadow transition-all hover:bg-blue-100 hover:shadow-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2
            className={`${zilla.className} mb-12 text-center text-4xl font-bold text-blue-900`}
          >
            Admissions
          </h2>

          {/* FE Admissions */}
          <div className="mb-16">
            <h3
              className={`${zilla.className} mb-8 text-2xl font-bold text-blue-800`}
            >
              First Year Engineering (FE) Admissions through CAP
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {feAdmissionData.map((item, index) => (
                <AdmissionCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* DSE Admissions */}
          <div>
            <h3
              className={`${zilla.className} mb-8 text-2xl font-bold text-blue-800`}
            >
              Direct Second Year (DSE) Admissions through CAP
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {dseAdmissionData.map((item, index) => (
                <AdmissionCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const AdmissionCard = ({ title, description, link, buttonText }) => (
  <div className="flex flex-col rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
    <h4 className="mb-2 text-xl font-bold text-blue-900">{title}</h4>
    <p className="mb-4 flex-grow text-gray-600">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-block rounded-full bg-blue-600 px-6 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
    >
      {buttonText}
    </a>
  </div>
)
