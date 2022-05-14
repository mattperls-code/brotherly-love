// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import Introduction from "../components/structural/Introduction"
import Responsive from "../components/structural/Responsive"

import Particles from "../components/stylistic/Particles"
import { VerticalFade } from "../components/stylistic/Fade"

import { PersonContentItem, peopleContentData } from "../components/renders/PersonContentItem"

// COMPONENT

const People = () => {
    return (
        <React.Fragment>
            <div style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}>
                <Particles count={30} height={window.innerHeight} />
            </div>
            <Page title={"People"} quote={(
                <React.Fragment>
                    Philly, we breed the best,
                    <br />
                    <b>Check the resume</b>
                </React.Fragment>
            )} quotee={"Meek Mill"} focusTime={3500}>
                <FrontSection current={"People"}>
                    <Introduction title={"People"}>
                        Philadelphia is a wonderful and unique city. There are lots of great places to visit and teams to root for, but fundamentally Philly is its people.
                        <br />
                        In this section, we hope to share some notable people who were born in Philadelphia or the surrounding regions. This collection of people highlights the athleticism, artistry, and talent the city has produced over the years. So many incredible people have come from Philadelphia and we hope to augment the negative narrative around Philly people.
                    </Introduction>
                    <div style={{ width: "100%" }}>
                        {
                            // Responds to changes in screen height so fade trigger changes dynamically
                        }
                        <Responsive render={({ height }) => {
                            return (
                                <React.Fragment>
                                    <VerticalFade verticalFocus={height}>
                                        <div style={{ textAlign: "center", paddingBottom: 20 }}>
                                            <div className={"action-solid"}>Scroll down to learn about famous Philadelphians</div>
                                        </div>
                                    </VerticalFade>
                                    <VerticalFade verticalFocus={height}>
                                        <div style={{ textAlign: "center", paddingBottom: 40 }}>
                                            <div className={"action-solid"}>You can click the people to get a better view</div>
                                        </div>
                                    </VerticalFade>
                                </React.Fragment>
                            )
                        }} />
                    </div>
                </FrontSection>
                <section>
                    {
                        // Generates an array of content components about famous Philadelphians and renders them
                    }
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
            </Page>
        </React.Fragment>
        
    )
}

// EXPORTS

export default People