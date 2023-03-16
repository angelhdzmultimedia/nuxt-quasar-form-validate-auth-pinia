import axios from 'axios'

async function bootstrap() {
  console.log('mierda')
  const result = await axios.post(
    'https://nuxtstarter2bxzgq-iy0j--5000.local-credentialless.webcontainer.io/api/auth/login',
    {
      email: 'angelhdz@gmail.com',
      password: '123456',
    },
    {
      withCredentials: true,
    }
  )
  console.log(result)
}
try {
  bootstrap()
} catch (error: unknown) {
  console.error(error)
}
