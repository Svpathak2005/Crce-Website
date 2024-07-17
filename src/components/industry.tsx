import React from 'react'

const Industry = () => {
  const images = [
    'accectire.png',
    'colgate.png',
    'godrej.jpg',
    'infosis.jpg',
    'jp.png',
    'lt.png',
    'seclore.png',
    'tcs.jpg',
  ]

  return (
    <div className="flex w-full bg-white p-8 text-black">
      <div className="w-1/4 pr-12">
        <h2 className="mb-4 text-3xl font-bold">Industry Partners</h2>
        <div className="flex flex-col space-y-3">
          <p className="text-lg text-black">
            Lead the workforce of the future with internships and placements
            across top corporations.
          </p>
          <p className="text-lg text-black">
          Our faculty have pursued career opportunities in some of the best organizations including these 
          </p>
        </div>
      </div>
      <div className="w-3/4 border-l border-gray-300 pl-12">
        <div className="grid grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative h-36 w-36 overflow-hidden rounded-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url('/company/${img}')` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industry
