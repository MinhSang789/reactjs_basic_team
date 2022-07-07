import React from "react"
import Page from "../../components/ComponetPage/Page"
import AboutMe from "../../components/AboutMe/AboutMe"
import Resume from "../../components/Resume/Resume"
import Banner from "../../components/Banner/Banner";
import Projects from "../../components/projects/projects";

const Home=()=>{
    return(
        <Page>
            <Banner/>
            <AboutMe />
            <Resume />
            <Projects/>
        </Page>
    )
}
export default Home