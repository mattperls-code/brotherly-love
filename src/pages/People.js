// IMPORTS

import React, { useRef, useEffect } from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import Introduction from "../components/structural/Introduction"
import Responsive from "../components/structural/Responsive"

import Particles from "../components/stylistic/Particles"
import { VerticalFade } from "../components/stylistic/Fade"

import { PersonContentItem, peopleContentData } from "../components/renders/PersonContentItem"

// COMPONENT

const People = () => {
    // Reference to the introduction section in order to achieve responsive auto correct scrolling with dynamic height element
    const ref = useRef()

    // Auto correct scroll position when the user stops scrolling
    let timer = null

    const scrollHandler = () => {
        if(timer !== null){
            window.clearTimeout(timer)
        }
        // On scroll end, (where the screen width is large enough for proper layout) find closest index based on current scroll position then smooth scroll to fix position difference
        timer = window.setTimeout(() => {
            const offset = ref.current.getBoundingClientRect().height
            const itemHeight = 735
            if(window.innerWidth > 900 && window.scrollY > offset - itemHeight / 2 && window.scrollY < offset + (peopleContentData.length - 1) * itemHeight){
                const index = Math.round((window.scrollY - offset) / itemHeight)
                window.scrollTo({ top: offset + index * itemHeight, behavior: "smooth" })
            }
        }, 250)
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        
        // Prevent memory leak from unclosed listener
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])

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
            )} quotee={"Meek Mill"} focusTime={3000} pushBottomBar>
                <div ref={ref} style={{ margin: 0, padding: 0 }}>
                    <FrontSection current={"People"}>
                        <Introduction title={"People"}>
                            Philadelphia is a wonderful and unique city. There are lots of great places to visit and teams to root for, but fundamentally Philly is its people.
                            <br />
                            In this section, we hope to share some notable people who were born in Philadelphia or the surrounding regions. This collection of people highlights the athleticism, artistry, and talent the city has produced over the years. So many incredible people have come from Philadelphia and we hope to augment the negative narrative around Philly people.
                        </Introduction>
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
                    </FrontSection>
                </div>
                <Responsive render={({ width }) => {
                    return (
                        <React.Fragment>
                            {
                                (width > 900) && (
                                    <div className={"people-internal-linkage-wrapper"}>
                                        <div className={"people-internal-linkage-container"}>
                                            {
                                                // Generates an array of internal links and renders them
                                                (() => {
                                                    const internalLinks = []
                                                    peopleContentData.forEach(({ name }, index) => {
                                                        internalLinks.push(
                                                            <div key={index} className={"link"} onClick={() => {
                                                                const offset = ref.current.getBoundingClientRect().height
                                                                const itemHeight = 735
                                                                // On click, scroll to corresponding subsection
                                                                window.scrollTo({ top: offset + index * itemHeight, behavior: "smooth" })
                                                            }}>
                                                                <label key={index}>
                                                                    {
                                                                        name
                                                                    }
                                                                </label>
                                                            </div>
                                                        )
                                                    })
                                                    return internalLinks
                                                })()
                                            }
                                        </div>
                                    </div>
                                )
                            }
                            <section style={{ paddingLeft: (width > 900) ? 300 : 0 }}>
                                {
                                    // Generates an array of content components about famous Philadelphians and renders them
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
                        </React.Fragment>
                    )
                }} />
            </Page>
        </React.Fragment>
        
    )
}

// EXPORTS

export default People