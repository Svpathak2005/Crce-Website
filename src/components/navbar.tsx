'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, MoveRight, X } from 'lucide-react'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null)

  const handleDropdown = (menu) => {
    if (dropdown === menu) {
      setDropdown(null)
    } else {
      setDropdown(menu)
    }
  }

  const dropdownContent = {
    academics: [
      { name: 'Programs', href: '/academics/programs' },
      { name: 'Departments', href: '/academics/departments' },
      { name: 'Online Courses', href: '/academics/online-courses' },
    ],
    research: [
      { name: 'Projects', href: '/research/projects' },
      { name: 'Publications', href: '/research/publications' },
      { name: 'Funding', href: '/research/funding' },
    ],
    campusLife: [
      { name: 'Housing', href: '/campus-life/housing' },
      { name: 'Dining', href: '/campus-life/dining' },
      { name: 'Activities', href: '/campus-life/activities' },
    ],
    international: [
      { name: 'Programs', href: '/international/programs' },
      { name: 'Partnerships', href: '/international/partnerships' },
      { name: 'Admissions', href: '/international/admissions' },
    ],
    about: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Contact', href: '/about/contact' },
    ],
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gray-800 font-semibold text-white">
        <div className="flex flex-col px-20">
          <div className="flex h-1/3 items-center justify-between px-6 py-3">
            <div className="flex space-x-6 text-sm">
              <Link
                href="/students"
                className="transition duration-300 hover:text-yellow-300"
              >
                Students
              </Link>
              <Link
                href="/faculty-staff"
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
                href="/alumni"
                className="transition duration-300 hover:text-yellow-300"
              >
                Alumni
              </Link>
              <Link
                href="/examinations"
                className="transition duration-300 hover:text-yellow-300"
              >
                Examinations
              </Link>
              <Link
                href="/campuses"
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
          <div className="flex h-2/3">
            <div className="flex w-1/4 items-center justify-center">
              <Link href="/">
                <Image
                  src="/logo.jpeg"
                  alt="SRM Logo"
                  width={200}
                  height={100}
                  className="rounded-md"
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
              <div className="flex justify-center space-x-8 py-3">
                {Object.keys(dropdownContent).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleDropdown(key)}
                    className="flex items-center space-x-1 text-lg transition duration-300 hover:text-yellow-300"
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
      {dropdown && (
        <div className="fixed top-[100px] z-40 w-full bg-blue-900 text-white transition-all duration-300 ease-out">
          <div className="flex flex-col items-center py-8">
            <button
              className="absolute right-2 top-2 text-xl"
              onClick={() => setDropdown(null)}
            >
              <X size={30} />
            </button>
            <ul className="space-y-4 text-lg">
              {dropdownContent[dropdown].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center space-x-2 font-semibold"
                >
                  <Link href={item.href}>{item.name}</Link>
                  <MoveRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
