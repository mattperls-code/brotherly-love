// IMPORTS

import React from "react"

import Responsive from "../structural/Responsive"

import FilteredImage from "../stylistic/FilteredImage"

import KobeBryantImage from "../../assets/images/people/home/kobeBryant.png"
import WillSmithImage from "../../assets/images/people/home/willSmith.png"
import KevinHartImage from "../../assets/images/people/home/kevinHart.png"

// COMPONENTS

const PersonHomeImageItem = ({ src, name }) => {
    return (
        <FilteredImage className={"picture"} src={src} alt={name} filters={{
            brightness: 80,
            saturate: 150,
            contrast: 120
        }} />
    )
}

const personHomeImageData = [
    {
        src: KobeBryantImage,
        name: "Kobe Bryant"
    },
    {
        src: WillSmithImage,
        name: "Will Smith"
    },
    {
        src: KevinHartImage,
        name: "Kevin Hart"
    }
]

const PersonHomeInfoItem = ({ name, description, abridged }) => {
    return (
        <div className={"info-container"}>
            <h3>
                {
                    name
                }
            </h3>
            <div className={"info"}>
                <Responsive render={({ width }) => {
                    return (width > 700) ? description : abridged
                }} />
            </div>
        </div>
    )
}

const personHomeInfoData = [
    {
        name: "Kobe Bryant",
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
    }
]

// EXPORTS

export { PersonHomeImageItem, personHomeImageData, PersonHomeInfoItem, personHomeInfoData }