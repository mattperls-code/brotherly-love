// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import BottomBar from "../components/structural/BottomBar"
import Introduction from "../components/structural/Introduction"
import Responsive from "../components/structural/Responsive"

import { VerticalFade } from "../components/stylistic/Fade"

import { PersonContentItem, peopleContentData } from "../components/renders/PersonContentItem"

// COMPONENT

const People = () => {
    return (
        <Page title={"People"} quote={(
            <React.Fragment>
                Philly, we breed the best,
                <br />
                <b>Check the resume</b>
            </React.Fragment>
        )} quotee={"Meek Mill"} focusTime={3000}>
            <FrontSection current={"People"}>
                <Introduction title={"People"}>
                    Tons of famous actors, athletes, and other celebrities are from Philly.
                    <br />
                    The city has shaped all its residents, ranging from the world's best athletes to world-renowned comedians and musicians.
                </Introduction>
                <div style={{ width: "100%" }}>
                    <Responsive render={({ height }) => {
                        return (
                            <VerticalFade verticalFocus={height}>
                                <div style={{ textAlign: "center", paddingBottom: 40 }}>
                                    <div className={"action-solid"}>Scroll down to learn about famous Philadelphians</div>
                                </div>
                            </VerticalFade>
                        )
                    }} />
                </div>
            </FrontSection>
            <section>
                {
                    (() => {
                        const peopleRenders = []
                        peopleContentData.forEach(({ name, img, description, abridged }, index) => {
                            peopleRenders.push(
                                <PersonContentItem key={index} name={name} img={img} description={description} abridged={abridged} />
                            )
                        })
                        return peopleRenders
                    })()
                }
            </section>
            <BottomBar />
        </Page>
    )
}

// EXPORTS

export default People