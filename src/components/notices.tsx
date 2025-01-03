// import React from 'react'
// import { Calendar, ChevronRight, Bell, Book, GraduationCap } from 'lucide-react'

// interface Notice {
//   id: string
//   date: string
//   title: string
//   type: 'exam' | 'holiday' | 'event'
//   description: string
// }

// const notices: Notice[] = [
//   {
//     id: '1',
//     date: '15 Dec 2024',
//     title: 'Final Exams Begin',
//     type: 'exam',
//     description:
//       'Winter semester final examinations commence. Check your schedule for exact times and locations.',
//   },
//   {
//     id: '2',
//     date: '25 Dec 2024',
//     title: 'Winter Break',
//     type: 'holiday',
//     description:
//       'College closed for winter holidays. Classes resume on January 5th, 2025.',
//   },
//   {
//     id: '3',
//     date: '10 Jan 2025',
//     title: 'New Student Orientation',
//     type: 'event',
//     description:
//       'Welcome event for incoming students. Campus tour and information sessions included.',
//   },
//   {
//     id: '4',
//     date: '1 Feb 2025',
//     title: 'Spring Course Registration Opens',
//     type: 'event',
//     description:
//       'Registration for spring semester courses begins. Early registration advised for popular classes.',
//   },
//   {
//     id: '5',
//     date: '15 Mar 2025',
//     title: 'Midterm Exams Week',
//     type: 'exam',
//     description:
//       'Spring semester midterm examinations. Prepare early and check with your professors for specific details.',
//   },
// ]

// const getIconForNoticeType = (type: Notice['type']) => {
//   switch (type) {
//     case 'exam':
//       return <Book className="h-6 w-6 text-purple-600" />
//     case 'holiday':
//       return <Calendar className="h-6 w-6 text-green-600" />
//     case 'event':
//       return <Bell className="h-6 w-6 text-blue-600" />
//     default:
//       return <GraduationCap className="h-6 w-6 text-gray-600" />
//   }
// }

// const getColorForNoticeType = (type: Notice['type']) => {
//   switch (type) {
//     case 'exam':
//       return 'bg-purple-100 text-purple-800'
//     case 'holiday':
//       return 'bg-green-100 text-green-800'
//     case 'event':
//       return 'bg-blue-100 text-blue-800'
//     default:
//       return 'bg-gray-100 text-gray-800'
//   }
// }

// const NoticesSection: React.FC = () => {
//   return (
//     <section
//       id="notices"
//       className="bg-white py-12 text-black sm:py-16 lg:py-20"
//     >
//       <div className="mx-auto w-3/4 px-4 sm:px-6 lg:px-8">
//         <div className="relative mb-8 mt-10 text-center">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-3/4 border-t border-gray-300"></div>
//           </div>
//           <h1 className="relative z-10 inline-block bg-white px-4 font-serif text-4xl text-gray-800">
//             Notices
//           </h1>
//         </div>
//         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {notices.map((notice) => (
//             <div
//               key={notice.id}
//               className="group relative overflow-hidden rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:shadow-lg"
//             >
//               <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-8 transform rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-20 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
//               <div className="relative z-10 p-6">
//                 <div className="mb-4 flex items-center justify-between">
//                   <span
//                     className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getColorForNoticeType(notice.type)}`}
//                   >
//                     {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
//                   </span>
//                   <div className="flex items-center text-sm font-medium text-gray-600">
//                     <Calendar className="mr-1.5 h-4 w-4" />
//                     {notice.date}
//                   </div>
//                 </div>
//                 <div className="mb-4 flex items-center">
//                   {getIconForNoticeType(notice.type)}
//                   <h3 className="ml-2 text-xl font-bold text-gray-900">
//                     {notice.title}
//                   </h3>
//                 </div>
//                 <p className="mb-4 text-gray-600">{notice.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default NoticesSection


'use client'
import React, { useState, useEffect } from 'react';

