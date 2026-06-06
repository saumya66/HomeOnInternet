import '../styles/globals.css'
import '../styles/site.css'
import { useRouter } from 'next/router'
import SiteLayout from '../components/SiteLayout'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  /* Individual blog post pages have their own layout (no dial, full scroll) */
  if (router.pathname.startsWith('/blog/')) {
    return <Component {...pageProps} />
  }

  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}
