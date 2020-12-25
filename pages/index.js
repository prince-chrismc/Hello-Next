import App from '../components/App'

export async function getServerSideProps(context) {
  console.log('[Node.js only] API_URL:', process.env.API_URL)
  console.log('[Node.js only] NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)

  return { props: {}, }
}

export default function Home() {
  console.log('[Node.js only] API_URL:', process.env.API_URL)
  console.log('[Node.js only] NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)
  return (
    <App />
  )
}
