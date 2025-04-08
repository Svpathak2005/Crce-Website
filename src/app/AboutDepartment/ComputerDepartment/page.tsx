'use client'
import React from 'react'
import Image from 'next/image'
import '../style.css'
import { useState, useEffect } from 'react'
import {
  tabs,
  AboutcsDepartment,
  hodsDesk,
  programs,
  tabContents,
} from './data'
import { Sidebar } from '../components'
import PreIncubationCenter from './PreincubationCentre'
import Publications from './Publications'
import Faculty, { FacultyTabData } from './Faculty'
import VisionAndMission from './VisionAndMission'
import PEOsPOsPSOs from './PEOsPOsPSOs'
import Internships from './Internships'
import NBAAccreditations from './NBAAccreditations'
import InnovativeTeachingLearning from './InnovativeTeachingLearning'
import NotableAlumnus from './NotableAlumnus'
import MentorMentee from './MentorMentee'
import FDPSDPPrograms from './FDPSDPPrograms'
import AchievementsTab from './AchievementsTab'
import IndustrialVisits from './IndustrialVisits'
import DepartmentsNotices from './DepartmentsNotices'
import Infrastructure from './Infrastructure'
import AboutHOD from './AboutHOD'
import { Zilla_Slab } from 'next/font/google'
import getTeachers, { MappedTeacher } from '@/app/api/teachers'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// Updated tabs array with combined tabs and new HOD tab
const updatedTabs = [
  {
    id: 'about',
    title: 'About Computer Department',
  },
  {
    id: 'hoddesk',
    title: "HOD's Desk",
  },
  {
    id: 'visionandmission',
    title: 'Vision and Mission',
  },
  {
    id: 'peos,pos,psos',
    title: 'PEOs, POs and PSOs',
  },
  {
    id: 'Faculty',
    title: 'Faculty',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    viewMore: true,
  },
  {
    id: 'researchandpublications',
    title: 'Research Publications and Patents',
  },
  {
    id: 'pre-Incubation',
    title: 'Pre-Incubation',
    viewMore: true,
  },
  {
    id: 'Internships',
    title: 'Internships',
  },
  {
    id: 'HigherStudiesandPlacements',
    title: 'Higher Studies and Placements',
  },
  {
    id: 'NBAAccreditations',
    title: 'NBA Accreditations',
    viewMore: true,
  },
  {
    id: 'InnovativeTeachingLearning',
    title: 'Innovative Teaching Learning',
    viewMore: true,
  },
  {
    id: 'NotableAlumnus',
    title: 'Notable Alumnus',
    viewMore: true,
  },
  {
    id: 'FacultyPrograms',
    title: 'Department Programs',
    viewMore: true,
  },
  {
    id: 'AchievementsTab',
    title: 'Achievements Tab',
  },
  {
    id: 'DepartmentsNotices',
    title: 'Department Notices',
  },
]

