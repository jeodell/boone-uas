import Image from 'next/image'

import big6 from '../public/images/big6_logo.jpg'
import dronegenuity from '../public/images/dronegenuity_logo.png'
import dronevideos from '../public/images/dronevideos_logo.png'
import flyguys from '../public/images/flyguys_logo.jpg'
import frankblum from '../public/images/frankblum_logo.png'
import giemeroofing from '../public/images/giemeroofing_logo.png'
import iqcontracting from '../public/images/iqcontracting_logo.jpg'

export default function ClientsSlider() {
  return (
    <div className='relative flex overflow-x-hidden'>
      <div className='flex animate-marquee items-center whitespace-nowrap py-12'>
        <Image
          src={big6}
          className='mx-12'
          width={200}
          alt='Big 6 Media Logo'
        />
        <Image
          src={dronegenuity}
          className='mx-12'
          width={200}
          alt='Dronegenuity Logo'
        />
        <Image
          src={dronevideos}
          className='mx-12'
          width={200}
          alt='Drone Videos Logo'
        />
        <Image src={flyguys} className='mx-12' width={200} alt='FlyGuys Logo' />
        <Image
          src={frankblum}
          className='mx-12'
          width={200}
          alt='Frank Blum Logo'
        />
        <Image
          src={giemeroofing}
          className='mx-12'
          width={200}
          alt='Gieme Roofing Logo'
        />
        <Image
          src={iqcontracting}
          className='mx-12'
          width={200}
          alt='IQ Contracting Logo'
        />
      </div>

      <div className='absolute top-0 flex animate-marquee2 items-center whitespace-nowrap py-12'>
        <Image
          src={big6}
          className='mx-12'
          width={200}
          alt='Big 6 Media Logo'
        />
        <Image
          src={dronegenuity}
          className='mx-12'
          width={200}
          alt='Dronegenuity Logo'
        />
        <Image
          src={dronevideos}
          className='mx-12'
          width={200}
          alt='Drone Videos Logo'
        />
        <Image src={flyguys} className='mx-12' width={200} alt='FlyGuys Logo' />
        <Image
          src={frankblum}
          className='mx-12'
          width={200}
          alt='Frank Blum Logo'
        />
        <Image
          src={giemeroofing}
          className='mx-12'
          width={200}
          alt='Gieme Roofing Logo'
        />
        <Image
          src={iqcontracting}
          className='mx-12'
          width={200}
          alt='IQ Contracting Logo'
        />
      </div>
    </div>
  )
}
