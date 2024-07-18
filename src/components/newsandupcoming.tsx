'use client'
import React, { useState } from 'react'

const Happenings = () => {
  const events = [
    {
      date: '9 Jun 2024',
      title:
        'Fr. Conceicao Rodrigues College Of Engineering achieved an impressive milestone, securing the 3rd position among the top engineering colleges in Mumbai in the year 2024.',
      imageUrl: '/ssr.png',
    },
    {
      date: '5th July 2024',
      title:
        'In recognition of the contribution towards ‘Industry Academia Community',
      imageUrl: '/ssr2.png',
    },
    {
      date: '',
      title: '',
      imageUrl: '/ssr.png',
    },
    {
      date: '',
      title: '',
      imageUrl: '/ssr2.png',
    },
    {
      date: '',
      title: '',
      imageUrl: '/ssr2.png',
    },
    {
      date: '',
      title: '',
      imageUrl: '/ssr2.png',
    },
  ]

  return (
    <div className="mt-5 w-full bg-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="h-64 overflow-hidden rounded-lg bg-white shadow-sm"
              style={{
                backgroundImage: `url(${event.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex h-full flex-col justify-end bg-black bg-opacity-50 p-4">
                <p className="mb-2 text-sm text-gray-200">{event.date}</p>
                <h3 className="line-clamp-2 text-base font-semibold text-white">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Newsandupcoming = () => {
  const [activeTab, setActiveTab] = useState('news')

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab)
  }

  return (
    <div className="w-screen max-w-full bg-white px-4 py-8">
      <div className="relative mb-8 mt-10 text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 border-t border-gray-300"></div>
        </div>
        <h1 className="relative z-10 inline-block bg-white px-4 font-serif text-4xl text-gray-800">
          News & Upcoming Events
        </h1>
      </div>

      <div className="mb-10 flex items-center justify-center gap-8">
        <button
          className={`select-none rounded-sm bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-800 focus:z-10 focus:bg-blue-800 focus:text-white ${
            activeTab === 'news' ? 'text-blue-700' : ''
          }`}
          onClick={() => handleTabClick('news')}
        >
          News
        </button>
        <button
          className={`select-none rounded-sm bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-800 focus:z-10 focus:bg-blue-800 focus:text-white ${
            activeTab === 'events' ? 'text-blue-700' : ''
          }`}
          onClick={() => handleTabClick('events')}
        >
          Events
        </button>
        <button
          className={`select-none rounded-sm bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-800 focus:z-10 focus:bg-blue-800 focus:text-white ${
            activeTab === 'deadlines' ? 'text-blue-700' : ''
          }`}
          onClick={() => handleTabClick('deadlines')}
        >
          Deadlines
        </button>
      </div>

      <div id="contentArea" className="mt-6 text-center text-lg">
        {activeTab === 'news' && <Happenings />}
        {activeTab === 'events' && <p>Events</p>}
        {activeTab === 'deadlines' && <p>Deadlines</p>}
      </div>
    </div>
  )
}

export default Newsandupcoming
