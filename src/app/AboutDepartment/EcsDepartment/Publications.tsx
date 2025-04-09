'use client'

import React, { useEffect, useState } from 'react'
import { Zilla_Slab } from 'next/font/google'
import getDepartmentPublications, {
  DepartmentPublication,
} from '@/app/api/publications'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const fallbackPublications: DepartmentPublication[] = [
  {
    id: 1,
    status: 'published',
    title: 'Esports analysis with data science',
    authors:
      'Sushma Nagdeote; Heenakausar Pendhari; Omkar Shirsat; Raj Lad; Sujata Chiwande',
    journal: 'AIP Conf. Proc. 2764, 060013 (2023)',
    link: 'https://doi.org/10.1063/5.0144108',
    department: 'computers',
    date: '2023-10-15',
  },
  {
    id: 2,
    status: 'published',
    title:
      'Blockchain Based Identity Management System Using Cryptography and Steganography',
    authors: 'Praditi Rede; Sahaana Iyer; Sheetal Sharma; Sujata Deshmukh',
    journal: 'Publisher: IEEE',
    link: 'https://doi.org/10.1109/ICIT58056.2023.10225957',
    department: 'computers',
    date: '2023-09-22',
  },
  // Add more dummy entries as needed...
]

const Publications: React.FC = () => {
  const [publications, setPublications] = useState<DepartmentPublication[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDepartmentPublications('ecs')
        setPublications(
          data.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
        )
      } catch (error) {
        console.error('Error fetching publications:', error)
        setPublications(fallbackPublications)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute top-1/2 left-0 h-px w-1/4 bg-gray-300"></div>
        <h2
          className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
        >
          Research Publications
        </h2>
        <div className="absolute top-1/2 right-0 h-px w-1/4 bg-gray-300"></div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 rounded-lg bg-[#F5F8FF] p-4">
          <h3
            className={`${zilla.className} mb-2 text-xl font-semibold text-[#131929]`}
          >
            Publications for the year 2023-24
          </h3>
          <p className="text-gray-700">
            Recent research publications by faculty members and students of the
            Electronics and Computer Science Engineering Department.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start">
                <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#131929] text-white">
                  {publication.id}
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-[#131929]">
                    {publication.title}
                  </h4>
                  <p className="mb-1 text-sm font-medium text-gray-600">
                    <span className="font-bold">Authors:</span>{' '}
                    {publication.authors}
                  </p>
                  <p className="mb-3 text-sm text-gray-700 italic">
                    {publication.journal}
                  </p>
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-[#F5F8FF] px-3 py-1 text-sm font-medium text-[#131929] transition-colors hover:bg-[#E3EBFF]"
                    >
                      <svg
                        className="mr-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View Publication
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Publications

