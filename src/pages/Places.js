import React from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import BottomBar from "../components/BottomBar"

const Places = () => {
    return (
        <Page>
            <FrontSection current={"Places"}></FrontSection>
            <section></section>
            <BottomBar />
        </Page>
    )
}

export default Places