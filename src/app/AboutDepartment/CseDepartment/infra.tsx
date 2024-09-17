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
        Infrastructure
      </h1>

      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2
          className={`${zilla.className} mb-12 text-center text-2xl font-bold text-blue-900`}
        >
          Computing and Hardware Laboratories
        </h2>

        <div className="space-y-8">
          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Computing Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  Computing lab (802) has 24 desktop systems (Acer). It has
                  Ubuntu 18.04 LTS operating system. This laboratory is
                  established in the year 2017. The Systems in the laboratory
                  consists of software such as Netbeans, Octave, Postgresql,
                  NS-2, Spice, Umbrello, Visual Studio (Express Edition) and
                  Python.
                </p>
                <p className="mb-4 text-gray-700">
                  Hardware Available: ACER desktop core i3 processor, 8GB RAM,
                  DDR4, 1 TB HDD, Integrated Graphics
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infracse/computinglab.jpg"
                  alt="Computing Lab"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Open Source Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  Open source lab (lab no. 803) has 22 desktop systems (ACER).
                  It has Ubuntu 18.04 LTS operating system. This laboratory is
                  established in the year 2017. The Systems in the laboratory
                  consists of software such as Netbeans, Octave, Postgresql,
                  NS-2, Spice, Umbrello, Visual Studio (Express Edition) and
                  Python.
                </p>
                <p className="mb-4 text-gray-700">
                  Hardware Available: ACER desktop core i3 processor, 8GB RAM,
                  DDR4, 1 TB HDD, Integrated Graphics
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infracse/opensourcelab.jpg"
                  alt="Open Source Lab"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Network Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  Network Lab (804) has 24 desktop systems (DELL). It has Ubuntu
                  18.04 LTS operating system. This laboratory is established in
                  the year 2018. The Systems in the laboratory consists of
                  software such as Netbeans, Octave, Postgresql, NS-2, Spice,
                  Umbrello, Visual Studio (Express Edition), Python, Rtstudio,
                  WEKA
                </p>
                <p className="mb-4 text-gray-700">
                  Hardware Available: DELL OPTIPLEX 3050 desktop, i3 processor,
                  8GB/SSR IV RAM, 1 TB HDD
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infracse/networklab.jpg"
                  alt="Network Lab"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Design Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  The Design Lab (808) consists of 12 desktop systems (HP). This
                  laboratory is established in the year 2016. This laboratory is
                  equipped with instruments such as CRO, Function generator,
                  Multimeter and kits to perform PPM Modulation, De-Modulation,
                  Noise Generation applications, Data Formatting, and Carrier
                  Modulation and Sampling & Reconstruction Technique. Lab
                  equipped with 1. Different types of sensors like Temperature
                  Sensor, Humidity sensor, Ultrasonic sensor, Gas sensor, PIR
                  sensor, Sound sensor etc., Different IOT boards like Ardino
                  boards, Node MCU boards, Rasberry PI boards is available to
                  give exposure to students when they develop any IOT based
                  product.
                </p>
                <p className="mb-4 text-gray-700">
                  Hardware Available: HP202 G1 MT Business PC, Core i3, 4GB RAM,
                  500GB HDD, SENSORS and IOT boards
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infracse/designlab.jpg"
                  alt="Design Lab"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Programming Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  The Programming Lab (809) has 20 desktop systems (LENOVO). Lab
                  is also equipped with 4 DELL workstation to carry advanced
                  research projects in AI&DS domain. It has Ubuntu 20.04
                  operating system. This laboratory is established in the year
                  2022. The Systems in the laboratory consists of software such
                  as Netbeans, Octave, Postgresql, NS-2, Spice, TexStudio, Weka
                  and Visual Studio (Express Edition), Python, Java.
                </p>
                <p className="mb-4 text-gray-700">
                  Hardware Available: LENOVO Think centre (20), Core i3
                  processor, 8GB RAM, 1 TB HDD, DELL Workstation precision 3650
                  Tower, core i7 processor, 11th generation 2.5GHZ/4.16, NVIDIA
                  T1000/8CIE/3552 GPU, 1 TB SATA, 16GB RAM
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infracse/programming.jpg"
                  alt="Programming Lab"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Database Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  The Database Lab (810) Lab has 24 desktop systems (HP). This
                  laboratory is established in the year 2016. The Systems in the
                  laboratory consists of software such as Netbeans, Octave,
                  Postgresql, NS-2, Spice, TexStudio, Weka and Visual Studio
                  (Express Edition), Python, Java.
                </p>
                <p className="mb-4 text-gray-700">
                  Hardware Available: HP202 G1 MT Business PC, Core i3, 4GB RAM,
                  500GB HDD
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infracse/databaselab.jpg"
                  alt="Database Lab"
                  width={400}
                  height={400}
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
