import '../styles/globals.css'
import Layout from "../components/Layout"
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import {Poppins} from "next/font/google"

const poppins = Poppins({
  //👇 Add variable to our object
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return <>
       <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
        <Layout>
              <Component {...pageProps} />
        </Layout>
  </>
}

export default MyApp
