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

const Research = () => {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'Research & Development', url: '/academics/Research&Development' },
  ]

  return (
    <div
      className={`${zilla.className} flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900`}
    >
      <div
        className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row"
        id="iqac"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl lg:text-7xl">
            Code of Ethics for Authors and Publishing your work
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      <div className="mx-auto mb-8 mt-8 max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-[#000000]">
            Overview - Research & Development
          </h2>
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
        </section>

        <section className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#000000]">Vision</h3>
          <p className="mb-6 leading-relaxed">
            To foster an environment conducive to multi-disciplinary research in
            engineering and technology
          </p>
        </section>

        <section className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#000000]">Mission</h3>
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
        </section>

        <section className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#000000]">Objective</h3>
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
        </section>

        <section className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#000000]">
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
        </section>

        <section className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#000000]">
            Research Promotion Policy
          </h3>
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
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-[#000000]">
            Code of Ethics for Authors and Publishing your work
          </h2>
          <h3 className="mb-4 text-2xl font-bold text-[#000000]">Preamble</h3>
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
        </section>

        <section className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#000000]">
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
        </section>
      </div>
    </div>
  )
}

export default Research
