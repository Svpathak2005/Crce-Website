'use client'
import React from 'react'
import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

type Faculty = {
  id: string
  name: string
  photoUrl: string
  ctaText: string
  designation: string
  contact?: string
  qualification: string
  areasOfInterest: string
  ctaOnClick: string
}

type FacultyGridProps = {
  facultyData: Faculty[]
}

const Faculty: React.FC<FacultyGridProps> = ({ facultyData }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Our Faculty
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {facultyData.map((faculty) => (
          <div
            key={faculty.id}
            className="flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
          >
            {/* Circular Image */}
            <div className="flex justify-center pt-6">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#EBF2FF] bg-gray-100">
                <Image
                  src={faculty.photoUrl}
                  alt={faculty.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 text-center">
              <h3 className="mb-1 text-xl font-bold text-[#131929]">
                {faculty.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-[#1E40AF]">
                {faculty.designation}
              </p>

              <div className="mb-5 border-t border-gray-100 pt-4">
                <p className="mb-2 text-sm leading-relaxed text-gray-600">
                  <span className="font-semibold text-[#131929]">
                    Qualification:
                  </span>{' '}
                  {faculty.qualification}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  <span className="font-semibold text-[#131929]">
                    Areas of Interest:
                  </span>{' '}
                  <span className="italic">{faculty.areasOfInterest}</span>
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href={faculty.ctaOnClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-[#131929] px-5 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-[#1E40AF] hover:shadow-md"
                >
                  {faculty.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faculty

export const FacultyTabData = [
  {
    id: '1',
    name: 'Dr. Sapna Prabhu',
    photoUrl: '/facultyecs/sapnaprabhu.jpg',
    ctaText: 'View Profile',
    designation: 'Professor & Head',
    qualification: 'Ph.D.',
    areasOfInterest:
      'Microprocessor system design, Embedded systems, Internet of Things, Biomedical instrumentation, Computer Architecture',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ecs/profile/sapna_prabhu_prodile.pdf',
  },
  {
    id: '2',
    name: 'Dr. Deepak Bhoir',
    photoUrl: '/facultyecs/dvbhoir.jpg',
    ctaText: 'View Profile',
    designation: 'Professor & Dean Academics',
    qualification: 'Ph.D.',
    areasOfInterest:
      'Instrumentation, Biomedical Instrumentation, Virtual Instrumentation, VLSI Design, MEMS, Automation',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2024/09/11/d-v-bhoir-bio-data.pdf',
  },
  {
    id: '3',
    name: 'Ms. Binsy Joseph',
    photoUrl: '/facultyecs/bin.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E. (Pursuing PhD)',
    areasOfInterest:
      'Power electronics, Electrical Vehicle Battery Management, Renewable Energy System',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ecs/profile/binsy_joseph_profile.pdf',
  },
  {
    id: '4',
    name: 'Ms. Dipali Koshti',
    photoUrl: '/facultyecs/dipali.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E. (Pursuing PhD)',
    areasOfInterest:
      'Deep Learning, Machine Learning, Mobile Computing, Soft Computing, Database Management Systems',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ecs/profile/dipali_koshti_profile.pdf',
  },
  {
    id: '5',
    name: 'Mr. Vaibhav Godbole',
    photoUrl: '/facultyecs/vaibhav.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E. (Pursuing PhD)',
    areasOfInterest:
      'Web Programming, Linux System Administration, Machine Learning, Bio-inspired Computation, Big Data Analytics',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ecs/profile/vaibhavprofile.pdf',
  },
  {
    id: '6',
    name: 'Mrs. Archana Lopes',
    photoUrl: '/facultyecs/archana.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E. (Pursuing PhD)',
    areasOfInterest:
      'Soft Computing, Computer Vision, Machine Learning, Data Structures and Algorithms, Discrete Structures, Automata Theory, Object-Oriented Programming',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ecs/profile/Archana_Profile.pdf',
  },
  {
    id: '7',
    name: 'Mr. Jayen Modi',
    photoUrl: '/facultyecs/jayenmodi.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E. (Pursuing PhD)',
    areasOfInterest:
      'Electronic Devices & Circuits, Signal Conditioning Circuit Design, Control Systems Engineering, Instrumentation Systems, Industrial Automation & Process Control, Management Information Systems, Project Management',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ecs/profile/Archana_Profile.pdf',
  },
  {
    id: '8',
    name: 'Mrs. Prajakta Bhangale',
    photoUrl: '/facultyecs/prajakta.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E. (Pursuing PhD)',
    areasOfInterest:
      'Security, Blockchain Technology, Big Data Analysis, Java Programming',
    ctaOnClick: '/faculty/8',
  },

  {
    id: '9',
    name: 'Ms. Jeenal Rambhia',
    photoUrl: '/facultyecs/jeenal.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E. (Pursuing PhD)',
    areasOfInterest:
      'Biomedical Signal Processing, Neuroscience, Artificial Intelligence',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ecs/profile/Archana_Profile.pdf',
  },
  {
    id: '10',
    name: 'Mr. Flynn Dennis Jiu',
    photoUrl: '/facultyecs/flynn.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E.',
    areasOfInterest: 'Image Processing, Microprocessor, Embedded systems',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2024/06/28/flynn-cv_2806.pdf',
  },
  {
    id: '11',
    name: 'Mrs. Garima Singh',
    photoUrl: '/facultyecs/garima.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E.',
    areasOfInterest:
      'VLSI Design, Internet of Things, Image Processing, Machine Learning',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2024/08/10/garima_resume_asst_prof.pdf',
  },
]
