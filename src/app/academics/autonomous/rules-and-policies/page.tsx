import React from 'react'
import { BookOpen } from 'lucide-react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const data = [
  {
    id: 1,
    title: 'Academic Rule Book',
    url: '/rules/Academic_Rule_Book_FrCRCE_2024_25.pdf',
  },
  {
    id: 2,
    title: 'Training, Internship and Placement Rule Book',
    url: '/rules/Rule_Book_training_internships_placement_2024_25.pdf',
  },
  {
    id: 3,
    title: 'Student Activities Rule Book',
    url: '/rules/Student_Activities_Rule_Book_2024_25.pdf',
  },
  {
    id: 4,
    title: 'Academic Calendar',
    url: '/rules/Academic_calender_2024_25.pdf',
  },
  {
    id: 5,
    title: 'SE/TE/BE MSE Exam Time-Table for ODD SEM',
    url: '/rules/MSE_TT_SEP-24.pdf',
  },
  {
    id: 6,
    title: 'SE/TE/BE ESE Exam Time-Table for ODD SEM',
    url: '/rules/ESE_TT_NOV-24.pdf',
  },
]

const RulesAndPolicies = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Sr. No.</th>
              <th className="px-4 py-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className="transition-colors duration-300 hover:bg-gray-100"
              >
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="flex items-center border px-4 py-2">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.title}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-linaer-to-b from-white to-[#E5F0FF] text-gray-900">
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-28 pt-36 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2x1 font-bold md:text-3xl lg:text-4xl`}
          >
            RULES AND POLICIES
          </h1>
        </div>
      </div>
      <RulesAndPolicies />
    </div>
  )
}

export default Page