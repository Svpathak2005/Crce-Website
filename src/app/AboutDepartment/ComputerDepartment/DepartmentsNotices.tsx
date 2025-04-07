'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const DepartmentsNotices = () => {
  const noticesData = [
    {
      title: 'Academic Calendar Update for Semester Break',
      category: 'Academic',
      date: 'November 15, 2023',
      content: 'The semester break has been rescheduled to begin from December 20, 2023 instead of December 15, 2023. Classes will resume on January 5, 2024.',
      issuedBy: 'HoD, Computer Engineering',
      importance: 'High',
    },
    {
      title: 'Guest Lecture on "Emerging Trends in AI"',
      category: 'Event',
      date: 'November 10, 2023',
      content: 'A guest lecture by Dr. Ramesh Kumar, AI Scientist at Google, will be held on November 25, 2023 at 10:00 AM in the Seminar Hall. All third and final year students are required to attend.',
      issuedBy: 'Dr. Ashok Kanthe',
      importance: 'Medium',
    },
    {
      title: 'Project Proposal Submission Deadline',
      category: 'Academic',
      date: 'November 5, 2023',
      content: 'Final year students are reminded to submit their project proposals by November 20, 2023. Submissions after this date will not be accepted.',
      issuedBy: 'Project Coordinator',
      importance: 'High',
    },
    {
      title: 'Industry Visit Registration for Microsoft IDC',
      category: 'Industry Visit',
      date: 'October 30, 2023',
      content: 'Registration for the industrial visit to Microsoft India Development Center, Hyderabad is now open for final year students. Limited seats available. Register by November 5, 2023.',
      issuedBy: 'Industrial Visit Coordinator',
      importance: 'Medium',
    },
    {
      title: 'Internship Opportunity at TCS',
      category: 'Internship',
      date: 'October 25, 2023',
      content: 'TCS is offering summer internships for pre-final year students. Interested students can submit their resumes to the placement office by November 10, 2023.',
      issuedBy: 'Training & Placement Cell',
      importance: 'High',
    },
    {
      title: 'Mid-term Examination Schedule',
      category: 'Examination',
      date: 'October 20, 2023',
      content: 'The mid-term examination for all computer engineering courses will be conducted from November 15-20, 2023. Detailed schedule is available on the department notice board.',
      issuedBy: 'Examination Cell',
      importance: 'High',
    },
    {
      title: 'Workshop on Blockchain Technology',
      category: 'Event',
      date: 'October 15, 2023',
      content: 'A two-day workshop on Blockchain Technology and Applications will be conducted on November 5-6, 2023. Registration is mandatory for all third year students.',
      issuedBy: 'Dr. Sujata Deshmukh',
      importance: 'Medium',
    },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          Department Notices
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>
      
      <div className="rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          Important announcements, updates, and notifications from the Computer Engineering Department. Students are advised to regularly check this section for the latest information regarding academics, events, and other departmental activities.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
            <thead className="bg-[#F5F8FF]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Notice Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Content
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Issued By
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                  Importance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {noticesData.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                >
                  <td className="px-6 py-4 text-sm font-medium text-[#131929]">
                    {data.title}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      data.category === 'Academic' ? 'bg-blue-100 text-blue-800' : 
                      data.category === 'Event' ? 'bg-purple-100 text-purple-800' : 
                      data.category === 'Examination' ? 'bg-red-100 text-red-800' :
                      data.category === 'Internship' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {data.category}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {data.content}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    {data.issuedBy}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-center">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      data.importance === 'High' ? 'bg-red-100 text-red-800' : 
                      data.importance === 'Medium' ? 'bg-orange-100 text-orange-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {data.importance}
                    </span>
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

export default DepartmentsNotices