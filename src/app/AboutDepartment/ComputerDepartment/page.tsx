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
import Publications from './Publications'

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
        case 'Publications':
        return <Publications />

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
      <section className="text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            {/* <h2 className="mb-1 text-xs font-medium tracking-widest text-indigo-800">
              ROOF PARTY POLAROID
            </h2> */}
            <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl">
              Programs Offered
            </h1>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/3">
              <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Shooting Stars
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 inline-flex items-center text-indigo-500">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900">
                    The Catalyzer
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 inline-flex items-center text-indigo-500">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900">Neptune</h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 inline-flex items-center text-indigo-500">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div></div>
      {/*placement data*/}
      <div>
        <PlacementTab />
      </div>
    </div>
  )
}

export default ComputerEngineeringPage
