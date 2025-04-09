'use client'
import React, { useState } from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const InnovativeTeachingLearning = () => {
  const [activeToggle, setActiveToggle] = useState('teaching')
  
  const teachingMethodsData = [
    {
      method: 'Project-Based Learning',
      description: 'Students work on real-world projects to gain practical experience and develop problem-solving skills',
      subjects: 'Software Engineering, Database Systems, Web Development',
      outcome: 'Improved practical skills and teamwork capabilities',
    },
    {
      method: 'Flipped Classroom',
      description: 'Students review lecture materials before class and engage in interactive activities during sessions',
      subjects: 'Data Structures, Computer Networks, Operating Systems',
      outcome: 'Enhanced understanding and increased classroom engagement',
    },
    {
      method: 'Industry-Integrated Learning',
      description: 'Curriculum integrated with industry case studies and expert sessions from professionals',
      subjects: 'Cloud Computing, Big Data, Artificial Intelligence',
      outcome: 'Better industry readiness and awareness of current technologies',
    },
    {
      method: 'Peer Learning Groups',
      description: 'Students form study groups with peer mentorship and collaborative problem-solving',
      subjects: 'All core computer engineering subjects',
      outcome: 'Improved retention and development of communication skills',
    },
    {
      method: 'Virtual Labs and Simulations',
      description: 'Online simulation tools for complex concepts and remote experiment access',
      subjects: 'Computer Architecture, Embedded Systems, IoT',
      outcome: 'Flexible learning environment and better visualization of concepts',
    },
  ]
  
  const coursesOfferedData = [
    {
      name: "Data Science and Machine Learning",
      duration: "16 weeks",
      credits: "4",
      level: "Advanced",
      description: "Comprehensive course covering statistical methods, data visualization, machine learning algorithms, and practical applications using Python.",
      prerequisites: "Programming fundamentals, Basic statistics"
    },
    {
      name: "Cloud Computing and DevOps",
      duration: "12 weeks",
      credits: "3",
      level: "Intermediate",
      description: "Hands-on exploration of cloud architectures, containerization, CI/CD pipelines, and infrastructure as code.",
      prerequisites: "Computer networks, Operating systems"
    },
    {
      name: "Blockchain Technology",
      duration: "14 weeks",
      credits: "3",
      level: "Advanced",
      description: "Detailed study of blockchain architecture, consensus algorithms, smart contracts, and decentralized applications.",
      prerequisites: "Data structures, Cryptography basics"
    },
    {
      name: "Internet of Things (IoT)",
      duration: "10 weeks",
      credits: "3",
      level: "Intermediate",
      description: "Practical approach to IoT ecosystems, sensor networks, data analytics, and application development.",
      prerequisites: "Embedded systems, Computer networks"
    },
    {
      name: "Cybersecurity Fundamentals",
      duration: "12 weeks",
      credits: "3",
      level: "Intermediate",
      description: "Comprehensive coverage of security principles, threat models, encryption, network security, and ethical hacking.",
      prerequisites: "Computer networks, Operating systems"
    }
  ]
  
  const certificationsData = [
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      provider: "Microsoft",
      duration: "6 weeks",
      eligibility: "All undergraduate students",
      benefits: "Cloud computing skills, Microsoft certification, Industry recognition",
      placement: "Improved prospects with cloud service providers and IT companies"
    },
    {
      name: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      duration: "8 weeks",
      eligibility: "Final year students",
      benefits: "Advanced cloud architecture skills, High-demand certification, Hands-on experience",
      placement: "Significantly enhanced employability in cloud roles"
    },
    {
      name: "Oracle Certified Associate Java Programmer",
      provider: "Oracle",
      duration: "10 weeks",
      eligibility: "Second year onwards",
      benefits: "Core Java programming validation, Industry-standard certification, Programming proficiency",
      placement: "Improved options for software development roles"
    },
    {
      name: "Cisco Certified Network Associate (CCNA)",
      provider: "Cisco",
      duration: "12 weeks",
      eligibility: "All undergraduate students",
      benefits: "Networking fundamentals, Industry-recognized certification, Practical skills",
      placement: "Enhanced prospects for network engineering positions"
    },
    {
      name: "Google Professional Data Engineer",
      provider: "Google Cloud",
      duration: "10 weeks",
      eligibility: "Final year students",
      benefits: "Big data expertise, Machine learning readiness, Google certification",
      placement: "Strong prospects for data engineering and analytics roles"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          Innovative Teaching & Learning
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>
      
      {/* Toggle buttons */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-md">
          <button
            onClick={() => setActiveToggle('teaching')}
            className={`rounded-l-md px-8 py-3 text-base font-medium ${
              activeToggle === 'teaching'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Teaching Methods
          </button>
          <button
            onClick={() => setActiveToggle('courses')}
            className={`px-8 py-3 text-base font-medium ${
              activeToggle === 'courses'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Courses Offered
          </button>
          <button
            onClick={() => setActiveToggle('certifications')}
            className={`rounded-r-md px-8 py-3 text-base font-medium ${
              activeToggle === 'certifications'
                ? 'bg-[#131929] text-white'
                : 'bg-gray-200 text-[#131929] hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Certifications
          </button>
        </div>
      </div>
      
      <div className="rounded-lg bg-white p-6 shadow-md">
        {activeToggle === 'teaching' && (
          <>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              The Computer Engineering Department employs innovative teaching and learning methodologies to enhance student engagement and outcomes. Our approach combines traditional teaching with modern educational technologies and interactive techniques to create a dynamic learning environment.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Teaching Method
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Applied Subjects
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Learning Outcome
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {teachingMethodsData.map((data, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#131929]">
                        {data.method}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {data.description}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        {data.subjects}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {data.outcome}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        
        {activeToggle === 'courses' && (
          <>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              The department offers a variety of specialized courses to help students develop expertise in emerging technologies and high-demand skills. These courses complement the core curriculum and provide students with advanced knowledge in specific domains.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Course Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Credits
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Level
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Prerequisites
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {coursesOfferedData.map((data, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#131929]">
                        {data.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        {data.duration}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-center text-gray-700">
                        {data.credits}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                          data.level === 'Advanced' ? 'bg-blue-100 text-blue-800' : 
                          data.level === 'Intermediate' ? 'bg-green-100 text-green-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {data.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {data.description}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        {data.prerequisites}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        
        {activeToggle === 'certifications' && (
          <>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              The department facilitates industry-recognized certification programs to enhance students' employability and specialized knowledge. These certifications are highly valued by employers and provide students with a competitive edge in the job market.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg bg-white">
                <thead className="bg-[#F5F8FF]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Certification
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Provider
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Eligibility
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Benefits
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-[#131929]">
                      Placement Impact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {certificationsData.map((data, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFC]'}
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#131929]">
                        {data.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        {data.provider}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        {data.duration}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                        {data.eligibility}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {data.benefits}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {data.placement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default InnovativeTeachingLearning