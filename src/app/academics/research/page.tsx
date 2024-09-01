'use client'
import React, { useState, useEffect } from 'react'
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

const MenuItem = ({ label, isActive, onClick }) => (
  <button
    className={`w-full border-b border-gray-300 px-4 py-2 text-left ${
      isActive
        ? 'font-semibold text-blue-500'
        : 'text-gray-700 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
)

const ContentSection = ({ title, content }) => (
  <div className="p-8">
    <h2 className={`${zilla.className} mb-4 text-3xl font-bold`}>{title}</h2>
    <div className="prose max-w-none">{content}</div>
  </div>
)

const ResearchMenu = () => {
  const [activeItem, setActiveItem] = useState('Overview')

  // Use useEffect to ensure the Overview is set as active on initial render
  useEffect(() => {
    setActiveItem('Overview')
  }, [])

  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'Research & Development', url: '/academics/Research&Development' },
  ]

  const menuItems = [
    {
      label: 'Overview',
      content: (
        <>
          <p className="mb-6 leading-relaxed">
            Fr. Conceicao Rodrigues College of Engineering encourages
            multidisciplinary quality research related to science, engineering
            and technology in the domain of Computer Engineering, AI and Data
            Science, Electronics engineering, Mechanical engineering, Sciences
            and Humanity. Academic research, funded research projects, and the
            creation of intellectual property in the engineering and technology
            domains are all part of the research activities. The institute
            strives to create a vibrant research environment for faculty and
            students engaged in emerging area research.
          </p>
          <h3 className="mb-4 text-2xl font-bold">Vision</h3>
          <p className="mb-6 leading-relaxed">
            To foster an environment conducive to multi-disciplinary research in
            engineering and technology
          </p>
          <h3 className="mb-4 text-2xl font-bold">Mission</h3>
          <ol className="mb-6 list-decimal space-y-2 pl-6">
            <li>
              To promote inventiveness and moral research among faculty,
              students, and alumni.
            </li>
            <li>
              To encourage interdisciplinary and collaborative research that
              benefits various facets of society and industry.
            </li>
          </ol>
          <h3 className="mb-4 text-2xl font-bold">Objective</h3>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>
              To inspire faculty and students to realize their research
              potential and improve their involvement in research and
              development activities.
            </li>
            <li>
              To support collaboration and interdisciplinary research projects.
            </li>
            <li>
              To support the students and faculty in their efforts to create,
              protect, and leverage Intellectual Property Rights.
            </li>
          </ul>
          <h3 className="mb-4 text-2xl font-bold">
            Research & Development Committee (2022-23)
          </h3>
          <ol className="mb-6 list-decimal columns-2 space-y-2 pl-6">
            <li>Dr. Ketaki Joshi(In-charge)</li>
            <li>Prof. Swapnali Mahadik</li>
            <li>Prof. Kalpana Deorukhkar</li>
            <li>Prof. Dipali Koshti</li>
            <li>Dr. Sunil Yadav</li>
            <li>Prof. Sangeeta Parshionikar</li>
            <li>Athavva Pavar(TE Comps A)</li>
            <li>Giann Mendonca(TE Comps B)</li>
            <li>Vrushti Shah (TE ECS)</li>
            <li>Asiya Shaikh (TE Mech)</li>
            <li>Bishnu Shrestha (TE Mech)</li>
            <li>Divya Fernandes(TE AI & DS)</li>
            <li>Snow Doritto (TE AI & DS)</li>
          </ol>
          <h3 className="mb-4 text-2xl font-bold">Research Promotion Policy</h3>
          <p className="mb-6 leading-relaxed">
            A research and development committee has been formed at Fr. CRCE to
            strengthen the institute's presence in the field of research by
            actively promoting research culture and facilitating research
            activities.
          </p>
          <Link
            href="#"
            className="inline-block rounded bg-[#001f3f] px-6 py-2 text-white transition-colors hover:bg-[#003366]"
          >
            Research Promotion Policy.pdf
          </Link>
        </>
      ),
    },
    {
      label: 'Code of Ethics',
      content: (
        <>
          <h3 className="mb-4 text-2xl font-bold">Preamble</h3>
          <p className="mb-6 leading-relaxed">
            University Of Mumbai adopted notification regarding Promotion of
            Academic Integrity and Prevention of Plagiarism by UGC vide circular
            number Th./ICD/2018-19/558 dated 6th October 2018. Our institute has
            circulated the same to all teachers and makes every attempt to
            follow this in true spirit. Research students check their
            manuscript/progress seminar reports/thesis for similarity and their
            reports are kept in their personal files. Only original articles are
            allowed by supervisors for further processing. Awareness program for
            the same was conducted for all teachers in the institute. Every
            student submitting a thesis, dissertation, or any other such
            documents to our institute submits an undertaking indicating that
            the document has been prepared by him or her and that the document
            is his/her original work.
          </p>
          <h3 className="mb-4 text-2xl font-bold">
            Code of Ethics and Publishing your Work
          </h3>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>
              The work of the authors should be original research that is
              transparent and written by them in their own words.
            </li>
            <li>
              The work of the author should not infringe any intellectual
              property rights or any rights of others.
            </li>
            <li>
              The authors should clearly cite the source of the materials which
              is taken from some other published work.
            </li>
            <li>
              The authors should also cite their own work to avoid
              self-plagiarism.
            </li>
            <li>
              The authors should also get permission from other authors to use
              their images or tables in their manuscript wherever applicable.
            </li>
            <li>
              The authors should write the manuscript in such a way that the
              work should be transparent reproducible.
            </li>
            <li>
              The authors manuscript should not be submitted to more than one
              journal at a time.
            </li>
            <li>
              Any conflict of interest should be clearly stated while submitting
              the article for any publication including those of the funding
              agencies.
            </li>
            <li>
              The work of the authors should be authentic, true and should not
              be manipulated.
            </li>
            <li>
              The authorship of the work should be given to those who have
              significantly contributed to improving the quality of the
              manuscript.
            </li>
            <li>
              The authors should ensure that they strictly adhere to the ethical
              guidelines given by their discipline where subjects like human are
              involved.
            </li>
          </ul>
          <Link
            href="#"
            className="inline-block rounded bg-[#001f3f] px-6 py-2 text-white transition-colors hover:bg-[#003366]"
          >
            Research Ethics Policy.pdf
          </Link>
        </>
      ),
    },

    {
      label: 'Research Centre Details',
      content: (
        <div className="bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Research Centre Details
          </h2>
          <h3 className="mb-6 text-xl font-medium">
            Research Centre Statistics
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white text-center">
              <thead>
                <tr className="border-b">
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
                  <td className="border-r border-gray-300 p-4">
                    Year of Introduction
                  </td>
                  <td className="border-r border-gray-300 p-4">2014</td>
                  <td className="border-r border-gray-300 p-4">2015</td>
                  <td className="p-4">2023</td>
                </tr>
                <tr className="border-b">
                  <td className="border-r border-gray-300 p-4">
                    Sanctioned Intake
                  </td>
                  <td className="border-r border-gray-300 p-4">14</td>
                  <td className="border-r border-gray-300 p-4">10</td>
                  <td className="p-4">10</td>
                </tr>
                <tr className="border-b">
                  <td className="border-r border-gray-300 p-4">
                    No. of Candidates pursuing Ph.D.
                  </td>
                  <td className="border-r border-gray-300 p-4">7</td>
                  <td className="border-r border-gray-300 p-4">8</td>
                  <td className="p-4">6</td>
                </tr>
                <tr className="border-b">
                  <td className="border-r border-gray-300 p-4">
                    No. of Candidates Registered
                  </td>
                  <td className="border-r border-gray-300 p-4">5</td>
                  <td className="border-r border-gray-300 p-4">5</td>
                  <td className="p-4">6</td>
                </tr>
                <tr className="border-b">
                  <td className="border-r border-gray-300 p-4">
                    No. of Candidates with Thesis Submitted
                  </td>
                  <td className="border-r border-gray-300 p-4">1</td>
                  <td className="border-r border-gray-300 p-4">1</td>
                  <td className="p-4">-</td>
                </tr>
                <tr className="border-b">
                  <td className="border-r border-gray-300 p-4">
                    No. of Candidates with Ph.D. Awarded
                  </td>
                  <td className="border-r border-gray-300 p-4">7</td>
                  <td className="border-r border-gray-300 p-4">1</td>
                  <td className="p-4">-</td>
                </tr>
                <tr>
                  <td className="border-r border-gray-300 p-4">
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
      ),
    },

    {
      label: 'Computer Engineering Research Publications',
      content: (
        <div>
          <Publications />
        </div>
      ),
    },
    {
      label: 'Electronics and Computer Science Research Publications',
      content: (
        <div>
          <ECSPublications />
        </div>
      ),
    },
    {
      label: 'Artificial Intelligence & Data Science Research Publications',
      content: (
        <div>
          <AidsPublications />
        </div>
      ),
    },
    {
      label: 'Mechanical Engineering Research Publications',
      content: (
        <div>
          <MechPublications />
        </div>
      ),
    },
    {
      label: 'Patents',
      content: (
        <div>
          <PatentsPublications />
        </div>
      ),
    },
    {
      label: 'Funded Research Projects',
      content: (
        <div>
          <PatentsPublications />
        </div>
      ),
    },
  ]

  const handleItemClick = (item) => {
    setActiveItem(item)
  }

  return (
    <div
      className={`${zilla.className} flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900`}
    >
      <div
        className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row"
        id="research"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl lg:text-7xl">
            Research & Development
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl py-8">
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 w-full md:mb-0 md:w-1/4">
            <div className="sticky top-20 bg-white shadow-md">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  label={item.label}
                  isActive={activeItem === item.label}
                  onClick={() => handleItemClick(item.label)}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-white p-8 shadow-lg md:ml-8">
            <ContentSection
              title={activeItem}
              content={
                menuItems.find((item) => item.label === activeItem)?.content
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchMenu
