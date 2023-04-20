'use client'

import { useRef, useState } from 'react'

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const typeOfServiceRef = useRef<HTMLSelectElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const emailRegex = /\S+@\S+\.\S+/

  // use state for form errors
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    typeOfService: '',
    message: '',
  })

  function checkIfFormIsValid(
    name: string | undefined,
    email: string | undefined,
    typeOfService: string | undefined,
    message: string | undefined,
  ): boolean {
    let errors = {
      name: '',
      email: '',
      typeOfService: '',
      message: '',
    }

    if (!name) {
      errors.name = 'Please enter your name'
    }
    if (!email) {
      errors.email = 'Please enter your email'
    }
    if (email && !emailRegex.test(email)) {
      errors.email = 'Please enter a valid email'
    }
    if (!typeOfService) {
      errors.typeOfService = 'Please select a type of service'
    }
    if (!message) {
      errors.message = 'Please enter a message'
    }

    if (errors.name || errors.email || errors.typeOfService || errors.message) {
      setFormErrors(errors)
      return false
    }
    setFormErrors({
      name: '',
      email: '',
      typeOfService: '',
      message: '',
    })
    return true
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const typeOfService = typeOfServiceRef.current?.value
    const message = messageRef.current?.value

    const isValidForm = checkIfFormIsValid(name, email, typeOfService, message)

    if (!isValidForm) {
      return
    }

    console.log(name, email, typeOfService, message)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-900 dark:text-zinc-200'
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
          ref={nameRef}
        />

        <p className='mt-1 min-h-[1.3rem] text-sm text-red-600'>
          {formErrors.name}
        </p>
      </div>
      <div className='mt-3'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-900 dark:text-zinc-200'
        >
          Email
        </label>
        <input
          type='text'
          id='email'
          className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
          ref={emailRef}
        />
        <p className='mt-1 min-h-[1.3rem] text-sm text-red-600'>
          {formErrors.email}
        </p>
      </div>
      <div className='mt-3'>
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
          ref={typeOfServiceRef}
        >
          <option disabled value=''>
            --
          </option>
          <option value='flight-request'>Flight Request</option>
          <option value='training'>Training</option>
        </select>
        <p className='mt-1 min-h-[1.3rem] text-sm text-red-600'>
          {formErrors.typeOfService}
        </p>
      </div>
      <div className='mt-3'>
        <label
          htmlFor='message'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-zinc-200'
        >
          How can we help you?
        </label>
        <textarea
          id='message'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
          rows={4}
          ref={messageRef}
        ></textarea>
        <p className='mt-1 min-h-[1.3rem] text-sm text-red-600'>
          {formErrors.message}
        </p>
      </div>
      <button
        type='submit'
        // className='mt-6 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto'
        className='mt-4 bg-gray-900 px-3 py-2 text-xs text-zinc-50 hover:bg-gray-700 sm:px-4 sm:text-sm md:mt-6 md:px-5 md:py-3 md:text-base'
      >
        Submit
      </button>
    </form>
  )
}
