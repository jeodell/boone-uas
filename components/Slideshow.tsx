'use client'

import { SetStateAction, useCallback, useEffect, useState } from 'react'

import Image from 'next/image'

import booneAndCoworker from '../public/images/boone_and_coworker.jpg'
import droneAutumn from '../public/images/drone_autumn.jpg'
import droneHillsRiverRailRoad from '../public/images/drone_hills_river_rail_road.jpg'
import droneNcMutualLife from '../public/images/drone_ncmutuallife.jpg'
import droneStevensCenter from '../public/images/drone_stevens_center.jpg'
import droneTrain from '../public/images/drone_train.jpg'
import droneWinstonSalem from '../public/images/drone_winston_salem.jpg'
import overheadApartmentsPool from '../public/images/overhead_apartments_pool.jpg'
import overheadBeach from '../public/images/overhead_beach.jpg'
import overheadCows from '../public/images/overhead_cows.jpg'
import overheadHeartLake from '../public/images/overhead_heart_lake.jpg'
import overheadKayaks from '../public/images/overhead_kayaks.jpg'
import overheadOcean from '../public/images/overhead_ocean.jpg'
import overheadSolar from '../public/images/overhead_solar.jpg'
import overheadSolarAngled from '../public/images/overhead_solar_angled.jpg'
import overheadSolarField from '../public/images/overhead_solar_field.jpg'
import overheadSolarGrid from '../public/images/overhead_solar_grid.jpg'

const images = [
  droneWinstonSalem,
  droneHillsRiverRailRoad,
  booneAndCoworker,
  droneTrain,
  overheadSolar,
  droneAutumn,
  overheadHeartLake,
  overheadOcean,
  overheadSolarAngled,
  overheadBeach,
  droneNcMutualLife,
  overheadCows,
  droneStevensCenter,
  overheadKayaks,
  overheadApartmentsPool,
  overheadSolarField,
  overheadSolarGrid,
]

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
    }, 4000)
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
