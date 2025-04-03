'use client'
import React from 'react'
import Image from 'next/image'
import '../style.css'
import { useState, useEffect } from 'react'
import {
  tabs,
  AboutcsDepartment,
  hodsDesk,
  Vision,
  Mission,
  ProgramEducationalObjectives,
  ProgramOutcomes,
  ProgrammeSpecificOutcomes,
  programs,
  tabContents,
  FacultyTabData,
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
import PreIncubationCenter from './PreincubationCentre'
import Publications from './Publications'
import Publicationss from '@/app/academics/research/computerpublications'
import { Zilla_Slab } from 'next/font/google'
import getTeachers, { MappedTeacher } from '@/app/api/teachers'
const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const ComputerEngineeringPage = () => {
  // Initially, facultyData can be an empty array or dummy data.
  const [facultyData, setFacultyData] = useState<MappedTeacher[]>([])

  useEffect(() => {
    async function fetchFaculty() {
      try {
        const data = await getTeachers('computers')
        console.log(data[0]?.photoUrl)
        setFacultyData(data)
      } catch (error) {
        console.error('Error fetching teacher data, using dummy data', error)
        setFacultyData(FacultyTabData)
      }
    }
    fetchFaculty()
  }, [])

  const [activeTab, setActiveTab] = useState('overview')
  const Tabs = ['Placements', 'Recruiters', 'Eligibility']

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
      case 'peos,pos,psos':
        return (
          <>
            <AboutDepartmentContainer {...ProgramEducationalObjectives} />
            <AboutDepartmentContainer {...ProgramOutcomes} />
            <AboutDepartmentContainer {...ProgrammeSpecificOutcomes} />
          </>
        )
      case 'Faculty':
        // Here we replace the dummy data with the fetched facultyData.
        return <FacultyGrid facultyData={facultyData} />
      case 'researchandpublications':
        return <Publicationss />
      case 'pre-Incubation':
        return <PreIncubationCenter />
      case 'infrastructure':
        return (
          <div className="flex h-full w-full">
            <div className="relative mx-auto mb-10 max-w-5xl min-w-20 items-center overflow-hidden rounded-lg">
              <iframe
                className="video-container"
                src="/compsdepttour.mp4"
                allowFullScreen
                title="Embedded Video"
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex-row text-black">
      {/* Hero section */}
      <section className="hero relative min-h-screen overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={'/college2.avif'}
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
              COMPUTER ENGINEERING
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-white"></div>
      </section>

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

        {/* Program Highlights */}
        <div className="text-gray-600">
          <div className="container mx-auto px-5">
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
        </div>

        {/* Placement data */}
        <div>
          <div className="my-24">
            <PlacementContent tabContents={tabContents} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComputerEngineeringPage
