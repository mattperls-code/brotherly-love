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
                    Lorem ipsum dolor sit amet, nostrud vocibus duo at, zril inimicus ea quo, sit ea fierent periculis. Perpetua incorrupte sadipscing cu duo. Eius elaboraret id est, cu ancillae consetetur vim, nec id idque velit vulputate. Ad legere fabellas per, ne has ipsum malorum explicari, vis viris audire probatus ea. Eruditi veritus oporteat ne vix, at consul habemus scaevola nam, vim et sumo quot hendrerit.
                    <br />
                    Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                    <br />
                    Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
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