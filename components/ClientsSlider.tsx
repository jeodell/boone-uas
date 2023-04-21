/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import big6 from '../public/images/big6_logo.jpg'
import dronegenuity from '../public/images/dronegenuity_logo.png'
import dronevideos from '../public/images/dronevideos_logo.png'
import flyguys from '../public/images/flyguys_logo.jpg'
import frankblum from '../public/images/frankblum_logo.png'
import giemeroofing from '../public/images/giemeroofing_logo.png'
import iqcontracting from '../public/images/iqcontracting_logo.jpg'
import classes from '../styles/ClientsSlider.module.css'

export default function ClientsSlider() {
  return (
    <div className='relative flex overflow-x-hidden'>
      <div
        className={`${classes.marquee} flex items-center whitespace-nowrap py-12`}
      >
        <img
          src={`${big6.src}`}
          className='mx-12 w-40'
          alt='Big 6 Media Logo'
          width={150}
          height={150}
        />
        <img
          src={`${dronegenuity.src}`}
          className='mx-12 w-40'
          alt='Dronegenuity Logo'
          width={150}
          height={150}
        />
        <img
          src={`${dronevideos.src}`}
          className='mx-12 w-40'
          alt='Drone Videos Logo'
          width={150}
          height={150}
        />
        <img
          src={`${flyguys.src}`}
          className='mx-12 w-40'
          alt='Fly Guys Logo'
          width={150}
          height={150}
        />
        <img
          src={`${frankblum.src}`}
          className='mx-12 w-40'
          alt='Frank Blum Logo'
          width={150}
          height={150}
        />
        <img
          src={`${giemeroofing.src}`}
          className='mx-12 w-40'
          alt='Gieme Roofing Logo'
          width={150}
          height={150}
        />
        <img
          src={`${iqcontracting.src}`}
          className='mx-12 w-40'
          alt='IQ Contracting Logo'
          width={150}
          height={150}
        />
      </div>

      <div
        className={`${classes.marquee2} absolute top-0 flex items-center whitespace-nowrap py-12`}
      >
        <img
          src={`${big6.src}`}
          className='mx-12 w-40'
          alt='Big 6 Media Logo'
          width={150}
          height={150}
        />
        <img
          src={`${dronegenuity.src}`}
          className='mx-12 w-40'
          alt='Dronegenuity Logo'
          width={150}
          height={150}
        />
        <img
          src={`${dronevideos.src}`}
          className='mx-12 w-40'
          alt='Drone Videos Logo'
          width={150}
          height={150}
        />
        <img
          src={`${flyguys.src}`}
          className='mx-12 w-40'
          alt='Fly Guys Logo'
          width={150}
          height={150}
        />
        <img
          src={`${frankblum.src}`}
          className='mx-12 w-40'
          alt='Frank Blum Logo'
          width={150}
          height={150}
        />
        <img
          src={`${giemeroofing.src}`}
          className='mx-12 w-40'
          alt='Gieme Roofing Logo'
          width={150}
          height={150}
        />
        <img
          src={`${iqcontracting.src}`}
          className='mx-12 w-40'
          alt='IQ Contracting Logo'
          width={150}
          height={150}
        />
      </div>
    </div>
  )
}
