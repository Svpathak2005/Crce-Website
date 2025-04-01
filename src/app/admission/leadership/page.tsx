import { Zilla_Slab } from 'next/font/google'
import Navigation from '@/components/navigation'
import Head from 'next/head'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Page = () => {
  const navigationItems = [
    { label: 'PhD Admission', url: '/admission/phd' },
    { label: 'Postgraduate Admission', url: '/admission/postgraduate' },
    { label: 'Undergraduate Admission', url: '/admission/undergrad' },
  ]

  return (
    <>
      <Head>
        <title>Admissions & Aid - GDSC CRCE</title>
      </Head>
      <div className="flex h-fit w-full flex-col bg-linear-to-b from-gray-50 to-[#E5F0FF] text-gray-900">
        <div
          className="flex h-full w-full flex-col justify-center bg-linear-to-br from-[#001f3f] to-[#003366] md:flex-row md:pt-36"
          id="admission"
        >
          <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
            <h1
              className={`${zilla.className} mb-6 text-4xl font-bold md:text-5xl lg:text-7xl`}
            >
              ADMISSIONS & AID
            </h1>
            <div className="max-md:hidden">
              <Navigation items={navigationItems} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 md:p-16">
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl">
            <iframe
              title="Dr. Surendra Singh Rathod, Principal"
              src="https://www.youtube.com/embed/tZJe-GzWvBY?si=i_AVCbiJkjpK0wJI"
              className="mb-4 aspect-video w-full rounded-lg"
              frameBorder="0"
              allowFullScreen
            />
            <h3 className="text-center text-xl font-semibold text-gray-800">
              Dr. Surendra Singh Rathod, Principal
            </h3>
          </div>
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl">
            <iframe
              title="Dr. Sapna Prabhu, HoD Electronics & Computer Science"
              src="https://www.youtube.com/embed/21Skgm8KYwk"
              className="mb-4 aspect-video w-full rounded-lg"
              frameBorder="0"
              allowFullScreen
            />
            <h3 className="text-center text-xl font-semibold text-gray-800">
              Dr. Sapna Prabhu, HoD Electronics & Computer Science
            </h3>
          </div>
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl">
            <iframe
              title="Dr. Bhushan Patil, HoD Mechanical Engineering"
              src="https://www.youtube.com/embed/21Skgm8KYwk"
              className="mb-4 aspect-video w-full rounded-lg"
              frameBorder="0"
              allowFullScreen
            />
            <h3 className="text-center text-xl font-semibold text-gray-800">
              Dr. Bhushan Patil, HoD Mechanical Engineering
            </h3>
          </div>
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl">
            <iframe
              title="Dr. Sujata Deshmukh, HoD Computer Engineering"
              src="https://www.youtube.com/embed/04uSc38521E"
              className="mb-4 aspect-video w-full rounded-lg"
              frameBorder="0"
              allowFullScreen
            />
            <h3 className="text-center text-xl font-semibold text-gray-800">
              Dr. Sujata Deshmukh, HoD Computer Engineering
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
