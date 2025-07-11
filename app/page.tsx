import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Analytics } from '@vercel/analytics/react'
import Image from 'next/image'

import ClientsSlider from '../components/ClientsSlider'
import ContactForm from '../components/ContactForm'
import Copyright from '../components/Footer'
import Slideshow from '../components/Slideshow'
import { Video } from '../components/Video'
import googleLogo from '../public/google_logo.png'
import booneAndCoworker from '../public/images/boone_and_coworker.jpg'
import booneFlyingDrone1 from '../public/images/boone_flying_drone_1.jpg'
import booneFlyingDrone2 from '../public/images/boone_flying_drone_2.jpg'
import boonePackingUpDrone from '../public/images/boone_packing_up_drone.jpg'
import booneUASLogo from '../public/images/boone_uas_logo.jpg'
import booneWithDrone from '../public/images/boone_with_drone.jpg'
import booneWorkingOnDrone1 from '../public/images/boone_working_on_drone_1.jpg'
import booneWorkingOnDrone2 from '../public/images/boone_working_on_drone_2.jpg'
import droneAutumn from '../public/images/drone_autumn.jpg'
import droneHillsRiverRailRoad from '../public/images/drone_hills_river_rail_road.jpg'
import droneLineup from '../public/images/drone_lineup.png'
import droneNcMutualLife from '../public/images/drone_ncmutuallife.jpg'
import droneStevensCenter from '../public/images/drone_stevens_center.jpg'
import droneTrain from '../public/images/drone_train.jpg'
import droneWinstonSalem from '../public/images/drone_winston_salem.jpg'
import faaSeal from '../public/images/faa_seal.jpg'
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
import topOperator from '../public/images/top_operator.png'
import trainingPlatformsDji from '../public/images/training_platforms_dji.png'
import trainingPlatformsParrot from '../public/images/training_platforms_parrot.png'
import trainingPlatformSkydio from '../public/images/training_platforms_skydio.png'
import trainingPlatformsWingtra from '../public/images/training_platforms_wingtra.png'

