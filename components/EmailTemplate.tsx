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
      <h2 className='mb-2 text-xl'>New Contact Form Submission</h2>
      <div className='border-1 border-gray-400 p-4'>
        <h3 className='text-lg'>Name</h3>
        <p className='text-base'>{name}</p>
        <h3 className='text-lg'>Email</h3>
        <p className='text-base'>{email}</p>
        <h3 className='text-lg'>Type of Service</h3>
        <p className='text-base'>{typeOfService}</p>
        <h3 className='text-lg'>Message</h3>
        <p className='text-base'>{message}</p>
      </div>
    </>
  )
}
