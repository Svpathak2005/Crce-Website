'use client'
import React, { useState } from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import { BookOpenText } from 'lucide-react'
import Link from 'next/link'
import { tabs } from './data'
import Sidebar from '@/components/QuicklinksSidebar'
import AICETExt from './AICET-Ext/AICETExt'
import AICETSub from './AICET-Sub/AICETSub'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Page() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'aicteextension':
        return <AICETExt />
      case 'aicetsubsquent':
        return <AICETSub />
      case 'corevalues':
        // return <CoreValues />
      case 'codeofconduct':
        // return <CodeOfConduct />
      case 'tetephonedirectory':
        // return <TetephoneDirectory />
      case 'commoninfrastructure':
        // return <CommonInfrastructure />
      default:
        return null
    }
  }

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
            General Information
          </h1>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col justify-center bg-gradient-to-b from-gray-50 to-[#E5F0FF] py-4 md:flex-row">
        <div className="mx-2 min-w-max">
          <Sidebar
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={(tabId) => setActiveTab(tabId)}
          />
        </div>
        <div id={activeTab} className="container">
          {renderContent()}
        </div>
      </div>
    </main>
  )
}
