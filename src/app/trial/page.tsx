// computer department page
import React from 'react'
import Sidebar from './Sidebar'
import ProgramHighlights from './OurPrograms'
import PlacementTab from './PlacementTab'
import AboutDepartmentContainer from './aboutdept'
import FacultyGrid from './FacultyTab'
import PreIncubationCenter from './PreincubationCentre'
import Image from 'next/image'
import {
  AboutcsDepartment,
  Vision,
  Mission,
  ProgramOutcomes,
  ProgrammeSpecificOutcomes,
  ProgramEducationalObjectives,
} from './departmentData'
import { Zilla_Slab } from 'next/font/google'

// import all fonts here
const zilla = Zilla_Slab({
  weight: ['300', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

interface PageProps {
  searchParams: { tab?: string }
}
// edit the tabs array to include the required tabs for every department
const tabs = [
  {
    id: 'about',
    title: 'About Computer Department',
  },
  {
    id: 'visionandmission',
    title: 'Vision and Mission',
  },
  {
    id: 'peos,pos,psos',
    title: 'PEOs,PSOs and POs',
  },
  {
    id: 'Faculty',
    title: 'Faculty',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
  },
  {
    id: 'research',
    title: 'Research',
  },
  {
    id: 'pre-Incubation',
    title: 'Pre-Incubation',
  },
]

export default async function Page({ searchParams }: PageProps) {
  const activeTab = searchParams.tab || tabs[0]?.id || ''
  return (
    <>
      <div className="flex h-[30vw] w-fit overflow-x-hidden pt-5">
        <div className="border-spacing-2 border-black">
          <div className="hero absolute inset-0 z-0">
            <Image
              src="/college2.avif"
              alt="Campus background"
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
            <div className="absolute inset-0 bg-blue-950 bg-opacity-70">
              <h1
                className={`${zilla.className} absolute left-[20vw] top-1/2 text-6xl font-bold text-white`}
              >
                Computer Department
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 flex max-h-screen">
        <Sidebar tabs={tabs} activeTab={activeTab} />
        <div className="invisible-scrollbar max-h-screen overflow-x-hidden overflow-y-scroll">
          {activeTab === 'about' && (
            <AboutDepartmentContainer {...AboutcsDepartment} />
          )}
          {activeTab === 'visionandmission' && (
            <>
              <div>
                <AboutDepartmentContainer {...Vision} />
                <AboutDepartmentContainer {...Mission} />
              </div>
            </>
          )}
          {activeTab === 'peos,pos,psos' && (
            <>
              <AboutDepartmentContainer {...ProgramEducationalObjectives} />
              <AboutDepartmentContainer {...ProgramOutcomes} />
              <AboutDepartmentContainer {...ProgrammeSpecificOutcomes} />
            </>
          )}
          {activeTab === 'Faculty' && (
            <FacultyGrid />
          )}
          {activeTab ==='pre-Incubation' && (
            <PreIncubationCenter />)}
        </div>
      </div>
      <div className="flex-cols">
        <ProgramHighlights />
        <PlacementTab />
      </div>
    </>
  )
}
