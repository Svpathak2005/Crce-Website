// components/SideNav.tsx
import React, { ReactNode } from 'react'

interface SideNavProps {
  children: ReactNode
}

const SideNav = ({ children }: SideNavProps) => {
  return (
    <div className="fixed right-10 top-20 w-48 text-white">
      <nav className="rounded-lg bg-gray-800 p-4 shadow-lg">
        <ul className="space-y-4">{children}</ul>
      </nav>
    </div>
  )
}

export default SideNav
