// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import Introduction from "../components/structural/Introduction"
import Responsive from "../components/structural/Responsive"

import Particles from "../components/stylistic/Particles"
import { VerticalFade } from "../components/stylistic/Fade"

import MeImage from "../assets/images/me.png"

// COMPONENTS

const About = () => {
    return (
        <React.Fragment>
            <div style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}>
                <Particles count={30} height={window.innerHeight} />
            </div>
            <Page title={"About"} quote={"I'm proud to be from Philadelphia."} quotee={"Sherman Hemsley"} focusTime={3000}>
                <FrontSection current={"About"}>
                    <Introduction title={"Mission"}>
                        There is often a negative perception of Philadelphia as a city. Violence and poverty within the city tend to overshadow many of the positive qualities it has.
                        <br />
                        A large part of the issue is an underlying dissatisfaction with the city and its people. It can be hard to find an appreciation for this city. Violence, poorly maintained infrastructure, potholes, and traffic tend to prevent Philadelphians from seeing the best things. It is very easy to say the negative aspects of Philadelphia can't be made up for. This is the problem this website attempts to address:
                        <br />
                        <b>When Philadelphians have a bad attitude towards their city, it contributes to the problem.</b>
                        <br />
                        When everyone in the city starts to feel like this, everyone is a little less patient, a little less generous, a little less kind. This continues and continues and creates a cycle of negativity for everyone in the city.
                    </Introduction>
                    {
                        // Responds to changes in screen height so fade trigger changes dynamically
                    }
                    <Responsive render={({ height }) => {
                        return (
                            <VerticalFade verticalFocus={height + 150}>
                                <div className={"about-statement"}>
                                    Because of this, the first step to resolving the negativity around Philadelphia is simply to appreciate the wonderful things it has to offer.
                                    <br />
                                    This website hopes to take the first step in fixing this. By raising Philadelphia and its people up, it really does make the city a better place. There is so much in Philadelphia to love and be thankful for. Underneath its rough exterior, there is a city of warm people, beautiful sights, passionate fans, and brotherly love.
                                </div>
                            </VerticalFade>
                        )
                    }} />
                    <Introduction title={"About Me"} fadeIn />
                    <Responsive render={({ height }) => {
                        return (
                            <VerticalFade verticalFocus={height + 300}>
                                <div className={"about-statement"} style={{ width: 400 }}>
                                    <img width="400" style={{ borderRadius: 10, verticalAlign: "middle" }} src={MeImage} />
                                </div>
                            </VerticalFade>
                        )
                    }} />
                    <Responsive render={({ height }) => {
                        return (
                            <VerticalFade verticalFocus={height + 150}>
                                <div className={"about-statement"}>
                                    Hello, my name is Matthew Perlman and I'm a sophomore at Central High School.
                                    <br />
                                    I love programming and have been writing code for almost 5 years. I am self taught and first started by building simple games with JavaScript.
                                    <br />
                                    Now I am fluent in HTML, CSS, JavaScript, React, and React Native. I am also actively teaching myself Java and C++.
                                    <br />
                                    Besides programming, I like soccer and hanging out with my friends.
                                </div>
                            </VerticalFade>
                        )
                    }} />
                </FrontSection>
            </Page>
        </React.Fragment>
        
    )
}

// EXPORTS

export default About