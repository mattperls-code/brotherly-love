// IMPORTS

import React from "react"

import Responsive from "../structural/Responsive"

import { HorizontalFade, VerticalFade } from "../stylistic/Fade"
import { ManualCarousel } from "../stylistic/Carousel"

// COMPONENTS

const TeamContentItem = ({ name, imgs, description, abridged }) => {
    return (
        <article className={"team-container"}>
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
            <div className={"content-wrapper"}>
                <Responsive render={({ width, height }) => {
                    return (width > 1150) ? (
                        <React.Fragment>
                            <div className={"team-picture-container"}>
                                <HorizontalFade direction={"left"} verticalFocus={height + 300}>
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
                                <HorizontalFade direction={"right"} verticalFocus={height + 300}>
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
                                <VerticalFade verticalFocus={height + 200}>
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
                                <VerticalFade verticalFocus={height}>
                                    <label>
                                        {
                                            (width > 600) ? description : abridged
                                        }
                                    </label>
                                </VerticalFade>
                            </div>
                        </React.Fragment>
                    )
                }} />
            </div>
        </article>
    )
}

const teamContentData = [
    {
        name: "The Eagles",
        imgs: [
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300"
        ],
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        )
    },
    {
        name: "The Sixers",
        imgs: [
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300"
        ],
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        )
    },
    {
        name: "The Union",
        imgs: [
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300"
        ],
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        )
    },
    {
        name: "The Phillies",
        imgs: [
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300"
        ],
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        )
    },
    {
        name: "The Flyers",
        imgs: [
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300",
            "https://picsum.photos/600/300"
        ],
        description: (
            <React.Fragment>
                Cu vide legimus eum. Eu offendit intellegat duo. Ius mutat lucilius scripserit eu. Elitr dissentias cum ex, cum justo timeam ad. Qui feugiat appetere et, nostro eirmod quo cu.
                <br />
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Cu elit iudico petentium vis. Corrumpit repudiandae ne nec, porro maluisset eam id, eripuit salutatus sit ut. Modo duis ex vel, vis dicit putent eligendi ei, est quem recteque ex. Zril dictas interpretaris cu qui. No usu mucius facilisis torquatos, eam stet etiam expetendis at.
            </React.Fragment>
        )
    }
]

// EXPORTS

export { TeamContentItem, teamContentData }