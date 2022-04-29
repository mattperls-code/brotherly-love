import React from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import BottomBar from "../components/BottomBar"

import Introduction from "../components/Introduction"

import Responsive from "../components/Responsive"

import { HorizontalFade, VerticalFade } from "../components/Fade"
import { ManualCarousel } from "../components/Carousel"

const Team = ({ name, imgs, description, abridged }) => {
    return (
        <Responsive render={({ width }) => {
            return (
                <article className={"team-container"}>
                    <VerticalFade verticalFocus={window.innerHeight}>
                        <h2>
                            {
                                name
                            }
                        </h2>
                    </VerticalFade>
                    <div className={"content-wrapper"}>
                        {
                            width > 1150 ? (
                                <React.Fragment>
                                    <div className={"team-picture-container"}>
                                        <HorizontalFade direction={"left"} verticalFocus={window.innerHeight + 300}>
                                            <div style={{ height: 500 }}>
                                                <ManualCarousel itemData={imgs} render={(item, index) => {
                                                    return (
                                                        <img key={index} src={item} alt={name + " Related Content"} />
                                                    )
                                                }} width={Math.min(width - 40, 720)} borderRadius />
                                            </div>
                                        </HorizontalFade>
                                    </div>
                                    <div style={{ height: 500 }} className={"content-container"}>
                                        <HorizontalFade direction={"right"} verticalFocus={window.innerHeight + 300}>
                                            <div style={{ height: 500 }}>
                                                <label>
                                                    {
                                                        description
                                                    }
                                                </label>
                                            </div>
                                        </HorizontalFade>
                                    </div>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <div className={"team-picture-container"}>
                                        <VerticalFade verticalFocus={window.innerHeight + 200}>
                                            <div style={{ height: 500 }}>
                                                <ManualCarousel itemData={imgs} render={(item, index) => {
                                                    return (
                                                        <img key={index} src={item} alt={name + " Related Content"} />
                                                    )
                                                }} width={Math.min(width - 40, 720)} borderRadius />
                                            </div>
                                        </VerticalFade>
                                    </div>
                                    <div className={"content-container"}>
                                        <VerticalFade verticalFocus={window.innerHeight}>
                                            <label>
                                                {
                                                    (width > 600) ? description : abridged
                                                }
                                            </label>
                                        </VerticalFade>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    </div>
                </article>
            )
        }} />
    )
}

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
                <VerticalFade verticalFocus={window.innerHeight}>
                    <div style={{ textAlign: "center", paddingBottom: 40 }}>
                        <div className={"action-solid"}>Scroll down to learn more about Philly's teams</div>
                    </div>
                </VerticalFade>
            </FrontSection>
            <section>
                <Team name={"The Eagles"} imgs={[
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300"
                ]} description={(
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                        <br />
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} abridged={(
                    <React.Fragment>
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} />
                <Team name={"The Sixers"} imgs={[
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300"
                ]} description={(
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                        <br />
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} abridged={(
                    <React.Fragment>
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} />
                <Team name={"The Union"} imgs={[
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300"
                ]} description={(
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                        <br />
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} abridged={(
                    <React.Fragment>
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} />
                <Team name={"The Phillies"} imgs={[
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300"
                ]} description={(
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                        <br />
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} abridged={(
                    <React.Fragment>
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} />
                <Team name={"The Flyers"} imgs={[
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300",
                    "https://picsum.photos/600/300"
                ]} description={(
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                        <br />
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} abridged={(
                    <React.Fragment>
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                )} />
            </section>
            <BottomBar />
        </Page>
    )
}

export default Sports