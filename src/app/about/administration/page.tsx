'use client'
import React, { useState } from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import { BookOpenText } from 'lucide-react'
import Link from 'next/link'
import { tabs } from './data'
import Sidebar from '@/components/QuicklinksSidebar'
import StrategicDevPlan from './strategic-dev-plan/StrategicDevPlan'
import ServiceRules from './service-rules/ServiceRules'
import StaffIncharge from './staff-incharge/StaffIncharge'
import Trustees from './trustees/Trustees'
import Governance from './governance/Governance'
import CollegeDevelopmentCommittee from './college-dev-committee/CollegeDevCommittee'
import GoverningCouncil from './governing-council/GoverningCouncil'
import AcademicCell from './academic-cell/AcademicCell'
import LocalManagementCouncil from './local-management-council/LocalManagementCouncil'

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
      case 'trustees':
        return <Trustees />
      case 'governance':
        return <Governance />
      case 'governingcouncil':
        return <GoverningCouncil />
      case 'localmanagementcouncil':
        return <LocalManagementCouncil />
      case 'collegedevelopmentcommittee':
        return <CollegeDevelopmentCommittee />
      case 'academiccell':
        return <AcademicCell />
      case 'strategicdevelopmentplan':
        return <StrategicDevPlan />
      case 'servicerules':
        return <ServiceRules />
      case 'staffincharges':
        return <StaffIncharge />

      default:
        return null
    }
  }

  return (
    <div className="flex-row">
      <main className="flex h-fit w-full flex-col items-center justify-center">
        <div
          className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] md:flex-row md:pt-36"
          id="iqac"
        >
          <div className="flex w-full flex-col items-center justify-center p-8 pt-36 text-white md:w-2/3 md:p-16 md:pt-16">
            <h1
              className={`${zilla.className} mb-3 text-center text-4xl font-bold md:text-5xl lg:text-7xl`}
            >
              Administration
            </h1>
          </div>
        </div>
        <div className="flex h-fit w-full flex-col justify-center bg-gradient-to-b from-white to-[#E5F0FF] py-4 md:flex-row">
          <div className="mx-2 flex min-w-max md:pl-10 md:pt-10">
            <Sidebar
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={(tabId) => setActiveTab(tabId)}
              AccordionContent={renderContent()}
            />
          </div>
          <div className="mx-2 flex-1 flex-col overflow-x-hidden overflow-y-scroll">
            <div id={activeTab} className="container mx-auto hidden md:flex">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
