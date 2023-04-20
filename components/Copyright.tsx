export default function Copyright() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='flex items-center justify-center bg-gray-900 py-16'>
      <p className='text-center text-sm text-zinc-500'>
        &copy; {currentYear} Boone UAS. All rights reserved.
      </p>
    </div>
  )
}
