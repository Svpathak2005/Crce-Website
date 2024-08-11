import React from 'react'
import Link from 'next/link'

interface NavigationItem {
  label: string
  url: string
}

interface NavigationProps {
  items: NavigationItem[]
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="rounded-full bg-white/20 px-4 py-2 text-sm font-light text-white backdrop-blur-sm md:text-base">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="transition-colors duration-200 hover:font-bold hover:text-white hover:underline"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={item.url}>
            <li className="text-white/60">&gt;</li>
            <li>
              <Link
                href={item.url}
                className="transition-colors duration-200 hover:font-bold hover:text-white hover:underline"
              >
                {item.label}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}

export default Navigation
