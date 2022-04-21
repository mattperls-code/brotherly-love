import React from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import BottomBar from "../components/BottomBar"

const People = () => {
    return (
        <Page>
            <FrontSection current={"People"}></FrontSection>
            <section></section>
            <BottomBar />
        </Page>
    )
}

export default People