'use client'

import { SetStateAction, useCallback, useEffect, useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import train from '../public/images/train.jpg'
import winstonSalem from '../public/images/winston_salem.jpg'

const images = [winstonSalem, train]

// const variants = {
//   enter: (direction: number) => {
//     return {
//       x: direction > 0 ? 100 : -100,
//       opacity: 0,
//     }
//   },
//   visible: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//     transition: {
//       delay: 0.25,
//     },
//   },
//   exit: (direction: number) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 100 : -100,
//       opacity: 0,
//     }
//   },
// }

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection])
    },
    [page],
  )

  // const imageIndex = wrap(0, images.length, page)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex])

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className='relative h-[200px] sm:h-[240px] md:h-[360px] lg:h-[420px] xl:h-[480px]'>
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              className='h-full object-contain'
              src={image.src}
              alt={image.src}
              loading='eager'
              width={480}
              height={480}
              priority
            />
          </div>
        )
      })}
      {/* <button
        className='absolute left-2 top-1/2 -translate-y-1/2 transform xs:left-10 sm:left-12'
        onClick={prevSlide}
      >
        <ChevronLeftIcon className='h-5 w-5 text-white lg:h-6 lg:w-6' />
      </button>
      <button
        className='absolute right-2 top-1/2 -translate-y-1/2 transform xs:right-10 sm:right-12'
        onClick={nextSlide}
      >
        <ChevronRightIcon className='h-5 w-5 text-white lg:h-6 lg:w-6' />
      </button> */}
    </div>
  )

  // return (
  //   <div className='group relative h-full'>
  //     <Image
  //       src={slides[currentIndex].src}
  //       alt={`${slides[currentIndex].src}`}
  //       loading='eager'
  //       width={1400}
  //       height={1400}
  //       priority
  //     />
  //     {/* Left Arrow */}
  //     <div className='absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl group-hover:block'>
  //       <ChevronLeftIcon className='h-6 w-6 text-white' onClick={prevSlide} />
  //     </div>
  //     {/* Right Arrow */}
  //     <div className='absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl group-hover:block'>
  //       <ChevronRightIcon className='h-6 w-6 text-white' onClick={nextSlide} />
  //     </div>
  //     <div className='top-4 flex justify-center py-2'>
  //       {slides.map((slide, slideIndex) => (
  //         <div
  //           key={slideIndex}
  //           onClick={() => goToSlide(slideIndex)}
  //           className='cursor-pointer text-2xl'
  //         >
  //           <CircleStackIcon />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )

  // return (
  //   <div className='relative flex flex-col justify-center align-middle'>
  //     <AnimatePresence initial={false} custom={direction} mode='popLayout'>
  //       <motion.div
  //         className={classes.slideshow}
  //         key={page}
  //         custom={direction}
  //         // variants={variants}
  //         initial='enter'
  //         animate='visible'
  //         exit='exit'
  //         transition={{
  //           type: 'tween',
  //         }}
  //       >
  //         <img
  //           src={slides[imageIndex].src}
  //           alt={`${slides[imageIndex].src}`}
  //           loading='eager'
  //         />
  //       </motion.div>
  //     </AnimatePresence>
  //     <div className='mt-4 flex justify-center'>
  //       <div className={classes.prev} onClick={() => paginate(-1)}>
  //         <ChevronLeftIcon />
  //       </div>
  //       <div className={classes.next} onClick={() => paginate(1)}>
  //         <ChevronRightIcon />
  //       </div>
  //     </div>
  //   </div>
  // )
}
