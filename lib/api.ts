export async function sendContactForm(data: {
  name: string | undefined
  email: string | undefined
  typeOfService: string | undefined
  message: string | undefined
}) {
  console.log('in sendContactForm')
  console.log('data', data)

  return await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log('res', res)
    if (!res.ok) throw new Error('Failed to send contact form')
    return res.json()
  })
}
