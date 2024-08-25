import React, { FC, ReactElement, useState } from 'react'
import Image from 'next/image'
import { FacultyTabData, tabContents } from './departmentdata'
import './style.css'
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
  AccordionContent:React.ReactNode 
  onTabChange: (tabId: string) => void
}
interface AboutDepartmentContainerProps {
  name: string
  description: string
  video?: boolean
}
interface HODsDeskProps {
  name: string
  bio: string
  imageUrl: string
  content: string
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
interface ProgramProps {
  title: string
  description: string[]
  icon: React.ReactNode
  button?: { label: string; onClick: () => void }[]
}

// all the components are defined here

const Sidebar: React.FC<SidebarTabsProps> = ({
  tabs,
  activeTab,
  AccordionContent,
  onTabChange,
}) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>((tabs[0] && tabs[0].id) || null)

  const toggleAccordion = (tabId: string) => {
    setOpenAccordion(openAccordion === tabId ? null : tabId)
    onTabChange(tabId)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden px-2 md:block">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex w-full justify-start border-b border-gray-400 px-2 py-2 ${
              activeTab === tab.id
                ? 'bg-gray-50 text-blue-600'
                : 'text-gray-600 hover:text-blue-400'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden w-full">
        {tabs.map((tab) => (
          <div key={tab.id} className="border-b border-gray-400">
            <button
              onClick={() => toggleAccordion(tab.id)}
              className={`flex w-full items-center justify-between px-2 py-2 ${
                activeTab === tab.id
                  ? 'bg-gray-50 text-blue-600'
                  : 'text-gray-600 hover:text-blue-400'
              }`}
            >
              {tab.title}
              <span className="transform transition-transform duration-200 ease-in-out">
                {openAccordion === tab.id ? '▲' : '▼'}
              </span>
            </button>
            {openAccordion === tab.id && (
              <div className="px-4 py-2">
                <div>{AccordionContent}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
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
        <div className="flex w-full">
          <div className="relative mx-auto mb-10 min-w-11 max-w-5xl overflow-hidden rounded-lg">
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




const HODsDesk: React.FC<HODsDeskProps> = ({ name, bio, imageUrl , content }) => {
  return (
    <section className="body-font text-gray-600">
      <div className="mx-auto flex w-full flex-col px-1 py-12">
        <div className="mx-auto justify-center lg:w-11/12">
          <p
            className={`${zilla.className} flex justify-center text-3xl font-bold text-blue-950 md:text-3xl lg:text-4xl`}
          >
            From HOD's Desk
          </p>
          <div className="mt-10  flex flex-col rounded-lg border-[1px] px-2 sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              <div className="inline-flex h-40 w-40 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg> */}
                <Image
                  src={imageUrl}
                  alt={name}
                  className="h-40 w-40 rounded-full border-2 border-gray-200"
                  width={400}
                  height={400}
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  {name}
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-indigo-900"></div>
                <p className="text-base">HOD and Professor</p>
                <h3>{bio}</h3>
                <a className="inline-flex items-center text-indigo-800">
                  Know more
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="invisible-scrollbar mt-4 h-[100vh] overflow-y-scroll border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
              <p className="mb-4 text-md leading-relaxed sm:mb-1 sm:text-xs md:text-xl">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
            <p>B.Tech ComputerEngineering</p>
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


const Program: React.FC<ProgramProps> = ({ title, description, icon, button }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div className={`program-card ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="program-card-inner">
        {/* Front side */}
        <div className="program-card-front">
          <div className="program-card-header">
            <div className="program-icon">{icon}</div>
            <h2 className="program-title">{title}</h2>
          </div>
          {description.map((desc, index) => (
            <li className="program-description" key={index}>
              {desc}
            </li>
          ))}
          <div className="flex justify-center">
            <button className="learn-more-btn" onClick={handleClick}>
              Know More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="learn-more-icon"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Back side */}
        <div className="program-card-back" onClick={handleClick}>
          <div className="program-card-header">
            <div className="program-icon">{icon}</div>
            <h2 className="program-title">{title}</h2>
          </div>

          <div className="program-buttons">
            {button?.map((button, index) => (
              <button
                key={index}
                className="m-4 mr-2 rounded-md bg-slate-200 px-4 py-2 text-blue-950 outline-none"
                onClick={button.onClick}
              >
                {button.label}
              </button>
            ))}
          </div>
          {/* <button className="flip-back-btn" onClick={handleClick}>
            Flip Back
          </button> */}
        </div>
      </div>
    </div>
  )
};

export {
  Sidebar,
  AboutDepartmentContainer,
  HODsDesk,
  FacultyTab,
  FacultyGrid,
  PlacementTab,
  Program,
};
