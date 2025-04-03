'use client'
import React from 'react'
import Image from 'next/image'
import '../style.css'
import { useState, useEffect } from 'react'
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
import getTeachers, { MappedTeacher } from '@/app/api/teachers'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const ElectronicsComputerEngineeringPage = () => {
  const [facultyData, setFacultyData] = useState<MappedTeacher[]>([])

  useEffect(() => {
    async function fetchFaculty() {
      try {
        const data = await getTeachers('ecs')
        console.log(data[0]?.photoUrl)
        setFacultyData(data)
      } catch (error) {
        console.error('Error fetching teacher data, using dummy data', error)
        setFacultyData(FacultyTabData)
      }
    }
    fetchFaculty()
  }, [])

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
        return <FacultyGrid facultyData={facultyData} />
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

          <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-4 py-20">
            <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl">
              <h1 className="mb-6 text-5xl leading-tight font-bold md:text-5xl lg:text-6xl">
                ELECTRONICS AND COMPUTER SCIENCE
              </h1>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-white"></div>
        </section>
      </div>

      {/* Quicklinks and tabs about the department */}
      <section className="w-full bg-linear-to-b from-white to-[#E5F0FF]">
        <div className="flex md:pt-10 md:pl-10">
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

        {/* HOD's Desk */}
        <HODsDesk {...hodsDesk} />

        {/* Placement data */}
        <div className="my-24">
          <PlacementContent tabContents={tabContents} />
        </div>
      </section>
    </div>
  )
}

export default ElectronicsComputerEngineeringPage
