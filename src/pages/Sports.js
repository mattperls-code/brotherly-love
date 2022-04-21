import React from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import BottomBar from "../components/BottomBar"

const Sports = () => {
    return (
        <Page>
            <FrontSection current={"Sports"}></FrontSection>
            <section></section>
            <BottomBar />
        </Page>
    )
}

export default Sports