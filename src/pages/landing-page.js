import About from "../components/landing-page/about"
import Contact from "../components/landing-page/contact"
import Footer from "../components/landing-page/footer"
import Hero from "../components/landing-page/hero"
import Navbar from "../components/landing-page/navbar"
import OurServices from "../components/landing-page/our-services"

const Landingpage = () => {
    return(
        <>
            <Navbar/> 
            <Hero/> 
            <About/>
            <OurServices/>
            <Contact/>
            <Footer/>   
        </>
    )
}

export default Landingpage