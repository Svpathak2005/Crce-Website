'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const FDPSDPPrograms = () => {
  const programsData = [
    {
      title: 'Machine Learning & Deep Learning Applications',
      type: 'FDP',
      duration: '5 days',
      dates: 'June 15-19, 2023',
      participants: '45 faculty members from various institutes',
      sponsor: 'AICTE',
      coordinators: 'Dr. Sujata Deshmukh, Dr. Sunil Surve',
    },
    {
      title: 'Cloud Computing and DevOps',
      type: 'FDP',
      duration: '3 days',
      dates: 'July 10-12, 2023',
      participants: '32 faculty members',
      sponsor: 'Department Funded',
      coordinators: 'Ms. Merly Thomas, Dr. Ashok Kanthe',
    },
    {
      title: 'Blockchain Technology & Applications',
      type: 'SDP',
      duration: '2 days',
      dates: 'August 5-6, 2023',
      participants: '50 staff members from industry and academia',
      sponsor: 'Industry Sponsored (IBM)',
      coordinators: 'Dr. Sujata Deshmukh, Ms. Monica Khanore',
    },
    {
      title: 'IoT and Embedded Systems',
      type: 'FDP',
      duration: '5 days',
      dates: 'September 12-16, 2023',
      participants: '38 faculty members',
      sponsor: 'ISTE',
      coordinators: 'Ms. Kranti Wagle, Ms. Heena Pendhari',
    },
    {
      title: 'Cyber Security and Network Defense',
      type: 'SDP',
      duration: '3 days',
      dates: 'October 20-22, 2023',
      participants: '55 staff members from IT industry',
      sponsor: 'Department Funded',
      coordinators: 'Dr. Ashok Kanthe, Mr. Unik Lokhande',
    },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/5 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Faculty & Student Development Programs
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/5 bg-gray-300"></div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          The Computer Engineering Department regularly organizes Faculty
          Development Programs (FDPs) and Staff Development Programs (SDPs) to
          enhance the knowledge and skills of academic and industry
          professionals. These programs cover emerging technologies and
          pedagogical methods to keep pace with the evolving educational
          landscape.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Program Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Duration
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Dates
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Participants
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Sponsor
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                  Coordinators
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {programsData.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="px-6 py-4 text-sm font-medium text-[#131929]">
                    {data.title}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        data.type === 'FDP'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {data.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.duration}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.dates}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.participants}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.sponsor}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                    {data.coordinators}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FDPSDPPrograms
