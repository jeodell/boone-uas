import Image from 'next/image'

export const metadata = {
  title: 'Home',
}

export default async function Index() {
  return (
    <>
      <nav className='bg-white shadow dark:bg-gray-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 justify-end'>
            {/* <div className='flex'>
              <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                <a
                  href='#home'
                  className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900'
                >
                  Home
                </a>
                <a
                  href='#services'
                  className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                >
                  Services
                </a>
                <a
                  href='#about'
                  className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                >
                  About
                </a>
                <a
                  href='#contact'
                  className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                >
                  Contact
                </a>
              </div>
            </div> */}
            <div className='-mr-2 flex items-center sm:hidden'>
              {/* <!-- Mobile menu button --> */}
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {/* <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg
                  className='block h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
                {/* <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                --> */}
                <svg
                  className='hidden h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main id='home'>
        {/* <!-- <h1 className="text-center pt-8">Welcome to <span className="text-gradient">Boone UAS</span></h1> --> */}
        <section id='hero'>
          <div className='mx-auto grid max-w-7xl grid-cols-2 py-16 px-4 sm:px-6 lg:px-16'>
            <div className='col-span-1 flex flex-col items-start justify-start px-2'>
              <div className='w-1/2'>
                <Image
                  src='/images/boone_uas_logo.jpg'
                  alt='Boone UAS Logo'
                  width={500}
                  height={500}
                />
              </div>
              <h2 className='mt-4 text-xl md:mt-6 md:text-3xl'>
                Drone Service Provider
              </h2>
              <button className='mt-4 bg-gray-900 px-4 py-2 text-zinc-50 md:mt-6 md:text-lg'>
                <a href='#contact'>Let&apos;s Work Together</a>
              </button>
            </div>
            <div className='col-span-1 m-auto px-2'>
              <Image
                src='/images/boone_in_field.jpg'
                alt='Owner flying drone in the field'
                width={1200}
                height={800}
                priority
              />
            </div>
          </div>
        </section>
        <section id='services'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 md:grid md:grid-cols-3 lg:px-16'>
            <div className='col-span-1 flex items-center justify-center md:block md:self-center md:pl-8'>
              <h6 className='text-xl font-semibold md:w-[4ch] md:text-base'>
                Our Services
              </h6>
            </div>
            <div className='grid grid-cols-2 pt-4 md:col-span-2 md:pt-0'>
              <div className='col-span-1 px-1'>
                <p>Real Estate Photography</p>
                <p>Solar Inspection Services</p>
                <p>Construction Progression</p>
              </div>
              <div className='col-span-1 px-1'>
                <p>3D Modeling</p>
                <p>Thermal Imaging</p>
                <p>Part 107 FAA Training</p>
              </div>
            </div>
          </div>
        </section>
        <section id='about'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto max-w-7xl py-16 sm:px-6 md:grid md:grid-cols-2 md:divide-x-2 md:divide-gray-300 lg:px-16'>
            <div className='col-span-1 px-8 py-2 md:p-8'>
              <Image
                src='/images/boone_in_field.jpg'
                alt='Owner profile picture'
                width={720}
                height={480}
              />
            </div>
            <div className='col-span-1 flex flex-col items-start justify-center px-8 py-2 md:p-8'>
              <h3 className='my-2 text-2xl font-semibold'>Brian Boone</h3>
              <p className='my-2'>
                <em>Owner and Lead Drone Operator</em>
              </p>
              <p className='my-2'>
                Boone UAS is a drone service provider based in North Carolina
                offering a wide variety of services from aerial data collection
                to Part 107 training.
              </p>
              <div className='flex items-center justify-center'>
                <div>
                  <Image
                    src='/images/faa_seal.jpg'
                    alt='TOP Operator I'
                    width={480}
                    height={480}
                  />
                </div>
                <div>
                  <Image
                    src='/images/top_operator.png'
                    alt='TOP Operator I'
                    width={480}
                    height={480}
                  />
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
              <h1>Clients slider here</h1>
              {/*<!-- <div className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-full">
                <Image src='/images/top_operator.png' alt="TOP Operator I" width={480} height={480} />
              </div>
            </div>
            <div className="px-8 pt-8 lg:pt-0 col-span-3">
              <p className="text-sm lg:text-base">
                As a member of the Association for Uncrewed Vehicle Systems International (AUVSI), Boone UAS has reached TOP Operator I. The AUVSI Trusted Operator Program (TOP) fills the gap between minimally prescriptive regulations and a higher level of demonstrated knowledge, flight proficiency, safety, and risk management practices that is expected to be valued by employers and customers of commercial USA operators. By leveraging TOP Operator accumen, Boone UAS boasts a perfect safety score with zero recordable safety incidents. At Boone UAS, safety is a top priority that starts long before a drone takes flight.
                
                We're certified, insured, and passionate about drone safety. We're ready to take on any job big or small because we offer aerial solutions for everyone.
              </p>
            </div> --> */}
            </div>
          </div>
        </section>
        <section id='contact'>
          <div className='bg-gray-300 py-[1px]' />
          <div className='mx-auto mt-16 mb-4 max-w-7xl sm:px-6 lg:px-16'>
            <div className='px-8'>
              <h3 className='text-3xl font-medium'>Need a drone service?</h3>
              <h3 className='text-3xl font-medium'>Inquire here.</h3>
            </div>
          </div>
          <div className='mx-auto mb-16 max-w-7xl sm:px-6 md:grid md:grid-cols-3 lg:px-16'>
            <div className='col-span-2 p-8'>
              <form>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-900'
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
                    className='block text-sm font-medium text-gray-900'
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
                    className='block text-sm font-medium text-gray-900'
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
                    className='mb-2 block text-sm font-medium text-gray-900'
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
              <p>Phone</p>
              <p>336-403-1811</p>
              <p>Email</p>
              <p>booneuas@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
