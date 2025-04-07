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
    name: 'DR. SUJATA DESHMUKH',
    photoUrl: '/facultyimg/sujata.png',
    ctaText: 'View Profile',
    designation: 'Professor & HOD',
    contact: '',
    qualification: 'Ph.D.(Tech.) in Info.Tech',
    areasOfInterest: 'Data Mining, Machine Learning, Blockchain',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/comps/profile/sujata_deshmukh.pdf',
  },
  {
    id: '2',
    name: 'DR. SUNIL SURVE',
    photoUrl: '/facultyimg/surve.png',
    ctaText: 'View Profile',
    designation: 'Professor',
    contact: '',
    qualification: 'Ph.D.(Electronics Engineering)',
    areasOfInterest:
      'Artificial Intelligence, Machine Learning, Robotics, Cyber Security',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/comps/profile/SunilSurveProfile.pdf',
  },
  {
    id: '3',
    name: 'DR. BRIJMOHAN DAGA',
    photoUrl: '/facultyimg/daga.png',
    ctaText: 'View Profile',
    designation: 'Associate Professor',
    contact: '',
    qualification: 'Ph.D.(Computer Science and Engineering)',
    areasOfInterest: 'Software Engineering, Artificial Intelligence',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/comps/profile/Daga_profile.pdf',
  },
  {
    id: '4',
    name: 'MS. MERLY THOMAS',
    photoUrl: '/facultyimg/merly.png',
    ctaText: 'View Profile',
    designation: 'Associate Professor',
    contact: '',
    qualification: 'Ph.D.(Computer Engg.) (Pursuing)',
    areasOfInterest: 'Computer Networks, Security & Distributed Computing',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/comps/profile/merly_thomas.pdf',
  },
  {
    id: '5',
    name: 'DR. ASHOK M. KANTHE',
    photoUrl: '/facultyimg/kanthe.png',
    ctaText: 'View Profile',
    designation: 'Associate Professor',
    contact: '',
    qualification: 'Ph.D.(Computer Technology)',
    areasOfInterest:
      'Wireless Network Security, Cyber Security, Machine Learning',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/comps/profile/ashok.pdf',
  },
  {
    id: '6',
    name: 'MRS. MONICA KHANORE',
    photoUrl: '/facultyimg/monica.png',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    contact: '',
    qualification: 'Ph.D.(Electronics Engineering)',
    areasOfInterest:
      'Telecommunications, Blockchain Technology, Computer Networks',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/comps/profile/Monica_Khanore_Profile_2022-23.pdf',
  },
  {
    id: '7',
    name: 'MS. KALPANA DEORUKHKAR',
    photoUrl: '/facultyimg/kalpana.png',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    contact: '',
    qualification: 'Ph.D.(Computer Engineering) (Pursuing)',
    areasOfInterest:
      'Natural Language Processing, Data Structures, Advance Algorithm',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/comps/profile/kalpana_CV_for_website.pdf',
  },
  {
    id: '8',
    name: 'MS. ROSHNI PADATE',
    photoUrl: '/facultyimg/roshni.png',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D.(Computer Engineering) (Pursuing)',
    areasOfInterest:
      'Image Processing, Data Warehouse and Mining, Machine Learning, Deep Learning, Artificial Intelligence',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/comps/profile/Faculty_Profile_-_Roshni_Padate.pdf',
  },
  // You can add more faculty members as needed
]