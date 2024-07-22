'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronDown,
  ChevronRight,
  X,
  Menu,
  ArrowLeft,
  Home,
  Book,
  Search,
  Users,
  GraduationCap,
  NewspaperIcon,
  Calendar,
  Briefcase,
  Phone,
  MoveRight,
  Globe,
  Info,
  School,
} from 'lucide-react'

interface DropdownItem {
  name: string
  href: string
  icon?: React.ReactNode
}

interface DropdownContent {
  [key: string]: DropdownItem[]
}

const dropdownContent: DropdownContent = {
  Academics: [
    { name: 'Programs', href: '/academics/programs', icon: <Book size={18} /> },
    {
      name: 'Departments',
      href: '/academics/departments',
      icon: <Users size={18} />,
    },
    {
      name: 'Online Courses',
      href: '/academics/online-courses',
      icon: <GraduationCap size={18} />,
    },
  ],
  Research: [
    {
      name: 'Projects',
      href: 'https://frcrce.ac.in/index.php/academics/research-development/publications',
      icon: <Search size={18} />,
    },
    {
      name: 'Publications',
      href: '/research/publications',
      icon: <NewspaperIcon size={18} />,
    },
    {
      name: 'Funding',
      href: '/research/funding',
      icon: <Briefcase size={18} />,
    },
  ],
  Campus: [
    { name: 'Housing', href: '/campus-life/housing', icon: <Home size={18} /> },
    {
      name: 'Dining',
      href: '/campus-life/dining',
      icon: <ChevronRight size={18} />,
    },
    {
      name: 'Activities',
      href: 'https://frcrce.ac.in/index.php/students/events-new',
      icon: <Calendar size={18} />,
    },
  ],
  International: [
    {
      name: 'Programs',
      href: '/international/programs',
      icon: <Globe size={18} />,
    },
    {
      name: 'Partnerships',
      href: '/international/partnerships',
      icon: <Users size={18} />,
    },
    {
      name: 'Admissions',
      href: '/international/admissions',
      icon: <School size={18} />,
    },
  ],
  About: [
    {
      name: 'Our Story',
      href: 'https://frcrce.ac.in/index.php/about-us/about-crce',
      icon: <Info size={18} />,
    },
    {
      name: 'Leadership',
      href: 'https://frcrce.ac.in/index.php/about-us/director',
      icon: <Users size={18} />,
    },
    {
      name: 'Contact',
      href: 'https://frcrce.ac.in/index.php/about-us/contact-us',
      icon: <Phone size={18} />,
    },
  ],
  Visit: [
    {
      name: 'In Service of Humanity',
      href: 'https://frcrce.ac.in/index.php/about-us/vision-mission',
      icon: <Users size={18} />,
    },
    {
      name: 'Facts & Figures',
      href: '/meet-princeton/facts',
      icon: <ChevronRight size={18} />,
    },
    {
      name: 'History',
      href: '/meet-princeton/history',
      icon: <Book size={18} />,
    },
    {
      name: 'Honors & Awards',
      href: '/meet-princeton/honors',
      icon: <GraduationCap size={18} />,
    },
    {
      name: 'Contact Us',
      href: '/meet-princeton/contact',
      icon: <Phone size={18} />,
    },
    {
      name: 'Visit Us',
      href: '/meet-princeton/visit',
      icon: <Home size={18} />,
    },
  ],
  Admission: [
    {
      name: 'Apply',
      href: 'https://frcrce.ac.in/index.php?view=page&id=497',
      icon: <ChevronRight size={18} />,
    },
    {
      name: 'Financial Aid',
      href: 'https://frcrce.ac.in/index.php/students/student-info/scholarships',
      icon: <Briefcase size={18} />,
    },
    { name: 'Visit', href: '/admission/visit', icon: <Home size={18} /> },
  ],
}