const heroImages = [
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

const aboutImages = [
  booneWithDrone,
  booneFlyingDrone1,
  booneFlyingDrone2,
  boonePackingUpDrone,
  booneWorkingOnDrone1,
  booneWorkingOnDrone2,
]

export default async function Index() {
  return (
    <>
      <main id='home'>
        {/* Hero */}
        <section id='hero'>
          <div className='mx-auto grid max-w-7xl grid-cols-2 px-4 py-16 sm:px-6 lg:px-16'>
            <div className='col-span-1 flex flex-col items-start justify-center px-2'>
              <div className='w-1/2'>
                <Image
                  src={booneUASLogo}
                  alt='Boone UAS Logo'
                  width={400}
                  height={400}
                />
              </div>
              <h2 className='ml-1 mt-2 text-lg dark:text-zinc-200 xs:ml-[0.5rem] xs:text-xl sm:ml-3 sm:text-2xl md:ml-4 md:mt-4 md:text-3xl lg:ml-5 lg:mt-6 xl:ml-6'>
                Drone Service Provider
              </h2>
              <h3 className='ml-1 mt-2 text-sm font-normal italic dark:text-zinc-200 xs:ml-[0.5rem] xs:text-base sm:ml-3 md:ml-4 md:mt-4 md:text-2xl lg:ml-5 xl:ml-6'>
                Unmanned Aerial Systems
              </h3>
              <div className='mx-1 mt-4 xs:mx-[0.5rem] sm:mx-3 md:mx-4 md:mt-6 lg:mx-5 lg:mt-8 xl:mx-6'>
                <Image
                  src={droneLineup}
                  alt='Drone Lineup'
                  width={400}
                  height={100}
                />
              </div>
            </div>
            <div className='col-span-1 m-auto h-full w-full px-2'>
              <Slideshow images={heroImages} aspectRatio='3/4' />
            </div>
            <div className='col-span-2 mt-12 flex flex-col items-center justify-center md:mt-24'>
              <div className='flex items-center justify-center'>
                <h4 className='mr-2 font-bold md:text-xl'>Need a drone?</h4>
                <a
                  className='group flex items-center justify-center'
                  href='#contact'
                >
                  <p className='bg-gradient-to-r bg-[length:100%_2px] bg-left-bottom bg-no-repeat underline decoration-gray-700 underline-offset-[6px] hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900 hover:bg-left-bottom hover:no-underline group-hover:bg-[length:100%_2px] md:text-xl'>
                    Get started today.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id='services'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 md:grid md:grid-cols-3 lg:px-16'>
            <div className='col-span-1 flex items-center justify-center md:block md:self-center md:pl-8'>
              <h3 className='mb-2 text-2xl font-medium dark:text-zinc-200 md:mb-0 md:w-[4ch] md:text-3xl'>
                Our Services
              </h3>
            </div>
            <div className='grid grid-cols-2 pt-4 md:col-span-2 md:pt-0'>
              <div className='col-span-1 mx-auto px-1 md:mx-0'>
                <p className='mb-1 text-lg font-semibold dark:text-zinc-200'>
                  Drone Flights
                </p>
                <div className='flex items-start'>
                  <ChevronRightIcon className='mr-1 mt-2 h-3 w-3 text-gray-700' />
                  <p className='dark:text-zinc-200'>Real Estate Photography</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='mr-1 mt-2 h-3 w-3 text-gray-700' />
                  <p className='dark:text-zinc-200'>
                    Solar Inspection Services
                  </p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='mr-1 mt-2 h-3 w-3 text-gray-700' />
                  <p className='dark:text-zinc-200'>Construction Progression</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='mr-1 mt-2 h-3 w-3 text-gray-700' />
                  <p className='dark:text-zinc-200'>3D Modeling</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='mr-1 mt-2 h-3 w-3 text-gray-700' />
                  <p className='dark:text-zinc-200'>Thermal Imaging</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='mr-1 mt-2 h-3 w-3 text-gray-700' />
                  <p className='dark:text-zinc-200'>Videography</p>
                </div>
              </div>
              <div className='col-span-1 mx-auto px-1 md:mx-0'>
                <p className='mb-1 text-lg font-semibold dark:text-zinc-200'>
                  Training
                </p>
                <div className='flex items-start'>
                  <ChevronRightIcon className='mr-1 mt-2 h-3 w-3 text-gray-700' />
                  <p className='dark:text-zinc-200'>FAA Part 107</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='mr-1 mt-2 h-3 w-3 text-gray-700' />
                  <p className='dark:text-zinc-200'>Drone Flying</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='mr-1 mt-2 h-3 w-3 text-gray-700' />
                  <p className='dark:text-zinc-200'>UAS Consulting</p>
                </div>
                <div className='mt-2 grid w-32 grid-cols-2 grid-rows-2 gap-2'>
                  <div className='col-span-1 row-span-1 flex items-center justify-center bg-transparent'>
                    <Image
                      src={trainingPlatformsParrot}
                      alt='Parrot Logo'
                      width={64}
                    />
                  </div>
                  <div className='col-span-1 row-span-1 flex items-center justify-center'>
                    <Image
                      src={trainingPlatformsWingtra}
                      alt='Wingtra Logo'
                      width={64}
                    />
                  </div>
                  <div className='col-span-1 row-span-1 flex items-center justify-center'>
                    <Image
                      src={trainingPlatformsDji}
                      alt='DJI Logo'
                      width={40}
                    />
                  </div>
                  <div className='col-span-1 row-span-1 flex items-center justify-center'>
                    <Image
                      src={trainingPlatformSkydio}
                      alt='Skydio Logo'
                      width={64}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section id='videos'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl gap-x-4 py-16 sm:grid sm:grid-cols-2 sm:px-6 lg:px-16'>
            <div className='col-span-1'>
              <h3 className='text-center text-2xl font-medium dark:text-zinc-200 md:text-3xl'>
                Industrial
              </h3>
              <div className='mt-6 flex w-full items-center justify-center sm:mt-8'>
                <Video videoId='850003200' />
              </div>
            </div>
            <div className='col-span-1'>
              <h3 className='mt-16 text-center text-2xl font-medium dark:text-zinc-200 sm:mt-0 md:text-3xl'>
                Creative
              </h3>
              <div className='mt-6 flex w-full items-center justify-center sm:mt-8'>
                <Video videoId='850009575' />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id='about'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl py-16 xs:grid xs:grid-cols-2 xs:divide-x-2 xs:divide-gray-300 sm:px-6 lg:px-16'>
            <div className='col-span-1 flex items-center p-12 xs:p-4 sm:p-8 md:p-16 lg:p-20'>
              <div className='w-full'>
                <Slideshow images={aboutImages} />
              </div>
            </div>
            <div className='col-span-1 flex flex-col items-start justify-center px-8 py-2 xs:p-8'>
              <h3 className='my-2 text-2xl font-semibold dark:text-zinc-200'>
                Brian Boone
              </h3>
              <p className='my-2 dark:text-zinc-200'>
                <em>Owner and Lead Drone Operator</em>
              </p>
              <p className='my-2 dark:text-zinc-200'>
                Boone UAS is a drone service provider based in North Carolina
                offering a wide variety of services from aerial data collection
                to Part 107 training.
              </p>
              <div className='mt-4 flex items-center justify-center bg-white'>
                <div className='mx-2 w-2/5'>
                  <Image
                    src={faaSeal}
                    alt='TOP Operator I'
                    width={300}
                    height={300}
                  />
                </div>
                <div className='mx-2 w-2/5'>
                  <Image
                    src={topOperator}
                    alt='TOP Operator I'
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Slider */}
        <section id='clients'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl py-16 sm:px-6 lg:px-16'>
            <h3 className='text-center text-2xl font-medium dark:text-zinc-200 md:text-3xl'>
              Our Clients
            </h3>
            <div className='flex items-center justify-center px-8 lg:px-0'>
              <ClientsSlider />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id='contact'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto mb-4 mt-16 max-w-4xl sm:px-6 lg:px-16'>
            <div className='px-8'>
              <h3 className='text-3xl font-medium dark:text-zinc-200'>
                Let&apos;s Work Together
              </h3>
            </div>
          </div>
          <div className='mx-auto mb-4 max-w-4xl sm:px-6 lg:px-16'>
            <div className='p-8'>
              <ContactForm />
            </div>
          </div>
          <div className='mx-auto mb-16 max-w-4xl sm:px-6 lg:px-16'>
            <div className='flex items-center justify-center'>
              <a
                href='https://www.google.com/maps/place/Boone+UAS,+LLC/@35.0640444,-85.1604702,6z/data=!4m8!3m7!1s0x803bd885a6fa40e9:0x4f02697a201b047b!8m2!3d35.1705075!4d-79.86097!9m1!1b1!16s%2Fg%2F11syq78qht?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D'
                target='_blank'
                rel='noopener noreferrer'
                className='grid grid-cols-5 items-center rounded-lg border-2 border-[#4285f4] bg-[#4285f4] hover:border-[#3367d6] hover:bg-[#3367d6] focus:outline-none focus:ring-2 focus:ring-[#4285f4] focus:ring-offset-2'
              >
                <div className='col-span-1 flex h-full w-full items-center justify-center rounded-l-md bg-white py-2'>
                  <Image
                    src={googleLogo}
                    alt='Google Logo'
                    width={24}
                    height={24}
                    className='text-white'
                  />
                </div>
                <div className='col-span-4 flex h-full items-center justify-center px-4 py-2'>
                  <span className='text-md font-bold text-white'>
                    Leave a Review
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section id='footer'>
          <Copyright />
        </section>
      </main>
      <Analytics />
    </>
  )
}
