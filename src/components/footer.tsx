import React from 'react'
import Link from 'next/link'
import {
  SquareArrowOutUpRight,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <div className="pt-20">
      <footer className="border-t border-gray-200 bg-white py-8 text-gray-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-900">
                STAFF SERVICES
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Agnel Mail Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Biometric Attendance Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Other Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Site Login
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-900">
                RESOURCES
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center hover:text-blue-600"
                  >
                    Tinkering Lab
                    <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center hover:text-blue-600"
                  >
                    Moodle Access
                    <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center hover:text-blue-600"
                  >
                    Students Portal
                    <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center hover:text-blue-600"
                  >
                    Student Notices
                    <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center hover:text-blue-600"
                  >
                    Student's handbook- essentials of ethics
                    <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center hover:text-blue-600"
                  >
                    Downloads
                    <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center hover:text-blue-600"
                  >
                    Institutions Innovation Cell
                    <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-900">
                RESOURCES
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-blue-600">
                    Preincubation Details
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-600">
                    IPR cell
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-600">
                    Green Practices
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-600">
                    Change Network Password
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-blue-600">
                    Agnel News Letter
                  </Link>
                </li>
              </ul>
              <h4 className="text-md mb-2 mt-4 font-semibold text-blue-900">
                Can't find something?
              </h4>
              <Link href="#" className="text-blue-600 hover:underline">
                Give Feedback
              </Link>
            </div>{' '}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-900">
                LIBRARY QUICK LINKS
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Fr. Agnel College Library Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Online Library Catlog (WebOPAC)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    PG Students Resource Hub - PG Pathsala
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Rare Books Society of India
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    IEEE Xplore
                  </Link>
                </li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between border-t border-gray-200 pt-8">
            <div className="space-x-4">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-blue-600"
              >
                Bank / NEFT Details
              </Link>
              <Link
                href="#"
                className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600"
              >
                Mandatory Disclosure
                <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600"
              >
                Online Grievance / Suggession / Feedback System
                <SquareArrowOutUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <p className="text-sm text-gray-500">Copyright © 2024 Fr.CRCE</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
