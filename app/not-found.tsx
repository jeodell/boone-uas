import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-9xl font-bold dark:text-zinc-50'>404</h1>
        <h2 className='text-4xl font-medium dark:text-zinc-50'>
          Page Not Found
        </h2>
        <a
          href='/'
          className='mt-4 flex items-center justify-center text-lg font-medium text-gray-600 hover:text-gray-700 dark:text-zinc-50 dark:hover:text-zinc-50'
        >
          <button className='bg-gray-900 px-3 py-2 text-xs text-zinc-50 sm:px-4 sm:text-sm md:text-lg'>
            Home Page
          </button>
        </a>
      </div>
    </div>
  )
}
