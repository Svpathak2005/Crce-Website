'use client'
import React from 'react'
import Image from 'next/image'
import '../style.css'
import { useState } from 'react'
import {
  tabs,
  AboutecsDepartment,
  Vision,
  Mission,
  ProgramEducationalObjectives,
  ProgramOutcomes,
  ProgrammeSpecificOutcomes,
  tabContents,
  FacultyTabData,
  hodsDesk,
} from './data'
import {
  Sidebar,
  AboutDepartmentContainer,
  HODsDesk,
  FacultyGrid,
  PlacementTab,
  PlacementContent,
  Program,
} from '../components'
import { Zilla_Slab } from 'next/font/google'
import ECSPublications from '@/app/academics/research/ecspublications'
import Infras from './infra'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
const ElectronicsComputerEngineeringPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'overview')
  const Tabs = ['Placements', 'Recruiters', 'Eligibility']

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutDepartmentContainer {...AboutecsDepartment} />
      case 'visionandmission':
        return (
          <>
            <AboutDepartmentContainer {...Vision} />
            <AboutDepartmentContainer {...Mission} />
          </>
        )
      case 'peos,pos,psos':
        return (
          <>
            <AboutDepartmentContainer {...ProgramEducationalObjectives} />
            <AboutDepartmentContainer {...ProgramOutcomes} />
            <AboutDepartmentContainer {...ProgrammeSpecificOutcomes} />
          </>
        )
      case 'Faculty':
        return <FacultyGrid facultyData={FacultyTabData} />

      case 'research':
        return <ECSPublications />

      case 'infrastructure':
        return <Infras />

      default:
        return null
    }
  }
  return (
    <div className="flex-row">
      {/* Hero section */}
      <div>
        <section className="hero relative min-h-screen overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/college2.avif"
              alt="Campus background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-blue-950 opacity-70"></div>
          </div>

          <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 py-20">
            <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl">
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-5xl lg:text-6xl">
                ELECTRONICS AND COMPUTER SCIENCE
              </h1>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-white"></div>
        </section>
      </div>
      {/* Quicklinks and tabs about the department  */}

      <section className="w-full bg-linear-to-b from-white to-[#E5F0FF]">
        <div className="flex md:pl-10 md:pt-10">
          <Sidebar
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={(tabId) => setActiveTab(tabId)}
            AccordionContent={renderContent()}
          />
          <div className="invisible-scrollbar mx-2 max-h-screen flex-1 flex-col overflow-x-hidden">
            <div id={activeTab} className="container mx-auto">
              {renderContent()}
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        {/* <div className="text-gray-600">
        <div className="container mx-auto px-5 ">
          <div className="mb-10 flex w-full flex-col text-center">
            <h1
              className={`${zilla.className} text-3xl font-bold text-indigo-900 sm:text-xl lg:text-4xl`}
            >
              Programs Offered
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row lg:flex-row">
            {programs.map((program, index) => (
              <Program key={index} {...program} />
            ))}
          </div>
        </div>
      </div>  */}
        {/* hods desk */}
        <HODsDesk
          name={hodsDesk.name}
          bio={hodsDesk.bio}
          imageUrl={hodsDesk.imageUrl}
          content={hodsDesk.content}
        />
        {/*placement data*/}
        <div>
          
         <div className='my-24'>
                  <PlacementContent 
                                  
                                  tabContents={tabContents}
                                />
                                </div>
        </div>
      </section>
    </div>
  )
}

export default ElectronicsComputerEngineeringPage
