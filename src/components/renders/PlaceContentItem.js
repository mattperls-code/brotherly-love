// IMPORTS

import React from "react"

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
import LoveParkImage from "../../assets/images/places/content/lovePark.png"
import SouthStreetImage from "../../assets/images/places/content/southStreet.png"

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
                <label>
                    {
                        description
                    }
                </label>
            </Tilty>
        </article>
    )
}

const placesContentData = [
    {
        name: "The Art Museum",
        img: TheArtMuseumImage,
        description: "It's a museum"
    },
    {
        name: "The Liberty Bell",
        img: TheLibertyBellImage,
        description: "It's a historical site"
    },
    {
        name: "The Franklin Institute",
        img: TheFranklinInstituteImage,
        description: "It's a museum"
    },
    {
        name: "Independence Hall",
        img: IndependenceHallImage,
        description: "It's a historical site"
    },
    {
        name: "University of Pennsylvania",
        img: UniversityOfPennsylvaniaImage,
        description: "It's a college"
    },
    {
        name: "The Philadelphia Zoo",
        img: ThePhiladelphiaZooImage,
        description: "It's a zoo"
    },
    {
        name: "Eastern State Penitentiary",
        img: EasternStatePenitentiaryImage,
        description: "It's a cool place"
    },
    {
        name: "Magic Gardens",
        img: MagicGardensImage,
        description: "It's a cool place"
    },
    {
        name: "The Barnes Foundation",
        img: TheBarnesFoundationImage,
        description: "It's a museum"
    },
    {
        name: "Love Park",
        img: LoveParkImage,
        description: "It's a park"
    },
    {
        name: "South Street",
        img: SouthStreetImage,
        description: "It's a cool place"
    }
]

// EXPORTS

export { PlaceContentItem, placesContentData }