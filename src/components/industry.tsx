import React from 'react'

const Industry = () => {
  const images = [
    'accectire.png',
    'colgate.jpg',
    'godrej.jpg',
    'infosis.jpg',
    'jp.png',
    'lt.png',
    'seclore.png',
    'tcs.jpg',
  ]

  return (
    <div className="flex w-full flex-col bg-white p-4 text-black md:flex-row md:p-8">
      <div className="mb-6 flex w-full flex-col pr-0 md:mb-0 md:w-1/4 md:pr-12">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Industry Partners
        </h2>
        <div className="flex flex-col space-y-3">
          <p className="text-base text-black md:text-lg">
            Lead the workforce of the future with internships and placements
            across top corporations.
          </p>
          <p className="text-base text-black md:text-lg">
            Our faculty have pursued career opportunities in some of the best
            organizations including these
          </p>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 pt-6 md:w-3/4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-contain bg-center bg-no-repeat sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
              style={{ backgroundImage: `url('/company/${img}')` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industry
