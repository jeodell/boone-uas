'use client'

import { useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { sendContactForm } from '../lib/api'
import { mergeClassNames } from '../util/helper'

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const typeOfServiceRef = useRef<HTMLSelectElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setIsError] = useState('')

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    typeOfService: '',
    message: '',
  })

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    typeOfService: false,
    message: false,
  })

  const emailRegex = /\S+@\S+\.\S+/

  function handleBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name } = e.target
    setFormErrors((prev) => ({ ...prev, [name]: '' }))
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

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
      setTouched({
        name: true,
        email: true,
        typeOfService: true,
        message: true,
      })
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

  function showErrorToast(errorMessage: string) {
    toast.error(errorMessage, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
    })
  }

  function showSuccessToast() {
    toast.success('Email sent successfully!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
    })
  }

  function resetFormFields() {
    nameRef.current!.value = ''
    emailRef.current!.value = ''
    typeOfServiceRef.current!.value = ''
    messageRef.current!.value = ''
    setFormErrors({
      name: '',
      email: '',
      typeOfService: '',
      message: '',
    })
    setTouched({
      name: false,
      email: false,
      typeOfService: false,
      message: false,
    })
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const typeOfService = typeOfServiceRef.current?.value
    const message = messageRef.current?.value

    const isValidForm = checkIfFormIsValid(name, email, typeOfService, message)

    if (isValidForm) {
      try {
        await sendContactForm({
          name,
          email,
          typeOfService,
          message,
        })
        resetFormFields()
        showSuccessToast()
      } catch (error) {
        console.error(error)
        if (error instanceof Error) {
          setIsError(error.message)
          showErrorToast(error.message)
        }
      }
    }

    setIsLoading(false)
  }

  return (
    <>
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
            name='name'
            className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:outline-gray-700'
            ref={nameRef}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={isLoading}
          />

          <p className='mt-1 min-h-[1.3rem] text-sm text-red-600'>
            {touched.name && formErrors.name}
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
            name='email'
            className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:outline-gray-700'
            ref={emailRef}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={isLoading}
          />
          <p className='mt-1 min-h-[1.3rem] text-sm text-red-600'>
            {touched.email && formErrors.email}
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
            id='type-of-service'
            name='typeOfService'
            className='mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:outline-gray-700'
            defaultValue={''}
            ref={typeOfServiceRef}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={isLoading}
          >
            <option disabled value=''>
              --
            </option>
            <option value='flight-request'>Flight Request</option>
            <option value='training'>Training</option>
          </select>
          <p className='mt-1 min-h-[1.3rem] text-sm text-red-600'>
            {touched.typeOfService && formErrors.typeOfService}
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
            name='message'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:outline-gray-700'
            rows={4}
            ref={messageRef}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={isLoading}
          ></textarea>
          <p className='mt-1 min-h-[1.3rem] text-sm text-red-600'>
            {touched.message && formErrors.message}
          </p>
        </div>
        <button
          type='submit'
          className={mergeClassNames(
            'mt-2 rounded-lg px-4 py-2 text-center text-xs text-zinc-50 focus:outline-gray-700 sm:text-sm md:mt-4 md:text-base',
            isLoading
              ? 'bg-gray-300 hover:bg-gray-300'
              : 'bg-gray-900 hover:bg-gray-700  ',
          )}
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  )
}
