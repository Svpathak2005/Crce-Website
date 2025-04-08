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
    name: 'DR. JAGRUTI SAVE',
    photoUrl: '/facultycse/save.jpg',
    ctaText: 'View Profile',
    designation: 'Professor & Head',
    qualification: 'Ph.D. (Computer Engineering)',
    areasOfInterest:
      'Data mining, Image Processing, Soft Computing, Machine Learning',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ai-ds/Profile/jagruti_save_profile.pdf',
  },
  {
    id: '2',
    name: 'DR. SWAPNALI MAKDEY',
    photoUrl: '/facultycse/swapnalim.jpg',
    ctaText: 'View Profile',
    designation: 'Asst. Professor',
    qualification: 'Ph.D.(Electronics Engineering)(Pursuing)',
    areasOfInterest:
      'VLSI, Nanoelectronics, Computer Network, Software Engineering, Embedded System',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ai-ds/Profile/Swapnali_profile.pdf',
  },
  {
    id: '3',
    name: 'MS. SWATI RINGE',
    photoUrl: '/facultycse/swati.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E.',
    areasOfInterest:
      'Big Data Analytics, Theory of Computer Science, Web Computing, Machine Learning, Natural Language Processing',
    ctaOnClick:
      'https://frcrce.ac.in/images/crce/department/ai-ds/Profile/Swati_Ringe_facultyprofile_22-23.pdf',
  },
  {
    id: '4',
    name: 'MS. GARIMA TRIPATI',
    photoUrl: '/facultycse/garima.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'M.E.',
    areasOfInterest:
      'IoT, Microprocessor, Computer Organization and Architecture, Computer Graphics, Image Processing',
    ctaOnClick: '/faculty/4',
  },
  {
    id: '5',
    name: 'MS. SARIKA DAVARE',
    photoUrl: '/facultycse/sarika1.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D.(Computer Engineering)(Pursuing)',
    areasOfInterest:
      'Database systems, Data warehousing and Data Mining, Software Engineering, Project Management',
    ctaOnClick: '/faculty/5',
  },
  {
    id: '6',
    name: 'MR. SAURABH KULKARNI',
    photoUrl: '/facultycse/saurav.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D.(Computer Science & Engineering)(Pursuing)',
    areasOfInterest:
      'Big Data Analytics, Database Systems, Data Warehousing and Mining, Machine Learning, Web Programming, Software Testing',
    ctaOnClick: '/faculty/6',
  },
  {
    id: '7',
    name: 'MS. PRACHI DALVI',
    photoUrl: '/facultycse/Prachi_Dalvi_photo.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D.(Computer Engineering)(Pursuing)',
    areasOfInterest: 'AI and ML, Data Science',
    ctaOnClick: '/faculty/7',
  },
  {
    id: '8',
    name: 'MS. ADITI MALKAR',
    photoUrl: '/facultycse/aditim.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D.(Computer Science Engineering)(Pursuing)',
    areasOfInterest:
      'Data Warehouse and Mining, Cloud Computing, Social Media Analytics',
    ctaOnClick: '/faculty/8',
  },
  {
    id: '9',
    name: 'MS. SAVITA BOROLE',
    photoUrl: '/facultycse/savitab.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D.(Pursuing)',
    areasOfInterest: 'Data Science, Natural Language Processing, Data Mining',
    ctaOnClick: '/faculty/9',
  },
  {
    id: '10',
    name: 'MS. NAWAL DANDEKAR',
    photoUrl: '/facultycse/nd_pic.jpg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D.(Pursuing)',
    areasOfInterest:
      'Database Systems, Cyber Security, IoT, Computer Networks, Recommendation Systems',
    ctaOnClick: '/faculty/10',
  },
  {
    id: '11',
    name: 'MR. SUMEET SHINGI',
    photoUrl: '/facultycse/sumeetshingi.jpeg',
    ctaText: 'View Profile',
    designation: 'Assistant Professor',
    qualification: 'Ph.D.(Pursuing)',
    areasOfInterest: 'Artificial Intelligence',
    ctaOnClick: '/faculty/11',
  },
]