// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import Introduction from "../components/structural/Introduction"
import Responsive from "../components/structural/Responsive"

import Particles from "../components/stylistic/Particles"
import { VerticalFade } from "../components/stylistic/Fade"
import { ManualCarousel } from "../components/stylistic/Carousel"

import { PlaceContentItem, placesContentData } from "../components/renders/PlaceContentItem"

// COMPONENTS

const Places = () => {
    return (
        <React.Fragment>
            <div style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}>
                <Particles count={30} height={window.innerHeight} />
            </div>
            <Page title={"Places"} quote={(
                <React.Fragment>
                    I'd like to see Paris before I die…
                    <br />
                    <b>Philadelphia will do</b>
                </React.Fragment>
            )} quotee={"W. C. Fields"} focusTime={3500}>
                
                <FrontSection current={"Places"}>
                    <Introduction title={"Places"}>
                        Philadelphia is filled with an incredible collection of awesome places to visit! There's a little bit of everything in Philly, so no matter what your interested in, there's a place for you.
                        <br />
                        Philly has over ninety unique museums, more than three hundred parks, several thousand restaurants, more than fifty colleges, and many historical sites.
                        <br />
                        Here, we collected several of our favorite places in Philadelphia. These are great stops for tourists and are just as fun for native Philadelphians looking to learn more about their city.
                    </Introduction>
                    {
                        // Responds to changes in screen height so fade trigger changes dynamically
                    }
                    <Responsive render={({ height }) => {
                        return (
                            <React.Fragment>
                                <VerticalFade verticalFocus={height}>
                                    <div style={{ textAlign: "center", paddingBottom: 20 }}>
                                        <div className={"action-solid"}>Keep scrolling to see some awesome places in Philly</div>
                                    </div>
                                </VerticalFade>
                                <VerticalFade verticalFocus={height}>
                                    <div style={{ textAlign: "center", paddingBottom: 40 }}>
                                        <div className={"action-solid"}>Click on any of the places to learn more about them</div>
                                    </div>
                                </VerticalFade>
                            </React.Fragment>
                        )
                    }} />
                </FrontSection>
                <section>
                    {
                        // Manual carousel about places in Philadelphia that responds to changes in screen width
                    }
                    <Responsive render={({ width }) => {
                        return (
                            <ManualCarousel itemData={placesContentData} render={PlaceContentItem} width={width} />
                        )
                    }} />
                </section>
            </Page>
        </React.Fragment>
        
    )
}

// EXPORTS

export default Places