const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  const handleDropdown = (menu: string) => {
    if (dropdown === menu) {
      setDropdown(null)
    } else {
      setDropdown(menu)
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setMobileSubmenu(null)
  }

  const openMobileSubmenu = (menu: string) => {
    setMobileSubmenu(menu)
  }

  const closeMobileSubmenu = () => {
    setMobileSubmenu(null)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 z-50 hidden w-full bg-gray-800 font-semibold text-white md:block">
        <div className="flex flex-col px-20">
          <div className="flex h-1/3 items-center justify-between px-6 py-3">
            <div className="flex space-x-6 text-sm">
              <Link
                href="http://granth.fragnel.edu.in:5186/pinfo/index.php"
                className="transition duration-300 hover:text-yellow-300"
              >
                Students
              </Link>
              <Link
                href="https://frcrce.ac.in/images/2023/02/College_Committees_2023-24.pdf"
                className="transition duration-300 hover:text-yellow-300"
              >
                Faculty & Staff
              </Link>
              <Link
                href="/parents"
                className="transition duration-300 hover:text-yellow-300"
              >
                Parents
              </Link>
              <Link
                href="/visitors"
                className="transition duration-300 hover:text-yellow-300"
              >
                Visitors
              </Link>
              <Link
                href="https://alumni.frcrce.ac.in/"
                className="transition duration-300 hover:text-yellow-300"
              >
                Alumni
              </Link>
              <Link
                href="https://frcrce.ac.in/index.php/academics/examination/exam-process"
                className="transition duration-300 hover:text-yellow-300"
              >
                Examinations
              </Link>
              <Link
                href=""
                className="transition duration-300 hover:text-yellow-300"
              >
                Campuses
              </Link>
            </div>
            <Link
              href="/admissions"
              className="rounded-md bg-yellow-500 px-6 py-2 font-bold text-black transition duration-300 hover:bg-yellow-600"
            >
              <div className="group flex flex-row items-center space-x-2">
                <span>Admissions</span>
                <MoveRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          </div>
          <div className="border-t border-gray-700"></div>
          <div className="flex h-2/3">
            <div className="flex w-1/4 items-center justify-center">
              <Link href="/">
                <Image
                  src="/clogo.png"
                  alt="SRM Logo"
                  width={150}
                  height={150}
                  className="scale-x-125"
                />
              </Link>
            </div>
            <div className="flex w-3/4 flex-col">
              <div className="flex justify-end space-x-6 py-3 text-sm">
                <Link
                  href="/news"
                  className="transition duration-300 hover:text-yellow-300"
                >
                  News
                </Link>
                <Link
                  href="/events"
                  className="transition duration-300 hover:text-yellow-300"
                >
                  Events
                </Link>
                <Link
                  href="/careers"
                  className="transition duration-300 hover:text-yellow-300"
                >
                  Careers
                </Link>
                <Link
                  href="/contact-us"
                  className="transition duration-300 hover:text-yellow-300"
                >
                  Contact us
                </Link>
              </div>
              <div className="flex justify-center space-x-8 py-4">
                {Object.keys(dropdownContent).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleDropdown(key)}
                    className="flex items-center space-x-1 text-base transition duration-300 hover:text-yellow-300"
                  >
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <ChevronDown size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {dropdown && dropdownContent[dropdown] && (
        <div className="fixed top-[150px] z-40 hidden w-full bg-white text-black shadow-lg transition-all duration-300 ease-out md:block">
          <div className="container mx-auto px-8 py-12">
            <button
              className="absolute right-8 top-8 text-xl text-gray-600 hover:text-gray-800"
              onClick={() => setDropdown(null)}
            >
              <X size={30} />
            </button>
            <div className="mb-6">
              <h2 className="text-3xl font-bold capitalize">{dropdown}</h2>
            </div>
            <ul className="grid grid-cols-3 gap-x-8 gap-y-4">
              {dropdownContent[dropdown].map((item, index) => (
                <li key={index} className="group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-lg font-semibold transition duration-300 hover:text-blue-600"
                  >
                    <span className="text-blue-500 transition-colors duration-300 group-hover:text-blue-600">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                    <ChevronRight
                      className="ml-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      size={20}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}{' '}
      {/* Mobile Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-gray-900 font-semibold capitalize text-white md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/">
            <Image
              src="/clogo.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 transition-colors hover:bg-gray-800"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform overflow-y-auto bg-gray-900 capitalize text-white transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-between pb-6">
            <Image
              src="/clogo.png"
              alt="Logo"
              width={150}
              height={50}
              className="h-auto w-auto"
            />
            <button
              className="p-2 transition-colors hover:bg-gray-800"
              onClick={toggleMobileMenu}
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Menu Items */}
          {Object.keys(dropdownContent).map((key) => (
            <button
              key={key}
              onClick={() => openMobileSubmenu(key)}
              className="flex items-center justify-between border-b border-gray-700 py-3 pb-2 text-left text-lg font-medium transition-colors hover:bg-gray-800"
            >
              <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <ChevronRight size={20} />
            </button>
          ))}

          {/* Additional Links */}
          <div className="mt-6 space-y-2">
            <Link
              href="/news"
              className="block py-2 text-sm hover:text-orange-500"
            >
              News
            </Link>
            <Link
              href="/events"
              className="block py-2 text-sm hover:text-orange-500"
            >
              Events
            </Link>
            <Link
              href="/careers"
              className="block py-2 text-sm hover:text-orange-500"
            >
              Work at FrCrce
            </Link>
            <Link
              href="/student-links"
              className="block py-2 text-sm hover:text-orange-500"
            >
              Student Links
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Submenu */}
      <div
        className={`fixed inset-0 z-50 transform overflow-y-auto bg-gray-800 capitalize text-white transition-transform duration-300 ease-in-out md:hidden ${
          mobileSubmenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {mobileSubmenu && dropdownContent[mobileSubmenu] && (
          <div className="flex flex-col p-4">
            <button
              className="flex items-center pb-6 text-lg font-medium"
              onClick={closeMobileSubmenu}
            >
              <ArrowLeft size={24} className="mr-2" />
              Back
            </button>
            <h2 className="pb-4 text-2xl font-bold">
              {mobileSubmenu.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            {dropdownContent[mobileSubmenu].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-3 border-b border-gray-700 py-3 pb-2 text-lg transition-colors hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>{' '}
      <div className="md:mt-[150px] lg:mt-[160px]">
        {/* Content that comes below the navbar */}
      </div>
    </>
  )
}

export default Navbar
