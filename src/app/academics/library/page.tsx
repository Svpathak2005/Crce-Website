import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { Book, Clock, Phone, Users } from 'lucide-react'
import Navigation from '@/components/navigation'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Page = () => {
  const navigationItems = [
    { label: 'Library Overview', url: '/academics/library' },
  ]

  const quickLinks = [
    {
      label: 'Fr. Agnel College Library Blogs',
      url: 'http://fragnelcollegelibrary.blogspot.com/',
    },
    {
      label: 'Online Library Catalog (WebOPAC)',
      url: 'http://pustak.fragnel.edu.in:4040',
    },
    {
      label: 'PG Students Resource Hub - PG Pathsala',
      url: 'http://epgp.inflibnet.ac.in/',
    },
    {
      label: 'Rare Books Society of India',
      url: 'http://www.rarebooksocietyofindia.org/',
    },
    { label: 'IEEE Xplore', url: 'http://www.ieee.org/ieeexplore' },
    { label: 'ASME', url: 'http://asmedigitalcollection.asme.org/' },
    { label: 'National Digital Library', url: 'https://ndl.iitkgp.ac.in/' },
    { label: 'Knimbus e-Library', url: 'http://frcrce.knimbus.com' },
    {
      label: 'Question Paper Archive - Before 2021',
      url: '/questionpaper/ArchUE.php',
    },
    {
      label: 'May-22, Dec-22, May-23 and Honors University Papers',
      url: '/index.php/may-22-dec-22-and-honors-university-papers',
    },
    {
      label: 'AICTE recommended e-Books [Free Download]',
      url: 'https://ekumbh.aicte-india.org/index.php',
    },
  ]

  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-gray-50 to-[#E5F0FF] text-gray-900">
      <div
        className="flex h-full w-full flex-col bg-linear-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row"
        id="library"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-10 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            LIBRARY
          </h1>
          <Navigation items={navigationItems} />
        </div>
        <div className="relative mb-8 mt-8 flex w-full flex-col justify-center space-y-6 rounded-lg bg-white p-8 shadow-2xl md:mb-16 md:mr-16 md:mt-32 md:w-1/3 lg:p-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-[#4a90e2] px-6 py-2 text-white">
            <h2
              className={`${zilla.className} text-xl font-semibold md:text-2xl`}
            >
              Contact Details
            </h2>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Ms. G. Jothilakshmi, Librarian
          </p>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Phone className="mr-2" /> 022-642114114
          </div>
          <div className="mt-6 rounded-lg bg-gray-100 p-4">
            <h3
              className={`${zilla.className} mb-2 text-lg font-semibold text-[#001f3f] md:text-xl`}
            >
              Library Hours
            </h3>
            <div className="flex items-center">
              <Clock className="mr-2 text-[#4a90e2]" />
              <p className="text-sm text-gray-600 md:text-base">
                Monday - Friday: 8:15 AM to 6:00 PM (Non Exam Period) <br />
                Monday - Friday: 8:15 AM to 7:00 PM (Exam Period) <br />
                Saturday: 8:15 AM to 4:30 PM
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-gray-100 p-4">
            <h3
              className={`${zilla.className} mb-2 text-lg font-semibold text-[#001f3f] md:text-xl`}
            >
              Committee Members
            </h3>
            <div className="flex items-center">
              <Users className="mr-2 text-[#4a90e2]" />
              <p className="text-sm text-gray-600 md:text-base">
                Chairman: Dr. V.S. Jorapur <br />
                Convenor/Secretary: Mrs. G. Jothilakshmi <br />
                Members: Prof. Prasad Lalit, Prof. Sushma Nagdeote, Prof.
                Supriya Kamoji, Prof. Sarika Davare, Mr. Amitkumar Sonawane, Ms.
                Triveni Naik
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="hidden w-full border-r border-gray-200 p-6 md:block md:w-1/4 lg:p-8">
          <h2
            className={`${zilla.className} mb-6 text-xl font-bold text-[#001f3f] lg:text-2xl`}
          >
            Quick Links
          </h2>
          <nav className="flex flex-col">
            {quickLinks.map(({ label, url }, index) => (
              <Link
                key={index}
                href={url}
                className="border-b border-gray-200 py-2 text-sm text-gray-600 hover:text-[#001f3f] lg:text-base"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="grow p-6 text-[#534a43] md:p-8 lg:p-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <h2
                className={`${zilla.className} mb-4 text-3xl font-bold text-[#001f3f] md:text-4xl lg:text-5xl`}
              >
                Library Services & Facilities
              </h2>
              <p className="mb-6 text-base leading-relaxed md:text-lg">
                The library offers a wide range of services and facilities to
                its users, including home lending of books, open access to
                books, reference and information systems, a book bank scheme,
                reservation of books, and more. Below is a list of all available
                services:
              </p>
              <ul className="list-disc pl-5 text-base leading-relaxed md:text-lg">
                <li>Home Lending of Books</li>
                <li>Open Access of Books</li>
                <li>Reference and information system</li>
                <li>Book bank scheme</li>
                <li>Reservation of Books</li>
                <li>Display of New Arrival of Books</li>
                <li>Current Awareness system (CAS)</li>
                <li>Selective dissemination of Information (SDI)</li>
                <li>Reprographic Facility</li>
                <li>Online Public Access Catalogue (Web OPAC)</li>
                <li>Internet Facility</li>
                <li>E-Journals, Ebooks</li>
                <li>Bound Volume Periodicals</li>
                <li>Display of Current content of Journals</li>
                <li>Availability of Syllabus and question papers</li>
                <li>Multimedia center</li>
                <li>Newspaper clippings</li>
                <li>CD’s of Technical topics</li>
                <li>Wi-fi facility</li>
                <li>CCTV Facility</li>
                <li>National Digital library</li>
                <li>Newspapers</li>
              </ul>
              <h2
                className={`${zilla.className} mb-4 mt-8 text-3xl font-bold text-[#001f3f] md:text-4xl lg:text-5xl`}
              >
                User Orientation & Book Exhibition
              </h2>
              <p className="mb-6 text-base leading-relaxed md:text-lg">
                First-year students are given orientation about the library
                rules, services, and facilities. They are taken on a library
                tour, informed about various sections, and the rules to be
                followed. Additionally, a book exhibition is organized for
                students to explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
