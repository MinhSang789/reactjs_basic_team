import React from "react"
import Page from "../../components/ComponetPage/Page"
import AboutMe from "../../components/AboutMe/AboutMe"
import Resume from "../../components/Resume/Resume"
const Home=()=>{
    return(
        <Page>
            <AboutMe />
            <Resume />
        </Page>
    )
}
export default Home