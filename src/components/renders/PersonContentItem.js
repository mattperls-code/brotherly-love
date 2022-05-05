// IMPORTS

import React from "react"

import Responsive from "../structural/Responsive"

import { HorizontalFade, VerticalFade } from "../stylistic/Fade"

import Tilty from "react-tilty"

import KobeBryantImage from "../../assets/images/people/content/kobeBryant.png"
import WillSmithImage from "../../assets/images/people/content/willSmith.png"
import KevinHartImage from "../../assets/images/people/content/kevinHart.png"
import BradleyCooperImage from "../../assets/images/people/content/bradleyCooper.png"
import WiltChamberlainImage from "../../assets/images/people/content/wiltChamberlain.png"
import LilUziVertImage from "../../assets/images/people/content/lilUziVert.png"
import KevinBaconImage from "../../assets/images/people/content/kevinBacon.png"
import MeekMillImage from "../../assets/images/people/content/meekMill.png"
import TinaFeyImage from "../../assets/images/people/content/tinaFey.png"
import TellerImage from "../../assets/images/people/content/teller.png"
import RobMcElhenneyImage from "../../assets/images/people/content/robMcElhenney.png"
import PinkImage from "../../assets/images/people/content/pink.png"

// COMPONENTS

const PersonContentItem = ({ name, img, description, abridged }) => {
    return (
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
                                <Tilty max={20} >
                                    <img src={img} alt={name} />
                                </Tilty>
                            </HorizontalFade>
                            <HorizontalFade direction={"right"} verticalFocus={height + 150}>
                                <label className={width > 600 ? "slide-on-hover" : ""}>
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
    )
}

