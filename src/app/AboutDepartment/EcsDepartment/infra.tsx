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
        className={`${zilla.className} mb-12 text-center md:text-5xl text-3xl font-bold text-blue-900`}
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
              Computing Laboratory - I
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This laboratory caters to the subjects Web Technologies,
                  Software Engineering, Embedded Systems, Computer Organization
                  and IOT. It is equipped with 21 desktop computers with various
                  embedded system software and kits. A Remotelab facility
                  enables students to access FPGA and ARM kits remotely.
                </p>
                <p className="mb-4 text-gray-700">
                  Available software: Proteus, Keil, Mplab, TASM, SSI, AVR
                  studio, Winpic, RTOS, PSOC Creator Software, Star UML.
                </p>
                <p className="mb-4 text-gray-700">
                  Available kits: 8085, 8086, 8051 kits, ARM kits, ARM-Cortex,
                  AVR kits, Universal trainer kit (ARM+PIC), PSOC kits, Stepper
                  motor controller cards.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infraecs/311-1_1.jpg"
                  alt="Computing Laboratory - I"
                  width={400}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Computing Laboratory - II
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This laboratory focuses on VLSI Design, Image Processing, and
                  simulation experiments of Digital and Analog circuits. It is
                  equipped with Sun Solaris Workstations and additional machines
                  with VHDL software for digital circuit simulation and
                  synthesis.
                </p>
                <p className="mb-4 text-gray-700">
                  Students gain hands-on experience with SILVACO (process
                  simulation), MAGIC (layout design), LabView (process
                  simulation), and SPICE (circuit simulation).
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infraecs/ee-nl.jpg"
                  alt="Computing Laboratory - II"
                  width={400}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Computing Laboratory - III
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This laboratory supports courses in Filter Theory, Wireless
                  Communication, Signals and Systems, Data Communication, and
                  Advanced Communication Theory. It features 20 Sun-Ray
                  workstations with Matlab software for communication and signal
                  processing simulations.
                </p>
                <p className="mb-4 text-gray-700">
                  Equipment includes an Antenna trainer, TV trainer, Spectrum
                  Analyzer, and Digital Signal Processing kits with TMS320C6713
                  DSP processors.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infraecs/ee-cl.jpg"
                  alt="Computing Laboratory - III"
                  width={400}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Hardware Laboratory - I
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  Used for practical courses in Electronic Devices and Circuits,
                  and Power Electronics. It is equipped with various Power
                  Electronics kits including Choppers, Inverters, D.C. drives,
                  A.C. drives, and UPS systems.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infraecs/ee-cl.jpg"
                  alt="Hardware Laboratory - I"
                  width={800}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Hardware Laboratory - II
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This lab supports courses in Instrumentation Systems, Control
                  Systems, Robotics, and Mechatronics. It features PID
                  controller and PLC kits for Process Instrumentation
                  experiments, as well as equipment for experiments with Servo
                  motors and Synchros in Control Systems.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infraecs/ee-acl.jpg"
                  alt="Hardware Laboratory - II"
                  width={800}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`${zilla.className} mb-6 text-center text-2xl font-bold text-blue-900`}
            >
              Electrical Lab
            </h3>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700">
                  This lab serves courses in Basic Electrical Engineering,
                  Industrial Electronics, and Electrical Wiring Workshop. It is
                  equipped for experiments on Electrical Machines and
                  Transformers, featuring 3-phase Induction motors, DC motors,
                  Synchronous motors, Motor-Generator sets, and various
                  measurement instruments.
                </p>
                <p className="mb-4 text-gray-700">
                  Equipment includes Digital Storage Oscilloscopes,
                  Multi-Meters, 3-phase Rectifier Units, Function Generators, DC
                  power supplies, Digital Tachometers, and specialized trainer
                  kits like LVDT and RTD.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <Image
                  src="/infraecs/ee-elc.jpg"
                  alt="Electrical Lab"
                  width={800}
                  height={400}
                  className="rounded-lg w-full"
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