import { Calendar, ChevronRight, Bell, Book, GraduationCap } from 'lucide-react'
interface Notice {
  id: string
  date: string
  title: string
  type: 'exam' | 'holiday' | 'event'
  description: string
}

const notices: Notice[] = [
  {
    id: '1',
    date: '15 Dec 2024',
    title: 'Final Exams Begin',
    type: 'exam',
    description:
      'Winter semester final examinations commence. Check your schedule for exact times and locations.',
  },
  {
    id: '2',
    date: '25 Dec 2024',
    title: 'Winter Break',
    type: 'holiday',
    description:
      'College closed for winter holidays. Classes resume on January 5th, 2025.',
  },
  {
    id: '3',
    date: '10 Jan 2025',
    title: 'New Student Orientation',
    type: 'event',
    description:
      'Welcome event for incoming students. Campus tour and information sessions included.',
  },
  {
    id: '4',
    date: '1 Feb 2025',
    title: 'Spring Course Registration Opens',
    type: 'event',
    description:
      'Registration for spring semester courses begins. Early registration advised for popular classes.',
  },
  {
    id: '5',
    date: '15 Mar 2025',
    title: 'Midterm Exams Week',
    type: 'exam',
    description:
      'Spring semester midterm examinations. Prepare early and check with your professors for specific details.',
  },
  {
    id: '6',
    date: '20 Mar 2025',
    title: 'Cultural Fest',
    type: 'event',
    description:
      'Annual cultural fest featuring performances, food stalls, and competitions.',
  },
  {
    id: '7',
    date: '25 Mar 2025',
    title: 'Sports Day',
    type: 'event',
    description:
      'Annual sports day with various competitions and prizes for winners.',
  },
]

const getIconForNoticeType = (type: Notice['type']) => {
  switch (type) {
    case 'exam':
      return <Book className="h-6 w-6 text-purple-600" />
    case 'holiday':
      return <Calendar className="h-6 w-6 text-green-600" />
    case 'event':
      return <Bell className="h-6 w-6 text-blue-600" />
    default:
      return <GraduationCap className="h-6 w-6 text-gray-600" />
  }
}

const getColorForNoticeType = (type: Notice['type']) => {
  switch (type) {
    case 'exam':
      return 'bg-purple-100 text-purple-800'
    case 'holiday':
      return 'bg-green-100 text-green-800'
    case 'event':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const NoticesSection: React.FC = () => {
  const [visibleNoticesCount, setVisibleNoticesCount] = useState(6)
  const [showAll, setShowAll] = useState(false)

  const updateVisibleNoticesCount = () => {
    if (window.innerWidth < 640) {
      setVisibleNoticesCount(2) // Mobile
    } else if (window.innerWidth < 768) {
      setVisibleNoticesCount(4) // Tablet
    } else {
      setVisibleNoticesCount(6) // Desktop
    }
  }

  useEffect(() => {
    updateVisibleNoticesCount()
    window.addEventListener('resize', updateVisibleNoticesCount)
    return () => window.removeEventListener('resize', updateVisibleNoticesCount)
  }, [])

  const visibleNotices = showAll
    ? notices
    : notices.slice(0, visibleNoticesCount)

  return (
    <section
      id="notices"
      className="bg-white py-12 text-black sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-3/4 px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8 mt-10 text-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 border-t border-gray-300"></div>
          </div>
          <h1 className="relative z-10 inline-block bg-white px-4 font-serif text-4xl text-gray-800">
            Notices
          </h1>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {visibleNotices.map((notice) => (
            <div
              key={notice.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="relative z-10 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getColorForNoticeType(notice.type)}`}
                  >
                    {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                  </span>
                  <div className="font medium flex items-center text-sm text-gray-600">
                    <Calendar className="mr-1.5 h-4 w-4" />
                    {notice.date}
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  {getIconForNoticeType(notice.type)}
                  <h3 className="ml-2 text-xl font-bold text-gray-900">
                    {notice.title}
                  </h3>
                </div>
                <p className="mb-4 text-gray-600">{notice.description}</p>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              View All
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default NoticesSection
