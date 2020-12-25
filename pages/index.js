import App from '../components/App'

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
  console.log('[Node.js only] API_URL:', process.env.API_URL)
  console.log('[Node.js only] NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)

  return { props: {} }
}

export default function Home() {
  console.log('[Node.js only] API_URL:', process.env.API_URL)
  console.log('[Node.js only] NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)
  return (
    <App />
  )
}
