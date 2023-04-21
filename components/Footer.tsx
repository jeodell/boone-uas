export default function Copyright() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='flex items-center justify-around bg-gray-900 px-4 py-12'>
      <div></div>
      <div className='flex flex-col'>
        <p className='text-sm text-zinc-500'>
          Copyright &copy; {currentYear} Boone UAS. All rights reserved.
        </p>
      </div>
      <div className='flex flex-col'>
        <p className='text-sm text-zinc-300'>Email</p>
        <p className='text-sm text-zinc-500'>booneuas@gmail.com</p>
        <p className='text-sm text-zinc-300'>Phone</p>
        <p className='text-sm text-zinc-500'>336-403-1811</p>
      </div>
    </div>
  )
}
