'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

const Newsandupcoming = () => {
  useEffect(() => {
    const newsBtn = document.getElementById('newsBtn')
    const eventsBtn = document.getElementById('eventsBtn')
    const deadlinesBtn = document.getElementById('deadlinesBtn')
    const contentArea = document.getElementById('contentArea')

    if (newsBtn && eventsBtn && deadlinesBtn && contentArea) {
      const handleClick = (content: string) => {
        contentArea.innerHTML = `<p>${content}</p>`
      }

      newsBtn.addEventListener('click', () =>
        handleClick(`
        <div class="mb-8">
 
    <div class="flex flex-col md:flex-row gap-4">
      <Image src="/ssr.png" alt="img" width={300} height={200} className="object-cover rounded-lg" />
      <div>
        <p class="text-gray-600 mb-2
        ">July 9, 2024</p>
        <h2 class="text-xl font-semibold text-white mb-2">Principal Prof. Surendra Singh Rathod of Fr. Conceicao Rodrigues College of Engineering Highlights Joyful Learning and Academic Excellence Post-Autonomy</h2>
        <p class="text-gray-700">Fr. Conceicao Rodrigues College Of Engineering achieved an impressive milestone, securing the 3rd position among the top engineering colleges in Mumbai in the year 2024.  </p>
      </div>
    </div>
    </div>
      `)
      )

      eventsBtn.addEventListener('click', () => handleClick('Events'))
      deadlinesBtn.addEventListener('click', () => handleClick('Deadlines'))

      // Cleanup event listeners on component unmount
      return () => {
        newsBtn.removeEventListener('click', () => handleClick('News '))
        eventsBtn.removeEventListener('click', () => handleClick('Events '))
        deadlinesBtn.removeEventListener('click', () =>
          handleClick('Deadlines ')
        )
      }
    }
  }, [])

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center font-serif text-4xl text-gray-200">
          News & Upcoming Events
        </h1>

        <div className="mb-10 flex items-center justify-center gap-8">
          <button
            id="newsBtn"
            className="bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:bg-blue-700 focus:text-white focus:ring-2 focus:ring-blue-700"
          >
            News
          </button>
          <button
            id="eventsBtn"
            className="bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:bg-blue-700 focus:text-white focus:ring-2 focus:ring-blue-700"
          >
            Events
          </button>
          <button
            id="deadlinesBtn"
            className="bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:bg-blue-700 focus:text-white focus:ring-2 focus:ring-blue-700"
          >
            Deadlines
          </button>
        </div>

        <div id="contentArea" className="mt-6 text-center text-lg">
          Content
        </div>
      </div>
    </div>
  )
}

export default Newsandupcoming
