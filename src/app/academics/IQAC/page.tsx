'use client'
import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import { FileText, Download, Book, Award } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const IQACPage = () => {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'IQAC', url: '/academics/IQAC' },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section - Updated to match the provided style */}
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 pt-8 text-[#00122a] sm:px-8 md:px-16 md:pt-36 lg:px-28">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            IQAC - INTERNAL QUALITY ASSESSMENT CELL
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-8 sm:px-8 md:px-16 md:py-16 lg:px-28">
        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
          >
            About IQAC
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
            <p className="mb-4 text-sm text-gray-700 md:text-base">
              National Assessment and Accreditation Council (NAAC), Bangalore
              proposed that every accredited institution should establish an
              Internal Quality Assurance Cell (IQAC) as a quality sustenance
              measure. Since quality enhancement is a continuous process, the
              IQAC is a part of the institution's system and works towards the
              realisation of the goals of quality enhancement and sustenance.
            </p>
            <p className="text-sm text-gray-700 md:text-base">
              The work of the IQAC is the first step towards the internalization
              and institutionalization of quality enhancement initiatives. Its
              success depends upon the sense of belongingness and participation
              in all the constituents of the institution. IQAC is a facilitative
              and participative voluntary system/unit/organ of the institution.
            </p>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
          >
            IQAC Vision
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
            <div className="flex items-start">
              <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white md:mr-4">
                <Award className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <div>
                <p className="text-sm text-gray-700 md:text-base">
                  To ensure quality culture as the prime concern for the Higher
                  Education Institutions through institutionalizing and
                  internalizing all the initiatives taken with internal and
                  external support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
          >
            Objectives
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                  1
                </span>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 md:text-base">
                    To develop a system for conscious, consistent and catalytic
                    action to improve the academic and administrative
                    performance of the institution.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                  2
                </span>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 md:text-base">
                    To promote measures for institutional functioning towards
                    quality enhancement through internalization of quality
                    culture and institutionalization of best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
          >
            Strategies
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
            <div className="space-y-4">
              {[
                'Ensuring the timely, efficient and progressive performance of academic, administrative and financial tasks;',
                'Relevant and quality academic/ research programmes;',
                'Equitable access to and affordability of academic programmes for various sections of society;',
                'Optimization and integration of modern methods of teaching and learning;',
                'The credibility of the assessment and evaluation process;',
                'Ensuring the adequacy, maintenance and proper allocation of support structure and services;',
                'Sharing of research findings and networking with other institutions in India and abroad.',
              ].map((strategy, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 md:text-base">
                      {strategy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
          >
            Functions
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
            <div className="space-y-4">
              {[
                'Development and application of quality benchmarks;',
                'Parameters for various academic and administrative activities of the institution;',
                'Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process;',
                'Collection and analysis of feedback from all stakeholders on quality-related institutional processes;',
                'Dissemination of information on various quality parameters to all stakeholders;',
                'Organization of inter and intra institutional workshops, seminars on quality-related themes and promotion of quality circles;',
                'Documentation of the various programmes/activities leading to quality improvement;',
                'Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices;',
                'Development and maintenance of an institutional database through MIS for the purpose of maintaining/enhancing the institutional quality;',
                'Periodical conduct of Academic and Administrative Audit and its follow-up;',
                'Preparation and submission of the Annual Quality Assurance Report (AQAR) as per the guidelines and parameters of the NAAC.',
              ].map((function_item, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 md:text-base">
                      {function_item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
          >
            Benefits
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
            <div className="space-y-4">
              {[
                'Ensure clarity and focus in institutional functioning towards quality enhancement;',
                'Ensure internalization of the quality culture;',
                'Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices;',
                'Provide a sound basis for decision-making to improve institutional functioning;',
                'Act as a dynamic system for quality changes in HEIs;',
                'Build an organized methodology of documentation and internal communication.',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 md:text-base">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8 md:mb-16">
          <h2
            className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
          >
            IQAC-Composition
          </h2>
          <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
            <p className="mb-4 text-sm text-gray-700 md:text-base">
              The composition of IQAC consists of:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg">
                <thead>
                  <tr className="bg-[#4a90e2] text-white">
                    <th className="w-[10%] p-3 text-center text-sm font-semibold md:text-base">
                      No.
                    </th>
                    <th className="w-[90%] p-3 text-left text-sm font-semibold md:text-base">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, title: 'Chairman' },
                    { id: 2, title: 'Member of Management' },
                    { id: 3, title: 'IQAC Co-ordinator' },
                    { id: 4, title: 'Senior Administrative Officer' },
                    { id: 5, title: 'Senior Administrative Officer' },
                    { id: 6, title: 'Senior Administrative Officer' },
                    { id: 7, title: 'Senior Administrative Officer' },
                    { id: 8, title: 'Senior Administrative Officer' },
                    { id: 9, title: 'Member- Program Co-ordinator (Comp)' },
                    { id: 10, title: 'Member- Program Co-ordinator (AI & DS)' },
                    { id: 11, title: 'Member- Program Co-ordinator (ECS)' },
                    { id: 12, title: 'Member- Program Co-ordinator (Mech)' },
                    { id: 13, title: 'Member- Program Co-ordinator (H & S)' },
                    { id: 14, title: 'Alumni' },
                    { id: 15, title: `Stakeholder's Nominee (Parent)1` },
                    { id: 16, title: 'Entrepreneur' },
                    { id: 17, title: 'Nominee from Industry' },
                    {
                      id: 18,
                      title: 'Nominee of the Student- General Secretary',
                    },
                    { id: 19, title: 'NAAC and NBA Co-ordinator' },
                    { id: 20, title: 'NIRF Co-ordinator' },
                  ].map((item, index) => (
                    <tr
                      key={item.id}
                      className={`transition-colors duration-150 hover:bg-blue-50 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="border-b border-gray-200 p-3 text-center text-sm font-medium text-[#4a90e2] md:text-base">
                        {item.id}
                      </td>
                      <td className="border-b border-gray-200 p-3 text-sm md:text-base">
                        {item.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="mt-6 flex justify-center md:mt-10">
          <a
            href="/IQAC-2023.pdf"
            className="flex items-center rounded-lg bg-[#4a90e2] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg sm:px-6 md:px-8 md:py-4 md:text-base"
            download
          >
            <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Download IQAC 2023 PDF
          </a>
        </div>
      </div>
    </div>
  )
}

export default IQACPage
