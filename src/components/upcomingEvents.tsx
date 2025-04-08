'use client'
import { ChevronRight, ChevronLeft, X } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Event } from '@/app/api/events'

interface EventsProps {
  events: Event[]
}

const EventCards = ({ events }: EventsProps) => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleEventClick = (index: number) => {
    setSelectedEvent(index)
  }

  const closePopup = () => {
    setSelectedEvent(null)
  }

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(events.length / itemsPerPage)

  return (
    <div className="w-screen max-w-full bg-white px-4 py-8">
      <div className="relative mt-10 mb-8 text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 border-t border-gray-300"></div>
        </div>
        <h1 className="relative z-10 inline-block bg-white px-4 font-serif text-4xl text-gray-800">
          Upcoming Events
        </h1>
      </div>

      <div id="contentArea" className="mt-6 text-center text-lg">
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
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative h-64 overflow-hidden rounded-lg bg-white shadow-xs transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
                    >
                      <img
                        src={`${process.env.NEXT_PUBLIC_ASSET_URL}${item.image}`}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
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
        </div>
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
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}${events[selectedEvent]?.image}`}
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

export default EventCards