const peopleContentData = [
    {
        name: "Kobe Bryant",
        img: KobeBryantImage,
        description: (
            <React.Fragment>
                Kobe Bryant is one of <b>the most famous basketball players of all time</b>.
                <br />
                He played in the NBA on the <b>LA Lakers</b> for 20 years.
                <br />
                He was born in Philadelphia in 1978, and a large portion of his childhood was spent in Philly.
                <br />
                As a teenager, he went to <b>Lower Merion High School</b>.
                <br />
                In 2020 at the age of 41, he passed away in a helicopter accident.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Kobe Bryant was born in Philadelphia in 1978.
                <br />
                He played for the <b>LA Lakers</b>.
                <br />
                As a teen, he attended <b>Lower Merion High School</b> as a teenager.
            </React.Fragment>
        )
    },
    {
        name: "Will Smith",
        img: WillSmithImage,
        description: (
            <React.Fragment>
                Will Smith is a <b>famous actor</b> born and raised in Philly.
                <br />
                He's starred in:
                <ul>
                    <li>The Fresh Prince of Bel-Air</li>
                    <li>Men In Black</li>
                    <li>I Am Legend</li>
                    <li>The Pursuit of Happyness</li>
                    <li>I, Robot</li>
                </ul>
                <br />
                He has been nominated for <b>5 Golden Globe Awards</b>, <b>2 Academy Awards</b>, and has won <b>4 Grammy Awards</b>.
                <br />
                He is ranked the <b>42nd most popular actor</b> of all time.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Will Smith is a <b>famous actor</b> from Philadelphia.
                <br />
                He starred in many classic movies.
                <br />
                He was nominated for numerous awards and won <b>4 Grammy Awards</b>.
            </React.Fragment>
        )
    },
    {
        name: "Kevin Hart",
        img: KevinHartImage,
        description: (
            <React.Fragment>
                Kevin Hart was born in Philly, 1979, and attended <b>George Washington High School</b>.
                <br />
                He overcame a difficult childhood to become a <b>famous stand-up comedian and actor</b>.
                <br />
                He has stand-up performances <b>featured on Netflix</b>.
                <br />
                He starred in several comedies:
                <ul>
                    <li>Jumanji</li>
                    <li>Night School</li>
                    <li>Get Hard</li>
                    <li>Central Intelligence</li>
                </ul>
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Kevin Hart is a <b>famous comedian and actor</b> from Philadelphia.
                <br />
                He's been <b>Featured on Netflix</b> and starred in many comedies.
                <br />
                He attended <b>George Washington High School</b> as a teenager.
            </React.Fragment>
        )
    },
    {
        name: "Bradley Cooper",
        img: BradleyCooperImage,
        description: (
            <React.Fragment>
                Bradley Cooper is a <b>famous actor</b> and has also directed.
                <br />
                He was born in 1975, in a town right outside Philadelphia.
                <br />
                He's starred in several big movies, including:
                <ul>
                    <li>The Hangover </li>
                    <li>A Star Is Born</li>
                    <li>American Sniper</li>
                    <li>Nightmare Alley</li>
                </ul>
                Additionally, he has received <b>2 Grammy Awards</b> and has been nominated for several <b>Academy Awards</b> and <b>Golden Globe Awards</b>.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Bradley is a <b>famous actor</b> from nearby Philly.
                <br />
                He's stared in popular movies like <b>The Hangover</b> and <b>American Sniper</b>.
                <br />
                He's won <b>2 Grammy's</b> and been nominated for various other awards.
            </React.Fragment>
        )
    },
    {
        name: "Wilt Chamberlain",
        img: WiltChamberlainImage,
        description: (
            <React.Fragment>
                Wilt Chamberlain was a <b>famous basketball player</b> born in Philadelphia 1936.
                <br />
                At a massive 7' 1", he is widely considered to be <b>one of the best athletes of all time</b>.
                <br />
                Over the course of his <b>14 years in the NBA</b>, he played for a few of the best:
                <ul>
                    <li>The Sixers</li>
                    <li>Golden State</li>
                    <li>LA Lakers</li>
                </ul>
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Wilt Chamberlain is a <b>famous basketball player</b> from Philly and one of the best athletes of all time.
                <br />
                Over his <b>14 years in the NBA</b>, he played for <b>The Sixers</b>, <b>Golden State</b>, and the <b>LA Lakers</b>.
            </React.Fragment>
        )
    },
    {
        name: "Lil Uzi Vert",
        img: LilUziVertImage,
        description: (
            <React.Fragment>
                Born in 1995 in Philadelphia, Lil Uzi Vert is a <b>famous rapper</b>. His albums include:
                <ul>
                    <li>Luv is Rage</li>
                    <li>Lil Uzi Vert vs. the World</li>
                    <li>Eternal Atake</li>
                </ul>
                <br />
                In 2017, he won MTV's <b>Best Song of the Summer</b> and BET's <b>Best Collaboration Award</b>.
                <br />
                As of 2022, he has <b>23.6 million monthly listeners</b> on Spotify.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Lil Uzi Vert is a <b>famous rapper</b> from Philadelphia.
                <br />
                He won <b>Best Song of the Summer</b> and <b>Best Collaboration</b> in 2017.
                <br />
                On Spotify, he gets <b>23.6 million monthly listeners</b>.
            </React.Fragment>
        )
    },
    {
        name: "Kevin Bacon",
        img: KevinBaconImage,
        description: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        )
    },
    {
        name: "Meek Mill",
        img: MeekMillImage,
        description: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        )
    },
    {
        name: "Tina Fey",
        img: TinaFeyImage,
        description: (
            <React.Fragment>
                Tina Fey is a <b>comedian and actor</b> from a town just outside Philadelphia.
                <br />
                She was <b>SNL's first female writer</b> in 1999.
                <br />
                In addition to being an SNL star, she's appeared in a few popular movies:
                <ul>
                    <li>Mean Girls</li>
                    <li>Megamind</li>
                    <li>Sisters</li>
                    <li>Baby Mama</li>
                </ul>
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        )
    },
    {
        name: "Teller",
        img: TellerImage,
        description: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        )
    },
    {
        name: "Rob McElhenney",
        img: RobMcElhenneyImage,
        description: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        )
    },
    {
        name: "Pink",
        img: PinkImage,
        description: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                More info coming soon!
            </React.Fragment>
        )
    },
]

// EXPORTS

export { PersonContentItem, peopleContentData }