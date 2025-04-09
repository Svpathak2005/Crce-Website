'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const IndustrialVisits = () => {
  const visitsData = [
    {
      company: 'TCS Innovation Labs',
      location: 'Mumbai, Maharashtra',
      date: 'August 18, 2023',
      participants: 'Third Year Computer Engineering Students (60)',
      technologies: 'AI & ML, Cloud Computing, IoT',
      outcomes: 'Exposure to industry-scale AI projects, Understanding of software development lifecycle',
      coordinator: 'Dr. Sujata Deshmukh, Ms. Merly Thomas',
    },
    {
      company: 'Infosys Development Center',
      location: 'Pune, Maharashtra',
      date: 'September 22, 2023',
      participants: 'Final Year Computer Engineering Students (55)',
      technologies: 'Blockchain, Cloud Infrastructure, Cybersecurity',
      outcomes: 'Knowledge about enterprise-level applications, Career opportunities awareness',
      coordinator: 'Dr. Ashok Kanthe, Ms. Monica Khanore',
    },
    {
      company: 'L&T Technology Services',
      location: 'Mumbai, Maharashtra',
      date: 'October 5, 2023',
      participants: 'Second Year Computer Engineering Students (65)',
      technologies: 'Embedded Systems, VLSI Design, Automation',
      outcomes: 'Practical insights into hardware-software integration, Understanding of industrial automation',
      coordinator: 'Ms. Kranti Wagle, Dr. Vijay Shelake',
    },
    {
      company: 'Microsoft India Development Center',
      location: 'Hyderabad, Telangana',
      date: 'October 15-16, 2023',
      participants: 'Final Year Computer Engineering Students (50)',
      technologies: 'Cloud Computing, DevOps, AR/VR',
      outcomes: 'Understanding of large-scale product development, Exposure to cutting-edge technologies',
      coordinator: 'Dr. Sunil Surve, Ms. Jagruti Nagaonkar',
    },
    {
      company: 'ISRO Satellite Center',
      location: 'Bengaluru, Karnataka',
      date: 'November 10-11, 2023',
      participants: 'Third & Final Year Computer Engineering Students (45)',
      technologies: 'Space Technology, Satellite Communication, Data Processing',
      outcomes: 'Exposure to mission-critical systems, Understanding of high-reliability software',
      coordinator: 'Dr. Brijmohan Daga, Ms. Sangeeta Parshionikar',
    },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          Industrial Visits
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>
      
      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          The Computer Engineering Department regularly organizes industrial visits to provide students with practical exposure to industry environments, technologies, and practices. These visits help bridge the gap between theoretical knowledge and real-world applications, enhancing students' understanding of industry expectations.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Participants
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Technologies Observed
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Learning Outcomes
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Faculty Coordinators
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {visitsData.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#131929]">
                    {data.company}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.location}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.participants}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.technologies}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.outcomes}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.coordinator}
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

export default IndustrialVisits