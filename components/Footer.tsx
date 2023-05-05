export default function Copyright() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='bg-gray-900 w-full'>
      <div className='mx-[5vw] md:mx-[10vw]'>
        <div className='grid grid-cols-2 md:grid-cols-3 px-2 md:px-4 py-12'>
          <div className="hidden md:block md:col-span-1"></div>
          <div className='col-span-1 flex justify-center items-center'>
            <p className='text-sm text-zinc-500'>
              Copyright &copy; {currentYear} Boone UAS. All rights reserved.
            </p>
          </div>
          <div className='col-span-1 flex flex-col justify-center items-start ml-auto'>
            <p className='text-sm text-zinc-300'>Email</p>
            <p className='text-sm text-zinc-500'>booneuas@gmail.com</p>
            <p className='text-sm text-zinc-300'>Phone</p>
            <p className='text-sm text-zinc-500'>336-403-1811</p>
          </div>
        </div>
      </div>
    </div>
  )
}
