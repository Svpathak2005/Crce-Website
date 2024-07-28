'use client'
import React, { useState } from 'react'

const Happenings = () => {
  const events = [
    {
      date: '9 Jun 2024',
      title:
        'Fr. Conceicao Rodrigues College Of Engineering secured 3rd position among top engineering colleges in Mumbai.',
      imageUrl: '/ssr2.png',
    },
    {
      date: '5th July 2024',
      title: 'Recognition for contribution towards Industry Academia Community',
      imageUrl: '/ssr2.png',
    },
  ]
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <div
          key={index}
          className="group relative h-64 overflow-hidden rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg"
          style={{
            backgroundImage: `url(${event.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="mb-2 text-sm font-medium text-gray-300">
              {event.date}
            </p>
            <h3 className="text-base font-semibold text-white transition-all duration-300 group-hover:text-lg">
              {event.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

interface Event {
  date: string
  title: string
}

const EventsList: React.FC<{ events: Event[] }> = ({ events }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {events.map((event, index) => (
      <div
        key={index}
        className="rounded-lg border border-gray-200 p-4 shadow-sm transition-all hover:shadow-md"
      >
        <p className="text-sm font-semibold text-blue-600">{event.date}</p>
        <h3 className="mt-2 text-lg font-medium text-gray-900">
          {event.title}
        </h3>
      </div>
    ))}
  </div>
)

const DeadlinesList: React.FC<{ deadlines: Event[] }> = ({ deadlines }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {deadlines.map((deadline, index) => (
      <div
        key={index}
        className="rounded-lg border border-red-200 p-4 shadow-sm transition-all hover:shadow-md"
      >
        <p className="text-sm font-semibold text-red-600">{deadline.date}</p>
        <h3 className="mt-2 text-lg font-medium text-gray-900">
          {deadline.title}
        </h3>
      </div>
    ))}
  </div>
)

const Newsandupcoming = () => {
  const [activeTab, setActiveTab] = useState('news')

  const events = [
    { date: '15 Aug 2024', title: 'Annual Tech Symposium' },
    { date: '22 Sep 2024', title: 'Freshers Welcome Party' },
    { date: '10 Oct 2024', title: 'Alumni Networking Event' },
    { date: '5 Nov 2024', title: 'Inter-College Debate Competition' },
    { date: '12 Dec 2024', title: 'Winter Coding Hackathon' },
    { date: '20 Jan 2025', title: 'Industry Expert Guest Lecture Series' },
  ]

  const deadlines = [
    { date: '30 Jul 2024', title: 'Scholarship Application Deadline' },
    { date: '15 Aug 2024', title: 'Research Paper Submission' },
    { date: '1 Sep 2024', title: 'International Exchange Program Application' },
    { date: '10 Oct 2024', title: 'Campus Recruitment Registration' },
    { date: '30 Nov 2024', title: 'Winter Internship Application' },
    { date: '15 Dec 2024', title: 'Next Semester Course Registration' },
  ]

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="w-full bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center font-serif text-3xl font-bold text-gray-800 sm:text-4xl">
          News & Upcoming Events
        </h1>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {['news', 'events', 'deadlines'].map((tab) => (
            <button
              key={tab}
              className={`select-none rounded px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-lg p-6 shadow-sm">
          {activeTab === 'news' && <Happenings />}
          {activeTab === 'events' && <EventsList events={events} />}
          {activeTab === 'deadlines' && <DeadlinesList deadlines={deadlines} />}
        </div>
      </div>
    </div>
  )
}

export default Newsandupcoming
