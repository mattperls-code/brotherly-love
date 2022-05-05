// IMPORTS

import React from "react"

import Responsive from "../structural/Responsive"

import { HorizontalFade, VerticalFade } from "../stylistic/Fade"

import Tilty from "react-tilty"

import KobeBryantImage from "../../assets/images/people/content/kobeBryant.png"
import WillSmithImage from "../../assets/images/people/content/willSmith.png"
import KevinHartImage from "../../assets/images/people/content/kevinHart.png"
import BradleyCooperImage from "../../assets/images/people/content/bradleyCooper.png"
import TinaFeyImage from "../../assets/images/people/content/tinaFey.png"
import PinkImage from "../../assets/images/people/content/pink.png"
import WiltChamberlainImage from "../../assets/images/people/content/wiltChamberlain.png"
import LilUziVertImage from "../../assets/images/people/content/lilUziVert.png"
import KevinBaconImage from "../../assets/images/people/content/kevinBacon.png"
import MeekMillImage from "../../assets/images/people/content/meekMill.png"
import TellerImage from "../../assets/images/people/content/teller.png"
import RobMcElhenneyImage from "../../assets/images/people/content/robMcElhenney.png"

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
        name: "Kobe Bryant",
        img: KobeBryantImage,
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
        name: "Will Smith",
        img: WillSmithImage,
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
        name: "Kevin Hart",
        img: KevinHartImage,
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
        name: "Bradley Cooper",
        img: BradleyCooperImage,
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
        name: "Tina Fey",
        img: TinaFeyImage,
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
        name: "Pink",
        img: PinkImage,
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
        name: "Wilt Chamberlain",
        img: WiltChamberlainImage,
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
        name: "Lil Uzi Vert",
        img: LilUziVertImage,
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
        name: "Kevin Bacon",
        img: KevinBaconImage,
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
        name: "Meek Mill",
        img: MeekMillImage,
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
        name: "Teller",
        img: TellerImage,
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
        name: "Rob McElhenney",
        img: RobMcElhenneyImage,
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