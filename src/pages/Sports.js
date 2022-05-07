// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import BottomBar from "../components/structural/BottomBar"
import Introduction from "../components/structural/Introduction"
import Responsive from "../components/structural/Responsive"

import { VerticalFade } from "../components/stylistic/Fade"

import { TeamContentItem, teamContentData } from "../components/renders/SportsContentItem"

// COMPONENTS

const Sports = () => {
    return (
        <Page title={"Sports"} quote={(
            <React.Fragment>
                The problem with Philadelphia fans is that they want you to <b>play every game like it's your last one</b>
            </React.Fragment>
        )} quotee={"Shawn Bradley"} focusTime={4500}>
            <FrontSection current={"Sports"}>
                <Introduction title={"Sports"}>
                    One of the best aspects of being a Philadelphian is the sports teams. We win and lose and win again and its a captivating experience that bonds the people.
                    <br />
                    Philly's got a team for every sport, so no matter what your interests there's something for you to enjoy. By learning about the teams, we hope to increase this bond within Philadelphians and their teams and show off one of Philly's favorite passions.
                </Introduction>
                <Responsive render={({ height }) => {
                    return (
                        <VerticalFade verticalFocus={window.innerHeight}>
                            <div style={{ textAlign: "center", paddingBottom: 40 }}>
                                <div className={"action-solid"}>Scroll down to learn more about Philly's teams</div>
                            </div>
                        </VerticalFade>
                    )
                }} />
            </FrontSection>
            <section>
                {
                    // generate team information
                    (() => {
                        const teamRenders = []
                        teamContentData.forEach(({ name, imgs, description, abridged }, index) => {
                            teamRenders.push(
                                <TeamContentItem key={index} name={name} imgs={imgs} description={description} abridged={abridged} />
                            )
                        })
                        return teamRenders
                    })()
                }
            </section>
            <BottomBar />
        </Page>
    )
}

// EXPORTS

export default Sports