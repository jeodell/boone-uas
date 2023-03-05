import Image from 'next/image'

import booneInField from '../public/images/boone_in_field.jpg'
import booneUASLogo from '../public/images/boone_uas_logo.jpg'
import faaSeal from '../public/images/faa_seal.jpg'
import topOperator from '../public/images/top_operator.png'

export default async function Index() {
  return (
    <>
      <main id='home'>
        <section id='hero'>
          <div className='mx-auto grid max-w-7xl grid-cols-2 py-16 px-4 sm:px-6 lg:px-16'>
            <div className='col-span-1 flex flex-col items-start justify-start px-2'>
              <div className='w-1/2'>
                <Image src={booneUASLogo} alt='Boone UAS Logo' />
              </div>
              <h2 className='mt-4 text-xl dark:text-zinc-200 sm:text-2xl md:mt-6 md:text-3xl'>
                Drone Service Provider
              </h2>
              <button className='mt-4 bg-gray-900 px-3 py-2 text-xs text-zinc-50 sm:px-4 sm:text-sm md:mt-6 md:text-lg'>
                <a href='#contact'>Let&apos;s Work Together</a>
              </button>
            </div>
            <div className='col-span-1 m-auto px-2'>
              <Image
                src={booneInField}
                alt='Owner flying drone in the field'
                priority
              />
            </div>
          </div>
        </section>
        <section id='services'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 md:grid md:grid-cols-3 lg:px-16'>
            <div className='col-span-1 flex items-center justify-center md:block md:self-center md:pl-8'>
              <h6 className='text-xl font-semibold dark:text-zinc-200 md:w-[4ch] md:text-base'>
                Our Services
              </h6>
            </div>
            <div className='grid grid-cols-2 pt-4 md:col-span-2 md:pt-0'>
              <div className='col-span-1 px-1'>
                <p className='dark:text-zinc-200'>Real Estate Photography</p>
                <p className='dark:text-zinc-200'>Solar Inspection Services</p>
                <p className='dark:text-zinc-200'>Construction Progression</p>
              </div>
              <div className='col-span-1 px-1'>
                <p className='dark:text-zinc-200'>3D Modeling</p>
                <p className='dark:text-zinc-200'>Thermal Imaging</p>
                <p className='dark:text-zinc-200'>Part 107 FAA Training</p>
              </div>
            </div>
          </div>
        </section>
        <section id='about'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl py-16 sm:px-6 md:grid md:grid-cols-2 md:divide-x-2 md:divide-gray-300 lg:px-16'>
            <div className='col-span-1 px-8 py-2 md:p-8'>
              <Image src={booneInField} alt='Owner profile picture' />
            </div>
            <div className='col-span-1 flex flex-col items-start justify-center px-8 py-2 md:p-8'>
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
                  <Image src={faaSeal} alt='TOP Operator I' />
                </div>
                <div className='mx-2 w-2/5'>
                  <Image src={topOperator} alt='TOP Operator I' />
                </div>
              </div>
              {/* <button className='my-2 bg-gray-900 px-4 py-2 text-sm text-zinc-50'>
                <a href='#contact'>Let&apos;s Work Together</a>
              </button> */}
            </div>
          </div>
        </section>
        <section id='clients'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl py-16 sm:px-6 lg:px-16'>
            <div className='flex items-center justify-center px-8 lg:px-0'>
              <h1 className='dark:text-zinc-200'>Clients slider here</h1>
            </div>
          </div>
        </section>
        <section id='contact'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto mt-16 mb-4 max-w-7xl sm:px-6 lg:px-16'>
            <div className='px-8'>
              <h3 className='text-3xl font-medium dark:text-zinc-200'>
                Need a drone service?
              </h3>
              <h3 className='text-3xl font-medium dark:text-zinc-200'>
                Inquire here.
              </h3>
            </div>
          </div>
          <div className='mx-auto mb-16 max-w-7xl sm:px-6 md:grid md:grid-cols-3 lg:px-16'>
            <div className='col-span-2 p-8'>
              <form>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-900 dark:text-zinc-200'
                  >
                    Name
                  </label>
                  <input
                    type='email'
                    id='name'
                    className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                    required
                  />
                </div>
                <div className='mt-6'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-900 dark:text-zinc-200'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                    required
                  />
                </div>
                <div className='mt-6'>
                  <label
                    htmlFor='type-of-service'
                    className='block text-sm font-medium text-gray-900 dark:text-zinc-200'
                  >
                    Type of Service
                  </label>
                  <select
                    name='type-of-service'
                    id='type-of-service'
                    className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                    defaultValue={''}
                    required
                  >
                    <option disabled value=''>
                      --
                    </option>
                    <option value='flight-request'>Flight Request</option>
                    <option value='training'>Training</option>
                  </select>
                </div>
                <div className='mt-6'>
                  <label
                    htmlFor='message'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-zinc-200'
                  >
                    How can we help you?
                  </label>
                  <textarea
                    id='message'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='mt-6 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto'
                >
                  Submit
                </button>
              </form>
            </div>
            <div className='col-span-1 p-8'>
              <p className='dark:text-zinc-200'>Phone</p>
              <p className='dark:text-zinc-200'>336-403-1811</p>
              <p className='dark:text-zinc-200'>Email</p>
              <p className='dark:text-zinc-200'>booneuas@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
