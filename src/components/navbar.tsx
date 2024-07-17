import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-800 font-semibold text-white">
      <div className="flex flex-col px-20">
        {/* First row - 1/3 height */}
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
            Admissions
          </Link>
        </div>

        {/* Second row - 2/3 height */}
        <div className="flex h-2/3">
          {/* Logo column */}
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

          {/* Links column */}
          <div className="flex w-3/4 flex-col">
            {/* Top part of second row */}
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

            {/* Bottom part of second row */}
            <div className="flex justify-center space-x-8 py-3">
              <Link
                href="/academics"
                className="text-lg transition duration-300 hover:text-yellow-300"
              >
                Academics
              </Link>
              <Link
                href="/research"
                className="text-lg transition duration-300 hover:text-yellow-300"
              >
                Research
              </Link>
              <Link
                href="/campus-life"
                className="text-lg transition duration-300 hover:text-yellow-300"
              >
                Campus Life
              </Link>
              <Link
                href="/international"
                className="text-lg transition duration-300 hover:text-yellow-300"
              >
                International
              </Link>
              <Link
                href="/about"
                className="text-lg transition duration-300 hover:text-yellow-300"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
