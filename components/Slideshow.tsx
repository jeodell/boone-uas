'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

export default function Slideshow({
  images,
  aspectRatio,
}: {
  images: any[]
  aspectRatio?: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length

      setNextIndex(nextIndex)
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentIndex(nextIndex)
        setIsTransitioning(false)
      }, 350)
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, images])

  return (
    <div
      className={`relative h-[200px] sm:h-[240px] md:h-[360px] lg:h-[420px] xl:h-[480px] ${
        aspectRatio ? `aspect-[${aspectRatio}]` : ''
      }`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          className='h-full object-contain'
          src={images[currentIndex].src}
          alt={images[currentIndex].src}
          loading='eager'
          width={480}
          height={480}
          priority
        />
      </div>
      <div
        className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          className='h-full object-contain'
          src={images[nextIndex].src}
          alt={images[nextIndex].src}
          loading='eager'
          width={480}
          height={480}
          priority
        />
      </div>
    </div>
  )
}
