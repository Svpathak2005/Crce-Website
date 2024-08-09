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
    <div className="flex w-full flex-col bg-white p-4 text-gray-800 md:flex-row md:p-8">
      <div className="mb-6 flex w-full flex-col pr-0 md:mb-0 md:w-1/3 md:pr-12">
        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          Industry Partners
        </h2>
        <div className="flex flex-col space-y-4">
          <p className="text-base font-medium text-gray-700 md:text-lg lg:text-xl">
            Lead the workforce of the future with internships and placements
            across top corporations.
          </p>
          <p className="text-base text-gray-600 md:text-lg">
            Our faculty have pursued career opportunities in some of the best
            organizations including these:
          </p>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 pt-6 md:w-2/3 md:border-l md:border-t-0 md:pl-12 md:pt-0">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-contain bg-center bg-no-repeat transition-all duration-300 ease-in-out hover:scale-110 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
              style={{ backgroundImage: `url('/company/${img}')` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industry
