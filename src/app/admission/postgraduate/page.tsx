import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import { url } from 'inspector'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const PostGraduateAdmissionsPage = () => {
  const navigationItems = [
    { label: 'Admission', url: '/' },
    { label: 'Postgraduate', url: '/admission/postgraduate' },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-gray-50 to-[#E5F0FF] text-center text-gray-900">
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] pt-20 md:pt-36">
        <div className="flex w-full flex-col items-center justify-center p-8 text-white md:w-2/3 md:p-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            Post Graduate Admissions
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      <div className="container mx-auto w-full px-4 py-16">
        <div className="mb-16">
          <h2
            className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f] md:text-4xl`}
          >
            Masters of Technology (M.Tech)
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              <strong>Masters of Technology (M.Tech)</strong>
            </p>
            <p className="mb-4 text-gray-700">
              <strong>The college offers M.Tech Degree Course in:</strong>
            </p>
            <ul className="mb-4 list-inside list-disc text-gray-700">
              <li>Computer Engineering</li>
            </ul>
            <p className="mb-4 text-gray-700">
              Allotment of seats for the Masters Program will be done through
              the centralized process.
            </p>
            <p className="mb-4 text-gray-700">
              51% of the centralized admission seats are under Minority Quota.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Eligibility:</strong> As per the Directives of the
              DTE/Competent Authority/Regulatory Authority.
            </p>
            <ul className="mb-4 list-inside list-disc text-gray-700">
              <li>Candidate should be an Indian National</li>
              <li>
                Passed Bachelor Degree in the relevant field of Engineering and
                Technology from AICTE or Central or State Government approved
                institutions or equivalent, with at least 50% marks (at least
                45% marks in case of candidates of Backward Class categories,
                Economically weaker section and Persons with Disability category
                belonging to Maharashtra State)
              </li>
              <li>
                Obtained score in the GATE examination in respective qualifying
                branch valid for the current academic year.
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2
            className={`${zilla.className} mb-6 text-3xl font-bold text-[#001f3f] md:text-4xl`}
          >
            Documents Required
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <p className="mb-4 text-gray-700">
              <strong>Vacant Seats after CAP Rounds</strong>
              <br />
              Vacant Seats after the Centralized Admission Process will be
              filled by the Institute as per the guidelines provided in the
              “Rules & Institute Information Brochure for the Academic year
              2024-25” by DTE/ARA/Govt. of Maharashtra.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Documents:</strong>
            </p>
            <ul className="mb-4 list-inside list-disc text-gray-700">
              <li>
                S.S.C, H.S.C./Diploma, B.E. Mark sheets (All Semesters) and BE
                Degree Certificate.
              </li>
              <li>
                Leaving/Transference Certificate from the previous College.
              </li>
              <li>
                ‘Migration Certificate’ applicable to candidates who have
                obtained B.E. Degree from other than the University of Mumbai.
              </li>
              <li>GATE Score Card.</li>
              <li>
                Certificate of Indian Nationality OR Indian Passport in the name
                of the candidate OR College Leaving Certificate indicating the
                Nationality as ‘Indian’ OR Birth Certificate issued by
                appropriate authorities.
              </li>
              <li>
                Maharashtra State Domicile Certificate OR Birth Certificate
                indicating Birth Place in Maharashtra OR College Leaving
                Certificate indicating Birth Place in Maharashtra.
              </li>
              <li>
                Certificates of Proforma A (Sponsorship letter), E (for type C
                candidates), F (for type D Candidates), F-1 (for P1 / P2 / P3
                (OD) Candidates), F-2 for Physically handicapped Candidates
              </li>
              <li>
                Undertaking in Proforma B (Sponsored Candidates), C Candidates
                whose qualifying examination result not declared, D (for GATE
                Candidates)
              </li>
              <li>Copy of Aadhaar Card</li>
              <li>
                Physical/Medical Fitness Certificate from a registered Medical
                Practitioner.
              </li>
              <li>
                Duly signed printout of Anti-ragging Affidavit submitted online
                on www.antiragging.in by candidate and Parent. (Enter the
                Application ID allotted by DTE/ARA CAP as Reference No.).
              </li>
              <li>
                Any other relevant document specified by DTE/ARA/Govt. of
                Maharashtra.
              </li>
              <li>
                Proof of Income for the previous year issued by the appropriate
                authorities such as Form No.16 or any other of parents for those
                candidates who wish to claim the financial benefits i.e.
                category candidates, EBC/Minority candidates from Govt. or from
                any other organization if applicable.
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
          <p className="mb-4 text-gray-700">
            <a
              href="/Mtech.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              M.Tech CAP Reporting Procedure (PDF)
            </a>
          </p>
          <p className="text-gray-700">
            <a
              href="http://granth.fragnel.edu.in:5186/pinfo/meadm/MEMnu.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              M.Tech CAP Reporting Form
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostGraduateAdmissionsPage
