'use client'
import { Calendar, ChevronRight, ChevronLeft, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Import the server function
import getNews, { News, NewsResponse } from '@/app/api/news' // Update with the correct import path
import getEvents, { Events } from '@/app/api/events' // Update with the correct import path
import { div } from 'framer-motion/client'

// Happenings (News) Component
const Happenings = () => {
  const [selectedNews, setSelectedNews] = useState<number | null>(null)
  const [newsData, setNewsData] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
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
          // ... other static news items
        ]

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(news.length / itemsPerPage)

  return (
    <div id="news" className="mt-5 w-full bg-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {currentItems.map((item, index) => (
              <div key={index}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-64 overflow-hidden rounded-lg bg-white shadow-xs transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  <div>
                    <img
                      src={`${process.env.NEXT_PUBLIC_ASSET_URL}${item.imageUrl}`}
                      alt="News Image"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <p className="text-sm font-medium text-white/80">
                      {item.date}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCardClick(indexOfFirstItem + index)}
                      className="mt-2 rounded-md bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={false}
          animate={{ opacity: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </motion.button>

          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(index + 1)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-50"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>

      {selectedNews !== null && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-white"
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
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [eventsData, setEventsData] = useState<Events[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getEvents()
        setEventsData(result?.data ?? [])
        setError(null)
      } catch (err) {
        setError('Failed to load events data')
        console.error('Error fetching events:', err)
        setEventsData([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleEventClick = (index: number) => {
    setSelectedEvent(index)
  }

  const closePopup = () => {
    setSelectedEvent(null)
  }

  if (loading) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        Loading events...
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
  const events =
    eventsData.length > 0
      ? eventsData.map((item) => ({
          date: new Date(item.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
          title: item.title,
          description: item.description,
          imageUrl: item.imageUrl || '/placeholder-image.jpg',
        }))
      : [
          {
            date: '01 Jan 2023',
            title: 'Event Title 1',
            description: 'Event Description 1',
            imageUrl: '/placeholder-image.jpg',
          },
          {
            date: '02 Feb 2023',
            title: 'Event Title 2',
            description: 'Event Description 2',
            imageUrl: '/placeholder-image.jpg',
          },
          // Your existing static events can go here as fallback
        ]

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(events.length / itemsPerPage)

  return (
    <div id="events" className="mt-5 w-full bg-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {currentItems.map((item, index) => (
              <div key={index}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-64 overflow-hidden rounded-lg bg-white shadow-xs transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  <div>
                    <img
                      src={`${process.env.NEXT_PUBLIC_ASSET_URL}${item.imageUrl}`}
                      alt="events Image"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <p className="text-sm font-medium text-white/80">
                      {item.date}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEventClick(indexOfFirstItem + index)}
                      className="mt-2 rounded-md bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ... existing pagination controls ... */}
      </div>

      {/* Event Details Modal */}
      {selectedEvent !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}${events[selectedEvent]?.imageUrl}`}
              alt={events[selectedEvent]?.title}
              className="h-[400px] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {events[selectedEvent]?.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {events[selectedEvent]?.date}
              </p>
              <p className="mt-4 text-gray-700">
                {events[selectedEvent]?.description}
              </p>
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/30"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
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
        {['news', 'events'].map((tab) => (
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
      </div>
    </div>
  )
}

export default Newsandupcoming
