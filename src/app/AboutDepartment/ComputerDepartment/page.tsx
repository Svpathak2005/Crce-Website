'use client'
import React from 'react'
import Image from 'next/image'
import './style.css'
import { useState } from 'react'
import {
  tabs,
  AboutcsDepartment,
  Vision,
  Mission,
  ProgramEducationalObjectives,
  ProgramOutcomes,
  ProgrammeSpecificOutcomes,
} from './departmentdata'
import {
  Sidebar,
  AboutDepartmentContainer,
  FacultyTab,
  FacultyGrid,
  PlacementTab,
} from './components'
import PreIncubationCenter from './PreincubationCentre'

const ComputerEngineeringPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 'overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutDepartmentContainer {...AboutcsDepartment} />
      case 'visionandmission':
        return (
          <>
            <AboutDepartmentContainer {...Vision} />
            <AboutDepartmentContainer {...Mission} />
          </>
        )
      case 'pos,peos,psos':
        return (
          <>
            <AboutDepartmentContainer {...ProgramEducationalObjectives} />
            <AboutDepartmentContainer {...ProgramOutcomes} />
            <AboutDepartmentContainer {...ProgrammeSpecificOutcomes} />
          </>
        )
        case 'Faculty':
        return <FacultyGrid />
        case 'pre-Incubation':
        return <PreIncubationCenter />

      default:
        return null
    }
  }
  return (
    <div className="flex-row">
      {/* Hero section */}
      <div>
        <section className="hero min-h-screen relative overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/college2.avif"
              alt="Campus background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-blue-950 bg-opacity-70"></div>
          </div>

          <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 py-20">
            <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl">
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                COMPUTER ENGINEERING DEPARTMENT
              </h1>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-white"></div>
        </section>
      </div>
      {/* Quicklinks and tabs about the department  */}
      <div className="m-2 flex">
        <Sidebar
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(tabId) => setActiveTab(tabId)}
        />
        <div className="invisible-scrollbar mx-2 max-h-screen flex-col overflow-x-hidden overflow-y-scroll">
          <div id={activeTab} className="container">
            {renderContent()}
          </div>
        </div>
      </div>
      {/* Program Highlights */}

      <div></div>
      {/*placement data*/}
      <div>
       <PlacementTab/>
      </div>
    </div>
  )
}

export default ComputerEngineeringPage
