'use client';

import Image from 'next/image';
import { Zilla_Slab } from 'next/font/google';
import { useState } from 'react';

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

const members = [
  { name: 'Alice Johnson', position: 'President', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Bob Smith', position: 'Vice President', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Charlie Brown', position: 'Secretary', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Diana Miller', position: 'Treasurer', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Ethan Ray', position: 'Coordinator', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Fiona Hall', position: 'Designer', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'George White', position: 'Technical Head', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Hannah Scott', position: 'Logistics', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Ian Black', position: 'Marketing', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Julia Adams', position: 'Sponsorship', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Kevin Moore', position: 'Tech Support', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Laura Hill', position: 'Outreach', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Michael King', position: 'Advisor', class: 'TE Comps A', image: '/dummy-user.jpg' },
  { name: 'Nina Reed', position: 'Strategist', class: 'TE Comps A', image: '/dummy-user.jpg' }
];

const events = [
  {
    name: 'Tech Talk',
    date: '2025-03-01',
    time: '10:00 AM',
    image: '/event.jpg',
    description: 'This Tech Talk brings together esteemed professionals...',
    pdf: '/report.pdf'
  },
  {
    name: 'CodeFest',
    date: '2025-04-10',
    time: '02:00 PM',
    image: '/event2.jpg',
    description: 'CodeFest is an intensive 24-hour hackathon...',
    pdf: '/report2.pdf'
  },
  {
    name: 'Design Sprint',
    date: '2025-05-15',
    time: '01:00 PM',
    image: '/event3.jpg',
    description: 'A fast-paced collaborative workshop to create design prototypes.',
    pdf: '/report3.pdf'
  },
  {
    name: 'AI Symposium',
    date: '2025-06-20',
    time: '11:30 AM',
    image: '/event4.jpg',
    description: 'An advanced forum for discussing breakthroughs in artificial intelligence.',
    pdf: '/report4.pdf'
  },
  {
    name: 'Startup Pitch Day',
    date: '2025-07-12',
    time: '03:00 PM',
    image: '/event5.jpg',
    description: 'Students pitch innovative startups to mentors and investors.',
    pdf: '/report5.pdf'
  },
  {
    name: 'Won Coding Contest',
    date: '2025-04-24',
    time: '11:00 AM',
    image: '/event6.jpg',
    description: 'A stock brokerage company wants to provide a secure, scalable API solution...',
    pdf: '/report6.pdf'
  },
  {
    name: 'Competitive Coding',
    date: '2025-04-30',
    time: '04:00 PM',
    image: '/event7.jpg',
    description: 'Competitive programming contest hosted by the GDSC...',
    pdf: '/report7.pdf'
  },
  {
    name: 'Cloud Workshop',
    date: '2025-05-22',
    time: '12:00 PM',
    image: '/event8.jpg',
    description: 'Hands-on workshop covering AWS and cloud computing basics.',
    pdf: '/report8.pdf'
  }
];

export default function CouncilDetails() {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const visibleMembers = showAllMembers ? members : members.slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col">
      <main className={`flex-grow bg-white pt-[180px] px-8 pb-[140px] ${zilla.className}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-4">
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-4">Council Dummy Name</h1>
            <p className="text-lg text-gray-600">
              Short information about the council goes here. This text describes the council's focus, history, and role in the institution.
            </p>
          </div>
          <div className="w-[150px] h-[150px] border-2 border-gray-300 rounded-xl flex items-center justify-center overflow-hidden mt-2 md:mt-0 bg-white z-10 relative">
            <Image src="/dummy-logo.png" alt="Council Logo" width={150} height={150} className="object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12">
          <div className="bg-white shadow-md p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Founded</h3>
            <p>2020</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Contact</h3>
            <p>council@email.com</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Phone</h3>
            <p>+91 9876543210</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-10 mb-4">Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {visibleMembers.map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all text-center">
              <Image src={member.image} alt={member.name} width={80} height={80} className="mx-auto rounded-full mb-2" />
              <p className="font-semibold">{member.name}</p>
              <p className="text-gray-600 text-sm">{member.position}</p>
              <p className="text-gray-500 text-xs">{member.class}</p>
            </div>
          ))}
        </div>
        {!showAllMembers && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAllMembers(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
            >
              View More
            </button>
          </div>
        )}

        <h2 className="text-3xl font-bold mt-14 mb-6">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative h-[420px] perspective"
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            >
              <div
                className={`transition-transform duration-700 transform-style preserve-3d w-full h-full relative ${
                  flippedIndex === index ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-white shadow-lg rounded-xl p-4">
                  <Image
                    src={event.image}
                    alt={event.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="mt-4 font-bold text-xl">{event.name}</h3>
                  <p className="text-sm text-gray-500">
                    {event.date} | {event.time}
                  </p>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white shadow-xl rounded-xl p-4 flex flex-col justify-between">
                  <p className="text-sm text-gray-800 overflow-auto mb-4">{event.description}</p>
                  <a
                    href={event.pdf}
                    download
                    className="block mx-auto bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-full"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-6">
        © 2025 Your College | All Rights Reserved
      </footer>

      {/* Tailwind extension for 3D flip */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
