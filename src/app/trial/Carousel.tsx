// components/Carousel.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CarouselItem {
  id: string
  imageUrl: string
  title: string
  description: string
  link: string
}

interface CarouselProps {
  items: CarouselItem[]
}

const Carousel = async ({ items }: CarouselProps) => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="animate-carousel flex">
        {items.concat(items).map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex-none px-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
