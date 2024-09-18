import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const MOUCollaborationPage = () => {
  return (
    <div className="container mx-auto w-full px-4 py-16 pt-32 md:pt-48">
      <h1
        className={`${zilla.className} mb-6 text-4xl font-bold text-[#001f3f] md:text-5xl lg:text-7xl`}
      >
        MoU & Collaborations
      </h1>
      <div className="mb-16">
        <p className="mb-8 text-gray-700">
          The institute has signed various Memorandums of Understanding with
          several Companies, Foreign Universities, Institutes of national and
          international repute, and Technology Providers to provide avenues for
          faculty exchange, student exchange, internships, field trips,
          on-the-job trainings, research, as well as other academic and
          co-curricular activities.
        </p>

        {mouData.map((mou, index) => (
          <div key={index} className="mb-10">
            <h2
              className={`${zilla.className} text-3xl font-bold text-[#001f3f] md:text-4xl`}
            >
              {mou.organization}
            </h2>
            <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
                {mou.description}
              </p>
              <a
                href={mou.link}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {mou.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mouData = [
  {
    organization: 'Brillmax Private Limited',
    description:
      'The purpose of this MoU is to perform the collaborative programs for students and faculty members.',
    link: 'https://brillmax.com/',
    linkText: 'https://brillmax.com/',
  },
  {
    organization: 'Cloud Counselage',
    description:
      'The purpose of this MoU is to perform the collaborative programs for students and faculty members, to arrange industrial trainings and visits and to provide internships and placements to the students within FR.CRCE.',
    link: 'https://www.cloudcounselage.com/',
    linkText: 'https://www.cloudcounselage.com/',
  },
  {
    organization: 'Conbuss Online Manufacturing Pvt. Ltd',
    description:
      'The purpose of this MoU is to perform the collaborative programs for students and faculty members in the areas of mutual interest, to provide internships to the students within FR.CRCE.',
    link: '',
    linkText: '',
  },
  {
    organization: 'Internshala',
    description:
      'The purpose of this MoU is to provide Internship opportunities to the students within Fr.CRCE.',
    link: 'https://trainings.internshala.com/',
    linkText: 'https://trainings.internshala.com/',
  },
  {
    organization: 'Hyfunn',
    description:
      'The purpose of this MoU is to provide digital services for a term of 24 months and to support and sustain the management of activities for various engineering departments.',
    link: 'https://hyfunnverse.com/',
    linkText: 'https://hyfunnverse.com/',
  },
  {
    organization: 'Studenting Era',
    description:
      'The purpose of this MoU is to provide free online trainings and services to the registered student and faculty members helping them to improve the skills, competencies, and employability of students.',
    link: '',
    linkText: '',
  },
  {
    organization: 'BUDSTA Analytics and Insights Pvt. Ltd.',
    description:
      'The purpose of this MoU is to provide internship opportunities to third year Engineering students within Fr.CRCE.',
    link: '',
    linkText: '',
  },
  {
    organization: 'Bennett University',
    description:
      'The purpose of this MoU is to provide support to the projects of students in terms of manpower, local support and infrastructure.',
    link: 'https://www.bennett.edu.in/',
    linkText: 'https://www.bennett.edu.in/',
  },
  {
    organization: 'Amazon Web Services (AWS)',
    description:
      'The purpose of this MoU is to provide guidance to students regarding the cloud usage in their project.',
    link: 'https://aws.amazon.com/training/',
    linkText: 'https://aws.amazon.com/training/',
  },
  {
    organization: 'Tata Consultancy Services (TCS)',
    description:
      'The purpose of this MoU is to conduct workshops for students, to conduct faculty development programs, and to provide internships to the students.',
    link: 'https://www.tcs.com/',
    linkText: 'https://www.tcs.com/',
  },
  {
    organization: 'Christiani Sharpline Technical Training',
    description:
      'The purpose of this MoU is to provide collaborative programs with both the organizations in the areas of interest.',
    link: 'http://www.cstt.in',
    linkText: 'http://www.cstt.in',
  },
  {
    organization: 'D-LINK',
    description:
      'The purpose of this MoU is to provide the training to the students of Fr.CRCE.',
    link: 'https://in.dlink.com/en/consumer',
    linkText: 'https://in.dlink.com/en/consumer',
  },
  {
    organization: 'Synergy Consultants Pvt. Ltd.',
    description:
      'The purpose of this MoU is to carry out the projects jointly with Fr.CRCE and SCPL.',
    link: '',
    linkText: '',
  },
  {
    organization: 'University of Texas at EL Paso',
    description:
      'The purpose of this MoU is to promote the interest of teaching and research activities.',
    link: 'https://www.utep.edu/',
    linkText: 'https://www.utep.edu/',
  },
  {
    organization: 'United Modelling & Simulation',
    description:
      "The purpose of this MoU is to provide the guidance for consultancy and sponsorship to the student's projects.",
    link: 'http://www.unimodsim.com/',
    linkText: 'http://www.unimodsim.com/',
  },
  {
    organization: 'L. D. College of Engineering',
    description:
      'The purpose of this MoU is to provide internship opportunities to the students within Fr.CRCE and to facilitate the use of Siemens centre of excellence training facility to Fr.CRCE.',
    link: 'http://ldce.ac.in/',
    linkText: 'http://ldce.ac.in/',
  },
  {
    organization: 'Eduvance',
    description:
      'The purpose of this MoU is to conduct the workshop for students, to conduct faculty development workshops and to provide the internships to the students.',
    link: 'https://eduvance.in/',
    linkText: 'https://eduvance.in/',
  },
  {
    organization: 'CodeChef',
    description:
      'The purpose of this MoU is to help the students to improve their skills across a variety of topics and difficulty levels.',
    link: 'https://www.codechef.com/',
    linkText: 'https://www.codechef.com/',
  },
  {
    organization: 'Crypto University',
    description:
      'The purpose of this MoU is to extend the cooperation for research, data sharing, and paper publication, and to provide the internships and live projects to the students.',
    link: 'https://cryptowire.in/',
    linkText: 'https://cryptowire.in/',
  },
  {
    organization: 'EC Council',
    description:
      'The purpose of this MoU is to provide the courses related to the securities to the students.',
    link: 'https://www.eccouncil.org/',
    linkText: 'https://www.eccouncil.org/',
  },
  {
    organization: 'Linux Professional Institute',
    description:
      'The purpose of this MoU is to conduct the workshops for students, to conduct faculty development workshops, and to provide the internships to the students.',
    link: 'https://www.lpi.org/',
    linkText: 'https://www.lpi.org/',
  },
  {
    organization: 'Devfolio',
    description:
      'The purpose of this MoU is to provide the Hackathon Organizer with a cost-free SaaS platform.',
    link: 'https://devfolio.co/',
    linkText: 'https://devfolio.co/',
  },
  {
    organization: 'Veermata Jijabai Technological Institute (VJTI)',
    description:
      'The purpose of this MoU is to stimulate and facilitate the development of collaborative and mutually beneficial programs which serve for technological upliftment of both campuses.',
    link: 'https://vjti.ac.in/',
    linkText: 'https://vjti.ac.in/',
  },
  {
    organization: 'United Way',
    description:
      'The purpose of this MoU is to collaborate for participation in Mission Blue project activities.',
    link: 'https://www.unitedwaymumbai.org/index.htm',
    linkText: 'https://www.unitedwaymumbai.org/index.htm',
  },
  {
    organization: 'Sardar Patel Institute of Technology (SPIT)',
    description:
      'The purpose of this MoU is to help each other to organize/conduct courses/training modules enabling students’ mobility across both the HEI for seamless integration of skills and experiences, deputing students/staff/faculty members for conduction of courses or research, involving each other in the revision of syllabus, teaching-learning processes, external quality audits, assessment and evaluation process, jointly organizing co-curricular and extra-curricular activities, undertaking collaborative research projects.',
    link: 'https://www.spit.ac.in/',
    linkText: 'https://www.spit.ac.in/',
  },
  {
    organization: 'IIRS ISRO',
    description:
      'The purpose of this collaboration is to encourage students and teachers to actively participate in IIRS outreach programs.',
    link: 'https://www.iirs.gov.in/',
    linkText: 'https://www.iirs.gov.in/',
  },
]

export default MOUCollaborationPage
