'use client'
import { Calendar, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

// Happenings (News) Component
const Happenings = () => {
  const news = [
    {
      date: '9 Jun 2024',
      title:
        'Fr. Conceicao Rodrigues College Of Engineering achieved an impressive milestone, securing the 3rd position among the top engineering colleges in Mumbai in the year 2024.',
      imageUrl: '/ssr2.png',
    },
    {
      date: '5th July 2024',
      title:
        'We , the Fr. CRCE extend our heartfelt gratitude for your contributions and commitment. Your presence has made a lasting impact, and we wish you continued success and fulfillment in your future endeavors.Happy Farewell.',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D22AQE23ch8dhe_Lg/feedshare-shrink_1280/feedshare-shrink_1280/0/1725991344448?e=1729123200&v=beta&t=B5e6u3TOfU7tGEU-97QYKERb4zOgDvTaKAWGgRFSBqs',
    },
    {
      date: '15 Aug 2024',
      title:
        'We hosted the 26th Edition of the FR CONCEICAO RODRIGUES MEMORIAL DEBATE (CRMD) on 23rd & 24th August 24! This prestigious event had 32 formidable teams from across the nation, showcasing their unparalleled debating prowess. 🌟',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D22AQH89X7z1KvIag/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725085515956?e=1729123200&v=beta&t=qwsxm47dvjx64PFquyqQCZU2acmAUXqMQ7VIEZjQmL4',
    },
    {
      date: '25 Sep 2024',
      title:
        'We are excited to share the launch of the "Startup Clinic", an incubation center at Fr. Conceicao Rodrigues College of Engineering, powered by the University of Mumbai IDEAS Foundation!',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D22AQEiVTX3dJCMIg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725335957750?e=1729123200&v=beta&t=1L8QNSbxfbQa5qVM1yBlr5W52l2Bip3jDtVvFVzyuJU',
    },
    {
      date: '10 Oct 2024',
      title:
        'We are deeply grateful to our alumni for their invaluable support and guidance to our students.',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D22AQFyFHCAIdMhbg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719188271605?e=1729123200&v=beta&t=74ejCueEMbg5Mf9FDQnZ5mGKSSVTVPtlcUz-7FlBx2w',
    },
    {
      date: '1 Nov 2024',
      title:
        'Our upcoming TEDxCRCE event (8th Edition) scheduled for 3rd February 24, themed "Cracks in the Canvas."',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D5622AQFesUJ0xZCX9g/feedshare-shrink_1280/feedshare-shrink_1280/0/1706547776154?e=1729123200&v=beta&t=15Zt-AW17kdy9lrTzbP0MZgFGmQJVxXaW3CijLIL7y8',
    },
  ]

  return (
    <div id="news" className="mt-5 w-full bg-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <div
              key={index}
              className="group h-64 overflow-hidden rounded-lg bg-white shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex h-full flex-col justify-end bg-black bg-opacity-50 p-4 transition-all duration-300 group-hover:bg-opacity-0">
                <p className="mb-2 text-sm text-gray-200 transition-colors duration-300 group-hover:text-white">
                  {item.date}
                </p>
                <h3 className="line-clamp-2 text-base font-semibold text-white transition-all duration-300 group-hover:text-lg group-hover:text-blue-200">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Events Component
const EventCards = () => {
  const events = [
    {
      date: '1 Dec 2024',
      title: 'Annual Sports Meet 2024',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D22AQGvdYSDWKmBZQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1703087979244?e=1729123200&v=beta&t=dAf_ynCo_eB5O0VgGRiDXFQBvGOaEMgNOdvN5bLVpaQ',
    },
    {
      date: '10 sep 2024',
      title: 'Technical Fest - FrCRCE',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D22AQGFyBRVukWOFg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1725084643117?e=1729123200&v=beta&t=RDxpL6r0YSs7f1KdqIpJM94JN-VQweaAp38rFke2Irg',
    },
  ]

  return (
    <div className="mt-5 w-full bg-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="group h-64 overflow-hidden rounded-lg bg-white shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              style={{
                backgroundImage: `url(${event.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex h-full flex-col justify-end bg-black bg-opacity-50 p-4 transition-all duration-300 group-hover:bg-opacity-0">
                <p className="mb-2 text-sm text-gray-200 transition-colors duration-300 group-hover:text-white">
                  {event.date}
                </p>
                <h3 className="line-clamp-2 text-base font-semibold text-white transition-all duration-300 group-hover:text-lg group-hover:text-blue-200">
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

const DeadlineCards = () => {
  const deadlines = [
    {
      date: '15 Dec 2024',
      title: 'Submission of Project Proposals',
    },
    {
      date: '25 Dec 2024',
      title: 'Final Exams Registration Deadline',
    },
  ]

  return (
    <div className="mt-5 w-full bg-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deadlines.map((deadline, index) => (
            <div
              key={index}
              className="group h-64 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-md"
            >
              <div className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                    <p className="text-sm font-semibold text-blue-600">
                      {deadline.date}
                    </p>
                  </div>
                  <h3 className="mb-4 text-xl font-bold leading-tight text-gray-800">
                    {deadline.title}
                  </h3>
                </div>
                <button className="mt-4 flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-700">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
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
        {['news', 'events', 'deadlines'].map((tab) => (
          <button
            key={tab}
            className={`select-none rounded-sm bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:text-blue-800 focus:z-10 focus:bg-blue-800 focus:text-white ${
              activeTab === tab ? 'bg-blue-700 text-black' : 'hover:shadow-md'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div id="contentArea" className="mt-6 text-center text-lg">
        {activeTab === 'news' && <Happenings />}
        {activeTab === 'events' && <EventCards />}
        {activeTab === 'deadlines' && <DeadlineCards />}
      </div>
    </div>
  )
}

export default Newsandupcoming
