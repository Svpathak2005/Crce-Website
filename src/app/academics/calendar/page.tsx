import React from 'react'

const PDFViewerPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-white to-[#E5F0FF]">
      <header className="bg-white p-10 pt-48 text-center text-[#00122a]">
      <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            Academic Calendar
          </h1>
      </header>

      <main className="container mx-auto my-8 grow p-4">
        <div className="mb-8 rounded-lg bg-white p-4 shadow-lg">
        
          <div className="h-[800px] w-full">
            {' '}
            {/* Adjust height as needed */}
            <object
              data="/Academic-Calendar-2023-34.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-300"
            >
              <p>
                Unable to display PDF file.
                <a
                  href="/Academic-Calendar-2023-34.pdf"
                  className="text-blue-600 hover:underline"
                >
                  Download
                </a>{' '}
                instead.
              </p>
            </object>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PDFViewerPage
