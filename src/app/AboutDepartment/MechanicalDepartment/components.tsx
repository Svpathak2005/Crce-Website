import React, { FC, ReactElement, useState } from 'react'
import Image from 'next/image'
import { FacultyTabData, tabContents } from './departmentdata'
import { Zilla_Slab } from 'next/font/google'
//the font for main headings
const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
//all the interfaces for the components are defined here
interface TabData {
  id: string
  title: string
}

// all the props are defined here

interface SidebarTabsProps {
  tabs: TabData[]
  activeTab: string
  onTabChange: (tabId: string) => void
}
interface AboutDepartmentContainerProps {
  name: string
  description: string
  video?: boolean
}
interface FacultyTabProps {
  name: string
  photoUrl: string
  ctaText: string
  designation: string
  description: string
  ctaOnClick: () => void
}
interface FacultyGridProps {
  //     faculty: FacultyTabProps[]
}

// all the components are defined here

const Sidebar: React.FC<SidebarTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex w-fit pl-[5vw] pt-5">
      <div className="w-64 bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex border-b border-gray-400 w-full justify-start px-2 py-2 ${
              activeTab === tab.id
                ? 'bg-gray-50 text-blue-600'
                : 'text-gray-600 hover:text-blue-400'
            }`}
          >
            <p className="font-medium">{tab.title}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

const AboutDepartmentContainer: FC<AboutDepartmentContainerProps> = ({
  name,
  description,
  video,
}): ReactElement => {
  return (
    <div className="mx-10 rounded-lg bg-white">
      <h2
        className={`${zilla.className} mb-4 text-3xl font-bold text-blue-950 md:text-4xl lg:text-6xl`}
      >
        {name}
      </h2>
      {video && (
        <div className='flex w-full'>
          <div className="relative mb-10 max-w-5xl min-w-11 mx-auto overflow-hidden  rounded-lg">
            <iframe
              className="video-container"
              src="/compsdepttour.mp4"
              allowFullScreen
              title="Embedded Video"
            />
          </div>
        </div>
      )}
      <p className="mb-6 text-gray-700">{description}</p>
    </div>
  )
}

const FacultyTab: React.FC<FacultyTabProps> = ({
  name,
  photoUrl,
  ctaText,
  designation,
  description,
  ctaOnClick,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center justify-center">
        <Image
          src={photoUrl}
          alt={name}
          className="h-[25vh] w-[13vw] rounded-full"
          width={200}
          height={200}
        />
      </div>
      <h2 className="text-lg font-medium">{name}</h2>
      <p className="mb-4 font-semibold text-gray-700">{designation}</p>
      <p className="mb-4 text-gray-900">{description}</p>
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-900"
        onClick={ctaOnClick}
      >
        {ctaText}
      </button>
    </div>
  )
}

const FacultyGrid: React.FC<FacultyGridProps> = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {FacultyTabData.map((faculty) => (
        <FacultyTab key={faculty.id} {...faculty} />
      ))}
    </div>
  )
}
const PlacementTab = () => {
  const [activeTab, setActiveTab] = useState('Placements')

  return (
    <div className="container mx-auto p-4 font-sans">
      <div className="flex flex-col bg-white shadow-sm md:flex-row">
        <div className="p-6 md:w-2/3">
          <div className="mb-4 flex border-b">
            {['Placements', 'Recruiters', 'Eligibility'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-bold ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="content text-sm">
            {tabContents[activeTab as keyof typeof tabContents]}
          </div>
        </div>
        <div className="mb-0 bg-gray-100 p-6 md:w-1/3">
          <div className="mb-0 rounded bg-blue-50 p-4">
            <h3 className="text-lg font-bold">Duration</h3>
            <p className="text-2xl text-blue-600">4 Years</p>
            <p className="text-xs text-gray-600">
              Last Date To Apply : 26 July 2024
            </p>
          </div>
          <div className="mb-4 rounded bg-blue-50 p-4">
            <h3 className="text-lg font-bold">Programme Name</h3>
            <p>B.Tech MechanicalEngineering</p>
          </div>
          <div className="rounded bg-gray-800 p-4 text-white">
            <p>Fee Per Year</p>
            <h2 className="mb-2 text-2xl font-bold">Rs. 1,67,000</h2>
            <button className="mb-4 w-full rounded bg-blue-500 px-4 py-2 text-white">
              Apply Online Now
            </button>
            <div className="mb-4">
              <a href="#" className="mb-2 block text-blue-400">
                Brochure →
              </a>
              <a href="#" className="block text-blue-400">
                Course Structure →
              </a>
            </div>
            <p className="text-blue-200">Highest CTC</p>
            <p className="text-lg">INR 17.75 LPA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  Sidebar,
  AboutDepartmentContainer,
  FacultyTab,
  FacultyGrid,
  PlacementTab,
}
