import React from 'react'

export const tabs = [
  {
    id: 'about',
    title: 'About Science and Humanities',
  },
  {
    id: 'DepartmentsNotices',
    title: 'Department Notices',
  },
  {
    id: 'visionandmission',
    title: 'Vision and Mission',
  },
  {
    id: 'peos,pos,psos',
    title: 'PEOs, POs and PSOs',
  },
  {
    id: 'Faculty',
    title: 'Faculty',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
  },
  {
    id: 'researchandpublications',
    title: 'Research Publications and Patents',
  },
  {
    id: 'pre-Incubation',
    title: 'Pre-Incubation',
  },
  {
    id: 'Internships',
    title: 'Internships',
  },
  {
    id: 'HigherStudiesandPlacements',
    title: 'Higher Studies and Placements',
  },
  {
    id: 'NBAAccreditations',
    title: 'NBA Accreditations',
  },
  {
    id: 'InnovativeTeachingLearning',
    title: 'Innovative Teaching Learning',
  },
  {
    id: 'NotableAlumnus',
    title: 'Notable Alumnus',
  },
  {
    id: 'MentorMentee',
    title: 'Mentor Mentee',
  },
  {
    id: 'FDPSDPPrograms',
    title: 'FDP, SDP Programs',
  },
  {
    id: 'AchievementsTab',
    title: 'Achievements Tab',
  },
  {
    id: 'IndustrialVisits',
    title: 'Industrial Visits',
  },
]

export const hodsDesk = {
  name: 'Dr. Dileep Chandra',
  title: 'Professor & HOD',
  bio: 'content',
  imageUrl: '/scifaculty/dileep.jpg',

  content: 'content',
  extendedContent: 'content2',
}

export const programs = [
  {
    title: 'Bachelors of Technology',
    description: [
      'Undergrad programs',
      'Duration: 4 years ',
      'Intake: 180 students ',
      'Eligibility: 10+2 with PCM',
    ],
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-5 w-5"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    button: [
      { label: 'Syllabus', onClick: () => console.log('Button 1 clicked') },
      {
        label: 'Co-Curricular',
        onClick: () => console.log('Button 2 clicked'),
      },
    ],
  },
  {
    title: 'Masters of Technology',
    description: [
      'Postgrad program in Computer Engineering',
      'Duration: 2 years',
      'Intake: 60 students',
      'Eligibility: B.Tech in Computer Engineering',
    ],
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-5 w-5"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    button: [
      { label: 'Syllabus', onClick: () => console.log('Button 1 clicked') },
      {
        label: 'Co-Curricular',
        onClick: () => console.log('Button 2 clicked'),
      },
    ],
  },
  {
    title: 'PhD Programs',
    description: [
      'Doctoral programs in Computer Engineering',
      'Duration: 3 years',
      'Intake: 10 students',
      'Eligibility: M.Tech in Computer Engineering',
    ],
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-5 w-5"
        viewBox="0 0 24 24"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
    button: [
      { label: 'Syllabus', onClick: () => console.log('Button 1 clicked') },
      {
        label: 'Co-Curricular',
        onClick: () => console.log('Button 2 clicked'),
      },
    ],
  },
]

export const images = [
  'accectire.png',
  'colgate.jpg',
  'godrej.jpg',
  'infosis.jpg',
  'jp.png',
  'lt.png',
  'seclore.png',
  'tcs.jpg',
]

export const tabContents = {
  Placements: {
    description:
      'Our Department has a remarkable track record when it comes to student placements. Year after year, a significant percentage of our graduates secure promising job opportunities with renowned companies in their respective fields. Our dedicated career services team, in collaboration with industry partnerships, plays a pivotal role in ensuring our students are well-prepared and market-ready.',
    packageData: [
      {
        year: '2022-23',
        highest: '17.75 Lpa',
        highestCompany: 'J.P. Morgan Chase & Co. (Code For Good)',
        lowest: 'INR 3.36 Lpa',
        lowestCompany: 'TATA Consultancy Services (TCS Ninja)',
      },
      {
        year: '2021-22',
        highest: 'INR 30 Lpa',
        highestCompany: 'Razerpay',
        lowest: 'INR 3.1 Lpa',
        lowestCompany: 'Atos',
      },
      {
        year: '2020-21',
        highest: 'INR 15.90 Lpa',
        highestCompany: 'Browser Stack',
        lowest: 'INR 1.44 Lpa',
        lowestCompany: 'RPA Infotech',
      },
      {
        year: '2019-20',
        highest: 'INR 27 Lacs (International Placement, Tokyo Japan)',
        highestCompany: 'Human Resocia',
        lowest: 'INR 3 Lpa',
        lowestCompany: '99yrs LLP',
      },
      {
        year: '18-19',
        highest: 'INR 15.62 Lpa',
        highestCompany: 'Browser Stack',
        lowest: 'INR 3 Lpa',
        lowestCompany: 'NSCIT',
      },
      {
        year: '17-18',
        highest: 'INR 12.5 Lpa',
        highestCompany: 'Direct-i',
        lowest: 'INR 3 Lpa',
        lowestCompany: 'NSCIT',
      },
    ],
  },
  Recruiters: {
    images: [
      'accectire.png',
      'colgate.jpg',
      'godrej.jpg',
      'infosis.jpg',
      'jp.png',
      'lt.png',
      'seclore.png',
      'tcs.jpg',
    ],
  },
  Eligibility: {
    requirements: [
      'For all B. Tech programmes candidates should have appeared in JEE 2024 / MHTCET 2024 / PERA 2024 / MHTCET-B* 2024 / NEET* 2024 score.',
      'Minimum 50% aggregate score in PCM/PCB* or Physics & Mathematics with any Technical Vocational Subject. Physics, Mathematics & English is Compulsory with Chemistry/Biotechnology* or Biology*/Technical Vocational Courses in 10+2/Class 12th or equivalent examination AND 50% aggregate score in Class 12th/HSC.',
      'Reserved class category candidate belonging to Maharashtra State only OR Minimum 60% aggregate score in Diploma in Engineering & Technology in an appropriate branch from UGC approved University (without backlog).',
    ],
  },
}

export const AboutcseDepartment = {
  name: 'Science and Humanities',
  description: 'desp',
  extendedDescription: 'decsp2',
  video: true,
}
