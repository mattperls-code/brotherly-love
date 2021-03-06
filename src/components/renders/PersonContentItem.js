// IMPORTS

import React, { useState } from "react"

import Responsive from "../structural/Responsive"

import FilteredImage from "../stylistic/FilteredImage"
import { HorizontalFade, VerticalFade } from "../stylistic/Fade"

import Tilty from "react-tilty"

import KobeBryantImage from "../../assets/images/people/content/kobeBryant.png"
import WillSmithImage from "../../assets/images/people/content/willSmith.png"
import KevinHartImage from "../../assets/images/people/content/kevinHart.png"
import TinaFeyImage from "../../assets/images/people/content/tinaFey.png"
import BradleyCooperImage from "../../assets/images/people/content/bradleyCooper.png"
import WiltChamberlainImage from "../../assets/images/people/content/wiltChamberlain.png"
import LilUziVertImage from "../../assets/images/people/content/lilUziVert.png"
import PinkImage from "../../assets/images/people/content/pink.png"
import KevinBaconImage from "../../assets/images/people/content/kevinBacon.png"
import MeekMillImage from "../../assets/images/people/content/meekMill.png"
import TellerImage from "../../assets/images/people/content/teller.png"
import GraceKellyImage from "../../assets/images/people/content/graceKelly.png"
import RobMcElhenneyImage from "../../assets/images/people/content/robMcElhenney.png"
import NoamChomskyImage from "../../assets/images/people/content/noamChomsky.png"

// COMPONENTS

