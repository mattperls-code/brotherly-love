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
                    Lorem ipsum dolor sit amet, nostrud vocibus duo at, zril inimicus ea quo, sit ea fierent periculis. Perpetua incorrupte sadipscing cu duo. Eius elaboraret id est, cu ancillae consetetur vim, nec id idque velit vulputate. Ad legere fabellas per, ne has ipsum malorum explicari, vis viris audire probatus ea. Eruditi veritus oporteat ne vix, at consul habemus scaevola nam, vim et sumo quot hendrerit.
                    <br />
                    Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                    <br />
                    Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
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