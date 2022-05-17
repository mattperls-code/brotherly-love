// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import Introduction from "../components/structural/Introduction"
import Responsive from "../components/structural/Responsive"

import Particles from "../components/stylistic/Particles"
import { VerticalFade } from "../components/stylistic/Fade"

import { SportsContentItem, sportsContentData } from "../components/renders/SportsContentItem"

// COMPONENTS

const Sports = () => {
    return (
        <React.Fragment>
            <div style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}>
                <Particles count={30} height={window.innerHeight} />
            </div>
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
                    {
                        // Responds to changes in screen height so fade trigger changes dynamically
                    }
                    <Responsive render={({ height }) => {
                        return (
                            <VerticalFade verticalFocus={height}>
                                <div style={{ textAlign: "center", paddingBottom: 40 }}>
                                    <div className={"action-solid"}>Scroll down to learn more about Philly's teams</div>
                                </div>
                            </VerticalFade>
                        )
                    }} />
                </FrontSection>
                <section>
                    {
                        // Generates an array of content components about Philadelphia sports teams and renders them
                    }
                    {
                        (() => {
                            const sportsRenders = []
                            sportsContentData.forEach(({ name, imgs, description, abridged }, index) => {
                                sportsRenders.push(
                                    <SportsContentItem key={index} name={name} imgs={imgs} description={description} abridged={abridged} />
                                )
                            })
                            return sportsRenders
                        })()
                    }
                </section>
            </Page>
        </React.Fragment>
        
    )
}

// EXPORTS

export default Sports