const PersonContentItem = ({ name, img, description, abridged }) => {
    const [showDescription, setShowDescription] = useState(false)

    const clickHandler = () => {
        setShowDescription(!showDescription)
    }

    return (
        <article className={"person-container"}>
            {
                // Responds to changes in screen height so fade trigger changes dynamically
            }
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
                {
                    // Responds to changes in screen width and height so content can fade and display dynamically
                }
                <Responsive render={({ width, height }) => {
                    return (
                        <React.Fragment>
                            <HorizontalFade direction={"left"} verticalFocus={height + 300}>
                                <Tilty max={20} >
                                    <FilteredImage src={img} alt={name} filters={[]} onClick={clickHandler} />
                                </Tilty>
                            </HorizontalFade>
                            <HorizontalFade direction={"right"} verticalFocus={height + 150}>
                                <label className={showDescription ? "show" : ""} onClick={clickHandler}>
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
                Kobe Bryant, a <b>famous basketball player</b>, was born in Philadelphia in 1978.
                <br />
                He played for the <b>LA Lakers</b> in the NBA.
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
            </React.Fragment>
        )
    },
    {
        name: "Tina Fey",
        img: TinaFeyImage,
        description: (
            <React.Fragment>
                Tina Fey is a <b>comedian and actress</b> from a town just outside Philadelphia.
                <br />
                She broke new ground as <b>SNL's first female writer</b> starting in 1999.
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
                Tina Fey is a <b>comedian and actress</b> from nearby Philadelphia.
                <br />
                She was <b>SNL's first female writer</b>.
                <br />
                She was in the classic movie <b>Mean Girls</b>.
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
                    <li>The Silver Lining's Playbook</li>
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
                Wilt Chamberlain was a <b>famous basketball player</b> born in Philadelphia, 1936.
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
        name: "Pink",
        img: PinkImage,
        description: (
            <React.Fragment>
                Alecia Beth Moore, commonly known by her stage name Pink, is a <b>pop singer and song writer</b> from nearby Philadelphia.
                <br />
                Some of her albums include:
                <ul>
                    <li>Funhouse</li>
                    <li>The Truth About Love</li>
                    <li>Beautiful Trauma</li>
                    <li>Hurts 2B Human</li>
                </ul>
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Pink is a <b>famous pop singer and song writer</b> from nearby Philly.
                <br />
                Her albums include <b>Funhouse</b>, <b>The Truth About Love</b>, <b>Beautiful Trauma</b>, and <b>Hurts 2B Human</b>.
            </React.Fragment>
        )
    },
    {
        name: "Kevin Bacon",
        img: KevinBaconImage,
        description: (
            <React.Fragment>
                Born in 1958, Kevin Bacon is a <b>famous actor</b> from Philadelphia. As a teen, he went to <b>Masterman High School</b>.
                <br />
                Some of the more famous movies he starred in include:
                <ul>
                    <li>Footloose</li>
                    <li>A Few Good Men</li>
                    <li>Apollo 13</li>
                    <li>X-Men: First Class</li>
                </ul>
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Kevin Bacon is a <b>famous actor</b> from Philly.
                <br />
                He starred in movies such as <b>Footloose</b>, <b>A Few Good Men</b>, <b>Apollo 13</b>, and <b>X-Men: First Class</b>.
            </React.Fragment>
        )
    },
    {
        name: "Meek Mill",
        img: MeekMillImage,
        description: (
            <React.Fragment>
                Meek Mill, legally Robert Rimheek Williams, was born in Philadelphia, 1987.
                <br />
                He's a <b>professional rapper</b> who came up from battle rapping in Philadelphia. As a high school student, he attended <b>Strawberry Mansion</b>.
                <br />
                On spotify, he has <b>14 million monthly listeners</b>.
                <br />
                Some of his albums include:
                <ul>
                    <li>Mr. Philadelphia</li>
                    <li>DC4</li>
                    <li>Wins & Losses</li>
                    <li>Expensive Pain</li>
                </ul>
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Meek Mill is a <b>famous rapper</b> from Philadelphia.
                <br />
                He has <b>14 million monthly listeners</b> and has released several popular albums.
            </React.Fragment>
        )
    },
    {
        name: "Teller",
        img: TellerImage,
        description: (
            <React.Fragment>
                Raymond Joseph <b>Teller</b> born in 1948 is a <b>magician, actor, and director</b> from Philadelphia.
                <br />
                As a teenager, he attended <b>Central High School</b>.
                <br />
                He co-hosts the famous magic competition show <b>Penn and Teller</b> and has appeared on <b>The Big Bang Theory</b>.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Teller is a famous Philadelphian <b>magician</b>.
                <br />
                He co-hosts <b>Penn and Teller</b> and has appeared a on a few TV shows.
            </React.Fragment>
        )
    },
    {
        name: "Grace Kelly",
        img: GraceKellyImage,
        description: (
            <React.Fragment>
                Grace Kelly was a <b>famous actress</b> born in Philadelphia, 1929. She performed in many movies and TV shows, and made her <b>Broadway</b> debut on 1949.
                <br />
                In 1956, she married into a royal family, and became the <b>princess of Monaco</b>.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Grace Kelly is a <b>famous actress</b> from Philadelphia. She has performed on Broadway.
                <br />
                In 1956, she married the prince of Monaco and became the <b>princess of Monaco</b>.
            </React.Fragment>
        )
    },
    {
        name: "Rob McElhenney",
        img: RobMcElhenneyImage,
        description: (
            <React.Fragment>
                Rob McElhenney is a <b>famous actor and writer</b> from Philadelphia.
                <br />
                He was born in 1977 and attended Saint Joseph's Preparatory School.
                <br />
                He stars in and writes for <b>It's Always Sunny in Philadelphia</b>. Additionally, he was in <b>Game of Thrones</b>, <b>Lost</b>, and <b>Law & Order</b>.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Rob McElhenney is a <b>famous actor and writer</b> from Philly.
                <br />
                He stars and writes for <b>It's Always Sunny in Philadelphia</b> and was in <b>Game of Thrones</b>, <b>Lost</b>, and <b>Law & Order</b>.
            </React.Fragment>
        )
    },
    {
        name: "Noam Chomsky",
        img: NoamChomskyImage,
        description: (
            <React.Fragment>
                Avram Noam Chomsky is a <b>linguist, philosopher, and scientist</b> from Philadelphia. He was born in 1928, and attended the University of Pennsylvania as a college student.
                <br />
                He pioneered the field of linguistics and is commonly considered the <b>"father of modern linguistics"</b>.
            </React.Fragment>
        ),
        abridged: (
            <React.Fragment>
                Noam Chomsky is a <b>linguist, philosopher, and scientist</b> from Philadelphia.
                <br />
                He attended the University of Pennsylvania and is widely considered to be the <b>"father of modern linguistics"</b>.
            </React.Fragment>
        )
    }
]

// EXPORTS

export { PersonContentItem, peopleContentData }