// app/page.tsx
import React from 'react'
import Sidebar from './Sidebar'
import Carousel from './Carousel'
import ProgramHighlights from './OurPrograms'
import PlacementTab from './PlacementTab'
import AboutDepartment from './aboutdept'
import {
  AboutcsDepartment,
  Vision,
  Mission,
  ProgramOutcomes,
  ProgrammeSpecificOutcomes,
  ProgramEducationalObjectives,
} from './departmentData'
interface PageProps {
  searchParams: { tab?: string }
}

const tabs = [
  {
    id: 'about',
    title: 'About Computer Department',
    content: <div>About Department Content</div>,
  },
  {
    id: 'vision',
    title: 'Vision and Mission',
    content: <div>Vision and Mission Content</div>,
  },
  {
    id: 'outcomes',
    title: 'Program Outcomes',
    content: <div>Program Outcomes Content</div>,
  },
  {
    id: 'objectives',
    title: 'Program Educational Objectives',
    content: <div>Program Educational Objectives Content</div>,
  },
  {
    id: 'specific-outcomes',
    title: 'Programme Specific Outcomes',
    content: <div>Programme Specific Outcomes Content</div>,
  },
  {
    id: 'placementdata',
    title: 'placement Data',
    content: <div>Road Map Content</div>,
  },
  {
    id: 'faculty',
    title: 'Faculty Information',
    content: <div>Faculty Information Content</div>,
  },
  {
    id: 'infrastucture',
    title: 'Infrastructure Department',
    content: <div>Facilities and Infrastructure Content</div>,
  },
  {
    id: 'reasearch',
    title: 'Reasearch Papers and accomplishments',
    content: <div>Reaserch paper and accomplishment Content</div>,
  },
  {
    id: 'pre-Incubation',
    title: 'Pre-Incubation Center',
    content: <div>Pre-incubation Content</div>,
  },
]

const getCarouselItems = async () => {
  // This could be an API call or database query
  return [
    {
      id: '1',
      imageUrl: '/principal.jpeg',
      title: 'Item 1',
      description: 'Description for Item 1',
      link: '/item1',
    },
    {
      id: '2',
      imageUrl: '/principal.jpeg',
      title: 'Item 2',
      description: 'Description for Item 2',
      link: '/item2',
    },
    {
      id: '3',
      imageUrl: '/principal.jpeg',
      title: 'Item 3',
      description: 'Description for Item 3',
      link: '/item3',
    },
    {
      id: '4',
      imageUrl: '/principal.jpeg',
      title: 'Item 4',
      description: 'Description for Item 4',
      link: '/item4',
    },
    // ... add more items as needed
  ]
}

export default async function Page({ searchParams }: PageProps) {
  const activeTab = searchParams.tab || tabs[0]?.id || ''
  const carouselItems = await getCarouselItems()
  return (
    <>
      <div className="">
        <div className="flex">
          <Sidebar tabs={tabs} activeTab={activeTab} />
          <div className="">
            {activeTab === 'about' && (
              <AboutDepartment {...AboutcsDepartment} />
            )}
            {activeTab == 'vision' && (
              <>
                <AboutDepartment {...Vision} />
                <AboutDepartment {...Mission} />
              </>
            )}
            {activeTab == 'outcomes' && (
              <AboutDepartment {...ProgramOutcomes} />
            )}
            {activeTab == 'objectives' && (
              <AboutDepartment {...ProgramEducationalObjectives} />
            )}
            {activeTab == 'specific-outcomes' && (
              <AboutDepartment {...ProgrammeSpecificOutcomes} />
            )}
            
          </div>
        </div>
        <div className="container mx-auto py-8">
          <ProgramHighlights />
          <h1 className="mb-6 text-3xl font-bold">Placement Data </h1>
          <PlacementTab />
        </div>
      </div>
    </>
  )
}
