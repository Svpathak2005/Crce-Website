'use client'
import { useState } from 'react'

type DirectoryEntry = {
  srNo: number
  extNo: number
  telephoneNo: string
  department: string
}

type TelephoneDirectoryData = {
  college: DirectoryEntry[]
  polytechnic: DirectoryEntry[]
  iti: DirectoryEntry[]
  school: DirectoryEntry[]
}

const telephoneDirectoryData: TelephoneDirectoryData = {
  college: [
    {
      srNo: 1,
      extNo: 301,
      telephoneNo: '67114101',
      department: 'Principal - Dr. S.S.Rathod',
    },
    {
      srNo: 2,
      extNo: 302,
      telephoneNo: '67114102',
      department: 'TPO - Mahesh Sharma',
    },
    {
      srNo: 3,
      extNo: 304,
      telephoneNo: '67114104',
      department: 'Registrar - Shetty',
    },
    {
      srNo: 4,
      extNo: 305,
      telephoneNo: '67114105',
      department: 'Exam InCharge - Ms. Merly Thomas',
    },
    {
      srNo: 5,
      extNo: 306,
      telephoneNo: '67114106',
      department: 'CRCE - Fr. Valerian Office',
    },
    {
      srNo: 6,
      extNo: 307,
      telephoneNo: '67114107',
      department: 'H & S Staff Room - Mr. Dileep CC',
    },
    {
      srNo: 7,
      extNo: 308,
      telephoneNo: '67114108',
      department: 'Mechanic Lab',
    },
    {
      srNo: 8,
      extNo: 309,
      telephoneNo: '67114109',
      department: 'Server Room/Kanchan',
    },
    {
      srNo: 9,
      extNo: 311,
      telephoneNo: '67114111',
      department: 'Electronic - HOD - Dr. Sapna Prabhu',
    },
    {
      srNo: 10,
      extNo: 312,
      telephoneNo: '67114112',
      department: 'Automation Lab',
    },
    {
      srNo: 11,
      extNo: 313,
      telephoneNo: '67114113',
      department: 'Computers HOD - Dr. Sujata Deshmukh',
    },
    {
      srNo: 12,
      extNo: 314,
      telephoneNo: '67114114',
      department: 'Library - Mrs. Jothilakshmi',
    },
    {
      srNo: 13,
      extNo: 316,
      telephoneNo: '67114116',
      department: 'CAD/CAM Lab',
    },
    {
      srNo: 14,
      extNo: 317,
      telephoneNo: '67114117',
      department: 'Electrical Lab',
    },
    {
      srNo: 15,
      extNo: 318,
      telephoneNo: '67114118',
      department: 'Computer Lab',
    },
    {
      srNo: 16,
      extNo: 319,
      telephoneNo: '67114119',
      department: 'Internet Centre - Library',
    },
    {
      srNo: 17,
      extNo: 320,
      telephoneNo: '67114120',
      department: 'Communication Lab',
    },
    {
      srNo: 18,
      extNo: 321,
      telephoneNo: '67114121',
      department: 'Microprocessor Lab',
    },
    {
      srNo: 19,
      extNo: 322,
      telephoneNo: '67114122',
      department: 'Ckt & Power Electronics',
    },
    {
      srNo: 20,
      extNo: 323,
      telephoneNo: '67114123',
      department: 'Digital Electronics',
    },
    { srNo: 21, extNo: 324, telephoneNo: '67114124', department: 'TOM Lab' },
    {
      srNo: 22,
      extNo: 326,
      telephoneNo: '67114126',
      department: 'Chemistry Lab - Mrs Jyoti',
    },
    {
      srNo: 23,
      extNo: 327,
      telephoneNo: '67114127',
      department: 'Physics Lab',
    },
    {
      srNo: 24,
      extNo: 328,
      telephoneNo: '67114128',
      department: 'SE Lab - Mr. Jiten',
    },
    {
      srNo: 25,
      extNo: 329,
      telephoneNo: '67114129',
      department: 'Internet Technology Lab - Mr. Nilesh',
    },
    {
      srNo: 26,
      extNo: 330,
      telephoneNo: '67114130',
      department: 'Instrument Lab',
    },
    {
      srNo: 27,
      extNo: 331,
      telephoneNo: '67114131',
      department: 'Student Centre - Xerox',
    },
    { srNo: 28, extNo: 332, telephoneNo: '67114132', department: 'COA Lab' },
    {
      srNo: 29,
      extNo: 333,
      telephoneNo: '67114133',
      department: 'Adv. Comm Lab',
    },
    { srNo: 30, extNo: 334, telephoneNo: '67114134', department: 'CNC' },
    {
      srNo: 31,
      extNo: 335,
      telephoneNo: '67114135',
      department: 'Dr. V.S. Jorapur',
    },
    {
      srNo: 32,
      extNo: 336,
      telephoneNo: '67114136',
      department: 'Dr. Bhushan Patil',
    },
    {
      srNo: 33,
      extNo: 337,
      telephoneNo: '67114137',
      department: 'Staff Room AI & DS',
    },
    {
      srNo: 34,
      extNo: 338,
      telephoneNo: '67114138',
      department: 'ECS Department',
    },
    {
      srNo: 35,
      extNo: 340,
      telephoneNo: '67114140',
      department: 'Project Lab',
    },
    { srNo: 36, extNo: 341, telephoneNo: '67114141', department: 'PCB Lab' },
    {
      srNo: 37,
      extNo: 342,
      telephoneNo: '67114142',
      department: 'Mechanical - HOD',
    },
    {
      srNo: 38,
      extNo: 343,
      telephoneNo: '67114143',
      department: 'Language Lab',
    },
    {
      srNo: 39,
      extNo: 344,
      telephoneNo: '67114144',
      department: 'HOD - AI & DS - Dr. Jagruti Save',
    },
    {
      srNo: 40,
      extNo: 345,
      telephoneNo: '67114145',
      department: 'Open Source Lab',
    },
    {
      srNo: 41,
      extNo: 346,
      telephoneNo: '67114146',
      department: 'CAD/CAM - Santosh Dharman',
    },
    {
      srNo: 42,
      extNo: 348,
      telephoneNo: '67114148',
      department: 'IEDC Lab - Mr. Dileep',
    },
    {
      srNo: 43,
      extNo: 366,
      telephoneNo: '67114166',
      department: 'Mr. Kotian / Mrs. Neelam',
    },
    {
      srNo: 44,
      extNo: 367,
      telephoneNo: '67114167',
      department: 'Mr. Robert / Mr. Johnson',
    },
    {
      srNo: 45,
      extNo: 368,
      telephoneNo: '67114168',
      department: 'Exam Cell - Robert Dias',
    },
    {
      srNo: 46,
      extNo: 291,
      telephoneNo: '67114091',
      department: 'Network Security Lab',
    },
    {
      srNo: 47,
      extNo: 292,
      telephoneNo: '67114092',
      department: 'Cloud Computing Lab',
    },
    {
      srNo: 48,
      extNo: 374,
      telephoneNo: '67114174',
      department: 'Project Management & MIS Lab',
    },
    {
      srNo: 49,
      extNo: 284,
      telephoneNo: '67114084',
      department: 'Core Programming Lab',
    },
    {
      srNo: 50,
      extNo: 285,
      telephoneNo: '67114085',
      department: 'RTOS & AMP Lab',
    },
  ],

  polytechnic: [
    {
      srNo: 1,
      extNo: 251,
      telephoneNo: '67114051',
      department: 'Principal - T.V. Narayanan',
    },
    {
      srNo: 2,
      extNo: 254,
      telephoneNo: '67114054',
      department: 'Mr. T. Fernandes',
    },
    { srNo: 3, extNo: 290, telephoneNo: '67114090', department: 'Mr. Diago' },
    { srNo: 4, extNo: 255, telephoneNo: '67114055', department: 'Staff Room' },
    {
      srNo: 5,
      extNo: 256,
      telephoneNo: '67114056',
      department: 'Computer Lab',
    },
    {
      srNo: 6,
      extNo: 257,
      telephoneNo: '67114057',
      department: 'Exam Cell - Mrs. Preeti',
    },
    {
      srNo: 7,
      extNo: 258,
      telephoneNo: '67114058',
      department: 'CAD/CAM - Mr. Mangesh',
    },
    {
      srNo: 8,
      extNo: 262,
      telephoneNo: '67114062',
      department: 'Main Store - Mr. Thule',
    },
    {
      srNo: 9,
      extNo: 263,
      telephoneNo: '67114063',
      department: 'Metrology Lab',
    },
    {
      srNo: 10,
      extNo: 265,
      telephoneNo: '67114065',
      department: 'Office - Mrs. Sabina',
    },
    {
      srNo: 11,
      extNo: 267,
      telephoneNo: '67114067',
      department: 'Student Section - Ms. Minoti',
    },
  ],

  iti: [
    {
      srNo: 1,
      extNo: 350,
      telephoneNo: '67114150',
      department: 'Principal - Mr. Aranjo',
    },
    { srNo: 2, extNo: 353, telephoneNo: '67114153', department: 'Mr. Hemant' },
    { srNo: 3, extNo: 354, telephoneNo: '67114154', department: 'Mr. Vicky' },
  ],

  school: [
    { srNo: 1, extNo: 272, telephoneNo: '67114072', department: 'Principal' },
  ],
}

