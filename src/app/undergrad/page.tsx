'use client'

import Image from 'next/image'
import Industry from '@/components/industry'
import HeroSection from '@/components/hero-section'
import Newsandupcoming from '@/components/newsandupcoming'
import { Zilla_Slab } from 'next/font/google'
import ChatBot from './chatBot'
import { useState } from 'react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <main className="bg-white">
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-900 p-4 text-white shadow-lg"
        >
          FAQs
        </button>
      )}

      {isChatbotOpen && (
        <div className="fixed bottom-4 right-4 z-50 h-[500px] w-[350px] rounded-lg bg-white shadow-xl">
          <ChatBot onClose={() => setIsChatbotOpen(false)} />
        </div>
      )}

      <section className="hero relative mt-[157px] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/college2.avif"
            alt="Campus background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-950 bg-opacity-70"></div>
        </div>

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              MOULDING,
              <br />
              ENGINEERS WHO CAN
              <br />
              BUILD THE NATION.
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Join a community of innovative thinkers and future leaders at
              FR.CRCE
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-white"></div>
      </section>
      <section className="flex min-h-screen items-center p-4 md:p-8">
        <div className="w-full">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="w-full rounded-lg bg-white p-8 shadow-lg md:w-1/3">
              <h2
                className={`${zilla.className} mb-6 text-2xl font-bold text-blue-900`}
              >
                Quick Links
              </h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  ['FE Admission Process', '/admission-process'],
                  ['Education Loan', '/education-loan'],
                  ['Prospectus 23-24', '/prospectus'],
                  ['Medical Certificate', '/medical-certificate'],
                  ['Listen to Leadership team', '/leadership-team'],
                ].map(([term, url], index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <a href={url} className="font-semibold">
                      {term}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <section className="flex min-h-screen items-start bg-gray-50 p-4 md:p-8">
              <div className="w-full md:w-full">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: 'Institute Level Admission Application Form',
                      description:
                        'Apply for admission at the institute level.',
                      image: '/college.png', // add appropriate image paths
                      link: '/admission-form',
                    },
                    {
                      title: 'Video Meeting',
                      description:
                        'Join us for the video meeting (Mon-Fri 1:30 PM TO 2:30 PM',
                      image: '/college2.avif', // add appropriate image paths
                      link: '/fe-admissions',
                    },
                    {
                      title: 'FE Admission Enquiry',
                      description:
                        'Get your queries about FE admissions answered.',
                      image: '/college.png', // add appropriate image paths
                      link: '/fe-enquiry',
                    },
                    {
                      title: 'Prospectus',
                      description:
                        'View the prospectus for the academic year 23-24.',
                      image: '/college2.avif', // add appropriate image paths
                      link: '/prospectus',
                    },
                    {
                      title: 'Autonomous Curriculum - Rules and Policies',
                      description:
                        'Learn about the rules and policies of the autonomous curriculum.',
                      image: '/college.png', // add appropriate image paths
                      link: '/curriculum-rules',
                    },
                    {
                      title: 'Autonomous Curriculum Syllabus',
                      description:
                        'Explore the syllabus of the autonomous curriculum.',
                      image: '/college2.avif', // add appropriate image paths
                      link: '/curriculum-syllabus',
                    },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-6">
                        <h2 className="mb-2 text-xl font-bold text-blue-900">
                          {item.title}
                        </h2>
                        <p className="mb-8 text-gray-600">{item.description}</p>
                        <div className="bg-blue-900 px-4 py-2 text-center text-white transition-colors duration-300 hover:bg-blue-800">
                          Learn More
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
