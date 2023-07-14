import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Analytics } from '@vercel/analytics/react'
import Image from 'next/image'

import ClientsSlider from '../components/ClientsSlider'
import ContactForm from '../components/ContactForm'
import Copyright from '../components/Footer'
import Slideshow from '../components/Slideshow'
import booneAndSon from '../public/images/boone_and_son.jpg'
import booneInField from '../public/images/boone_in_field.jpg'
import booneUASLogo from '../public/images/boone_uas_logo.jpg'
import booneWithDrone from '../public/images/boone_with_drone.jpg'
import droneLineup from '../public/images/drone_lineup.png'
import faaSeal from '../public/images/faa_seal.jpg'
import topOperator from '../public/images/top_operator.png'
import trainingPlatformsDji from '../public/images/training_platforms_dji.png'
import trainingPlatformsParrot from '../public/images/training_platforms_parrot.png'
import trainingPlatformSkydio from '../public/images/training_platforms_skydio.png'
import trainingPlatformsWingtra from '../public/images/training_platforms_wingtra.png'

export default async function Index() {
  return (
    <>
      <main id='home'>
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
              <h2 className='mt-2 md:mt-4 lg:mt-6 ml-1 xs:ml-[0.5rem] sm:ml-3 md:ml-4 lg:ml-5 xl:ml-6 text-lg xs:text-xl dark:text-zinc-200 sm:text-2xl md:text-3xl'>
                Drone Service Provider
              </h2>
              <h3 className='mt-2 ml-1 xs:ml-[0.5rem] sm:ml-3 md:ml-4 lg:ml-5 xl:ml-6 text-sm xs:text-base italic dark:text-zinc-200 md:mt-4 md:text-2xl font-normal'>Unmanned Aerial Systems</h3>
              <div className='mt-4 md:mt-6 lg:mt-8 mx-1 xs:mx-[0.5rem] sm:mx-3 md:mx-4 lg:mx-5 xl:mx-6'>
                <Image
                  src={droneLineup}
                  alt='Drone Lineup'
                  width={400}
                  height={100}
                />
              </div>
              {/* <h4 className='mt-6 md:text-xl'>Need a drone?</h4>
              <a href='#contact'>
                <button className='mt-2 bg-gray-900 px-3 py-2 text-xs text-zinc-50 hover:bg-gray-700 focus:outline-gray-700 sm:px-4 sm:text-sm md:text-lg'>
                  Get Started Today
                </button>
              </a> */}
            </div>
            <div className='col-span-1 m-auto h-full w-full px-2'>
              <Slideshow />
            </div>
            <div className="col-span-2 flex flex-col justify-center items-center mt-12 md:mt-24">
              <h3 className='tracking-wide text-lg xs:text-xl sm:text-2xl md:text-3xl text-center'>We fly. We film. We deliver.</h3>
              <div className='mt-12 flex items-center justify-center'>
                <h4 className='md:text-xl mr-2 font-bold'>Need a drone?</h4>
                <a className='group flex justify-center items-center' href='#contact'>
                  {/* <p className='text-xs sm:text-sm md:text-xl underline underline-offset-[6px] hover:underline-offset-4 decoration-gray-500 hover:decoration-gray-700 transition-all duration-100 ease-linear'>Get started today.</p> */}
                  <p className='md:text-xl underline underline-offset-[6px] decoration-gray-700 hover:no-underline bg-[length:100%_2px] bg-left-bottom hover:bg-left-bottom bg-gradient-to-r hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900 bg-no-repeat group-hover:bg-[length:100%_2px]'>Get started today.</p>
                  {/* <button className='bg-gray-900 px-3 py-2 text-xs text-zinc-50 hover:bg-gray-700 focus:outline-gray-700 sm:px-4 sm:text-sm md:text-lg'>
                  Get Started Today
                </button> */}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id='services'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 md:grid md:grid-cols-3 lg:px-16'>
            <div className='col-span-1 flex items-center justify-center md:block md:self-center md:pl-8'>
              <h3 className='text-2xl md:text-3xl font-medium dark:text-zinc-200 md:w-[4ch] mb-2 md:mb-0'>
                Our Services
              </h3>
            </div>
            <div className='grid grid-cols-2 pt-4 md:col-span-2 md:pt-0'>
              <div className='col-span-1 px-1 mx-auto md:mx-0'>
                <p className='dark:text-zinc-200 text-lg font-semibold mb-1'>Drone Flights</p>
                <div className='flex items-start'>
                  <ChevronRightIcon className='h-3 w-3 mr-1 text-gray-700 mt-2' />
                  <p className='dark:text-zinc-200'>Real Estate Photography</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='h-3 w-3 mr-1 text-gray-700 mt-2' />
                  <p className='dark:text-zinc-200'>Solar Inspection Services</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='h-3 w-3 mr-1 text-gray-700 mt-2' />
                  <p className='dark:text-zinc-200'>Construction Progression</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='h-3 w-3 mr-1 text-gray-700 mt-2' />
                  <p className='dark:text-zinc-200'>3D Modeling</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='h-3 w-3 mr-1 text-gray-700 mt-2' />
                  <p className='dark:text-zinc-200'>Thermal Imaging</p>
                </div>
              </div>
              <div className='col-span-1 px-1 mx-auto md:mx-0'>
                <p className='dark:text-zinc-200 text-lg font-semibold mb-1'>Training</p>
                <div className='flex items-start'>
                  <ChevronRightIcon className='h-3 w-3 mr-1 text-gray-700 mt-2' />
                  <p className='dark:text-zinc-200'>FAA Part 107</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='h-3 w-3 mr-1 text-gray-700 mt-2' />
                  <p className='dark:text-zinc-200'>Drone Flying</p>
                </div>
                <div className='flex items-start'>
                  <ChevronRightIcon className='h-3 w-3 mr-1 text-gray-700 mt-2' />
                  <p className='dark:text-zinc-200'>UAS Consulting</p>
                </div>
                <div className="grid grid-cols-2 w-32 grid-rows-2 gap-2 mt-2">
                  <div className="row-span-1 col-span-1 flex justify-center items-center bg-transparent">
                    <Image src={trainingPlatformsParrot} alt='Parrot Logo' width={64} />
                  </div>
                  <div className='row-span-1 col-span-1 flex justify-center items-center'>
                    <Image src={trainingPlatformsWingtra} alt='Wingtra Logo' width={64} />
                  </div>
                  <div className='row-span-1 col-span-1 flex justify-center items-center'>
                    <Image src={trainingPlatformsDji} alt='DJI Logo' width={40} />
                  </div>
                  <div className='row-span-1 col-span-1 flex justify-center items-center'>
                    <Image src={trainingPlatformSkydio} alt='Skydio Logo' width={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='about'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl py-16 xs:grid xs:grid-cols-2 xs:divide-x-2 xs:divide-gray-300 sm:px-6 lg:px-16'>
            <div className='col-span-1 flex items-center p-12 xs:p-4 sm:p-8 md:p-16 lg:p-20'>
              <div>
                {/* <div className="flex gap-2 mb-2">
                  Drone Lineup Here
                </div> */}
                <Image
                  src={booneWithDrone}
                  alt='Owner profile picture'
                  width={480}
                  height={480}
                />
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
        <section id='clients'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl py-16 sm:px-6 lg:px-16'>
            <h3 className='text-center text-2xl md:text-3xl font-medium dark:text-zinc-200'>
              Our Clients
            </h3>
            <div className='flex items-center justify-center px-8 lg:px-0'>
              <ClientsSlider />
            </div>
          </div>
        </section>
        <section id='contact'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto mb-4 mt-16 max-w-4xl sm:px-6 lg:px-16'>
            <div className='px-8'>
              <h3 className='text-3xl font-medium dark:text-zinc-200'>
                Let&apos;s Work Together
              </h3>
            </div>
          </div>
          <div className='mx-auto mb-16 max-w-4xl sm:px-6 lg:px-16'>
            <div className='p-8'>
              <ContactForm />
            </div>
          </div>
        </section>
        <section id='footer'>
          <Copyright />
        </section>
      </main>
      <Analytics />
    </>
  )
}
