// IMPORTS

import React from "react"

import FilteredImage from "../stylistic/FilteredImage"

import Image1 from "../../assets/images/places/home/image1.png"
import Image2 from "../../assets/images/places/home/image2.png"
import Image3 from "../../assets/images/places/home/image3.png"

// COMPONENTS

const PlaceHomeItem = (item, index) => {
    return (
        <FilteredImage className={"wideframe-image city"} src={item} alt={"Philadelphia Skyline"} key={index} filters={{
            brightness: 70,
            saturate: 150,
            contrast: 150
        }} />
    )
}

const placesHomeData = [
    Image1,
    Image2,
    Image3
]

// EXPORTS

export { PlaceHomeItem, placesHomeData }