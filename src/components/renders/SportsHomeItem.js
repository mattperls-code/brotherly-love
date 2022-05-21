// IMPORTS

import React from "react"

import FilteredImage from "../stylistic/FilteredImage"

import EaglesImage from "../../assets/images/sports/home/eagles.png"
import SixersImage from "../../assets/images/sports/home/sixers.png"
import PhilliesImage from "../../assets/images/sports/home/phillies.png"
import FlyersImage from "../../assets/images/sports/home/flyers.png"
import UnionImage from "../../assets/images/sports/home/union.png"

// COMPONENTS

const SportsHomeItem = (item, index) => {
    return (
        <FilteredImage className={"wideframe-image"} src={item} alt={"Philadelphia Sports Team"} key={index} filters={{
            brightness: 85,
            saturate: 150,
            contrast: 120
        }} />
    )
}

const sportsHomeData = [
    EaglesImage,
    SixersImage,
    PhilliesImage,
    FlyersImage,
    UnionImage
]

// EXPORTS

export { SportsHomeItem, sportsHomeData }