type CarouselButtonProps = {
  onClick: () => void
  children: React.ReactNode
  active: boolean
}

const CarouselButton = ({ onClick, children, active }: CarouselButtonProps) => (
  <button
    onClick={onClick}
    className={`mx-2 rounded p-2 ${active ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
  >
    {children}
  </button>
)

const TelephoneDirectory = () => {
  const [activeLocation, setActiveLocation] =
    useState<keyof TelephoneDirectoryData>('college')

  const handleLocationChange = (location: keyof TelephoneDirectoryData) => {
    setActiveLocation(location)
  }

  return (
    <div className="mx-auto max-w-4xl py-10">
      <div className="mb-6 flex justify-center">
        <CarouselButton
          onClick={() => handleLocationChange('college')}
          active={activeLocation === 'college'}
        >
          College
        </CarouselButton>
        <CarouselButton
          onClick={() => handleLocationChange('polytechnic')}
          active={activeLocation === 'polytechnic'}
        >
          Polytechnic
        </CarouselButton>
        <CarouselButton
          onClick={() => handleLocationChange('iti')}
          active={activeLocation === 'iti'}
        >
          ITI/ITC/CDTP
        </CarouselButton>
        <CarouselButton
          onClick={() => handleLocationChange('school')}
          active={activeLocation === 'school'}
        >
          School
        </CarouselButton>
      </div>

      <table className="min-w-full border border-gray-300 bg-white shadow-md">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Sr. No
            </th>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Extn No
            </th>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Telephone No
            </th>
            <th className="border-b px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Department
            </th>
          </tr>
        </thead>
        <tbody>
          {telephoneDirectoryData[activeLocation].map((entry) => (
            <tr key={entry.srNo} className="hover:bg-gray-100">
              <td className="border-b px-4 py-2 text-sm text-gray-600">
                {entry.srNo}
              </td>
              <td className="border-b px-4 py-2 text-sm text-gray-600">
                {entry.extNo}
              </td>
              <td className="border-b px-4 py-2 text-sm text-gray-600">
                {entry.telephoneNo}
              </td>
              <td className="border-b px-4 py-2 text-sm text-gray-600">
                {entry.department}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TelephoneDirectory
