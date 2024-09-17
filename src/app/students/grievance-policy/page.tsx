import Footer from '@/components/footer'
import React from 'react'

const PDFViewerPage = () => {
  return (
    <div className="absolute top-0 flex h-fit w-full flex-col items-center justify-center bg-gradient-to-b from-white to-[#E5F0FF]">
      <header className="h-full w-full bg-gradient-to-br from-[#001f3f] to-[#003366] p-6 pt-48 text-center text-white">
        <h1 className="text-2xl font-bold">
          STUDENT GRIEVANCE REDRESSAL POLICY
        </h1>
      </header>

      <main className="container mx-auto my-8 flex-grow p-4">
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">
            STUDENT GRIEVANCE REDRESSAL POLICY
          </h2>
          <div className="h-[800px] w-full">
            {' '}
            {/* Adjust height as needed */}
            <object
              data="/grievance_policy.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-300"
            >
              <p>
                Unable to display PDF file.
                <a
                  href="/grievance_policy.pdf"
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
      <Footer />
    </div>
  )
}

export default PDFViewerPage
