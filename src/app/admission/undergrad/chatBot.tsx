'use state'

import React, { useState, useEffect, useRef } from 'react'
import './chatbot.css'

interface Message {
  text: string
  isUser: boolean
}

interface FAQItem {
  question: string
  answer: string
}

interface CategoryItem {
  name: string
  questions: FAQItem[]
}

const categoryData = [
  {
    name: 'Payment of Fees',
    questions: [
      {
        question: 'What is the fee of B.tech program at Fr.CRCE?',
        answer:
          'For academic year 2024-25, Fees sanctioned by FRA is Rs. 1,81,000/- + University Processing Fees for First year B.Tech. Programs.',
      },
      {
        question:
          'Does the tuition fee remain same till the completion of the course?',
        answer: 'YES. Tuition fees remain same during four years of study.',
      },
      {
        question:
          'Am I eligible for any kind of scholarship or concession in fees? tuition fee remain same till the completion of the course?',
        answer:
          'YES. You are entitled for scholarship / concession fees depending upon the category / caste of the candidate and subject to the condition that you should have been admitted through CAP rounds only. Apart from Government scholarship schemes, many private scholarships are also available for which you need to approach appropriate scholarship giving agency/institution.',
      },
      {
        question:
          'When education loan is sanctioned by the Bank, I will get it or the Bank sends it to the college?',
        answer:
          "You have to take admission first by paying necessary fees (you have to make arrangement for first year) and apply for a Fee Structure & Bonafide certificate from college. Then college will give the certificate within a week. The bank sanctions loan after Bonafide certificate is submitted by the candidate while applying for loan and sends it to college or students account as per bank's policy. If it comes to the college account then college gives refund to the student",
      },
      {
        question:
          'When education loan is sanctioned by the Bank, I will get it or the Bank sends it to the college?',
        answer:
          "You have to take admission first by paying necessary fees (you have to make arrangement for first year) and apply for a Fee Structure & Bonafide certificate from college. Then college will give the certificate within a week. The bank sanctions loan after Bonafide certificate is submitted by the candidate while applying for loan and sends it to college or students account as per bank's policy. If it comes to the college account then college gives refund to the student",
      },
      {
        question:
          'When education loan is sanctioned by the Bank, I will get it or the Bank sends it to the college?',
        answer:
          "You have to take admission first by paying necessary fees (you have to make arrangement for first year) and apply for a Fee Structure & Bonafide certificate from college. Then college will give the certificate within a week. The bank sanctions loan after Bonafide certificate is submitted by the candidate while applying for loan and sends it to college or students account as per bank's policy. If it comes to the college account then college gives refund to the student",
      },
      {
        question: '',
        answer: '',
      },
    ],
  },
  {
    name: 'Placement and Internships',
    questions: [
      {
        question: 'How are the campus placements?',
        answer:
          'Placements at FRCRCE is at par with other reputed colleges in Mumbai and Maharashtra state. FR. CRCE provides 100% placement. Around 20 to 25% students who wish to pursue higher study immediately after B.E. opt out of placement.',
      },
      {
        question: 'Which are the companies that come here for recruitment?',
        answer:
          'Companies from various sectors like development, R&D, FinTech and core visit campus for placements. Multinationals like JPMC, Morgan Stanley, GEP, Barclays, Hexaware, Infosys, IBM, ICICI securities, Johnson control, L & T, L & T infotech, Seclore, selec, Siemens, siemens, Reliance, Amazon, Accenture are regular recruiters. Students also get placement offers from Microsoft, Amazon etc. You can visit FR. CRCE website to see the placement statistics.',
      },
      {
        question:
          'What is the difference in placement policy between various branches?',
        answer:
          'Placement policy is same for all branches. In most of the companies students from all branches are eligible to apply; except few depending on the job profile.',
      },
      {
        question: 'We want know more about honors and minor degrees?',
        answer:
          'FRCRCE has introduced honors and minor B.E. degree program from academic year 2022 -23. Following is the list of programs Blockchain, Cyber security, Robotics, 3-D printing, Al and ML. Data science, IoT.',
      },
      {
        question: 'What is the scope for industry interaction?',
        answer:
          'College is associated with many industries not only for placement but for training programs, lab development, curriculum delivery etc.',
      },
    ],
  },
  {
    name: 'Returns',
    questions: [
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
      {
        question: '',
        answer: '',
      },
    ],
  },
]

const ChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'How can I help you today', isUser: false },
  ])
  const [currentView, setCurrentView] = useState<
    'main' | 'category' | 'question'
  >('main')
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(
    null
  )
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleCategorySelect = (category: CategoryItem) => {
    setSelectedCategory(category)
    setCurrentView('category')
  }

  const handleQuestionSelect = (question: FAQItem) => {
    setMessages([
      ...messages,
      { text: question.question, isUser: true },
      { text: question.answer, isUser: false },
    ])
    setCurrentView('question')
  }

  const handleBackToCategory = () => {
    setCurrentView('category')
  }

  const handleBackToMain = () => {
    setCurrentView('main')
    setSelectedCategory(null)
  }

  const renderOptions = () => {
    switch (currentView) {
      case 'main':
        return (
          <div className="scrollable-section">
            <h3 className="mb-2 text-lg font-bold sm:text-xl">
              Select a Category:
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {categoryData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategorySelect(category)}
                  className="rounded-lg bg-gray-100 p-2 text-left hover:bg-gray-200 sm:p-3"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )
      case 'category':
        return (
          <div className="scrollable-section">
            <h3 className="mb-2 text-lg font-bold sm:text-xl">
              Select a Question:
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {selectedCategory?.questions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionSelect(question)}
                  className="rounded-lg bg-gray-100 p-2 text-left hover:bg-gray-200 sm:p-3"
                >
                  {question.question}
                </button>
              ))}
            </div>
            <button
              onClick={handleBackToMain}
              className="mt-4 w-full rounded-lg bg-blue-900 p-2 text-white hover:bg-blue-900 sm:p-3"
            >
              Back
            </button>
          </div>
        )
      case 'question':
        return (
          <button
            onClick={handleBackToCategory}
            className="mt-4 w-full rounded-lg bg-blue-900 p-2 text-white hover:bg-blue-900 sm:p-3"
          >
            Back
          </button>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-full flex-col rounded-lg bg-white shadow-xl">
      <div className="flex items-center justify-between rounded-t-lg bg-blue-900 p-4 text-white sm:p-6">
        <h3 className="text-lg font-bold sm:text-2xl">
          Frequently Asked Questions
        </h3>
        <button onClick={onClose} className="text-2xl sm:text-3xl">
          &minus;
        </button>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs rounded-lg p-3 sm:p-4 ${
                message.isUser ? 'bg-blue-900 text-white' : 'bg-gray-200'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 sm:p-6">{renderOptions()}</div>
    </div>
  )
}

export default ChatBot
