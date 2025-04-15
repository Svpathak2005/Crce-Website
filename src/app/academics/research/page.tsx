'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import Publications from './computerpublications'
import AidsPublications from './aidspublications'
import ECSPublications from './ecspublications'
import MechPublications from './mechpublications'
import FundedPublications from './funded'
import PatentsPublications from './patents'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const ResearchPage = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'Research & Development', url: '/academics/research-development' },
  ]

  interface NavigationItem {
    label: string
    url: string
  }

  type SectionId =
    | 'overview'
    | 'ethics'
    | 'research-centre'
    | 'computer'
    | 'ecs'
    | 'ai-ds'
    | 'mechanical'
    | 'patents'
    | 'funded'

  const showSection = (sectionId: SectionId): void => {
    setActiveSection(sectionId)
  }

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section - Matching the IQAC style */}
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-4 pt-8 text-[#00122a] sm:px-8 md:px-16 md:pt-36 lg:px-28">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            RESEARCH AND DEVELOPMENT
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-8 sm:px-8 md:px-16 md:py-16 lg:px-28">
        {/* Navigation Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => showSection('overview')}
            className={`rounded-lg px-4 py-2 text-sm md:text-base ${
              activeSection === 'overview'
                ? 'bg-[#4a90e2] font-semibold text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => showSection('ethics')}
            className={`rounded-lg px-4 py-2 text-sm md:text-base ${
              activeSection === 'ethics'
                ? 'bg-[#4a90e2] font-semibold text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Code of Ethics
          </button>
          <button
            onClick={() => showSection('research-centre')}
            className={`rounded-lg px-4 py-2 text-sm md:text-base ${
              activeSection === 'research-centre'
                ? 'bg-[#4a90e2] font-semibold text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Research Centre Details
          </button>
          <button
            onClick={() => showSection('computer')}
            className={`rounded-lg px-4 py-2 text-sm md:text-base ${
              activeSection === 'computer'
                ? 'bg-[#4a90e2] font-semibold text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Computer Engineering
          </button>
          <button
            onClick={() => showSection('ecs')}
            className={`rounded-lg px-4 py-2 text-sm md:text-base ${
              activeSection === 'ecs'
                ? 'bg-[#4a90e2] font-semibold text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ECS
          </button>
          <button
            onClick={() => showSection('ai-ds')}
            className={`rounded-lg px-4 py-2 text-sm md:text-base ${
              activeSection === 'ai-ds'
                ? 'bg-[#4a90e2] font-semibold text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            AI & DS
          </button>
          <button
            onClick={() => showSection('mechanical')}
            className={`rounded-lg px-4 py-2 text-sm md:text-base ${
              activeSection === 'mechanical'
                ? 'bg-[#4a90e2] font-semibold text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Mechanical
          </button>
          <button
            onClick={() => showSection('patents')}
            className={`rounded-lg px-4 py-2 text-sm md:text-base ${
              activeSection === 'patents'
                ? 'bg-[#4a90e2] font-semibold text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Patents
          </button>
          <button
            onClick={() => showSection('funded')}
            className={`rounded-lg px-4 py-2 text-sm md:text-base ${
              activeSection === 'funded'
                ? 'bg-[#4a90e2] font-semibold text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Funded Projects
          </button>
        </div>

        {/* Section Content */}
        {activeSection === 'overview' && (
          <section className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              Overview
            </h2>
            <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
              <p className="mb-4 text-sm text-gray-700 md:text-base">
                Fr. Conceicao Rodrigues College of Engineering encourages
                multidisciplinary quality research related to science,
                engineering and technology in the domain of Computer
                Engineering, AI and Data Science, Electronics engineering,
                Mechanical engineering, Sciences and Humanity. Academic
                research, funded research projects, and the creation of
                intellectual property in the engineering and technology domains
                are all part of the research activities. The institute strives
                to create a vibrant research environment for faculty and
                students engaged in emerging area research.
              </p>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-[#001f3f] md:text-xl">
                Vision
              </h3>
              <div className="mb-4 rounded-lg bg-white p-3 shadow-sm">
                <p className="text-sm text-gray-700 md:text-base">
                  To foster an environment conducive to multi-disciplinary
                  research in engineering and technology
                </p>
              </div>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-[#001f3f] md:text-xl">
                Mission
              </h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    1
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 md:text-base">
                      To promote inventiveness and moral research among faculty,
                      students, and alumni.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    2
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 md:text-base">
                      To encourage interdisciplinary and collaborative research
                      that benefits various facets of society and industry.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-[#001f3f] md:text-xl">
                Objective
              </h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    1
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 md:text-base">
                      To inspire faculty and students to realize their research
                      potential and improve their involvement in research and
                      development activities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    2
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 md:text-base">
                      To support collaboration and interdisciplinary research
                      projects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                    3
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 md:text-base">
                      To support the students and faculty in their efforts to
                      create, protect, and leverage Intellectual Property
                      Rights.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-[#001f3f] md:text-xl">
                Research & Development Committee (2022-23)
              </h3>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {[
                  'Dr. Ketaki Joshi(In-charge)',
                  'Prof. Swapnali Mahadik',
                  'Prof. Kalpana Deorukhkar',
                  'Prof. Dipali Koshti',
                  'Dr. Sunil Yadav',
                  'Prof. Sangeeta Parshionikar',
                  'Athavva Pavar(TE Comps A)',
                  'Giann Mendonca(TE Comps B)',
                  'Vrushti Shah (TE ECS)',
                  'Asiya Shaikh (TE Mech)',
                  'Bishnu Shrestha (TE Mech)',
                  'Divya Fernandes(TE AI & DS)',
                  'Snow Doritto (TE AI & DS)',
                ].map((member, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 md:text-base">
                        {member}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-[#001f3f] md:text-xl">
                Research Promotion Policy
              </h3>
              <p className="mb-4 text-sm text-gray-700 md:text-base">
                A research and development committee has been formed at Fr. CRCE
                to strengthen the institute's presence in the field of research
                by actively promoting research culture and facilitating research
                activities.
              </p>
              <div className="mt-4">
                <Link
                  href="https://frcrce.ac.in/attachments/article/173/Research%20Promotion%20Policy.pdf"
                  className="inline-flex items-center rounded-lg bg-[#4a90e2] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#3a7bc2] hover:shadow-lg sm:px-6 md:px-8 md:py-4 md:text-base"
                >
                  Research Promotion Policy.pdf
                </Link>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'ethics' && (
          <section className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              Code of Ethics
            </h2>
            <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#001f3f] md:text-xl">
                Preamble
              </h3>
              <p className="mb-4 text-sm text-gray-700 md:text-base">
                University Of Mumbai adopted notification regarding Promotion of
                Academic Integrity and Prevention of Plagiarism by UGC vide
                circular number Th./ICD/2018-19/558 dated 6th October 2018. Our
                institute has circulated the same to all teachers and makes
                every attempt to follow this in true spirit. Research students
                check their manuscript/progress seminar reports/thesis for
                similarity and their reports are kept in their personal files.
                Only original articles are allowed by supervisors for further
                processing. Awareness program for the same was conducted for all
                teachers in the institute. Every student submitting a thesis,
                dissertation, or any other such documents to our institute
                submits an undertaking indicating that the document has been
                prepared by him or her and that the document is his/her original
                work.
              </p>

              <h3 className="mt-6 mb-3 text-lg font-semibold text-[#001f3f] md:text-xl">
                Code of Ethics and Publishing your Work
              </h3>
              <div className="space-y-2">
                {[
                  'The work of the authors should be original research that is transparent and written by them in their own words.',
                  'The work of the author should not infringe any intellectual property rights or any rights of others.',
                  'The authors should clearly cite the source of the materials which is taken from some other published work.',
                  'The authors should also cite their own work to avoid self-plagiarism.',
                  'The authors should also get permission from other authors to use their images or tables in their manuscript wherever applicable.',
                  'The authors should write the manuscript in such a way that the work should be transparent reproducible.',
                  'The authors manuscript should not be submitted to more than one journal at a time.',
                  'Any conflict of interest should be clearly stated while submitting the article for any publication including those of the funding agencies.',
                  'The work of the authors should be authentic, true and should not be manipulated.',
                  'The authorship of the work should be given to those who have significantly contributed to improving the quality of the manuscript.',
                  'The authors should ensure that they strictly adhere to the ethical guidelines given by their discipline where subjects like human are involved.',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-sm text-white md:mr-4 md:h-8 md:w-8 md:text-base">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 md:text-base">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'research-centre' && (
          <section className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              Research Centre Details
            </h2>
            <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#001f3f]">
                Research Centre Statistics
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 bg-white text-center">
                  <thead>
                    <tr className="bg-[#4a90e2] text-white">
                      <th className="border-r border-gray-300 p-4">
                        Research Centre
                      </th>
                      <th className="border-r border-gray-300 p-4">
                        Electronics Engineering
                      </th>
                      <th className="border-r border-gray-300 p-4">
                        Mechanical Engineering
                      </th>
                      <th className="p-4">Computer Engineering</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="border-r border-gray-300 bg-gray-50 p-4">
                        Year of Introduction
                      </td>
                      <td className="border-r border-gray-300 p-4">2014</td>
                      <td className="border-r border-gray-300 p-4">2015</td>
                      <td className="p-4">2023</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r border-gray-300 bg-gray-50 p-4">
                        Sanctioned Intake
                      </td>
                      <td className="border-r border-gray-300 p-4">14</td>
                      <td className="border-r border-gray-300 p-4">10</td>
                      <td className="p-4">10</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r border-gray-300 bg-gray-50 p-4">
                        No. of Candidates pursuing Ph.D.
                      </td>
                      <td className="border-r border-gray-300 p-4">7</td>
                      <td className="border-r border-gray-300 p-4">8</td>
                      <td className="p-4">6</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r border-gray-300 bg-gray-50 p-4">
                        No. of Candidates Registered
                      </td>
                      <td className="border-r border-gray-300 p-4">5</td>
                      <td className="border-r border-gray-300 p-4">5</td>
                      <td className="p-4">6</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r border-gray-300 bg-gray-50 p-4">
                        No. of Candidates with Thesis Submitted
                      </td>
                      <td className="border-r border-gray-300 p-4">1</td>
                      <td className="border-r border-gray-300 p-4">1</td>
                      <td className="p-4">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r border-gray-300 bg-gray-50 p-4">
                        No. of Candidates with Ph.D. Awarded
                      </td>
                      <td className="border-r border-gray-300 p-4">7</td>
                      <td className="border-r border-gray-300 p-4">1</td>
                      <td className="p-4">-</td>
                    </tr>
                    <tr>
                      <td className="border-r border-gray-300 bg-gray-50 p-4">
                        Total Vacancies
                      </td>
                      <td className="border-r border-gray-300 p-4">7</td>
                      <td className="border-r border-gray-300 p-4">2</td>
                      <td className="p-4">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'computer' && (
          <section className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              Computer Engineering Research Publications
            </h2>
            <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
              <Publications />
            </div>
          </section>
        )}

        {activeSection === 'ecs' && (
          <section className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              Electronics and Computer Science Research Publications
            </h2>
            <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
              <ECSPublications />
            </div>
          </section>
        )}

        {activeSection === 'ai-ds' && (
          <section className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              Artificial Intelligence & Data Science Research Publications
            </h2>
            <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
              <AidsPublications />
            </div>
          </section>
        )}

        {activeSection === 'mechanical' && (
          <section className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              Mechanical Engineering Research Publications
            </h2>
            <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
              <MechPublications />
            </div>
          </section>
        )}

        {activeSection === 'patents' && (
          <section className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              Patents
            </h2>
            <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
              <PatentsPublications />
            </div>
          </section>
        )}

        {activeSection === 'funded' && (
          <section className="mb-8 md:mb-16">
            <h2
              className={`mb-4 text-xl font-bold text-[#001f3f] md:mb-6 md:text-2xl`}
            >
              Funded Research Projects
            </h2>
            <div className="rounded-lg bg-gray-100 p-4 shadow-lg md:p-6">
              <FundedPublications />
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default ResearchPage
