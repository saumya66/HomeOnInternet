import Head from 'next/head'
import { useRouter } from 'next/router'

export default function BlogPost({ children, meta}) {
    const router  = useRouter()
    const canonicalUrl = (`https://saumyanayak.xyz` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

    return (
    <>
    <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title}/>
        <meta property="og:description" content={meta.description}/>
        <meta property="og:url" content={`https://home-on-internet.vercel.app${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.thumbnailUrl}/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
    </Head>
        <div className={"py-4"}>
            <p className={"text-xl sm:text-3xl text-center font-medium pt-12"}>{meta.title}</p>
            <p className={"text-base text-center py-4"}>{meta.date}</p>

            <article className={"text-xs sm:text-lg px-2 md:px-12"}>{children}</article>
        </div>
    </>
  )
}