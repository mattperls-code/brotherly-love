// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import BottomBar from "../components/structural/BottomBar"
import Introduction from "../components/structural/Introduction"

import { VerticalFade } from "../components/stylistic/Fade"

// COMPONENTS

const About = () => {
    return (
        <Page title={"About"} quote={(
            <React.Fragment>
                I've never known a Philadelphian who wasn't a downright 'character';
                <br />
                possibly a defense mechanism resulting from the dullness of their native habitat
            </React.Fragment>
        )} quotee={"Anita Loos"} focusTime={6500}>
            <FrontSection current={"About"}>
                <Introduction title={"About"}>
                    There is often a negative perception of Philadelphia as a city. Violence and poverty within the city tend to overshadow many of the positive qualities it has.
                    <br />
                    A large part of the issue is an underlying dissatisfaction with the city and its people. It can be hard to find an appreciation for this city. Violence, poorly maintained infrastructure, potholes, and traffic tend to prevent Philadelphians from seeing the best things. It is very easy to say the negative aspects of Philadelphia can't be made up for. This is the problem this website attempts to address:
                    <br />
                    <b>When Philadelphians have a bad attitude towards their city, it contributes to the problem.</b>
                    <br />
                    When everyone in the city starts to feel like this, everyone is a little less patient, a little less generous, a little less kind. This continues and continues and creates a cycle of negativity for everyone in the city.
                </Introduction>
                <VerticalFade verticalFocus={window.innerHeight + 150}>
                    <div className={"about-statement"}>
                        Because of this, the first step to resolving the negativity around Philadelphia is simply to appreciate the wonderful things it has to offer.
                        <br />
                        This website hopes to take the first step in fixing this. By raising Philadelphia and its people up, it really does make the city a better place. There is so much in Philadelphia to love and be thankful for. Underneath its rough exterior, there is a city of warm people, beautiful sights, passionate fans, and brotherly love.
                    </div>
                </VerticalFade>
            </FrontSection>
            <BottomBar />
        </Page>
    )
}

// EXPORTS

export default About