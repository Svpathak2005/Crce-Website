'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  BookOpenText,
  GraduationCap,
  School,
  UsersRound,
  PlayCircle,
} from 'lucide-react'
import Link from 'next/link'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Page() {
  const videoId = 'ZMDlPfqqAsY'
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-[191px]">
      {/* Hero Section */}
      <motion.div
        className="relative w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1
            className={`${zilla.className} text-center text-5xl font-bold tracking-tight text-black md:text-7xl`}
          >
            About Our College
          </h1>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        {...fadeIn}
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] h-full w-full overflow-hidden">
              <Image
                alt="college photo"
                src="/college.jpg"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-500 hover:scale-105"
              />
            </div>
            <motion.div
              className="p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="prose prose-lg max-w-none text-gray-600">
                Fr. Conceicao Rodrigues College of Engineering (Fr.CRCE),
                located in the heart of Mumbai, is a premier private engineering
                college known for its unique approach to engineering education
                and holistic development. Established by Agnel Ashram, which
                began as an orphanage and trade school in 1957, the institute
                has evolved into a significant technical complex.
                <br className="mb-2" />
                Fr.CRCE began in 1984 with a Production Engineering program and
                has since expanded to include Electronics, Computer, Information
                Technology, and Mechanical Engineering, along with Master's and
                Doctoral programs. Notably, the institute introduced an AI &
                Data Science undergraduate program in 2020 and a Doctoral
                program in Computer Engineering in 2023.
                <br className="mb-2" />
                The college is consistently ranked highly in surveys by TOI,
                INDIA TODAY, and others, and is accredited by both NBA and NAAC
                with a grade 'A'. Fr.CRCE has also been recognized in the NIRF
                rankings in 2017 and 2020.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              At A Glance
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The Numbers That Define Our Excellence
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Graduates', value: '9000+', icon: GraduationCap },
              { label: 'Programs', value: '8', icon: BookOpenText },
              { label: 'Classrooms', value: '23', icon: School },
              { label: 'Students', value: '1200+', icon: UsersRound },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/10 transition-transform group-hover:scale-150" />
                <stat.icon className="h-8 w-8 text-blue-600" />
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tour Section */}
      <div className="bg-white py-16">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Take A Tour
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our Campus: A Living Laboratory for Sustainability
            </p>
            <p className="mt-2 text-gray-500">
              Located at Bandstand, Bandra, Mumbai in a picturesque environment
              surrounded by the Arabian Sea
            </p>
          </div>

          <Link
            href={`https://youtu.be/${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 block"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={thumbnailUrl}
                  alt="Campus Tour Video Thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white transition-transform duration-300 group-hover:scale-125 sm:h-24 sm:w-24" />
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
