import '../styles/globals.css'
import Layout from "../components/Layout"
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return <Layout>
       <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} />
        </AnimatePresence>      
        </Layout>
}

export default MyApp
