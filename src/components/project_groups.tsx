'use client'
import { useState } from 'react'
import { Earth, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function ProjectGroups() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const cards = [
    {
      title: 'Team Abadha CRCE',
      subtitle:
        'We are TEAM ABADHA CRCE, creating an Electric All Terrain Vehicle for SAE E-BAJA.',
      image: '/project_grp/abadha.jpg',
      website: 'https://teamabadhaofficial.web.app',
      instagram: 'https://instagram.com/teamabadha?igshid=9rz18qcl27oy',
      youtube: 'https://youtube.com/channel/UCQ2g2izBdI-Mxmyw-bQD8qQ',
      linkedin: 'https://www.linkedin.com/in/team-abadha-crce-2492b41aa',
    },
    {
      title: 'Team Robocon',
      subtitle:
        'Team Robocon designs and builds robots for the ABU Robocon competition.',
      image: '/project_grp/robocon.jpg',
      website: 'http://roboconcrce.org',
    },
    {
      title: 'Team CFR New',
      subtitle:
        'CRCE Formula Racing team builds race cars for national and international competitions.',
      image: '/project_grp/cfr.jpeg',
      website: 'https://crceformularacing.com/index.html',
      instagram: 'https://www.instagram.com/teamcfr/?hl=en',
      linkedin: 'https://www.linkedin.com/company/teamcrceformularacing/',
      facebook: 'https://www.facebook.com/CRCEFormulaRacing/',
    },
    {
      title: 'HAWK-i CRCE',
      subtitle:
        'HAWK-i CRCE is a platform for students pursuing cybersecurity careers and CTF challenges.',
      image: '/project_grp/hawki.jpg',
      website: 'http://hawkicrce.com',
    },
    {
      title: 'Project Cell',
      subtitle:
        'PROJECT CELL promotes innovation and practical learning to solve social problems.',
      image: '/project_grp/projectcell.jpg',
      website: 'https://projectcellcrce2021.web.app/',
    },
    {
      title: 'Marvericks',
      subtitle:
        'Team Mavericks UAS develops drones and efficient solutions for various challenges.',
      image: '/project_grp/mavericks.jpg',
      website: 'https://mavericksuas.github.io',
    },
    {
      title: 'Team Vaayushastra',
      subtitle:
        'Team Vaayushastra, established in 2012, represents CRCE in SAE Aero Design.',
      image: '/project_grp/vaayushastra.jpg',
      website: 'https://vaayushastra.com/index.html',
    },
  ]

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1
              className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
            >
              Project Groups
            </h1>
            <div className="h-1 w-32 rounded bg-blue-900"></div>
          </div>
        </div>
        <div className="-m-4 flex flex-wrap">
          {cards.map((card, index) => (
            <div key={index} className="p-4 md:w-1/2 xl:w-1/4">
              <div
                className="relative h-full overflow-hidden rounded-lg bg-gray-100 p-6"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  className="mb-6 h-40 w-full rounded object-cover object-center"
                  src={card.image}
                  alt="content"
                />

                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  {card.title}
                </h2>

                <div
                  className={`absolute inset-0 flex flex-col justify-between bg-white bg-opacity-90 p-6 transition-transform duration-300 ease-in-out ${
                    hoveredCard === index ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  <div>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      {card.title}
                    </h2>
                    <p className="text-base leading-relaxed">{card.subtitle}</p>
                  </div>
                  <div className="mt-4 flex justify-center space-x-4">
                    {card.website && (
                      <a
                        href={card.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Earth className="text-2xl text-blue-600" />
                      </a>
                    )}
                    {card.youtube && (
                      <a
                        href={card.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="text-2xl text-red-600" />
                      </a>
                    )}
                    {card.linkedin && (
                      <a
                        href={card.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="text-2xl text-blue-400" />
                      </a>
                    )}
                    {card.instagram && (
                      <a
                        href={card.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="text-2xl text-pink-600" />
                      </a>
                    )}
                    {card.facebook && (
                      <a
                        href={card.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="text-2xl text-blue-600" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
