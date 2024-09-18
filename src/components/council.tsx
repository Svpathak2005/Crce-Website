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

export default function Council() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const cards = [
    {
      title: 'CodeLabs CRCE',
      subtitle: 'Codelabs CRCE fosters coding skills through workshops, projects, and competitions.',
      image: '/councils/codelabs.jpg',
      website: 'https://codelabscrce.netlify.app/',
    },
    {
      title: 'IEEE CRCE',
      subtitle: 'IEEE CRCE promotes engineering excellence through workshops, events, and technical projects.',
      image: '/councils/ieee.jpg',
      website: 'https://ieeewiecrce.netlify.app/',
    },
    {
      title: 'Mozilla Campus Club CRCE',
      subtitle: 'Technical council of Fr. Conceicao Rodrigues College of Engineering',
      image: '/councils/mozilla.jpg',
      website: 'https://mozillaclub.github.io/',
    },
    {
      title: 'NISP CRCE',
      subtitle: 'Encourages innovation and startup culture among engineering students.',
      image: '/councils/nisp.jpg',
      instagram: '',
      linkedin: '',
      website: '',
    },
    {
      title: 'TEDxCRCE',
      subtitle: 'Organizes TED-style talks to share inspiring and innovative ideas.',
      image: '/councils/tedxcrce.jpg',
      instagram: '',
      linkedin: '',
      website: 'http://www.tedxcrce.com/',
    },
    {
      title: 'eCell CRCE',
      subtitle: 'Encourages entrepreneurship through events, mentorship, and networking.',
      image: '/councils/ecell.jpg',
      instagram: '',
      linkedin: '',
      website: 'https://ecell-official.github.io/Ecell/',
    },
    {
      title: 'CSI CRCE',
      subtitle: 'Promotes technical knowledge and coding through various initiatives.',
      image: '/councils/csi.jpg',
      instagram: '',
      linkedin: '',
      website: 'https://csicrce.github.io/csi/',
    },
    {
      title: 'ASME CRCE',
      subtitle: 'Focuses on mechanical engineering skills through workshops and projects.',
      image: '/councils/asme.jpg',
      instagram: 'https://www.instagram.com/asme_crce/',
      linkedin: '',
      website: '',
    },
    {
      title: 'ACM CRCE',
      subtitle: 'Dedicated to advancing computing knowledge and technical skills.',
      image: '/councils/acm.jpg',
      instagram: '',
      linkedin: '',
      website: 'https://frcrce.acm.org/',
    },
    {
      title: 'WIE CRCE',
      subtitle: 'Promotes gender equality and leadership in engineering fields.',
      image: '/councils/wie.jpg',
      instagram: 'https://www.instagram.com/wie_crce/',
      linkedin: '',
      website: '',
    },
    {
      title: 'IIIE CRCE',
      subtitle: 'Focuses on industrial engineering and professional development.',
      image: '/councils/iiie.jpg',
      instagram: 'https://www.instagram.com/iiiexcrce/',
      linkedin: '',
      website: '',
    },
    {
      title: 'NSS CRCE',
      subtitle: 'Encourages community service and social responsibility among students.',
      image: '/councils/nss.jpg',
      instagram: '',
      linkedin: '',
      website: 'https://www.nsscrce.org/',
    },
    {
      title: 'Rotaract CRCE',
      subtitle: 'Community service club focused on leadership and professional growth.',
      image: '/councils/rotaract.jpg',
      instagram: '',
      linkedin: '',
      website: 'https://www.rotaractcrce.com/index.html',
    },
    {
      title: 'Game Developers Association',
      subtitle: 'Dedicated to game development skills through projects and events.',
      image: '/councils/gda.jpg',
      instagram: '',
      linkedin: '',
      website: 'https://gdacrce.netlify.app/',
    },
    {
      title: 'GDSC CRCE',
      subtitle: 'Google-backed club focused on software development and collaboration.',
      image: '/councils/gdsc.jpg',
      instagram: '',
      linkedin: '',
      website: 'https://gdsc-crce.vercel.app/',
    },
    {
      title: 'Unnat Bharat Abhiyan',
      subtitle: 'Government initiative promoting sustainable development in rural areas.',
      image: '/councils/uba.jpg',
      instagram: '',
      linkedin: '',
      website: 'https://fragnel.edu.in/images/2023/Unnat_Bharat_Abhiyan_2023.pdf',
    },
  ];

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1
              className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
            >
              Councils
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
                  alt="image"
                />

                <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                  {card.title}
                </h2>

                <div
                  className={`absolute inset-0 flex flex-col justify-between bg-white bg-opacity-90 p-6 transition-transform duration-300 ease-in-out ${hoveredCard === index ? 'translate-y-0' : 'translate-y-full'
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
