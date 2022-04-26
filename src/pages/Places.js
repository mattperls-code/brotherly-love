import React from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import BottomBar from "../components/BottomBar"

import Introduction from "../components/Introduction"

import { VerticalFade } from "../components/Fade"
import { ManualCarousel } from "../components/Carousel"

import Tilty from "react-tilty"

const Places = () => {
    return (
        <Page title={"Places"} quote={(
            <React.Fragment>
                I’d like to see Paris before I die…
                <br />
                <b>Philadelphia will do</b>
            </React.Fragment>
        )} quotee={"W. C. Fields"} focusTime={4000}>
            <FrontSection current={"Places"}>
                <Introduction title={"Places"}>
                    Lorem ipsum dolor sit amet, nostrud vocibus duo at, zril inimicus ea quo, sit ea fierent periculis. Perpetua incorrupte sadipscing cu duo. Eius elaboraret id est, cu ancillae consetetur vim, nec id idque velit vulputate. Ad legere fabellas per, ne has ipsum malorum explicari, vis viris audire probatus ea. Eruditi veritus oporteat ne vix, at consul habemus scaevola nam, vim et sumo quot hendrerit.
                    <br />
                    Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                    <br />
                    Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                </Introduction>
                <VerticalFade verticalFocus={window.innerHeight}>
                    <div style={{ textAlign: "center", paddingBottom: 40 }}>
                        <div className={"action-solid"}>Keep scrolling to learn about the places in Philly</div>
                    </div>
                </VerticalFade>
            </FrontSection>
            <section>
                <ManualCarousel itemData={[
                    {
                        name: "Art Museum",
                        img: "https://picsum.photos/1600/600",
                        description: "It's a museum"
                    },
                    {
                        name: "Art Museum",
                        img: "https://picsum.photos/1600/600",
                        description: "It's a museum"
                    },
                    {
                        name: "Art Museum",
                        img: "https://picsum.photos/1600/600",
                        description: "It's a museum"
                    },
                    {
                        name: "Art Museum",
                        img: "https://picsum.photos/1600/600",
                        description: "It's a museum"
                    }
                ]} render={({ name, img, description }, index) => {
                    return (
                        <article key={index} className={"place-container"}>
                            <div className={"subheader-container"}>
                                <h2>
                                    {
                                        name
                                    }
                                </h2>
                            </div>
                            <Tilty max={10} className={"content"}>
                                <img src={img} alt={name} />
                                <label>
                                    {
                                        description
                                    }
                                </label>
                            </Tilty>
                        </article>
                    )
                }} />
            </section>
            <BottomBar />
        </Page>
    )
}

export default Places