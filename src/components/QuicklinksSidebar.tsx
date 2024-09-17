import React, { useState } from 'react'

interface SidebarTabsProps {
  tabs: TabData[]
  activeTab: string
  AccordionContent: React.ReactNode
  onTabChange: (tabId: string) => void
}
interface TabData {
  id: string
  title: string
}
const Sidebar: React.FC<SidebarTabsProps> = ({
  tabs,
  activeTab,
  AccordionContent,
  onTabChange,
}) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    (tabs[0] && tabs[0].id) || null
  )

  const toggleAccordion = (tabId: string) => {
    setOpenAccordion(openAccordion === tabId ? null : tabId)
    onTabChange(tabId)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden px-2 md:block">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex w-full justify-start border-b border-gray-400 px-2 py-2 ${
              activeTab === tab.id
                ? 'bg-gray-50 text-blue-600'
                : 'text-gray-600 hover:text-blue-400'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="w-full md:hidden">
        {tabs.map((tab) => (
          <div key={tab.id} className="border-b border-gray-400">
            <button
              onClick={() => toggleAccordion(tab.id)}
              className={`flex w-full items-center justify-between px-2 py-2 ${
                activeTab === tab.id
                  ? 'bg-gray-50 text-blue-600'
                  : 'text-gray-600 hover:text-blue-400'
              }`}
            >
              {tab.title}
              <span className="transform transition-transform duration-200 ease-in-out">
                {openAccordion === tab.id ? '▲' : '▼'}
              </span>
            </button>
            {openAccordion === tab.id && (
              <div className="px-4 py-2">
                <div>{AccordionContent}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
export default Sidebar
