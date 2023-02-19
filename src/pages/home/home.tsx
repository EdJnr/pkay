import { useState } from "react"
import { Navbar } from "../../components/navbar"
import { AboutUs } from "./widgets/about"
import { Contact } from "./widgets/contact"
import { Cover } from "./widgets/cover"
import { Services } from "./widgets/services"
import { WhyUs } from "./widgets/whyUs"

export const Home = () =>{
    const [navState,setNavstate] = useState<boolean>(false);
    window.onscroll = () =>{
        window.scrollY > 200 ?
        setNavstate(true)
        :
        setNavstate(false)
    }
    return(            
        <main className=" bg-white">
            {navState && <Navbar/>}
            <Cover/>
            <AboutUs/>
            <WhyUs/>
            <Services/>
            <Contact/>
        </main>
    )
}