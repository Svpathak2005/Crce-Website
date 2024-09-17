import React from 'react'
import Image from 'next/image'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Infrastructure = () => {
  return (
    <div className="container mx-auto p-6">
      <h1
        className={`${zilla.className} mb-12 text-center text-5xl font-bold text-blue-900`}
      >
        Science & Humanities Infrastructure
      </h1>

      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2
          className={`${zilla.className} mb-12 text-center text-2xl font-bold text-blue-900`}
        >
          Laboratories and Facilities
        </h2>

        <div className="space-y-8">
          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Physics Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This is the laboratory where experiments related to
                  Engineering Physics-I and Engineering Physics-II are
                  performed. The laboratory is well equipped with latest
                  instruments and training kits. Some of the instruments
                  available include Ultrasonic Interferometer, Solar Cell, Hall
                  Effect Apparatus, Ultrasonic Distance Meter, Crystal
                  Rectifier, P-N Junction Band gap measurement setup, He-Ne
                  Lasers, Semiconductor diode lasers, Travelling microscopes,
                  Planck's Constant Apparatus, and more.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infrasci/merge1.jpg"
                  alt="Physics Laboratory"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Chemistry Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This laboratory was established at the inception of the
                  college. It is well equipped and dedicated to performing
                  practicals of Applied Chemistry for all branches of
                  Engineering. The laboratory caters to the necessary
                  requirements of glassware and chemicals. Instruments available
                  include Potentiometer, Conductometer, pH- Meter, Melting Point
                  Apparatus, Digital Colorimeter, Electronic weighing Balance,
                  Water Distillation Plant, Oven, Furnace, Abel's Flash Point
                  Apparatus, Redwood Viscometer, Vicat's Apparatus, and Flue gas
                  analyzer.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infrasci/chemlab3.jpg"
                  alt="Chemistry Laboratory"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Language Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  Good communication skills are indispensable for the success of
                  any professional. Our language laboratory plays an important
                  role in the language learning process. It is a technological
                  aid for learning that has a number of advanced facilities that
                  can help a student to learn a language with proficiency to
                  communicate. The language laboratory is designed to assist
                  learners in the acquisition and maintenance of aural
                  comprehension, oral and written proficiency, and cultural
                  awareness.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infrasci/merge4.jpg"
                  alt="Language Laboratory"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Class Rooms
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  The department has 5 class rooms dedicated for the First Year
                  students. The class rooms are spacious with Wi-Fi connectivity
                  and equipped with multimedia projectors. The seating
                  arrangements are ergonomically designed to have maximum
                  comfort to the students for day long academic activities.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infrasci/merge1.jpg"
                  alt="Class Rooms"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infrastructure
