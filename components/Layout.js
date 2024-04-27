import React, { useState ,useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import Switch from './Switch';
import { NavItems } from '../utils/constant';
import { AlignRightIcon, Minimize2Icon } from 'lucide-react';
import { makeThemeDark, makeThemeLight } from '../utils/helpers';

 const Layout = ({children, pageTitle, description })=>{
    const router = useRouter();
     const [showSideBar, setShowSideBar] = useState(false);
     const [activeTheme, setActiveTheme] = useState("loading");
     const path = router.asPath.replace("/", "");
    
      const onSwitch = async () => {
        try {
            const updatedThemePreference = activeTheme === "light" ? "dark" : "light";
            if(updatedThemePreference === "dark") makeThemeDark()
            else makeThemeLight();
            setActiveTheme(updatedThemePreference)
        } catch (error) {
            console.log(error)
        }
      }

      const toggleSidebar = () => {
        try {
             setShowSideBar(!showSideBar)
        } catch (error) {
            console.log(error)
        }
      }
      
    useEffect(()=>{
        if (typeof window !== "undefined") {
                if (localStorage.getItem("theme") === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { //if user has pre selected dark mode on site or has never selected any theme on site and has dark mode on system then i show dark mode but don't store it her localstorage as she has not selected it.
                    document.documentElement.classList.add('dark')
                    setActiveTheme("dark")
                  } else {
                    document.documentElement.classList.remove('dark')
                    setActiveTheme("light")
                  }
        }
    },[])

    return(
        <div className='flex w-full justify-center dark:text-white text-black '>
           <section className='flex flex-col w-[1000px] bg-yellow p-4'>
                <div className='w-full flex-row justify-between flex' >
                    <Link href={"/"}>
                        <p className='text-xl'>hello</p>
                    </Link> 
                    <div className=' sm:flex hidden flex-row '>
                        {
                            NavItems.map((each) =>  <Link key={each.id} href={each.link}>
                                <div  className='flex flex-col items-center px-4 text-lg cursor-pointer '>
                                    <p className='font-poppins'>{each.name}</p>
                                    {
                                        path === each.name ? 
                                        <div className='flex w-2 h-2 rounded-md dark:bg-white bg-[#1C2029]'></div>
                                        : <></>
                                    }
                                </div>
                        </Link>)
                        }
                    </div>
                    <div className=' sm:flex hidden flex-row'>
                    {
                        activeTheme === "loading" ? <></>
                        : 
                        <Switch onSwitch={onSwitch}  isSwitchedOn={activeTheme === "dark"} />
                    }
                    </div>

                    <div className='sm:hidden flex' onClick={toggleSidebar}>
                            {!showSideBar ? 
                                <AlignRightIcon />
                                : <Minimize2Icon />
                        }
                    </div>
                </div>
                
                {!showSideBar ? 
                    <div>
                        {children}
                    </div> 
                    : 
                    <div className='sm:hidden flex flex-col py-4'>
                        {
                            NavItems.map((each) => <Link key={each.id} href={each.link}>
                                <p className='text-xl mb-2' onClick={(e)=>setShowSideBar(false)}>{each.name}</p>
                            </Link>)
                        }
                    </div>

                }   
            </section>
        </div>
    )
}

export default Layout;