const ComputerEngineeringPage = () => {
  // Initially, facultyData can be an empty array or dummy data.
  const [facultyData, setFacultyData] = useState<MappedTeacher[]>([])
  const [activeTab, setActiveTab] = useState('about')
  // New state for tracking which toggle button is active
  const [activeFacultyToggle, setActiveFacultyToggle] =
    useState('FDPSDPPrograms')

  useEffect(() => {
    async function fetchFaculty() {
      try {
        const data = await getTeachers('computers')
        console.log(data[0]?.photoUrl)
        setFacultyData(data)
      } catch (error) {
        console.error('Error fetching teacher data, using dummy data', error)
        setFacultyData(FacultyTabData as any)
      }
    }
    fetchFaculty()
  }, [])

  // About Department Component (improved)
  const AboutDepartmentContainer = ({
    name,
    description,
    extendedDescription,
    video,
  }: any) => (
    <div className="container mx-auto px-6 py-8 text-justify">
      <h2
        className={`${zilla.className} mb-6 ml-6 text-5xl font-bold text-[#131929]`}
      >
        {name}
      </h2>

      {/* Top section with description and video side by side */}
      <div className="mb-6 overflow-hidden rounded-lg bg-white p-6 shadow-md">
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Description (left) */}
          <div className="mb-6 md:mb-0 md:w-1/2">
            <p className="leading-relaxed text-gray-700">{description}</p>
          </div>

          {/* Video (right) */}
          {video && (
            <div className="md:w-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="/compsdepttour.mp4"
                  allowFullScreen
                  title="Department Video"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom section with extended description */}
      {extendedDescription && (
        <div className="rounded-lg bg-white p-6 text-justify shadow-md">
          <p className="leading-relaxed text-gray-700">{extendedDescription}</p>
        </div>
      )}
    </div>
  )

  // Program Component
  const Program = ({ title, description, icon, button }: any) => (
    <div className="mb-8 w-full px-3 lg:mb-0 lg:w-1/3">
      <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EBF2FF] text-[#131929]">
          {icon}
        </div>
        <h2 className="mb-3 text-lg font-medium text-[#131929]">{title}</h2>
        <ul className="mb-5 flex-grow list-inside list-disc space-y-1 text-base leading-relaxed text-gray-600">
          {description.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {button.map((btn: any, i: number) => (
            <button
              key={i}
              onClick={btn.onClick}
              className="inline-flex items-center rounded border-0 bg-[#131929] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1F2942] focus:outline-none"
            >
              {btn.label}
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  // Faculty Programs Toggle Button Component
  const FacultyProgramsToggle = () => (
    <div className="mb-8 flex justify-center">
      <div className="inline-flex rounded-md">
        <button
          onClick={() => setActiveFacultyToggle('FDPSDPPrograms')}
          className={`rounded-l-md px-8 py-3 text-base font-medium ${
            activeFacultyToggle === 'FDPSDPPrograms'
              ? 'bg-[#131929] text-white'
              : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
          } transition-colors duration-200`}
        >
          FDP/SDP Programs
        </button>
        <button
          onClick={() => setActiveFacultyToggle('MentorMentee')}
          className={`px-8 py-3 text-base font-medium ${
            activeFacultyToggle === 'MentorMentee'
              ? 'bg-[#131929] text-white'
              : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
          } transition-colors duration-200`}
        >
          Mentor Mentee
        </button>
        <button
          onClick={() => setActiveFacultyToggle('IndustrialVisits')}
          className={`rounded-r-md px-8 py-3 text-base font-medium ${
            activeFacultyToggle === 'IndustrialVisits'
              ? 'bg-[#131929] text-white'
              : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
          } transition-colors duration-200`}
        >
          Industrial Visits
        </button>
      </div>
    </div>
  )

  // "View More" button component for tabs that need it
  const ViewMoreButton = ({ tabId }: { tabId: string }) => (
    <div className="mt-4 text-center">
      <button
        onClick={() => setActiveTab(tabId)}
        className="inline-flex items-center rounded-md bg-[#131929] px-6 py-2 text-base font-medium text-white transition-colors hover:bg-[#1F2942]"
      >
        View More
        <svg
          className="ml-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  )

  // Placements Tab Component (improved with tabs)
  const PlacementContent = () => {
    const [activeTab, setActiveTab] = useState('Placements')

    return (
      <div className="container mx-auto px-4 py-8">
        {/* Heading with decorative lines on either side */}
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute top-1/2 left-0 h-px w-1/5 bg-gray-300"></div>
          <h2
            className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
          >
            Placement Statistics & Recruiters
          </h2>
          <div className="absolute top-1/2 right-0 h-px w-1/5 bg-gray-300"></div>
        </div>

        {/* Tab buttons */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md">
            <button
              onClick={() => setActiveTab('Placements')}
              className={`rounded-l-md px-8 py-3 text-base font-medium ${
                activeTab === 'Placements'
                  ? 'bg-[#131929] text-white'
                  : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
              } transition-colors duration-200`}
            >
              Placements
            </button>
            <button
              onClick={() => setActiveTab('Recruiters')}
              className={`rounded-r-md px-8 py-3 text-base font-medium ${
                activeTab === 'Recruiters'
                  ? 'bg-[#131929] text-white'
                  : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
              } transition-colors duration-200`}
            >
              Recruiters
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="rounded-lg bg-white p-8 shadow-md">
          {activeTab === 'Placements' && (
            <div>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                {tabContents.Placements.description}
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
                  <thead className="bg-[#F5F8FF]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Year
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Highest Package
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Company
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Lowest Package
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-[#131929] uppercase">
                        Company
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tabContents.Placements.packageData.map((data, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'
                        }
                      >
                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                          {data.year}
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                          {data.highest}
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                          {data.highestCompany}
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                          {data.lowest}
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-700">
                          {data.lowestCompany}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'Recruiters' && (
            <div>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                Our department has strong ties with industry-leading companies
                that regularly recruit our graduates. Below are some of our key
                recruiting partners.
              </p>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {tabContents.Recruiters.images.map((img, index) => (
                  <div
                    key={index}
                    className="group mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-24 w-24">
                      <Image
                        src={`/company/${img}`}
                        alt={`Company ${index + 1}`}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderPreviewContent = (tabId: string) => {
    switch (tabId) {
      case 'infrastructure':
        return (
          <div className="container mx-auto px-6 py-8">
            <h2
              className={`${zilla.className} mb-6 text-3xl font-bold text-[#131929]`}
            >
              Infrastructure
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              Our department is equipped with state-of-the-art facilities
              including specialized labs, research centers, and modern
              classrooms to provide students with an optimal learning
              environment.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-md">
                <h3
                  className={`${zilla.className} mb-2 text-xl font-semibold text-[#131929]`}
                >
                  6 Computer Labs
                </h3>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-md">
                <h3
                  className={`${zilla.className} mb-2 text-xl font-semibold text-[#131929]`}
                >
                  Advanced Research Center
                </h3>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-md">
                <h3
                  className={`${zilla.className} mb-2 text-xl font-semibold text-[#131929]`}
                >
                  Project Development Space
                </h3>
              </div>
            </div>
            <ViewMoreButton tabId={tabId} />
          </div>
        )
      case 'pre-Incubation':
        return (
          <div className="container mx-auto px-6 py-8">
            <h2
              className={`${zilla.className} mb-6 text-3xl font-bold text-[#131929]`}
            >
              Pre-Incubation Center
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              The department's pre-incubation center provides support for
              student entrepreneurs to develop their innovative ideas into
              viable business ventures.
            </p>
            <ViewMoreButton tabId={tabId} />
          </div>
        )
      case 'NBAAccreditations':
        return (
          <div className="container mx-auto px-6 py-8">
            <h2
              className={`${zilla.className} mb-6 text-3xl font-bold text-[#131929]`}
            >
              NBA Accreditations
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              Our Computer Engineering program is accredited by the National
              Board of Accreditation (NBA), affirming our commitment to quality
              education and continuous improvement.
            </p>
            <ViewMoreButton tabId={tabId} />
          </div>
        )
      case 'InnovativeTeachingLearning':
        return (
          <div className="container mx-auto px-6 py-8">
            <h2
              className={`${zilla.className} mb-6 text-3xl font-bold text-[#131929]`}
            >
              Innovative Teaching & Learning
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              The department employs various innovative teaching methodologies
              to enhance student learning, including project-based learning,
              flipped classrooms, and industry-integrated approaches.
            </p>
            <ViewMoreButton tabId={tabId} />
          </div>
        )
      case 'NotableAlumnus':
        return (
          <div className="container mx-auto px-6 py-8">
            <h2
              className={`${zilla.className} mb-6 text-3xl font-bold text-[#131929]`}
            >
              Notable Alumni
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              Our alumni have achieved significant success in various fields
              including technology leadership, entrepreneurship, research, and
              academia.
            </p>
            <ViewMoreButton tabId={tabId} />
          </div>
        )
      case 'FacultyPrograms':
        return (
          <div className="container mx-auto px-6 py-8">
            <h2
              className={`${zilla.className} mb-6 text-3xl font-bold text-[#131929]`}
            >
              Department Programs
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              Our department organizes various development programs, including
              Faculty Development Programs (FDPs), Staff Development Programs
              (SDPs), and industrial visits.
            </p>
            <ViewMoreButton tabId={tabId} />
          </div>
        )
      default:
        return null
    }
  }

  // Modified renderContent to handle the FacultyPrograms tab with toggle buttons
  // and show preview content for "View More" tabs
  const renderContent = () => {
    // First check if the tab has viewMore property and if we're on the main page
    const currentTab = updatedTabs.find((tab) => tab.id === activeTab)

    if (currentTab?.viewMore) {
      // This is a tab that has a "View More" option
      switch (activeTab) {
        case 'infrastructure':
          return <Infrastructure />
        case 'pre-Incubation':
          return <PreIncubationCenter />
        case 'NBAAccreditations':
          return <NBAAccreditations />
        case 'InnovativeTeachingLearning':
          return <InnovativeTeachingLearning />
        case 'NotableAlumnus':
          return <NotableAlumnus />
        case 'FacultyPrograms':
          // Show toggle buttons and specific content
          switch (activeFacultyToggle) {
            case 'FDPSDPPrograms':
              return <FDPSDPPrograms />
            case 'MentorMentee':
              return <MentorMentee />
            case 'IndustrialVisits':
              return <IndustrialVisits />
            default:
              return <FDPSDPPrograms />
          }
        default:
          return null
      }
    }

    // Regular non-viewMore tabs
    switch (activeTab) {
      case 'about':
        return <AboutDepartmentContainer {...AboutcsDepartment} />
      case 'hoddesk':
        return <AboutHOD {...hodsDesk} />
      case 'visionandmission':
        return <VisionAndMission />
      case 'peos,pos,psos':
        return <PEOsPOsPSOs />
      case 'Faculty':
        return (
          <Faculty
            facultyData={facultyData.length ? facultyData : FacultyTabData}
          />
        )
      case 'researchandpublications':
        return <Publications />
      case 'Internships':
        return <Internships />
      case 'HigherStudiesandPlacements':
        return <PlacementContent />
      case 'AchievementsTab':
        return <AchievementsTab />
      case 'DepartmentsNotices':
        return <DepartmentsNotices />
      default:
        return <AboutDepartmentContainer {...AboutcsDepartment} />
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
          <div className="absolute inset-0 bg-[#131929] opacity-80"></div>
        </div>
        <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-4 py-20">
          <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl">
            <h1 className="mt-28 mb-6 p-28 text-6xl leading-tight font-bold md:text-5xl lg:text-6xl">
              COMPUTER ENGINEERING
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-16 w-full origin-bottom-right -skew-y-3 transform bg-white"></div>
      </section>

      {/* Quicklinks and tabs about the department */}
      <section className="w-full bg-white">
        <div className="flex md:pt-10 md:pl-10">
          <Sidebar
            tabs={updatedTabs}
            activeTab={activeTab}
            onTabChange={(tabId) => {
              setActiveTab(tabId)
              // Reset toggle to default when changing tabs
              if (tabId === 'FacultyPrograms') {
                setActiveFacultyToggle('FDPSDPPrograms')
              }
            }}
            AccordionContent={null}
          />
          <div className="invisible-scrollbar mx-2 max-h-screen flex-1 flex-col overflow-x-hidden">
            <div id={activeTab} className="container mx-auto">
              {/* Show toggle buttons for Faculty Programs tab */}
              {activeTab === 'FacultyPrograms' && <FacultyProgramsToggle />}

              {/* Render full content or preview based on whether we're in a detailed view */}
              {updatedTabs.find((tab) => tab.id === activeTab)?.viewMore
                ? renderContent()
                : activeTab === 'overview'
                  ? renderPreviewContent('infrastructure')
                  : renderContent()}
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="bg-[#F9FAFC] px-20 py-16 text-gray-600">
          <div className="container mx-auto px-5">
            <div className="relative mb-12 flex items-center justify-center">
              <div className="absolute top-1/2 left-0 h-px w-1/5 bg-gray-300"></div>
              <h2
                className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}
              >
                Programs Offered
              </h2>
              <div className="absolute top-1/2 right-0 h-px w-1/5 bg-gray-300"></div>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row lg:flex-row">
              {programs.map((program, index) => (
                <Program key={index} {...program} />
              ))}
            </div>
          </div>
        </div>

        {/* Placement data */}
        <div className="bg-white px-20 py-8">
          <div className="my-12">
            <PlacementContent />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComputerEngineeringPage

