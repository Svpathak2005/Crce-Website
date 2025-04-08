import React from 'react'
import Link from 'next/link'
import { Zilla_Slab } from 'next/font/google'
import { Clock, Phone, Users } from 'lucide-react'
import Navigation from '@/components/navigation'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const LibraryPage = () => {
  const navigationItems = [
    { label: 'Academics', url: '/academics' },
    { label: 'Library', url: '/academics/library' },
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
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section - matches Vision & Mission page */}
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-28 pt-36 text-[#00122a]">
          <h1
            className={`mb-4 text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            LIBRARY
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto w-full px-28 py-16">
        {/* Contact Info Section */}
        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#001f3f]`}>
            Contact Information
          </h2>
          <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Librarian Info */}
              <div>
                <p className="mb-2 text-lg font-medium text-[#4a90e2]">Librarian</p>
                <p className="text-gray-700">Ms. G. Jothilakshmi</p>
                <div className="mt-2 flex items-center text-gray-700">
                  <Phone className="mr-2 h-4 w-4 text-[#4a90e2]" /> 022-642114114
                </div>
              </div>
              
              {/* Library Hours */}
              <div>
                <p className="mb-2 text-lg font-medium text-[#4a90e2]">Library Hours</p>
                <div className="text-gray-700">
                  <p>Monday - Friday: 8:15 AM to 6:00 PM</p>
                  <p>(Exam Period: 8:15 AM to 7:00 PM)</p>
                  <p>Saturday: 8:15 AM to 4:30 PM</p>
                </div>
              </div>
              
              {/* Committee Members */}
              <div>
                <p className="mb-2 text-lg font-medium text-[#4a90e2]">Committee Members</p>
                <div className="text-gray-700">
                  <p><span className="font-medium">Chairman:</span> Dr. V.S. Jorapur</p>
                  <p><span className="font-medium">Secretary:</span> Mrs. G. Jothilakshmi</p>
                  <p><span className="font-medium">Members:</span> Prof. Prasad Lalit, Prof. Sushma Nagdeote, 
                    Prof. Supriya Kamoji, Prof. Sarika Davare, Mr. Amitkumar Sonawane, 
                    Ms. Triveni Naik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Two-Column Layout for Content and Links */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Quick Links Column */}
          <div className="md:col-span-1">
            <h2 className={`mb-6 text-2xl font-bold text-[#001f3f]`}>
              Quick Links
            </h2>
            <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-[#4a90e2] hover:underline"
                      target={link.url.startsWith('http') ? "_blank" : "_self"}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Main Content Column */}
          <div className="md:col-span-2">
            {/* Library Services Section */}
            <div className="mb-12">
              <h2 className={`mb-6 text-2xl font-bold text-[#001f3f]`}>
                Library Services & Facilities
              </h2>
              <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <ul className="space-y-2">
                    {[
                      "Home Lending of Books",
                      "Open Access of Books",
                      "Reference and information system",
                      "Book bank scheme",
                      "Reservation of Books",
                      "Display of New Arrival of Books",
                      "Current Awareness system (CAS)",
                      "Selective dissemination of Information (SDI)",
                      "Reprographic Facility",
                      "Online Public Access Catalogue (Web OPAC)",
                      "Internet Facility"
                    ].map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-[#4a90e2]">•</span>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {[
                      "E-Journals, Ebooks",
                      "Bound Volume Periodicals",
                      "Display of Current content of Journals",
                      "Availability of Syllabus and question papers",
                      "Multimedia center",
                      "Newspaper clippings",
                      "CD's of Technical topics",
                      "Wi-fi facility",
                      "CCTV Facility",
                      "National Digital library",
                      "Newspapers"
                    ].map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-[#4a90e2]">•</span>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* User Orientation Section */}
            <div>
              <h2 className={`mb-6 text-2xl font-bold text-[#001f3f]`}>
                User Orientation & Book Exhibition
              </h2>
              <div className="rounded-lg bg-gray-100 p-6 shadow-lg">
                <p className="mb-4 text-gray-700">
                  First-year students are given orientation about the library
                  rules, services, and facilities. They are taken on a library
                  tour, informed about various sections, and the rules to be
                  followed.
                </p>
                <p className="text-gray-700">
                  Additionally, a book exhibition is organized for students to explore
                  new titles and research materials relevant to their courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LibraryPage