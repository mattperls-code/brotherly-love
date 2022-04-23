import React from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import BottomBar from "../components/BottomBar"

const About = () => {
    return (
        <Page title={"About"}>
            <FrontSection current={"About"}></FrontSection>
            <section></section>
            <BottomBar />
        </Page>
    )
}

export default About