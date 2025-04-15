'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'
import {
  Clock,
  Phone,
  Users,
  BookOpen,
  ExternalLink,
  BookMarked,
  Info,
  Calendar,
  Wifi,
  Printer,
  Search,
  Newspaper,
  Database,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Navigation from '@/components/navigation'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function LibraryPage() {
  const [showAdditionalServices, setShowAdditionalServices] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

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
    {
      label: 'IEEE Xplore',
      url: 'http://www.ieee.org/ieeexplore',
    },
    {
      label: 'ASME',
      url: 'http://asmedigitalcollection.asme.org/',
    },
    {
      label: 'National Digital Library',
      url: 'https://ndl.iitkgp.ac.in/',
    },
    {
      label: 'Knimbus e-Library',
      url: 'http://frcrce.knimbus.com',
    },
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

  const services = [
    { name: 'Home Lending of Books' },
    { name: 'Open Access of Books' },
    { name: 'Reference and information system' },
    { name: 'Book bank scheme' },
    { name: 'Reservation of Books' },
    { name: 'Display of New Arrival of Books' },
  ]

  const additionalServices = [
    { name: 'Current Awareness system (CAS)' },
    { name: 'Selective dissemination of Information (SDI)' },
    { name: 'Reprographic Facility' },
    { name: 'Online Public Access Catalogue (Web OPAC)' },
    { name: 'Internet Facility' },
    { name: 'E-Journals, Ebooks' },
    { name: 'Bound Volume Periodicals' },
    { name: 'Display of Current content of Journals' },
    { name: 'Availability of Syllabus and question papers' },
    { name: 'Multimedia center' },
    { name: 'Newspaper clippings' },
    { name: "CD's of Technical topics" },
    { name: 'Wi-fi facility' },
    { name: 'CCTV Facility' },
    { name: 'National Digital library' },
    { name: 'Newspapers' },
  ]

  // Sample carousel images - replace with actual library images
  const carouselImages = [
    { src: '/infracse/computinglab.jpg', alt: 'Library Main Hall' },
    { src: '/infracse/computinglab.jpg', alt: 'Library Main Hall' },
    { src: '/infracse/computinglab.jpg', alt: 'Library Main Hall' },
    { src: '/infracse/computinglab.jpg', alt: 'Library Main Hall' },
  ]

  const toggleAdditionalServices = () => {
    setShowAdditionalServices(!showAdditionalServices)
  }

  interface Section {
    name: string
  }

  const toggleSection = (section: string): void => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1
    )
  }

  return (
    <div className="flex h-fit w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section - now matching the provided image style */}
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-8 pt-36 text-[#011a3b] md:px-28">
          <h1
            className={`text-left font-serif text-5xl font-bold tracking-wide`}
          >
            LIBRARY
          </h1>
          <Navigation items={navigationItems} />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto w-full px-8 py-16 md:px-28">
        {/* Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-[400px] w-full">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute h-full w-full transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <button
              className="bg-opacity-50 hover:bg-opacity-70 absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-all"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="bg-opacity-50 hover:bg-opacity-70 absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black p-2 text-white transition-all"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute right-0 bottom-16 left-0 flex justify-center space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === currentSlide
                      ? 'bg-white'
                      : 'bg-opacity-50 bg-white'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* About Library Section */}
        <div className="mb-16">
          <h2 className={`mb-6 text-2xl font-bold text-[#0A244A] md:text-2xl`}>
            About Our Library
          </h2>
          <div className="rounded-lg bg-gray-50 p-8 shadow-lg">
            <p className="mb-4 text-xl font-semibold text-[#4a90e2]">
              "Empowering Minds, Inspiring Knowledge"
            </p>
            <p className="text-gray-700">
              Our college library serves as a central hub for academic
              resources, research materials, and digital services. With a vast
              collection of books, journals, and electronic resources, we aim to
              support the educational journey of our students and faculty
              members. The library is equipped with modern facilities and
              provides a conducive environment for learning and intellectual
              growth.
            </p>
          </div>
        </div>

        {/* Two-Column Layout for Content and Links */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Quick Links Column */}
          <div className="order-2 md:order-1 md:col-span-1">
            <h2
              className={`mb-6 text-2xl font-bold text-[#0A244A] md:text-2xl`}
            >
              Quick Links
            </h2>
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index} className="border-b border-gray-200 pb-2">
                    <Link
                      href={link.url}
                      className="text-[#1F2942] transition-colors hover:text-[#357abd] hover:underline"
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="order-1 md:order-2 md:col-span-2">
            {/* Library Services Section */}
            <div className="mb-12">
              <h2
                className={`mb-6 text-2xl font-bold text-[#0A244A] md:text-2xl`}
              >
                Library Services & Facilities
              </h2>
              <div
                className="rounded-t-sm bg-gray-50 p-8 shadow-lg"
                id="services-container"
              >
                <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-12">
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">Home Lending of Books</p>
                    </div>
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">Open Access of Books</p>
                    </div>
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">
                        Reference and information system
                      </p>
                    </div>
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">Book bank scheme</p>
                    </div>
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">Reservation of Books</p>
                    </div>
                    
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">E-Journals, Ebooks</p>
                    </div>
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">Bound Volume Periodicals</p>
                    </div>
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">
                        Display of Current content of Journals
                      </p>
                    </div>
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">
                        Availability of Syllabus and question papers
                      </p>
                    </div>
                    <div className="border-b border-gray-200 py-3">
                      <p className="text-gray-700">Multimedia center</p>
                    </div>
                  </div>
                </div>
                {showAdditionalServices && (
                  <div className="mt-4">
                    <div className="mt-4 grid gap-y-4 md:grid-cols-2 md:gap-x-12">
                      <div className="space-y-4">
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">
                            Current Awareness system (CAS)
                          </p>
                        </div>
                        
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">Newspaper clippings</p>
                        </div>
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">
                            Selective dissemination of Information (SDI)
                          </p>
                        </div>
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">Reprographic Facility</p>
                        </div>
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">
                            Online Public Access Catalogue (Web OPAC)
                          </p>
                        </div>
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">Internet Facility</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">
                            CD's of Technical topics
                          </p>
                        </div>
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">Wi-fi facility</p>
                        </div>
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">CCTV Facility</p>
                        </div>
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">
                            National Digital library
                          </p>
                        </div>
                        <div className="border-b border-gray-200 py-3">
                          <p className="text-gray-700">Newspapers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-12 text-center">
                  <button
                    className="inline-block rounded-full bg-[#1F2942] px-10 py-3 font-semibold text-white transition-all hover:bg-[#357abd] hover:shadow-lg"
                    onClick={toggleAdditionalServices}
                  >
                    {showAdditionalServices
                      ? 'Hide Additional Services'
                      : 'View All Services'}
                  </button>
                </div>
              </div>
              {/* Expandable Sections with Horizontal Headers */}
              <div className="mb-16">
                <div className="overflow-hidden rounded-b-lg shadow-lg">
                  {/* Header Row */}
                  <div className="grid grid-cols-3 bg-gray-100 text-[#1F2942">
                    {/* User Orientation Section Header */}
                    <div
                      className={`flex cursor-pointer items-center justify-between border-r border-gray-200 px-6 py-4 ${activeSection === 'orientation' ? 'bg-gray-300/35' : ''}`}
                      onClick={() => toggleSection('orientation')}
                    >
                      <h3 className="font-semibold">
                        User Orientation & Book Exhibition
                      </h3>
                      {activeSection === 'orientation' ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>

                    {/* Print Collection Section Header */}
                    <div
                      className={`flex cursor-pointer items-center justify-between border-r border-gray-200 px-6 py-4 ${activeSection === 'print' ? 'bg-gray-300/35' : ''}`}
                      onClick={() => toggleSection('print')}
                    >
                      <h3 className="font-semibold">Print Collection</h3>
                      {activeSection === 'print' ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>

                    {/* Digital Resources Section Header */}
                    <div
                      className={`flex cursor-pointer items-center justify-between px-6 py-4 ${activeSection === 'digital' ? 'bg-gray-300/35' : ''}`}
                      onClick={() => toggleSection('digital')}
                    >
                      <h3 className="font-semibold">Digital Resources</h3>
                      {activeSection === 'digital' ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </div>

                  {/* Expandable Content Sections */}
                  {activeSection === 'orientation' && (
                    <div className="border-t border-gray-200 bg-gray-50 p-8">
                      <p className="mb-4 text-gray-700">
                        First-year students are given orientation about the
                        library rules, services, and facilities. They are taken
                        on a library tour, informed about various sections, and
                        the rules to be followed.
                      </p>
                      <p className="text-gray-700">
                        Additionally, a book exhibition is organized for
                        students to explore new titles and research materials
                        relevant to their courses.
                      </p>
                    </div>
                  )}

                  {activeSection === 'print' && (
                    <div className="border-t border-gray-200 bg-gray-50 p-8">
                      <h3 className="mb-4 font-bold text-[#1F2942]">
                        Print Collection
                      </h3>
                      <ul className="list-disc space-y-2 pl-5 text-gray-700">
                        <li>Over 20,000 books covering all disciplines</li>
                        <li>Current and bound journals</li>
                        <li>Magazines and newspapers</li>
                        <li>Reference materials</li>
                        <li>Theses and dissertations</li>
                      </ul>
                    </div>
                  )}

                  {activeSection === 'digital' && (
                    <div className="border-t border-gray-200 bg-gray-50 p-8">
                      <h3 className="mb-4 font-bold text-[#1F2942]">
                        Digital Resources
                      </h3>
                      <ul className="list-disc space-y-2 pl-5 text-gray-700">
                        <li>E-books and e-journals</li>
                        <li>Online databases</li>
                        <li>Digital repositories</li>
                        <li>Multimedia resources</li>
                        <li>Online question papers</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mb-16 mt-12">
          <h2 className={`mb-6 text-2xl font-bold text-[#0A244A] md:text-2xl`}>
            Contact Information
          </h2>
          <div className="rounded-lg bg-gray-50 p-8 shadow-lg">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Librarian Info */}
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#1F2942] text-white">
                  <Users className="h-8 w-8" />
                </div>
                <p className="mb-2 text-xl font-medium text-[#1F2942]">
                  Librarian
                </p>
                <p className="mb-2 text-gray-700">Ms. G. Jothilakshmi</p>
                <div className="flex items-center justify-center text-gray-700">
                  <Phone className="mr-2 h-4 w-4 text-[#1F2942]" />
                  <span>022-642114114</span>
                </div>
              </div>

              {/* Library Hours */}
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#1F2942] text-white">
                  <Clock className="h-8 w-8" />
                </div>
                <p className="mb-2 text-xl font-medium text-[#1F2942]">
                  Library Hours
                </p>
                <div className="text-gray-700">
                  <p>Monday - Friday: 8:15 AM to 6:00 PM</p>
                  <p>(Exam Period: 8:15 AM to 7:00 PM)</p>
                  <p>Saturday: 8:15 AM to 4:30 PM</p>
                </div>
              </div>

              {/* Committee Members */}
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#1F2942] text-white">
                  <Users className="h-8 w-8" />
                </div>
                <p className="mb-2 text-xl font-medium text-[#1F2942]">
                  Committee
                </p>
                <div className="text-gray-700">
                  <p>
                    <span className="font-medium">Chairman:</span> Dr. V.S.
                    Jorapur
                  </p>
                  <p>
                    <span className="font-medium">Secretary:</span> Mrs. G.
                    Jothilakshmi
                  </p>
                  <p>
                    <span className="font-medium">Members:</span> Prof. Prasad
                    Lalit & Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
