'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Internships = () => {
  const internshipData = [
    {
      company: 'J.P. Morgan Chase & Co.',
      duration: '3 Months',
      stipend: '₹40,000/month',
      position: 'Software Development, Data Analysis',
      eligibility: 'B.Tech Computer Engineering, Minimum 8 CGPA',
    },
    {
      company: 'TCS',
      duration: '6 Months',
      stipend: '₹15,000/month',
      position: 'Application Development, Cloud Computing',
      eligibility: 'B.Tech Computer Engineering, Minimum 7 CGPA',
    },
    {
      company: 'Infosys',
      duration: '2 Months',
      stipend: '₹10,000/month',
      position: 'UI/UX Design, Backend Development',
      eligibility: 'B.Tech Computer Engineering, Minimum 7.5 CGPA',
    },
    {
      company: 'Godrej',
      duration: '4 Months',
      stipend: '₹20,000/month',
      position: 'Software Testing, DevOps',
      eligibility: 'B.Tech Computer Engineering, Minimum 7 CGPA',
    },
    {
      company: 'Microsoft',
      duration: '3 Months',
      stipend: '₹45,000/month',
      position: 'Cloud Engineering, AI Development',
      eligibility: 'B.Tech Computer Engineering, Minimum 8.5 CGPA',
    },
    {
      company: 'Google',
      duration: '3 Months',
      stipend: '₹50,000/month',
      position: 'Software Engineering, ML Engineering',
      eligibility: 'B.Tech Computer Engineering, Minimum 9 CGPA',
    },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          Internship Opportunities
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>
      
      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          Our department facilitates internship opportunities for students to gain hands-on industry experience. These internships provide valuable exposure to real-world projects and professional environments, enhancing students' technical skills and employability. Below are some of the companies that regularly offer internships to our students.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Duration
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Stipend
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Position
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Eligibility
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {internshipData.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {data.company}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.duration}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.stipend}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.position}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.eligibility}
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

export default Internships