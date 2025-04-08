'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const publications = [
  {
    id: 1,
    authors:
      'Sushma Nagdeote; Heenakausar Pendhari; Omkar Shirsat; Raj Lad; Sujata Chiwande',
    title: 'Esports analysis with data science',
    journal: 'AIP Conf. Proc. 2764, 060013 (2023)',
    link: 'https://doi.org/10.1063/5.0144108',
  },
  {
    id: 2,
    authors: 'Praditi Rede; Sahaana Iyer; Sheetal Sharma; Sujata Deshmukh',
    title:
      'Blockchain Based Identity Management System Using Cryptography and Steganography',
    journal: 'Publisher: IEEE',
    doi: '10.1109/ICIT58056.2023.10225957',
  },
  {
    id: 3,
    authors:
      'Pranav Gangurde, Melita Japhet. Clafacio Lobo, Nilesh Patil, Prachi Patil',
    title:
      'ResStorage - Blockchain Based Decentralized Resume Storage Application',
    journal: 'in 2022 IEEE World Conference on Applied Intelligence and Computing (AIC), August 2022',
  },
  {
    id: 4,
    authors:
      'Varad Patil, Dhrumil Shah, Yash Sankpal, Prajakta Dhamanskar, Prajakta Bhangale',
    title:
      'EARTHQUAKE MAGNITUDE PREDICTION USING NEURAL NETWORKS',
    journal:
      'Volume No. 14, Issue- 5 , October - December 2022 in Samriddhi: A Journal of Physical Sciences, Engineering and Technology, Impact Factor: 6.6, UGC Care Approved, Peer Reviewed and Referred Journal',
  },
  {
    id: 5,
    authors:
      'Robin Lobo, Sonali Joshi, Joel Syrus Fernandes, Prajakta Bhangale, Prajakta Dhamanskar',
    title:
      'A COMPUTABLE STUDY ON TACTICS TOWARDS CRIME PREDICTION AND ANALYSIS',
    journal:
      'Volume No. 14, Issue- 5 , October - December 2022 in Samriddhi: A Journal of Physical Sciences, Engineering and Technology, Impact Factor: 6.6, UGC Care Approved, Peer Reviewed and Referred Journal',
  },
  {
    id: 6,
    authors:
      'Tanisha Harry Braganza; Fatima Felix Pereira; Sameeksha Pravin Rane; Kranti Wagle',
    title: 'Multipurpose Application for the Visually Impaired',
    journal: '2022 2nd Asian Conference on Innovation in Technology (ASIANCON),26-28 August 2022',
  },
  {
    id: 7,
    authors: 'Sumit Kothari, Sujata Deshmukh, Samarth Mehta',
    title:
      'Comparison of Age, Gender and Ethnicity Prediction Using Traditional CNN and Transfer Learning',
    journal:
      '13th IEEE INTERNATIONAL CONFERENCE ON COMPUTING, COMMUNICATION AND NETWORKING TECHNOLOGIES (ICCCNT) 2022, October 3rd - 5th, 2022',
  },
]

const Publications: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          Research Publications
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>
      
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 rounded-lg bg-[#F5F8FF] p-4">
          <h3 className={`${zilla.className} mb-2 text-xl font-semibold text-[#131929]`}>
            Publications for the year 2023-24
          </h3>
          <p className="text-gray-700">
            Recent research publications by faculty members and students of the Computer Engineering Department.
          </p>
        </div>
        
        <div className="space-y-6">
          {publications.map((publication) => (
            <div key={publication.id} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md">
              <div className="flex items-start">
                <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#131929] text-white">
                  {publication.id}
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-[#131929]">
                    {publication.title}
                  </h4>
                  <p className="mb-1 text-sm font-medium text-gray-600">
                    <span className="font-bold">Authors:</span> {publication.authors}
                  </p>
                  <p className="mb-3 text-sm italic text-gray-700">
                    {publication.journal}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-[#F5F8FF] px-3 py-1 text-sm font-medium text-[#131929] transition-colors hover:bg-[#E3EBFF]"
                      >
                        <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Publication
                      </a>
                    )}
                    {publication.doi && (
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-[#F5F8FF] px-3 py-1 text-sm font-medium text-[#131929] transition-colors hover:bg-[#E3EBFF]"
                      >
                        <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                        </svg>
                        DOI: {publication.doi}
                      </a>
                    )}
                  </div>
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