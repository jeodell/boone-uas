'use client'

import { SetStateAction, useCallback, useEffect, useState } from 'react'

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { wrap } from 'popmotion'

import booneInField from '../public/images/boone_in_field.jpg'
import booneWithDrone from '../public/images/boone_with_drone.jpg'
import train from '../public/images/train.jpg'
import winstonSalem from '../public/images/winston_salem.jpg'
import classes from '../styles/Slideshow.module.css'

const slides = [booneInField, winstonSalem, booneWithDrone, train]

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

export const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection])
    },
    [page],
  )

  const imageIndex = wrap(0, slides.length, page)

  const prevSlide = () => {
    console.log('prevSlide')
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = useCallback(() => {
    console.log('nextSlide')
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex])

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    console.log('goToSlide')
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className='group relative m-auto w-full px-4 py-16'>
      <div className='h-full w-full rounded-2xl bg-cover bg-center duration-1000'>
        <Image
          src={slides[currentIndex].src}
          alt={`${slides[currentIndex].src}`}
          loading='eager'
          width={1400}
          height={1400}
        />
      </div>
      {/* Left Arrow */}
      <div className='absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl group-hover:block'>
        <ChevronLeftIcon className='h-6 w-6 text-white' onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className='absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl group-hover:block'>
        <ChevronRightIcon className='h-6 w-6 text-white' onClick={nextSlide} />
      </div>
      <div className='top-4 flex justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='cursor-pointer text-2xl'
          >
            <CircleStackIcon />
          </div>
        ))}
      </div>
    </div>
  )

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
