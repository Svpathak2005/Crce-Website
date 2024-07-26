'use client'
import React, { useState } from 'react'

const ProgramInfo = () => {
  const [activeTab, setActiveTab] = useState('Placements')

  const events = [
    {
      imageUrl: '/godrej.png',
    },
    {
      imageUrl: '/quantifi.png',
    },
    {
      imageUrl: '/ubs.png',
    },
    {
      imageUrl: '/carwale.png',
    },

    {
      imageUrl: '/godrej.png',
    },
    {
      imageUrl: '/quantifi.png',
    },
  ]

  const images = [
    'accectire.png',
    'colgate.jpg',
    'godrej.jpg',
    'infosis.jpg',
    'jp.png',
    'lt.png',
    'seclore.png',
    'tcs.jpg',
  ]

  const tabContents = {
    Placements: (
      <div className="mx-auto p-6 font-roboto">
        <h2 className="mb-6 text-3xl font-semibold text-gray-900">
          Placement Statiscs
        </h2>
        <p>
          Our Department has a remarkable track record when it comes to student
          placements. Year after year, a significant percentage of our graduates
          secure promising job opportunities with renowned companies in their
          respective fields. Our dedicated career services team, in
          collaboration with industry partnerships, plays a pivotal role in
          ensuring our students are well-prepared and market-ready. With a focus
          on skill development, internships, and fostering a culture of
          innovation, our department empowers students to excel in their chosen
          careers. This consistent success in student placements not only
          reflects the high quality of education we provide but also the
          enduring trust that industry leaders place in our graduates.
        </p>

        <div className="container mx-auto p-6">
          <h2 className="mb-6 text-3xl font-semibold text-gray-900">
            Placement Highest and Lowest Package
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white">
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-300 bg-gray-100 px-4 py-2 text-left">
                    Item
                  </th>
                  <th className="border-b-2 border-gray-300 bg-gray-100 px-4 py-2 text-left">
                    2022-23
                  </th>
                  <th className="border-b-2 border-gray-300 bg-gray-100 px-4 py-2 text-left">
                    2021-22
                  </th>
                  <th className="border-b-2 border-gray-300 bg-gray-100 px-4 py-2 text-left">
                    2020-21
                  </th>
                  <th className="border-b-2 border-gray-300 bg-gray-100 px-4 py-2 text-left">
                    2019-20
                  </th>
                  <th className="border-b-2 border-gray-300 bg-gray-100 px-4 py-2 text-left">
                    18-19
                  </th>
                  <th className="border-b-2 border-gray-300 bg-gray-100 px-4 py-2 text-left">
                    17-18
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border-b border-gray-200 px-4 py-2">
                    Highest Package Offered:
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    17.75 Lpa
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 30 Lpa
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 15.90 Lpa
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 27 Lacs (International Placement, Tokyo Japan)
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 15.62 Lpa
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 12.5 Lpa
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border-b border-gray-200 px-4 py-2">
                    Company Name:
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    J.P. Morgan Chase & Co. (Code For Good)
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    Razerpay
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    Browser Stack
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    Human Resocia
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    Browser Stack
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    Direct-i
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border-b border-gray-200 px-4 py-2">
                    Lowest Package Offered:
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 3.36 Lpa
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 3.1 Lpa
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 1.44 Lpa
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 3 Lpa
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 3 Lpa
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    INR 3 Lpa
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border-b border-gray-200 px-4 py-2">
                    Company Name:
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    TATA Consultancy Services (TCS Ninja)
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">Atos</td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    RPA Infotech
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    99yrs LLP
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">NSCIT</td>
                  <td className="border-b border-gray-200 px-4 py-2">NSCIT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    Recruiters: (
      <div className="w-full bg-white p-6 py-8">
        <h2 className="mb-6 font-roboto text-3xl font-semibold text-gray-900">
          Our Recruiters
        </h2>
        <div className="w-full border-t border-gray-300 pt-6 md:border-t-0 md:pl-12 md:pt-0">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-contain bg-center bg-no-repeat transition-all duration-300 ease-in-out hover:scale-110 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
                style={{ backgroundImage: `url('/company/${img}')` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    ),
    Eligibility: (
      <div className="p-6">
        <h2 className="mb-6 font-roboto text-3xl font-semibold text-gray-900">
          Eligibility
        </h2>
        <div className="font-roboto">
          <p>
            <div className="font-roboto text-base">
              <li>
                For all B. Tech programmes candidates should have appeared in
                JEE 2024 / MHTCET 2024 / PERA 2024 / MHTCET-B* 2024 / NEET* 2024
                score.
              </li>
              <li>
                Minimum 50% aggregate score in PCM/PCB* or Physics & Mathematics
                with any Technical Vocational Subject. Physics, Mathematics &
                English is Compulsory with Chemistry/Biotechnology* or
                Biology*/Technical Vocational Courses in 10+2/Class 12th or
                equivalent examination AND 50% aggregate score in Class
                12th/HSC.
              </li>
              <li>
                Reserved class category candidate belonging to Maharashtra State
                only OR Minimum 60% aggregate score in Diploma in Engineering &
                Technology in an appropriate branch from UGC approved University
                (without backlog).
              </li>
            </div>
          </p>
        </div>
      </div>
    ),
  }

  return (
    <div className="container mx-auto p-4 font-sans">
      <div className="flex flex-col bg-white shadow-lg md:flex-row">
        <div className="p-6 md:w-2/3">
          <div className="mb-4 flex border-b">
            {['Placements', 'Recruiters', 'Eligibility'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-bold ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="content text-sm">
            {tabContents[activeTab as keyof typeof tabContents]}
          </div>
        </div>
        <div className="mb-0 bg-gray-100 p-6 md:w-1/3">
          <div className="mb-0 rounded bg-blue-50 p-4">
            <h3 className="text-lg font-bold">Duration</h3>
            <p className="text-2xl text-blue-600">4 Years</p>
            <p className="text-xs text-gray-600">
              Last Date To Apply : 26 July 2024
            </p>
          </div>
          <div className="mb-4 rounded bg-blue-50 p-4">
            <h3 className="text-lg font-bold">Programme Name</h3>
            <p>B.Tech ComputerEngineering</p>
          </div>
          <div className="rounded bg-gray-800 p-4 text-white">
            <p>Fee Per Year</p>
            <h2 className="mb-2 text-2xl font-bold">Rs. 1,67,000</h2>
            <button className="mb-4 w-full rounded bg-blue-500 px-4 py-2 text-white">
              Apply Online Now
            </button>
            <div className="mb-4">
              <a href="#" className="mb-2 block text-blue-400">
                Brochure →
              </a>
              <a href="#" className="block text-blue-400">
                Course Structure →
              </a>
            </div>
            <p className="text-blue-200">Highest CTC</p>
            <p className="text-lg">INR 17.75 LPA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramInfo
