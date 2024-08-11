import React from 'react'
import Link from 'next/link'

interface TabData {
  id: string
  title: string
  content: React.ReactNode
}

interface SidebarProps {
  tabs: TabData[]
  activeTab: string
}

const Sidebar = async ({ tabs, activeTab }: SidebarProps) => {
  return (
    <div className="flex h-screen w-fit pl-[5vw] pt-5">
      <div className="w-64 bg-white">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`?tab=${tab.id}`}
            className={`block border-b border-gray-400 px-4 py-2 ${
              activeTab === tab.id
                ? 'bg-gray-50 text-blue-600'
                : 'text-gray-600 hover:text-blue-400'
            }`}
          >
            <p className="">{tab.title}</p>
          </Link>
        ))}
      </div>
      {/* <div className="flex-1 overflow-y-auto bg-white p-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div> */}
    </div>
  )
}

export default Sidebar
