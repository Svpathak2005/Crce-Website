import Image from 'next/image'

interface ProgramHighlight {
  title: string
  description: string
  linkText: string
  linkHref: string
  imageSrc: string
}

const programHighlights: ProgramHighlight[] = [
  {
    title: 'Undergraduate Programs',
    description:
      'By offering both BS and BA degree programs, students can pursue a degree with a highly technical focus or one that is better suited to be combined with a non-engineering major.',
    linkText: 'UNDERGRADUATE PROGRAMS',
    linkHref: '/undergraduate',
    imageSrc: '/csdep2.png',
  },
  {
    title: "Master's in Engineering Computer Science",
    description:
      "Pursue an MS degree in computer science to have a competitive advantage in some of today's most in-demand career fields.",
    linkText: 'M&E PROGRAM',
    linkHref: '/masters',
    imageSrc: '/csdep.png',
  },
  {
    title: 'Master of Science in Security Informatics',
    description:
      'The full-time MSSI program is an immersive, three-semester program providing educational, research, and professional opportunities that are simply unparalleled in this rapidly expanding field.',
    linkText: 'MSSI PROGRAM',
    linkHref: '/mssi',
    imageSrc: '/csdep.png',
  },
  {
    title: 'PhD Program',
    description:
      'As a doctoral student in computer science, you will be mentored by world-renowned faculty members, collaborate across university divisions, and contribute to the creation of knowledge.',
    linkText: 'PHD PROGRAM',
    linkHref: '/phd',
    imageSrc: '/csdep2.png',
  },
]

export default function ProgramHighlights() {
return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-3xl font-bold">Program Highlights</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {programHighlights.map((program, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-white shadow-md"
                >
                    <div className="md:flex px-2">
                        <div className="md:flex-shrink-0 flex justify-center items-center"> 
                            <Image
                                src={program.imageSrc}
                                alt={program.title}
                                width={200}
                                height={200}
                                className="h-full w-full rounded-md object-cover md:w-48"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="mb-2 text-xl font-semibold">{program.title}</h3>
                            <p className="mb-4 text-gray-600">{program.description}</p>
                            <a
                                href={program.linkHref}
                                className="inline-block rounded-md bg-yellow-400 px-4 py-2 text-black transition duration-300 hover:bg-yellow-600 hover:-translate-y-3"
                            >
                                {program.linkText}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
}
