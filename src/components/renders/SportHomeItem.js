// IMPORTS

import React from "react"

import FilteredImage from "../stylistic/FilteredImage"

import EaglesImage from "../../assets/images/sports/home/eagles.png"
import SixersImage from "../../assets/images/sports/home/sixers.png"
import UnionImage from "../../assets/images/sports/home/union.png"
import PhilliesImage from "../../assets/images/sports/home/phillies.png"
import FlyersImage from "../../assets/images/sports/home/flyers.png"

// COMPONENTS

const SportHomeItem = (item, index) => {
    return (
        <FilteredImage className={"wideframe-image"} src={item} alt={"Philadelphia Sports Team"} key={index} filters={{
            brightness: 85,
            saturate: 150,
            contrast: 120
        }} />
    )
}

const sportHomeData = [
    EaglesImage,
    SixersImage,
    UnionImage,
    PhilliesImage,
    FlyersImage
]

// EXPORTS

export { SportHomeItem, sportHomeData }