import React from "react"
import Page from "../../components/ComponetPage/Page"
import AboutMe from "../../components/AboutMe/AboutMe"
import Banner from "../../components/Banner/Banner";
import Projects from "../../components/projects/projects";

const Home=()=>{
    return(
        <Page>
            <Banner/>
            <AboutMe />

            <Projects/>
        </Page>
    )
}
export default Home