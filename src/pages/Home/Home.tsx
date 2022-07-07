import React from "react"
import Page from "../../components/ComponetPage/Page"
import AboutMe from "../../components/AboutMe/AboutMe"
import Banner from "../../components/Banner/Banner";

const Home=()=>{
    return(
        <Page>
            <Banner/>
            <AboutMe />

        </Page>
    )
}
export default Home