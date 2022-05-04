// IMPORTS

import React from "react"

import Responsive from "../structural/Responsive"

import Tilty from "react-tilty"

import TheArtMuseumImage from "../../assets/images/places/content/theArtMuseum.png"
import TheLibertyBellImage from "../../assets/images/places/content/theLibertyBell.png"
import TheFranklinInstituteImage from "../../assets/images/places/content/theFranklinInstitute.png"
import IndependenceHallImage from "../../assets/images/places/content/independenceHall.png"
import UniversityOfPennsylvaniaImage from "../../assets/images/places/content/universityOfPennsylvania.png"
import ThePhiladelphiaZooImage from "../../assets/images/places/content/thePhiladelphiaZoo.png"
import EasternStatePenitentiaryImage from "../../assets/images/places/content/easternStatePenitentiary.png"
import MagicGardensImage from "../../assets/images/places/content/magicGardens.png"
import TheBarnesFoundationImage from "../../assets/images/places/content/theBarnesFoundation.png"

// COMPONENTS

const PlaceContentItem = ({ name, img, description }, index) => {
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
                <Responsive render={({ width }) => {
                    return (width > 1000) && (
                        <div className={"description-wrapper"}>
                            <label>
                                {
                                    description
                                }
                            </label>
                        </div>
                    )
                }} />
            </Tilty>
        </article>
    )
}

const placesContentData = [
    {
        name: "The Art Museum",
        img: TheArtMuseumImage,
        description: (
            <React.Fragment>
                Originally built in <b>1928</b>, The Philadelphia Art Museum is a classic of the city.
                <br />
                <br />
                It houses over <b>240,000 pieces</b>, some dating back thousands of years.
                <br />
                It has pieces from many famous artists on display:
                <ul>
                    <li>Pablo Picasso</li>
                    <li>Diego Rivera</li>
                    <li>Andy Warhol</li>
                    <li>Claude Monet</li>
                    <li>Georgia O'Keeffe</li>
                    <li>Pierre-Auguste Renoir</li>
                </ul>
            </React.Fragment>
        )
    },
    {
        name: "The Liberty Bell",
        img: TheLibertyBellImage,
        description: (
            <React.Fragment>
                The Liberty Bell is one of America's most <b>famous historical sites</b>.
                <br />
                <br />
                Created in <b>1752</b>, it is a <b>symbol of American freedom</b> and a relic of out country's founders.
                <br />
                It is a must-see for tourists in the city and those interested in American history.
            </React.Fragment>
        )
    },
    {
        name: "The Franklin Institute",
        img: TheFranklinInstituteImage,
        description: (
            <React.Fragment>
                Created in <b>1825</b>, the Franklin institute is a fascinating science museum.
                <br />
                <br />
                Because of its <b>incredible exhibits</b> and <b>hands-on style</b>, a day at the Franklin institute is the perfect school field trip or family outing.
                <br />
                <br />
                A few of its permanent exhibits are:
                <ul>
                    <li>The Heart</li>
                    <li>The Franklin Air Show</li>
                    <li>Sir Isaac's Loft</li>
                    <li>Electricity</li>
                </ul>
                These one of a kind displays along with their temporary exhibits are worth the visit.
            </React.Fragment>
        )
    },
    {
        name: "Independence Hall",
        img: IndependenceHallImage,
        description: (
            <React.Fragment>
                Independence Hall is where <b>America's founding fathers</b> created, debated, and signed <b>The U.S. Constitution</b> in 1776.
                <br />
                <br />
                For anyone with an interest in U.S. history, there is no better place to visit.
                <br />
                When touring this site, expert guides walk you through the various floors where you can explore the same areas the founding fathers worked.
            </React.Fragment>
        )
    },
    {
        name: "University of Pennsylvania",
        img: UniversityOfPennsylvaniaImage,
        description: (
            <React.Fragment>
                One of only 8 <b>Ivy League</b> schools, The University of Pennsylvania is a world-renowned college.
                <br />
                <br />
                Penn's incredible schooling attracts many <b>students and businesses</b> to the area, contributing to the thriving campus and surrounding community.
            </React.Fragment>
        )
    },
    {
        name: "The Philadelphia Zoo",
        img: ThePhiladelphiaZooImage,
        description: (
            <React.Fragment>
                Founded in <b>1874</b>, The Philadelphia Zoo makes a great family weekend or school trip.
                <br />
                <br />
                There are over a thousand animals to see, including:
                <ul>
                    <li>Polar Bears</li>
                    <li>Big Cats</li>
                    <li>Monkeys and Gorillas</li>
                    <li>Elephants</li>
                    <li>Rhinos</li>
                </ul>
            </React.Fragment>
        )
    },
    {
        name: "Eastern State Penitentiary",
        img: EasternStatePenitentiaryImage,
        description: (
            <React.Fragment>
                Eastern State Penitentiary is a classic Philly <b>Halloween destination</b>.
                <br />
                <br />
                It was <b>a real prison from 1829 until 1971</b>, but now it serves as a spooky attraction where they run their signature <b>Terror Behind The Walls</b> program every Halloween.
            </React.Fragment>
        )
    },
    {
        name: "Magic Gardens",
        img: MagicGardensImage,
        description: (
            <React.Fragment>
                Magic Gardens is a one of a kind art gallery that brings to life <b>Philadelphia's creativity</b>.
                <br />
                <br />
                Created by Isaiah Zagar, the gallery is <b>a free form collection of mosaics</b> created to reflect the beauty he saw in his neighborhood.
                <br />
                <br />
                When Isaiah first started his art their and the owner wanted it removed, the community rallied around him and Magic Gardens developed into a nonprofit organization dedicated to preserving the art.
            </React.Fragment>
        )
    },
    {
        name: "The Barnes Foundation",
        img: TheBarnesFoundationImage,
        description: (
            <React.Fragment>
                The Barnes Foundation, created in 1922, is a <b>beautiful collection of artwork</b> in Philadelphia.
                <br />
                <br />
                Guests can see famous works from artists like
                <ul>
                    <li>Pierre-Auguste Renoir</li>
                    <li>Pablo Picasso</li>
                    <li>Vincent Van Gogh</li>
                    <li>Henri Matisse</li>
                </ul>
                They also teach a variety of classes at the Barnes Museum.
            </React.Fragment>
        )
    }
]

// EXPORTS

export { PlaceContentItem, placesContentData }