import React from 'react'

interface Speech {
  date: string
  title: string
  description: string
}

const speeches: Speech[] = [
  {
    date: 'October 6, 2023',
    title: 'Announcing new School of Government and Policy',
    description:
      'President Daniels shares that as a significant element of our deepening presence in the nation’s capital we are launching the Johns Hopkins University School of Government and Policy, our first new academic division since 2007.',
  },
  {
    date: 'January 5, 2023',
    title: 'Hopkins featured on NBC Nightly News for ending legacy admissions',
    description:
      "Johns Hopkins University President Ron Daniels led the charge to eliminate legacy admissions at JHU. 'It’s opened up a lot more space for us to be able to recruit students from a host of different backgrounds,' Daniels says.",
  },
  {
    date: 'September 15, 2023',
    title: 'Announcing the Ten for One, 10 goals for 1 University',
    description:
      'President Daniels shares the final version of our new strategic vision, the Ten for One — 10 ambitious goals for our One University.',
  },
]

const HighlightedSpeeches: React.FC = () => {
  return (
    <div className="bg-[#E5F0FF] px-8 py-16">
      <h2 className="mb-10 text-center font-ptserif text-5xl font-semibold text-blue-950">
        Highlighted Speeches, Articles, and Media
      </h2>
      <div className="flex flex-col justify-center gap-8 md:flex-row">
        {speeches.map((speech, index) => (
          <div
            key={index}
            className="w-full rounded-lg bg-white p-6 shadow-lg md:w-1/3"
          >
            <p className="mb-2 font-semibold text-blue-600">
              {speech.date.toUpperCase()}
            </p>
            <h3 className="mb-4 text-xl font-bold text-gray-800">
              {speech.title}
            </h3>
            <p className="text-gray-600">{speech.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HighlightedSpeeches
