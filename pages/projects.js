import React from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import { PROJECTS} from "../utils/constant";
import Image from "next/image";
import { GithubIcon, ScanEyeIcon } from "lucide-react";

const Projects = ()=>{
  const router  = useRouter()
  const canonicalUrl = (`https://saumyanayak.xyz` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const pillStyle = "flex flex-row items-center rounded-2xl bg-[#4BDE8833] border-[#4BDE88] border-[1px] p-1 px-2 mr-2"
    return(
        <div>
               <Head>
                    <title>Projects - Saumya Ranjan Nayak</title>
                    <meta name="description" content="Checkout out projects and products built by Saumya Ranjan Nayak!" />
                    <meta property="og:title" content="Projects - Saumya Ranjan Nayak"/>
                    <meta property="og:description" content="Checkout out projects and products built by Saumya Ranjan Nayak!" />
                    <meta property="og:url" content="https://home-on-internet.vercel.app/projects" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div>
                  {
                    PROJECTS.map((each) => <div key={each.id} className="flex flex-col md:flex-row bg-white dark:bg-[#252B36] h-32 w-full mt-6 rounded-xl">
                      <div className="flex relative w-full md:w-[20%] h-32 object-cover">
                        <Image src={each.thumbnail} layout="fill" objectFit="cover" alt="" className="flex relative rounded-l-xl"/>
                      </div>
                      <div className="flex flex-col w-full md:w-[80%] justify-between rounded-r-xl p-4">
                        <div className="flex flex-col">
                        <p className="text-lg font-medium">{each.name}</p>
                        <p className="pt-1">{each.description}</p>
                        </div>
                        <div className="flex flex-row">
                          <a href={each.github} alt="" target="_blank" rel="noreferrer">
                            <div className={pillStyle}>
                              <GithubIcon className="h-4"/>
                              <p className="text-xs">github</p>
                            </div>
                          </a>
                          <a href={each.live} alt="" target="_blank" rel="noreferrer">
                            <div className={pillStyle}>
                              <ScanEyeIcon className="h-4"/>
                              <p className="text-xs">see</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>)
                  }
                </div>
            {/* {
                
                projects.map((project,index) => 
                    <Card type="project" key={index} thumbnailUrl={project.thumbnail} projectTitle={project.name} projectDesc={project.description} liveUrl={project.live} githubUrl={project.github}/>
                )
            } */}
        </div>
    )
}


export default Projects
