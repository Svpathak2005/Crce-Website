'use client'
import { Calendar, ChevronRight } from 'lucide-react'
import React, { useState, useEffect } from 'react'

// Import the server function
import getNews, { News, NewsResponse } from '@/app/api/news' // Update with the correct import path

// Happenings (News) Component
const Happenings = () => {
  const [selectedNews, setSelectedNews] = useState<number | null>(null)
  const [newsData, setNewsData] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getNews()
        setNewsData(result?.data ?? [])
        setError(null)
      } catch (err) {
        setError('Failed to load news data')
        console.error('Error fetching news:', err)
        setNewsData([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleCardClick = (index: number) => {
    setSelectedNews(index)
  }

  const closePopup = () => {
    setSelectedNews(null)
  }

  if (loading) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        Loading news...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-64 w-full items-center justify-center text-red-500">
        {error}
      </div>
    )
  }

  // Fallback to static data if no data is returned
  const news =
    newsData.length > 0
      ? newsData.map((item) => ({
          date: new Date(item.date_created).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
          title: item.title,
          imageUrl: item.image || '/placeholder-image.jpg',
        }))
      : [
          {
            date: '9 Jun 2024',
            title:
              'Fr. Conceicao Rodrigues College Of Engineering achieved an impressive milestone, securing the 3rd position among the top engineering colleges in Mumbai in the year 2024.',
            imageUrl: '/ssr2.png',
          },
          // ... other static news items
        ]

  return (
    <div id="news" className="mt-5 w-full bg-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-lg bg-white shadow-xs transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              onClick={() => handleCardClick(index)}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_ASSET_URL}${item.imageUrl}`}
                alt="News Image"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="opacity-50 group-hover:opacity-30 flex h-full flex-col justify-end bg-black p-4 transition-all duration-300">
                <h3 className="line-clamp-1 text-base font-semibold text-white transition-all duration-300 group-hover:text-lg group-hover:text-blue-200">
                  {item.title}
                </h3>
                <button className="mt-2 cursor-pointer rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-700">
                  View More
                </button>
                <p>{item.imageUrl}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedNews !== null && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={closePopup}
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closePopup}
            >
              &times;
            </button>
            <img
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}${news[selectedNews]?.imageUrl}`}
              alt={news[selectedNews]?.title}
              className="mb-4 h-auto w-full rounded"
            />
            <h3 className="text-xl font-bold">{news[selectedNews]?.title}</h3>
            <p className="text-sm text-gray-500">{news[selectedNews]?.date}</p>
          </div>
        </div>
      )}
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
              className="group h-64 overflow-hidden rounded-lg bg-white shadow-xs transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              style={{
                backgroundImage: `url(${event.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="bg-opacity-50 group-hover:bg-opacity-0 flex h-full flex-col justify-end bg-black p-4 transition-all duration-300">
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
              className="group h-64 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xs transition-all duration-300 ease-in-out hover:shadow-md"
            >
              <div className="flex h-full flex-col justify-between p-6">
                <div>
                  <div className="mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                    <p className="text-sm font-semibold text-blue-600">
                      {deadline.date}
                    </p>
                  </div>
                  <h3 className="mb-4 text-xl leading-tight font-bold text-gray-800">
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
      <div className="relative mt-10 mb-8 text-center">
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
            className={`rounded-sm bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-300 select-none hover:bg-gray-100 hover:text-blue-800 focus:z-10 focus:bg-blue-800 focus:text-white ${
              activeTab === tab ? 'bg-blue-700 text-white' : 'hover:shadow-md'
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
