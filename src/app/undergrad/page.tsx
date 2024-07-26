import Image from 'next/image'
import Industry from '@/components/industry'
import HeroSection from '@/components/hero-section'
import Newsandupcoming from '@/components/newsandupcoming'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative hero mt-[157px] overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/principal.jpeg"
            alt="Campus background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              TOGETHER,<br />
              WE'LL MAKE<br />
              HISTORY.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join a community of innovative thinkers and future leaders at Johns Hopkins University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300 text-center">
                Apply Now
              </a>
              <a href="#" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300 text-center">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-3 origin-bottom-right"></div>
      </section>
      <section className="min-h-screen flex items-center p-4 md:p-8">
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-8">
            <div className='w-full md:w-2/3'>
              <h1 className={`${zilla.className} mb-6 text-blue-900 text-4xl font-bold md:text-5xl lg:text-7xl`}>Why choose us?</h1>
              <div className='px-4 md:px-10 py-6'>
                <p className="text-xl md:text-2xl text-blue-800 mb-6">
                  Life as a Hopkins student means discovering new ways to express yourself, sharing ideas with friends and classmates, and collaborating on solutions to the big challenges facing today's society.
                </p>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Here you'll have the relationships and resources to explore what you care about most—and then dig deeper to make a difference in the world around you.
                </p>
                <a href="#" className="inline-block bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300">Learn More</a>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-lg">
              <h2 className={`${zilla.className} text-2xl font-bold text-blue-900 mb-6`}>Application Deadlines</h2>
              <ul className="text-gray-700 space-y-4">
                {[
                  ["Early Decision I", "NOV. 1"],
                  ["Early Decision II", "JAN. 2"],
                  ["Regular Decision", "JAN. 2"],
                  ["Transfer", "MAR. 1"]
                ].map(([term, date], index) => (
                  <li key={index} className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">{term}</span>
                    <span className="text-blue-600">{date}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-8 inline-block text-green-600 font-bold hover:underline">LEARN HOW TO APPLY &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-gray-50 p-4 md:p-8">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h1 className={`${zilla.className} mb-6 text-blue-900 text-4xl font-bold md:text-5xl lg:text-7xl`}>Academics & Research</h1>
            <a href="#" className="text-green-600 font-semibold text-xl hover:underline">LEARN MORE &rarr;</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              { title: "$3.4B", description: "Annual Research Funding" },
              { title: "$400K", description: "Annual Start-Up Funding" },
              { title: "98%", description: "Students With Pre-Professional Experience" },
              { title: "80%", description: "Undergraduates With Research Experience" },
              { title: "85%", description: "Students With Internship Experience" },
              { title: "54", description: "Undergraduate Majors" },
              { title: "53", description: "Undergraduate Minors" },
              { title: "6:1", description: "Student to Faculty Ratio" },
              { title: "21", description: "Average Class Size" },
              { title: "68%", description: "Students Double Major or Minor" },
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">{item.title.replace(/[^0-9]/g, '')}</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-600 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center p-4 md:p-8">
        <div className="w-full">
          <h1 className={`${zilla.className} mb-6 text-blue-900 text-4xl font-bold md:text-5xl lg:text-7xl`}>Eligibility</h1>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-8 space-y-4">
            <li>Students who are currently in high school.</li>
            <li>Students who have graduated high school or earned a GED and have less than 12 semester-based credits from another institution. This does not include college credit earned while in high school.</li>
          </ul>
          <p className="text-xl text-gray-700 mb-12">
            If you've already earned a bachelor's degree, you are not eligible to apply for undergraduate admission to Hopkins. We encourage you to explore our <a href="#" className="text-blue-600 hover:underline">graduate programs</a> for more opportunities to pursue your interests.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className={`${zilla.className} mb-6 text-blue-900 text-3xl font-bold md:text-4xl lg:text-6xl`}>Deadlines & Important Dates</h2>
            <p className="text-xl text-gray-700 mb-6">Updated dates are made public on August 1st each year.</p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200">
                <thead className='bg-blue-900 text-white'>
                  <tr>
                    {["", "Early Decision I", "Early Decision II", "Regular Decision", "Transfer"].map((header, index) => (
                      <th key={index} className="px-4 py-3 border-b border-gray-200 text-left">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Application Deadline", "November 1, 2023", "January 2, 2024", "January 2, 2024", "March 1, 2024"],
                    ["Financial Aid Deadline", "November 15, 2023", "January 15, 2024", "March 15, 2024", "March 15, 2024"],
                    ["Decision Release", "December 15, 2023", "February 16, 2024", "March 20, 2024", "May 10, 2024"],
                    ["Reply-By Date", "January 15, 2024", "March 1, 2024", "May 1, 2024", "June 1, 2024"]
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      {row.map((cell, i) => (
                        <td key={i} className="px-4 py-3 border-b border-gray-200">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-gray-50 p-4 md:p-8">
        <div className="w-full">
          <h1 className={`${zilla.className} mb-6 text-blue-900 text-4xl font-bold md:text-5xl lg:text-7xl`}>Frequently Asked Questions</h1>

          <div className="space-y-6">
            {[
              { question: "What is the application deadline?", answer: "The application deadlines vary depending on the admission plan. Early Decision I: November 1, 2023; Early Decision II: January 2, 2024; Regular Decision: January 2, 2024; Transfer: March 1, 2024." },
              { question: "How do I apply for financial aid?", answer: "To apply for financial aid, you need to submit the required forms by the specified deadlines: Early Decision I: November 15, 2023; Early Decision II: January 15, 2024; Regular Decision: March 15, 2024; Transfer: March 15, 2024." },
              { question: "When will I receive my admission decision?", answer: "Admission decisions are released on the following dates: Early Decision I: December 15, 2023; Early Decision II: February 16, 2024; Regular Decision: March 20, 2024; Transfer: May 10, 2024." },
              { question: "What are the eligibility criteria for applying?", answer: "Students currently in high school or those who have graduated high school or earned a GED with less than 12 semester-based credits from another institution are eligible to apply. Those with a bachelor's degree are encouraged to explore our graduate programs." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">{item.question}</h2>
                <p className="text-lg text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
