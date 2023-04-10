'use client'

import { Fragment, useEffect, useState } from 'react'

import { Disclosure } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'

import NavigationItems from './NavigationItems'
import { mergeClassNames } from '../util/helper'

export default function Navbar() {
  const navbarBgClasses =
    'bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-gray-200'

  return (
    <Disclosure
      as='nav'
      className='fixed z-50 w-full bg-gray-50 dark:bg-gray-900'
    >
      {({ open }) => (
        <Fragment>
          <div className='mx-auto px-2 sm:px-6 md:px-8'>
            <div className='flex h-16 flex-1 items-center justify-between md:justify-end'>
              {/* Mobile menu button*/}
              <div className='flex items-center md:hidden'>
                <Fragment>
                  <Disclosure.Button
                    className={mergeClassNames(
                      'inline-flex items-center justify-center rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-zinc-50',
                      navbarBgClasses,
                    )}
                  >
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </Fragment>
              </div>
              {/* Desktop menu */}
              <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
                <div className='ml-6'>
                  <ul className='flex space-x-4'>
                    <NavigationItems classes={navbarBgClasses} />
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='dark:bg-gray-900 md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              <ul className='space-y-2'>
                <NavigationItems classes={navbarBgClasses} />
              </ul>
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  )
}
