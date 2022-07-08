import React from "react"
import Page from "../../components/ComponetPage/Page"
import AboutMe from "../../components/AboutMe/AboutMe"
import Resume from "../../components/Resume/Resume"
import Banner from "../../components/Banner/Banner";
import Projects from "../../components/projects/projects";
import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";

const Home=()=>{
    return(
        <Page>
            <Banner/>
            <AboutMe />
            <Resume />
            <Projects/>
            <Blog/>
            <Contact/>
        </Page>
    )
}
export default Home