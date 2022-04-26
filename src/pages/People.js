import React from "react"

import Page from "../components/Page"
import FrontSection from "../components/FrontSection"
import BottomBar from "../components/BottomBar"

import Introduction from "../components/Introduction"

import Responsive from "../components/Responsive"
import { HorizontalFade, VerticalFade } from "../components/Fade"

import Tilty from "react-tilty"

const Person = ({ name, img, description, abridged }) => {
    return (
        <Tilty max={10}>
            <article className={"person-container"}>
                <VerticalFade verticalFocus={window.innerHeight}>
                    <h2>
                        {
                            name
                        }
                    </h2>
                </VerticalFade>
                <div className={"content-container"}>
                    <HorizontalFade direction={"left"} verticalFocus={window.innerHeight + 300}>
                        <img src={img} alt={name} />
                    </HorizontalFade>
                    <HorizontalFade direction={"right"} verticalFocus={window.innerHeight + 150}>
                        <label>
                            <Responsive render={({ width }) => {
                                return (width > 600) ? description : abridged
                            }} />
                        </label>
                    </HorizontalFade>
                </div>
            </article>
        </Tilty>
    )
}

const People = () => {
    return (
        <Page title={"People"} quote={(
            <React.Fragment>
                Philly, we breed the best,
                <br />
                <b>Check the resume</b>
            </React.Fragment>
        )} quotee={"Meek Mill"} focusTime={4000}>
            <FrontSection current={"People"}>
                <Introduction title={"People"}>
                    Lorem ipsum dolor sit amet, nostrud vocibus duo at, zril inimicus ea quo, sit ea fierent periculis. Perpetua incorrupte sadipscing cu duo. Eius elaboraret id est, cu ancillae consetetur vim, nec id idque velit vulputate. Ad legere fabellas per, ne has ipsum malorum explicari, vis viris audire probatus ea. Eruditi veritus oporteat ne vix, at consul habemus scaevola nam, vim et sumo quot hendrerit.
                    <br />
                    Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                    <br />
                    Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                </Introduction>
                <div style={{ width: "100%" }}>
                    <VerticalFade verticalFocus={window.innerHeight}>
                        <div style={{ textAlign: "center", paddingBottom: 40 }}>
                            <div className={"action-solid"}>Scroll down to learn about famous Philadelphians</div>
                        </div>
                    </VerticalFade>
                </div>
            </FrontSection>
            <section>
                <Person name={"John Doe"} img={"https://picsum.photos/300/500"} description={
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                        <br />
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                } abridged={
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                    </React.Fragment>
                } />
                <Person name={"Jane Doe"} img={"https://picsum.photos/300/500"} description={
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                        <br />
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                } abridged={
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                    </React.Fragment>
                } />
                <Person name={"Jack Doe"} img={"https://picsum.photos/300/500"} description={
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                        <br />
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                } abridged={
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                    </React.Fragment>
                } />
                <Person name={"Janet Doe"} img={"https://picsum.photos/300/500"} description={
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                        <br />
                        Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
                    </React.Fragment>
                } abridged={
                    <React.Fragment>
                        Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                    </React.Fragment>
                } />
            </section>
            <BottomBar />
        </Page>
    )
}

export default People