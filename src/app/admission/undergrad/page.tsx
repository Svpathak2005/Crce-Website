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
          className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 p-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          FAQs
        </button>
      )}

      {isChatbotOpen && (
        <div className="fixed bottom-4 right-4 z-50 h-[500px] w-[350px] rounded-lg bg-white shadow-xl sm:h-[600px] sm:w-[550px]">
          <ChatBot onClose={() => setIsChatbotOpen(false)} />
        </div>
      )}

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


      <section id="admissions" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2
            className={`${zilla.className} mb-12 text-center text-4xl font-bold text-blue-900`}
          >
            Admissions
          </h2>

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
      
      <section className="bg-white px-6 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Quick Links Section */}
          <div className="w-full lg:w-3/4">
            <h2 className="mb-8 text-2xl font-bold text-blue-900">
              Quick Links
            </h2>
            <div className="flex flex-col space-y-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="rounded-lg bg-gray-50 p-4 text-blue-600 font-semibold transition-all hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Program Details Card Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="mb-8 text-2xl font-bold text-blue-900">
              Fee Details for All Programs
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-blue-50 p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Duration</h3>
                  <p className="text-3xl font-bold text-blue-600">4 Years</p>
                  <p className="text-sm text-gray-600 mt-1">Last Date To Apply: 26 July 2024</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Programmes: </h3>
                  <p className="text-gray-800 text-sm">B.Tech Computer Engineering</p>
<p className="text-gray-800 text-sm">B.Tech Electronics and Computer Science</p>
<p className="text-gray-800 text-sm">B.Tech Mechanical Engineering</p>
<p className="text-gray-800 text-sm">B.Tech Computer Science and Engineering</p>
<p className="text-gray-800 text-sm">B.Tech Science and Humanities</p>
                </div>
              </div>

              <div className="space-y-6 bg-gray-900 p-8 text-white">
                <div>
                  <p className="text-gray-300 text-lg">Fee Per Year</p>
                  <h2 className="text-xl font-bold mt-1">Rs. 1,67,000</h2>
                </div>

                <button className="w-full rounded-lg bg-blue-500 px-6 py-4 font-semibold text-white hover:bg-blue-600 transition-colors">
                  Apply Online Now
                </button>

                <div className="flex flex-col space-y-3 pt-2">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <span>Brochure</span>
                    <span className="ml-2">→</span>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <span>Course Structure</span>
                    <span className="ml-2">→</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-300 text-lg">Highest CTC</p>
                  <p className="text-2xl font-semibold mt-1">INR 17.75 LPA</p>
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
