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

const IQACPage = () => {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'IQAC', url: '/academics/IQAC' },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      <div
        className="flex h-full w-full flex-col justify-center bg-gradient-to-br pt-36 from-[#001f3f] to-[#003366] md:flex-row"
        id="iqac"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-center text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            IQAC - Internal Quality Assessment Cell
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <section className="mb-8">
          <h2 className={`${zilla.className} mb-4 text-3xl font-bold`}>
            About IQAC
          </h2>
          <p className="mb-4 text-justify">
            National Assessment and Accreditation Council (NAAC), Bangalore
            proposed that every accredited institution should establish an
            Internal Quality Assurance Cell (IQAC) as a quality sustenance
            measure. Since quality enhancement is a continuous process, the IQAC
            is a part of the institution's system and works towards the
            realisation of the goals of quality enhancement and sustenance.
          </p>
          <p className="text-justify">
            The work of the IQAC is the first step towards the internalization
            and institutionalization of quality enhancement initiatives. Its
            success depends upon the sense of belongingness and participation in
            all the constituents of the institution. IQAC is a facilitative and
            participative voluntary system/unit/organ of the institution.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            IQAC Vision
          </h3>
          <p className="text-justify">
            To ensure quality culture as the prime concern for the Higher
            Education Institutions through institutionalizing and internalizing
            all the initiatives taken with internal and external support.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            Objectives
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              To develop a system for conscious, consistent and catalytic action
              to improve the academic and administrative performance of the
              institution.
            </li>
            <li>
              To promote measures for institutional functioning towards quality
              enhancement through internalization of quality culture and
              institutionalization of best practices.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            Strategies
          </h3>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Ensuring the timely, efficient and progressive performance of
              academic, administrative and financial tasks;
            </li>
            <li>Relevant and quality academic/ research programmes;</li>
            <li>
              Equitable access to and affordability of academic programmes for
              various sections of society;
            </li>
            <li>
              Optimization and integration of modern methods of teaching and
              learning;
            </li>
            <li>The credibility of the assessment and evaluation process;</li>
            <li>
              Ensuring the adequacy, maintenance and proper allocation of
              support structure and services;
            </li>
            <li>
              Sharing of research findings and networking with other
              institutions in India and abroad.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            Functions
          </h3>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Development and application of quality benchmarks;</li>
            <li>
              Parameters for various academic and administrative activities of
              the institution;
            </li>
            <li>
              Facilitating the creation of a learner-centric environment
              conducive to quality education and faculty maturation to adopt the
              required knowledge and technology for participatory teaching and
              learning process;
            </li>
            <li>
              Collection and analysis of feedback from all stakeholders on
              quality-related institutional processes;
            </li>
            <li>
              Dissemination of information on various quality parameters to all
              stakeholders;
            </li>
            <li>
              Organization of inter and intra institutional workshops, seminars
              on quality-related themes and promotion of quality circles;
            </li>
            <li>
              Documentation of the various programmes/activities leading to
              quality improvement;
            </li>
            <li>
              Acting as a nodal agency of the Institution for coordinating
              quality-related activities, including adoption and dissemination
              of best practices;
            </li>
            <li>
              Development and maintenance of an institutional database through
              MIS for the purpose of maintaining/enhancing the institutional
              quality;
            </li>
            <li>
              Periodical conduct of Academic and Administrative Audit and its
              follow-up;
            </li>
            <li>
              Preparation and submission of the Annual Quality Assurance Report
              (AQAR) as per the guidelines and parameters of the NAAC.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h3 className={`${zilla.className} mb-4 text-2xl font-bold`}>
            Benefits
          </h3>
          <ol className="list-decimal space-y-2 pl-5">
            <li style={{ textAlign: 'justify' }}>
              Ensure clarity and focus in institutional functioning towards
              quality enhancement;
            </li>
            <li style={{ textAlign: 'justify' }}>
              Ensure internalization of the quality culture;
            </li>
            <li style={{ textAlign: 'justify' }}>
              Ensure enhancement and coordination among various activities of
              the institution and institutionalize all good practices;
            </li>
            <li style={{ textAlign: 'justify' }}>
              Provide a sound basis for decision-making to improve institutional
              functioning;
            </li>
            <li style={{ textAlign: 'justify' }}>
              Act as a dynamic system for quality changes in HEIs;
            </li>
            <li style={{ textAlign: 'justify' }}>
              Build an organized methodology of documentation and internal
              communication.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <div className="entry-header">
            <h2 className={`${zilla.className} mb-4 text-3xl font-bold`}>
              IQAC-Composition
            </h2>
          </div>
          <div className="articleBody">
            <p className="mb-4">The composition of IQAC consists of&nbsp;</p>
            <table className="w-full border-collapse border border-blue-800">
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
                  { id: 15, title: 'Stakeholder’s Nominee (Parent)' },
                  { id: 16, title: 'Entrepreneur' },
                  { id: 17, title: 'Nominee from Industry' },
                  {
                    id: 18,
                    title: 'Nominee of the Student- General Secretary',
                  },
                  { id: 19, title: 'NAAC and NBA Co-ordinator' },
                  { id: 20, title: 'NIRF Co-ordinator' },
                ].map((item) => (
                  <tr key={item.id}>
                    <td className="w-[10%] border border-blue-800 p-2 text-center">
                      <span className="text-blue-800">{item.id}.</span>
                    </td>
                    <td className="w-[90%] border border-blue-800 p-2">
                      <span className="text-blue-800">{item.title}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 text-center">
          <Link
            href="/IQAC-2023.pdf"
            className="inline-block rounded-full bg-gradient-to-r from-[#4a90e2] to-[#357abd] px-6 py-3 font-semibold text-white transition-all hover:from-[#357abd] hover:to-[#4a90e2] hover:shadow-lg"
            download
          >
            Download IQAC 2023 PDF
          </Link>
        </section>
        {/* Add more sections for Functions and Benefits */}
      </div>
    </div>
  )
}

export default IQACPage
