'use client'
import React from 'react'
import Image from 'next/image'

interface FacultyTabProps {
  name: string
  photoUrl: string
  ctaText: string
  designation: string
  description: string
  ctaOnClick: () => void
}

export const FacultyTab: React.FC<FacultyTabProps> = ({
  name,
  photoUrl,
  ctaText,
  designation,
  description,
  ctaOnClick,
}) => {
return (
    <div className="rounded-xl bg-white p-4 shadow-sm flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center justify-center">
            <Image
                src={photoUrl}
                alt={name}
                className="h-[25vh] w-[13vw] rounded-full"
                width={200}
                height={200}
            />
        </div>
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="mb-4 font-semibold text-gray-700">{designation}</p>
        <p className="mb-4 text-gray-900">{description}</p>
        <button
            className="rounded bg-yellow-400 px-4 py-2 text-white hover:bg-blue-600  "
            onClick={ctaOnClick}
        >
            {ctaText}
        </button>
    </div>
)
}

// --------------------------------------------------------------------------------------------

export const FacultyTabData = [
  {
    id: '1',
    name: 'Dr. A. K. Agarwal',
    photoUrl: '/ssr3.png',
    ctaText: 'View Profile',
    designation: 'HOD',
    description:
      'Dr. A. K. Agarwal is the Head of Department of Computer Science and Engineering at Fr.CRCE, Indore.',
    ctaOnClick: () => {
      window.location.href = '/faculty/1'
    },
  },
  {
    id: '2',
    name: 'Dr. S. S. Rathore',
    photoUrl: '/ssr3.png',
    ctaText: 'View Profile',
    designation: 'Professor',
    description:
      'Dr. S. S. Rathore is a Professor of Computer Science and Engineering at Fr.CRCE, Indore.',
    ctaOnClick: () => {
      window.location.href = '/faculty/2'
    },
  },
    {
        id: '3',
        name: 'Dr. A. K. Agarwal',
        photoUrl: '/ssr3.png',
        ctaText: 'View Profile',
        designation: 'HOD',
        description:
        'Dr. A. K. Agarwal is the Head of Department of Computer Science and Engineering at Fr.CRCE, Indore.',
        ctaOnClick: () => {
        window.location.href = '/faculty/3'
        },
    },
    {
        id: '4',
        name: 'Dr. S. S. Rathore',
        photoUrl: '/ssr3.png',
        ctaText: 'View Profile',
        designation: 'Professor',
        description:
        ' Dr. S. S. Rathore is a Professor of Computer Science and Engineering at Fr.CRCE, Indore.',
        ctaOnClick: () => {
        window.location.href = '/faculty/4'
        },
    },
    {
        id: '5',
        name: 'Dr. A. K. Agarwal',
        photoUrl: '/ssr3.png',
        ctaText: 'View Profile',
        designation: 'HOD',
        description:
        'Dr. A. K. Agarwal is the Head of Department of Computer Science and Engineering at Fr.CRCE, Indore.',
        ctaOnClick: () => {
        window.location.href = '/faculty/5'
        },
    },
    {
        id: '6',
        name: 'Dr. S. S. Rathore',
        photoUrl: '/ssr3.png',
        ctaText: 'View Profile',
        designation: 'Professor',
        description:
        'Dr. S. S. Rathore is a Professor of Computer Science and Engineering at Fr.CRCE, Indore.',
        ctaOnClick: () => {
        window.location.href = '/faculty/6'
        },
    },
    {
        id: '7',
        name: 'Dr. A. K. Agarwal',
        photoUrl: '/ssr3.png',
        ctaText: 'View Profile',
        designation: 'HOD',
        description:
        'Dr. A. K. Agarwal is the Head of Department of Computer Science and Engineering at Fr.CRCE, Indore.',
        ctaOnClick: () => {
        window.location.href = '/faculty/7'
        },
    },
    {
        id: '8',
        name: 'Dr. S. S. Rathore',
        photoUrl: '/ssr3.png',
        ctaText: 'View Profile',
        designation: 'Professor',
        description:
        'Dr. S. S. Rathore is a Professor of Computer Science and Engineering at Fr.CRCE, Indore.',
        ctaOnClick: () => {
        window.location.href = '/faculty/8'
        },
    },
  // Add more faculty data as needed
]

// --------------------------------------------------------------------------------------------

const FacultyGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 lg:grid-cols-2">
      {FacultyTabData.map((faculty) => (
        <FacultyTab
          key={faculty.id}
          name={faculty.name}
          photoUrl={faculty.photoUrl}
          ctaText={faculty.ctaText}
          designation={faculty.designation}
          description={faculty.description}
          ctaOnClick={faculty.ctaOnClick}
        />
      ))}
    </div>
  )
}

export default FacultyGrid
