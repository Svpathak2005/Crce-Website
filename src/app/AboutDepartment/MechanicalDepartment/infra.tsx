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
        Mechanical Engineering Infrastructure
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
              Mechanisms and Machines Laboratory
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This laboratory facilitates experimentation related to
                  mechanics with various apparatuses such as Force Table, Coil
                  Spring, Bell Crank Lever, Friction Slide, Simple Beam, and
                  Collision of Elastic Bodies. It also includes equipment for
                  dynamics of machines experiments like static &amp; dynamic
                  balancing apparatus, Whirling Speed of shaft, Gyroscope,
                  Governor, Cam analysis apparatus, Coriolis Component of
                  acceleration, Piezoelectric Vibrometer and Vibration
                  Apparatus.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/inframech/dom.jpg"
                  alt="Mechanisms and Machines Laboratory"
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
              CAD/CAM Laboratory
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This laboratory is well-equipped with state-of-art
                  computational facilities including High-End Graphic
                  Workstations. It features 3D Modeling and Analysis Software
                  such as Ansys, NX11, Solidworks, and Autocad. The lab also
                  includes a 3D Printer for rapid prototyping.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/inframech/cadcam.jpg"
                  alt="CAD/CAM Laboratory"
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
              HVAC Laboratory
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This laboratory facilitates experimentation related to HVAC
                  using cooling tower, ice plant, open-type air conditioning
                  test rig and vapour absorption refrigeration test rig.
                  Students can gain hands-on experience with various HVAC
                  systems and principles.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/inframech/havac.jpg"
                  alt="HVAC Laboratory"
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
              Turbomachinery Laboratory
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This laboratory facilitates experimentation related to
                  Turbomachinery using Pelton Turbine, Francis Turbine,
                  Venturimeter, Impact of Jet Apparatus, Air compressor,
                  Metacentric Height and Bernoulli's Apparatus. Students can
                  study and experiment with various types of turbines and fluid
                  machinery.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/inframech/turbo.jpg"
                  alt="Turbomachinery Laboratory"
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
              FE Workshop
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  The First Year Engineering Workshop includes facilities such
                  as Carpentry, Fitting and State-of-Art Welding Machines. This
                  workshop provides students with hands-on experience in basic
                  engineering skills and manufacturing processes.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/inframech/feworkshop.jpg"
                  alt="FE Workshop"
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
              Machine Shop
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  The Machine shop is equipped with adequate Conventional
                  Lathes, Shaper, Milling Machine, Drilling Machine, Grinder,
                  Universal Milling Machine (Becker) along with Modern
                  Production Grade CNC Turning and Milling Machines. This
                  facility allows students to gain practical experience in
                  various machining processes.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/inframech/mahineshop.jpg"
                  alt="Machine Shop"
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
              PG Laboratory (Project Based Learning)
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This laboratory provides an environment for projects based
                  learning and is equipped with Modelling Softwares, MATLAB and
                  other Statistical Analysis Freewares. It supports postgraduate
                  students in their research and project work.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/inframech/msmlab.jpg"
                  alt="PG Laboratory"
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
