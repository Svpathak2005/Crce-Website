'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import { BookOpenText, GraduationCap, School, UsersRound } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Page() {
  return (
    <main className="flex h-fit w-full flex-col items-center justify-center">
      <div
        className="flex h-full w-full flex-col justify-center bg-gradient-to-br from-[#001f3f] to-[#003366] pt-36 md:flex-row"
        id="iqac"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-40 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-3 text-center text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            About Our College
          </h1>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-[#E5F0FF] pt-10">
        <div className="container mx-auto mb-20 flex rounded-xl bg-white p-6 shadow-lg">
          <p className="text-lg">
            Located in a picturesque environment in the heart of the Mumbai
            city, Fr.Conceicao Rodrigues College of Engineering (Fr.CRCE) is one
            of the renowned, premier and sought-after private Engineering
            colleges. The Institute is dedicated to making a difference in
            Engineering education, with its exclusive approach towards the
            ongoing momentum of trends in technology and holistic development.
            <br className="mb-2" />
            Beginning with an orphanage (BalBhavan) and a trade school in
            carpentry, the Agnel Ashram (set up in 1957 at Bandra, Mumbai) has
            today grown into a full-fledged Technical Complex. The Institute
            today proudly bears the founder's name as a fitting tribute to his
            impassioned faith in highly-qualified and fully-trained engineers
            and technicians in the service of the nation.
            <br className="mb-2" />
            The Institute started with only one programme in Production
            Engineering in 1984 with an intake capacity of 60 students. In 1987,
            the programme in Electronics Engineering was started with an intake
            capacity of 60 students followed by Computer Engineering in 1991
            with an intake capacity of 60 students. In 2001, the programme in
            Information Technology was started with an intake capacity of 30
            students which was later increased to 60 in 2010. The College
            started offering Master’s Degree in Electronics Engineering and
            Mechanical Engineering in the year 2005, each having an intake
            capacity of 18. Doctoral programs in Electronics Engineering and
            Mechanical Engineering commenced in 2014 and 2015 respectively. From
            the year 2019, a new Undergraduate degree programme in Mechanical
            Engineering has been started with an intake capacity of 60. Also,
            the BE undergraduate programme in Electronics Engineering has been
            changed to Electronics and Computer Science. The Undergraduate
            programme in Information Technology has been merged with Computer
            Engineering. From the year 2020, college is offering new
            undergraduate programme in the emerging area of ‘AI & Data Science’.
            Also, Doctoral program in Computer Engineering started in the year
            2023.
            <br className="mb-2" />
            The Institute has been consistently ranked highly in major surveys
            like TOI, INDIA TODAY, Career 360, The Week and Education World to
            name a few. College is ranked by NIRF in 2017 and 2020. Based on the
            Outcome-Based Education (OBE) parameters and criteria, three
            programmes (Computer, Electronics and Production Engineering) of the
            institute have been accredited by the National Board of
            Accreditation (NBA-India) since 2017-2018. The college is also a
            NAAC accredited with grade 'A
          </p>
          <div className="float-end">
            <Image
              alt="college photo"
              src="/college.jpg"
              height={10000}
              width={10000}
              className="max-h-[500px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="m flex w-full flex-col items-center justify-center bg-[#E5F0FF] px-8 py-16">
        {/* At a glance section */}
        <h2 className="mb-1 text-center font-ptserif text-5xl font-semibold text-blue-950">
          At A Glance
        </h2>
        <h3 className="mb-8 font-ptserif text-xl font-semibold text-blue-950">
          The Number Of Students Gradutates & Under Graduates From Our College
        </h3>
        <div className="mb-10 flex flex-col gap-10 md:flex-row">
          <div className="flex cursor-default flex-col rounded-br-3xl rounded-tl-3xl border-4 border-white bg-blue-950 p-6 font-roboto text-white shadow-lg duration-300 ease-in-out hover:scale-125">
            <h2 className="flex items-center justify-center gap-2 text-xl">
              Gradutes <GraduationCap />
            </h2>
            <p className="text-center text-3xl">9000</p>
          </div>
          <div className="flex cursor-default flex-col rounded-br-3xl rounded-tl-3xl border-4 border-white bg-blue-950 p-6 font-roboto text-white shadow-lg duration-300 ease-in-out hover:scale-125">
            <h2 className="flex items-center justify-center gap-2 text-xl">
              Programs <BookOpenText />
            </h2>
            <p className="text-center text-3xl">8</p>
          </div>
          <div className="flex cursor-default flex-col rounded-br-3xl rounded-tl-3xl border-4 border-white bg-blue-950 p-6 font-roboto text-white shadow-lg duration-300 ease-in-out hover:scale-125">
            <h2 className="flex items-center justify-center gap-2 text-xl">
              Class Rooms <School />
            </h2>
            <p className="text-center text-3xl">23</p>
          </div>
          <div className="flex cursor-default flex-col rounded-br-3xl rounded-tl-3xl border-4 border-white bg-blue-950 p-6 font-roboto text-white shadow-lg duration-300 ease-in-out hover:scale-125">
            <h2 className="flex items-center justify-center gap-2 text-xl">
              Students <UsersRound />
            </h2>
            <p className="text-center text-3xl">1200</p>
          </div>
        </div>
        {/* Take a tour section  */}
        <div>
          <h2 className="mb-1 text-center font-ptserif text-5xl font-semibold text-blue-950">
            Take A Tour
          </h2>
          <h2 className="mb-1 text-center font-ptserif text-2xl font-semibold text-blue-950">
            OUR CAMPUSES ARE A LIVING LABORATORIES FOR SUSTAINABILITY
          </h2>
          <h3 className="mb-8 text-center font-ptserif text-xl font-semibold text-blue-950">
            The college is located at Bandstand, Bandra, Mumbai in a picturesque
            environment surrounded by the Arabian Sea
          </h3>
          
        </div>
      </div>
    </main>
  )
}
