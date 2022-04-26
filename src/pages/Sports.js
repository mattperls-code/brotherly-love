import React from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import BottomBar from "../components/BottomBar"

const Sports = () => {
    return (
        <Page title={"Sports"} quote={(
            <React.Fragment>
                The problem with Philadelphia fans is that they want you to <b>play every game like it's your last one</b>
            </React.Fragment>
        )} quotee={"Shawn Bradley"} focusTime={5500}>
            <FrontSection current={"Sports"}></FrontSection>
            <section></section>
            <BottomBar />
        </Page>
    )
}

export default Sports