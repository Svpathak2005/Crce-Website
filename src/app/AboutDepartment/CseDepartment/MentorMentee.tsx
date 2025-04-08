'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const MentorMentee = () => {
  const mentorshipData = [
    {
      faculty: 'Dr. Sujata Deshmukh',
      specialization: 'Data Mining, Machine Learning, Blockchain',
      menteeCount: '20',
      menteeGroups: 'Senior Year (SE, TE, BE)',
      meetingFrequency: 'Bi-weekly',
      activities: 'Academic guidance, Career counseling, Research mentorship',
    },
    {
      faculty: 'Dr. Sunil Surve',
      specialization: 'AI, Machine Learning, Robotics, Cyber Security',
      menteeCount: '18',
      menteeGroups: 'All Years (FE, SE, TE, BE)',
      meetingFrequency: 'Monthly',
      activities: 'Technical skill development, Industry connect, Project guidance',
    },
    {
      faculty: 'Dr. Brijmohan Daga',
      specialization: 'Software Engineering, Artificial Intelligence',
      menteeCount: '15',
      menteeGroups: 'Junior Year (FE, SE)',
      meetingFrequency: 'Weekly',
      activities: 'Academic planning, Skill development, Personal counseling',
    },
    {
      faculty: 'Ms. Merly Thomas',
      specialization: 'Computer Networks, Security & Distributed Computing',
      menteeCount: '22',
      menteeGroups: 'All Years (FE, SE, TE, BE)',
      meetingFrequency: 'Bi-weekly',
      activities: 'Academic progress monitoring, Technical seminars, Career guidance',
    },
    {
      faculty: 'Dr. Ashok M. Kanthe',
      specialization: 'Wireless Network Security, Cyber Security, Machine Learning',
      menteeCount: '17',
      menteeGroups: 'Senior Year (TE, BE)',
      meetingFrequency: 'Monthly',
      activities: 'Research guidance, Publication support, Industry exposure',
    },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          Mentor-Mentee Program
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>
      
      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          The Mentor-Mentee program at the Computer Engineering Department provides personalized guidance to students throughout their academic journey. Each faculty member mentors a group of students, offering academic and career advice, monitoring their progress, and supporting their overall development.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Faculty Mentor
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Specialization
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Number of Mentees
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Mentee Groups
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Meeting Frequency
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Mentorship Activities
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mentorshipData.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#131929]">
                    {data.faculty}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.specialization}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-center text-gray-700">
                    {data.menteeCount}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.menteeGroups}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.meetingFrequency}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.activities}
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

export default MentorMentee