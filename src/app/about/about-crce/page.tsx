'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import {
  BookOpenText,
  GraduationCap,
  School,
  UsersRound,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'

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
        className="flex h-full w-full flex-col justify-center bg-linear-to-br from-[#001f3f] to-[#003366] md:flex-row md:pt-36"
        id="iqac"
      >
        <div className="flex w-full flex-col items-center justify-center p-8 pt-36 text-white md:w-2/3 md:p-16 md:pt-16">
          <h1
            className={`${zilla.className} mb-3 text-center text-4xl font-bold md:text-5xl lg:text-7xl`}
          >
            About Our College
          </h1>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center bg-linear-to-b from-white to-[#E5F0FF] pt-10">
        <div className="container mx-auto mb-20 flex max-w-[90%] flex-col gap-10 rounded-xl bg-white p-10 shadow-lg md:flex-row-reverse">
          <Image
            alt="college photo"
            src="/college.jpg"
            height={10000}
            width={10000}
            className="max-w-[100%] rounded-lg md:max-w-[50%]"
          />
          <p className="w-full font-HelveticaNeue text-xl md:text-3xl">
            Fr. Conceicao Rodrigues College of Engineering (Fr.CRCE), located in
            the heart of Mumbai, is a premier private engineering college known
            for its unique approach to engineering education and holistic
            development. Established by Agnel Ashram, which began as an
            orphanage and trade school in 1957, the institute has evolved into a
            significant technical complex.
            <br className="mb-2" />
            Fr.CRCE began in 1984 with a Production Engineering program and has
            since expanded to include Electronics, Computer, Information
            Technology, and Mechanical Engineering, along with Master's and
            Doctoral programs. Notably, the institute introduced an AI & Data
            Science undergraduate program in 2020 and a Doctoral program in
            Computer Engineering in 2023.
            <br className="mb-2" />
            The college is consistently ranked highly in surveys by TOI, INDIA
            TODAY, and others, and is accredited by both NBA and NAAC with a
            grade 'A'. Fr.CRCE has also been recognized in the NIRF rankings in
            2017 and 2020.
          </p>
        </div>
      </div>
      <div className="m flex w-full flex-col items-center justify-center bg-[#E5F0FF] px-8 py-16">
        {/* At a glance section */}
        <h2 className="mb-1 text-center font-ptserif text-5xl font-semibold text-blue-950">
          At A Glance
        </h2>
        <h3 className="mb-8 text-center font-ptserif text-xl font-semibold text-blue-950">
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
          <Link
            href="https://youtu.be/ZMDlPfqqAsY?si=y2gZUALPeEHLMqN2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mx-auto rounded-3xl border-4 border-white bg-blue-950 p-20 shadow-lg hover:shadow-2xl md:p-36">
              <h1 className="flex items-center justify-center text-white">
                <Youtube
                  size={200}
                  className="hidden duration-200 ease-in-out hover:scale-110 md:block"
                />
                <Youtube
                  size={90}
                  className="duration-200 ease-in-out hover:scale-110 md:hidden"
                />
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
