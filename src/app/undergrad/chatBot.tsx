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
    name: 'Shipping',
    questions: [
      {
        question: 'What shipping options do you offer?',
        answer: 'We offer standard, expedited, and next-day shipping options.',
      },
      {
        question: 'Can I expedite my shipping?',
        answer:
          'Yes, expedited shipping options are available at checkout for an additional fee.',
      },
      {
        question: 'Do you offer package tracking?',
        answer:
          'Yes, tracking information is provided via email once your order ships.',
      },
    ],
  },
  {
    name: 'Returns',
    questions: [
      {
        question: 'What is your return policy?',
        answer:
          'We accept returns within 30 days of purchase. Items must be unused and in original packaging.',
      },
      {
        question: 'How do I initiate a return?',
        answer:
          'To initiate a return, contact our customer support team for a return authorization number.',
      },
      {
        question: 'Do I have to pay for return shipping?',
        answer:
          'Return shipping costs are the responsibility of the customer unless the item is defective or incorrect.',
      },
      {
        question: 'How long does it take to process a return?',
        answer:
          'Returns are typically processed within 5-7 business days of receipt at our warehouse.',
      },
      {
        question: 'Can I exchange an item?',
        answer:
          'Exchanges are allowed for different sizes or colors of the same item. Contact customer support for assistance.',
      },
      {
        question: 'What if I receive a defective product?',
        answer:
          'If you receive a defective product, contact us within 48 hours for a replacement or refund.',
      },
      {
        question: 'Can I return an item purchased on sale?',
        answer:
          'Sale items are eligible for return unless marked as final sale.',
      },
      {
        question: 'How do I track my return status?',
        answer:
          'You can track your return status through your account or by contacting customer support.',
      },
      {
        question: 'Do you offer store credit for returns?',
        answer:
          'Yes, you can opt for store credit instead of a refund to your original payment method.',
      },
      {
        question: 'What if my return is lost in transit?',
        answer:
          'We recommend using a trackable shipping method. If your return is lost, contact customer support for assistance.',
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
            <h3 className="mb-2 font-bold">Select a Category:</h3>
            {categoryData.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(category)}
                className="mb-2 w-full rounded-lg bg-gray-100 p-2 text-left hover:bg-gray-200"
              >
                {category.name}
              </button>
            ))}
          </div>
        )
      case 'category':
        return (
          <div className="scrollable-section">
            <h3 className="mb-2 font-bold">Select a Question:</h3>
            {selectedCategory?.questions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionSelect(question)}
                className="mb-2 w-full rounded-lg bg-gray-100 p-2 text-left hover:bg-gray-200"
              >
                {question.question}
              </button>
            ))}
            <button
              onClick={handleBackToMain}
              className="mt-4 w-full rounded-lg bg-blue-900 p-2 text-white hover:bg-blue-900"
            >
              Back
            </button>
          </div>
        )
      case 'question':
        return (
          <button
            onClick={handleBackToCategory}
            className="mt-4 w-full rounded-lg bg-blue-900 p-2 text-white hover:bg-blue-900"
          >
            Back
          </button>
        )
    }
  }

  return (
    <div className="flex h-full flex-col rounded-lg bg-white shadow-xl">
      <div className="flex items-center justify-between rounded-t-lg bg-blue-900 p-4 text-white">
        <h3 className="font-bold">Frequently Asked Questions</h3>
        <button onClick={onClose} className="text-2xl">
          &minus;
        </button>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs rounded-lg p-3 ${
                message.isUser ? 'bg-blue-900 text-white' : 'bg-gray-200'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">{renderOptions()}</div>
    </div>
  )
}

export default ChatBot
