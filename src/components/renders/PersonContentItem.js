// IMPORTS

import React from "react"

import Responsive from "../structural/Responsive"

import { HorizontalFade, VerticalFade } from "../stylistic/Fade"

import Tilty from "react-tilty"

// COMPONENTS

const PersonContentItem = ({ name, img, description, abridged }) => {
    return (
        <Tilty max={10}>
            <article className={"person-container"}>
                <Responsive render={({ height }) => {
                    return (
                        <VerticalFade verticalFocus={height}>
                            <h2>
                                {
                                    name
                                }
                            </h2>
                        </VerticalFade>
                    )
                }} />
                <div className={"content-container"}>
                    <Responsive render={({ width, height }) => {
                        return (
                            <React.Fragment>
                                <HorizontalFade direction={"left"} verticalFocus={height + 300}>
                                    <img src={img} alt={name} />
                                </HorizontalFade>
                                <HorizontalFade direction={"right"} verticalFocus={height + 150}>
                                    <label>
                                        {
                                            (width > 600) ? description : abridged
                                        }
                                    </label>
                                </HorizontalFade>
                            </React.Fragment>
                        )
                    }} />
                </div>
            </article>
        </Tilty>
    )
}

const peopleContentData = [
    {
        name: "John Doe",
        img: "https://picsum.photos/300/500",
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
            </React.Fragment>
        )
    },
    {
        name: "John Doe",
        img: "https://picsum.photos/300/500",
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
            </React.Fragment>
        )
    },
    {
        name: "John Doe",
        img: "https://picsum.photos/300/500",
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
            </React.Fragment>
        )
    },
    {
        name: "John Doe",
        img: "https://picsum.photos/300/500",
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
            </React.Fragment>
        )
    },
    {
        name: "John Doe",
        img: "https://picsum.photos/300/500",
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
            </React.Fragment>
        )
    }
]

// EXPORTS

export { PersonContentItem, peopleContentData }