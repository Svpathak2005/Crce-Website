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
  { id: 1, title: 'Academic Rule Book', url: '#' },
  { id: 2, title: 'Training, Internship and Placement Rule Book', url: '#' },
  { id: 3, title: 'Student Activities Rule Book', url: '#' },
  { id: 4, title: 'Academic Calendar', url: '#' },
  { id: 5, title: 'SE/TE/BE MSE Exam Time-Table for ODD SEM', url: '#' },
  { id: 6, title: 'SE/TE/BE ESE Exam Time-Table for ODD SEM', url: '#' },
]

const RulesAndPolicies = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-10">
      <h2
        className={`${zilla.className} mb-6 text-4xl font-bold text-gray-800`}
      >
        Rules and Policies
      </h2>
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
                  <a href={item.url} className="text-blue-600 hover:underline">
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
    <div className="flex h-fit w-full flex-col bg-white text-gray-900">
      <div
        className="flex h-full w-full flex-col justify-center bg-gradient-to-br pt-36 from-[#001f3f] to-[#003366] md:flex-row"
        id="admission"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-center text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            Welcome to Our Institution
          </h1>
          <p
            className={`${zilla.className} mb-6 text-lg md:text-xl lg:text-2xl`}
          >
            We are committed to providing the best educational experience.
          </p>
          <button className="transform rounded-full bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl">
            Learn More
          </button>
        </div>
      </div>
      <RulesAndPolicies />
    </div>
  )
}

export default Page
