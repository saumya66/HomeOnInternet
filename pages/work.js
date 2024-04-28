import React from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import { WORK } from "../utils/constant";
import Image from "next/image";

const Work = ()=>{
  const router  = useRouter()
  const canonicalUrl = (`https://saumyanayak.xyz` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
    
    const Avatar = () =>{
      return{

      }
    }
   

    return(
        <div>
               <Head>
                    <title>Work - Saumya Nayak</title>
                    <meta name="description" content="Places Saumya has worked at." />
                    <meta property="og:title" content="Work - Saumya Ranjan Nayak"/>
                    <meta property="og:description" content="Places Saumya has worked at." />
                    <meta property="og:url" content="https://home-on-internet.vercel.app/work" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className="flex flex-col relative mt-8">
                <div className="w-[1.5px] h-full absolute dark:bg-white bg-[#1C2029] top-0 left-[24px]"></div>
                  {
                    WORK.map((each) => <div key={each.id} className="flex flex-row mb-8">
                      <div className="w-[70px] relative ">
                        <Image src={each.thumbnail}  width={52} height={52} className="flex relative rounded-[26px]"/>
                      </div>
                      <div className="flex flex-col w-full ">
                        <p className="font-medium text-base sm:text-lg">{each.name}</p>
                        <p className="pt-1 text-base sm:text-lg">{each.role}</p>
                        <p className="pt-1 text-xs sm:text-sm">{each.period}</p>
                        {
                          each?.highlights ?
                          <ul className="list-disc pl-4 text-sm sm:text-base pt-2">
                              {
                                each?.highlights?.map((each, index) => <li key={index} className="pb-2">{each}</li>)
                              }
                          </ul>
                          : <></>
                        }
                      </div>
                    </div>)
                  }
                </div>
            {/* {
                works.map((work,index)=>{
                    return <WorkCard key={index} work={work} index={index} />
                })
            } */}
        </div>
    )
}


export default Work
