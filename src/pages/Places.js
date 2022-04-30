// IMPORTS

import React from "react"

import Page from "../components/structural/Page"
import FrontSection from "../components/structural/FrontSection"
import BottomBar from "../components/structural/BottomBar"
import Introduction from "../components/structural/Introduction"
import Responsive from "../components/structural/Responsive"

import { VerticalFade } from "../components/stylistic/Fade"
import { ManualCarousel } from "../components/stylistic/Carousel"

import { PlaceContentItem, placesContentData } from "../components/renders/PlaceContentItem"

// COMPONENTS

const Places = () => {
    return (
        <Page title={"Places"} quote={(
            <React.Fragment>
                I'd like to see Paris before I die…
                <br />
                <b>Philadelphia will do</b>
            </React.Fragment>
        )} quotee={"W. C. Fields"} focusTime={3500}>
            <FrontSection current={"Places"}>
                <Introduction title={"Places"}>
                    Lorem ipsum dolor sit amet, nostrud vocibus duo at, zril inimicus ea quo, sit ea fierent periculis. Perpetua incorrupte sadipscing cu duo. Eius elaboraret id est, cu ancillae consetetur vim, nec id idque velit vulputate. Ad legere fabellas per, ne has ipsum malorum explicari, vis viris audire probatus ea. Eruditi veritus oporteat ne vix, at consul habemus scaevola nam, vim et sumo quot hendrerit.
                    <br />
                    Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                    <br />
                    Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                </Introduction>
                <Responsive render={({ height }) => {
                    return (
                        <VerticalFade verticalFocus={height}>
                            <div style={{ textAlign: "center", paddingBottom: 40 }}>
                                <div className={"action-solid"}>Keep scrolling to learn about the places in Philly</div>
                            </div>
                        </VerticalFade>
                    )
                }} />
            </FrontSection>
            <section>
                <Responsive render={({ width }) => {
                    return (
                        <ManualCarousel itemData={placesContentData} render={PlaceContentItem} width={width} />
                    )
                }} />
            </section>
            <BottomBar />
        </Page>
    )
}

// EXPORTS

export default Places