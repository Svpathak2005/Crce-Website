'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import { Award, Calendar, Users, Tag } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const AchievementsTab = () => {
  const achievementsData = [
    {
      student: 'Ananya Sharma, Rohan Mehta, Priya Patel',
      achievement: 'First Prize in National Level Hackathon',
      event: 'HackIndia 2023',
      date: 'September 15, 2023',
      category: 'Technical',
      description: 'Developed an innovative AI-based solution for healthcare management',
      imageUrl: '/achievements/hackathon.jpg', // Add appropriate image paths
    },
    {
      student: 'Karan Singh, Neha Reddy',
      achievement: 'Selected for Google Summer of Code',
      event: 'GSoC 2023',
      date: 'April 30, 2023',
      category: 'Technical',
      description: 'Open source contribution to TensorFlow project',
      imageUrl: '/achievements/gsoc.jpg',
    },
    {
      student: 'Aditya Joshi',
      achievement: 'Best Paper Award',
      event: 'IEEE International Conference on Machine Learning',
      date: 'July 22, 2023',
      category: 'Research',
      description: 'Research paper on "Efficient Deep Learning for Edge Devices"',
      imageUrl: '/achievements/research.jpg',
    },
    {
      student: 'Computer Department Team',
      achievement: 'Runner-up',
      event: 'Smart India Hackathon 2023',
      date: 'August 10-12, 2023',
      category: 'Technical',
      description: 'Project on blockchain-based supply chain management system',
      imageUrl: '/achievements/sih.jpg',
    },
    {
      student: 'Shreya Kapoor',
      achievement: 'Gold Medal in Coding Competition',
      event: 'CodeChef College Contest',
      date: 'May 5, 2023',
      category: 'Competitive Coding',
      description: 'Secured first position among 500+ participants nationally',
      imageUrl: '/achievements/coding.jpg',
    },
    {
      student: 'Arjun Nair, Manoj Kumar',
      achievement: 'Patent Filed',
      event: 'Indian Patent Office',
      date: 'October 3, 2023',
      category: 'Innovation',
      description: 'Patent for "IoT-based Smart Water Management System"',
      imageUrl: '/achievements/patent.jpg',
    },
  ]

  // Fallback to a default image if the image path doesn't exist
  const getImageUrl = (path: string) => {
    try {
      return path || '/api/placeholder/400/300'
    } catch {
      return '/api/placeholder/400/300'
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section heading with decorative lines */}
      <div className="relative mb-12 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
        <h2 className={`${zilla.className} mx-8 text-center text-4xl font-bold text-[#131929]`}>
          Student Achievements
        </h2>
        <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gray-300"></div>
      </div>
      
      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          Students from the Computer Engineering Department regularly participate and excel in various technical competitions, research events, and innovation challenges. Below are some of the notable achievements of our students in the current academic year.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievementsData.map((achievement, index) => (
          <div 
            key={index}
            className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${getImageUrl(achievement.imageUrl)})`,
              }}
            >
              <div className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-black to-transparent p-4">
                <div className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-medium ${
                  achievement.category === 'Technical' ? 'bg-blue-100 text-blue-800' : 
                  achievement.category === 'Research' ? 'bg-purple-100 text-purple-800' : 
                  achievement.category === 'Competitive Coding' ? 'bg-green-100 text-green-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {achievement.category}
                </div>
                <h3 className="mt-2 line-clamp-2 text-xl font-bold text-white">
                  {achievement.achievement}
                </h3>
              </div>
            </div>
            
            <div className="p-4">
              <div className="mb-3 flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
              
              <div className="mb-3 flex items-center">
                <Award className="mr-2 h-4 w-4 text-gray-500" />
                <p className="text-sm text-gray-700">{achievement.event}</p>
              </div>
              
              <div className="mb-3 flex items-start">
                <Users className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-gray-500" />
                <p className="text-sm text-gray-700">{achievement.student}</p>
              </div>
              
              <p className="text-sm leading-relaxed text-gray-600">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchievementsTab