// PreIncubationCenter.tsx
import React from 'react'

interface Project {
  title: string
  overview: string
  details: string[]
  image: string
}

interface PreIncubationCenterData {
  title: string
  vision: string
  mission: string
  shortTermObjectives: string[]
  longTermObjective: string
  description: string
  projects: Project[]
}

const data: PreIncubationCenterData = {
  title: 'Pre-incubation Center',
  vision: 'Moulding Engineers who can Build the Nation',
  mission:
    'Facilitate Platform for Innovative Minds to Transform their Ideas into Viable Business Propositions to Start a Business Venture.',
  shortTermObjectives: [
    'To Facilitate Generation of Innovative Solution for Real Life Problems.',
    'To Encourage and Stimulate Campus Startups in the Institution.',
  ],
  longTermObjective:
    'To Link Innovation to Enterprises Leading to Financial Success.',
  description:
    'Fr. CRCE computer department incubation center was established to provide a nurturing environment where students, faculty, and even alumni can transform their innovative ideas into viable businesses or technological solutions. It offers valuable resources, mentorship, and access to industry connections allowing students to develop real-world skills and turn their innovative concepts into market-ready products or services.',
  projects: [
    {
      title:
        'ArborTrack - Transparent Tree Growth Monitoring and Adoption System',
      overview:
        'A decentralized system built on blockchain technology with the goal of promoting transparent and efficient tree plantation efforts.',
      details: [
        'It involves NGOs, government bodies, citizens, and volunteers in a collaborative tree planting and maintenance process.',
        'Key features include transparent fund transfers through smart contracts, tree adoption, data tracking for tree health, a reward system, and the option to donate for tree plantation.',
        'The system has tree growth tracking module which is used to keep the track of growth of the tree and notify the owner or NGOs about status of the tree.',
        'The system aims to improve tree growth through data analysis, fostering a sense of community and responsibility for the environment.',
        'Its long-term vision is to create a global network dedicated to reforestation and environmental conservation.',
      ],
      image: '/cspreincubation/arbortrack.png',
    },
    {
      title: 'Legally Yours',
      overview:
        'Our vision is to revolutionize law enforcement by providing cutting-edge Automatic Number Plate Recognition (ANPR) and Face Recognition software. We envision a safer, more orderly society where police forces can effectively maintain law and decorum. By harnessing the power of AI and machine learning, we aim to empower law enforcement agencies with advanced tools that enhance their capabilities. Our vision is to create a world where crimes are swiftly identified and prevented, traffic violations are efficiently managed, and missing persons are found with ease. We are committed to fostering a secure environment where police forces can perform their duties with maximum efficiency and minimal hassle.',
      image: '/cspreincubation/legallyyours.png',
    details:[
     
    ]
    },
    
  ],
}

const PreIncubationCenter: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-950">{data.title}</h1>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-950">Vision</h2>
        <p>{data.vision}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-950">Mission</h2>
        <p>{data.mission}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-950">Short Term Objectives</h2>
        <ul className="list-inside list-disc">
          {data.shortTermObjectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-950">Long Term Objective</h2>
        <p>{data.longTermObjective}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-950">Description</h2>
        <p>{data.description}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-950">Projects</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl md:text-4xl mt-5 font-semibold text-blue-950 text-center">{project.title}</h3>
            <p>{project.overview}</p>
            <ul className="list-inside list-disc">
              {project.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
            <div className='flex w-full justify-center'>
            <img src={project.image} alt={project.title} className="mt-4 " /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PreIncubationCenter
