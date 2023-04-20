export default function EmailTemplate({
  name,
  email,
  typeOfService,
  message,
}: {
  name: string
  email: string
  typeOfService: string
  message: string
}) {
  return (
    <>
      <h1 className='mb-2 text-xl'>New Contact Request</h1>
      <div className='border-[0.5px] border-gray-400 p-4'>
        <h1 className='text-lg'>Name</h1>
        <h2 className='text-base'>{name}</h2>
        <h1 className='text-lg'>Email</h1>
        <h2 className='text-base'>{email}</h2>
        <h1 className='text-lg'>Type of Service</h1>
        <h2 className='text-base'>{typeOfService}</h2>
        <h1 className='text-lg'>Message</h1>
        <h2 className='text-base'>{message}</h2>
      </div>
    </>
  )
}
