'use client'
import React,{useState} from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import { BookOpenText } from 'lucide-react'
import Link from 'next/link'
import { tabs } from './data'
import Sidebar from '@/components/QuicklinksSidebar'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Page() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'overview')
  return (
    <main className="flex h-fit w-full flex-col items-center justify-center">
      <div
        className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] md:flex-row md:pt-36"
        id="iqac"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-36 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-3 text-center text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            Abdministration
          </h1>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-[#E5F0FF] pt-10">
      <div className="m-2 flex">
        <Sidebar
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(tabId) => setActiveTab(tabId)}
        />
        <div className="invisible-scrollbar mx-2 max-h-screen flex-col overflow-x-hidden ">
          <div id={activeTab} className="container">
            hi
          </div>
        </div>
      </div>

      </div>
    </main>
  )
}
