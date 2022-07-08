import React from "react"
import Page from "../../components/ComponetPage/Page"
import AboutMe from "../../components/AboutMe/AboutMe"
import Resume from "../../components/Resume/Resume"
import Banner from "../../components/Banner/Banner";
import Projects from "../../components/projects/projects";
import Blog from "../../components/Blog/Blog";
<<<<<<< HEAD
import Services from "../../components/Services/Services";
=======
import Contact from "../../components/Contact/Contact";
>>>>>>> origin/develop

const Home=()=>{
    return(
        <Page>
            <Banner/>
            <AboutMe />
            <Resume />
            <Services />
            <Projects/>
            <Blog/>
            <Contact/>
        </Page>
    )
}
export default Home