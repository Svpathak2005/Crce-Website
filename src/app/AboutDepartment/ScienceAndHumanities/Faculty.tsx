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
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          Our Faculty
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
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
                  <span className="font-semibold text-[#131929]">Qualification:</span>{' '}
                  {faculty.qualification}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  <span className="font-semibold text-[#131929]">Areas of Interest:</span>{' '}
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
    name: 'MR. DILEEP CHANDRA',
    photoUrl: '/scifaculty/dileep.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor & Head',
    qualification: 'Ph.D (Pursuing), M.Sc (Electronics)',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2023/10/15/dileep_cv.pdf',
  },
  {
    id: '2',
    name: 'DR. HEMANT KHANOLKAR',
    photoUrl: '/scifaculty/drhemantkhanolkar.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. (Chemistry)',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2023/10/16/hemant_cv.pdf',
  },
  {
    id: '3',
    name: 'MR. PRASAD LALIT',
    photoUrl: '/scifaculty/prasad1.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D (Pursuing), M.Phil. (Mathematics)',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2023/10/15/prasad_cv.pdf',
  },
  {
    id: '4',
    name: 'DR. SUNIL YADAV',
    photoUrl: '/scifaculty/sunil1.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D (Chemistry)',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick:
      'http://www.frcrce.ac.n/media/attachments/2023/10/15/sunil_yadav_cv.pdf',
  },
  {
    id: '5',
    name: 'DR. JOSEPH RODRIGUES',
    photoUrl: '/scifaculty/joseph1.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. (English)',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2023/10/15/joseph_cv.pdf',
  },
  {
    id: '6',
    name: 'MR. PRADEEP SINGH',
    photoUrl: '/scifaculty/pradeeep.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'MSc (Mathematics)',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2023/10/15/pradeep_singh_cv.pdf',
  },
  {
    id: '7',
    name: 'DR. DIPAK BAUSKAR',
    photoUrl: '/scifaculty/deepak.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. (Physics)',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2023/10/15/dipak-cv.pdf',
  },
  {
    id: '8',
    name: 'MR. GAJENDRA SINGH',
    photoUrl: '/scifaculty/gajendra.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.Sc. B.Ed (Mathematics)',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2023/10/15/gajendra_cv.pdf',
  },
  {
    id: '9',
    name: 'MS. AASTHA BHATIA',
    photoUrl: '/scifaculty/aastha-bhatia-scpic.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D (Pursuing), M.A. (English Lit.), B.Ed',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick:
      'http://www.frcrce.ac.in/media/attachments/2023/10/15/aastha_cv.pdf',
  },
  {
    id: '10',
    name: 'MS. GAUREE JAGUSHTE',
    photoUrl: '/scifaculty/gauri.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.Sc (Mathematics), B.Ed',
    areasOfInterest: 'Science & Humanities Subjects',
    ctaOnClick: '/faculty/10',
  },
]