import Head from 'next/head'
import { useRouter } from 'next/router'
export default function BlogPost({ children, meta}) {
    const router  = useRouter()
    return (
    <>
    <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title}/>
        <meta property="og:description" content={meta.description}/>
        <meta property="og:url" content={`https://home-on-internet.vercel.app${router.asPath}`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <article>{children}</article>
    </>
  )
}