import '../styles/globals.css'
import '../styles/site.css'
import SiteLayout from '../components/SiteLayout'

export default function MyApp({ Component, pageProps }) {
  /* Blog post pages rendered by their own MDX wrapper — skip SiteLayout */
  if (Component.noLayout) {
    return <Component {...pageProps} />
  }

  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}
