// IMPORTS

import React from "react"

import Tilty from "react-tilty"

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
        name: "Art Museum",
        img: "https://picsum.photos/1600/600",
        description: "It's a museum"
    },
    {
        name: "Art Museum",
        img: "https://picsum.photos/1600/600",
        description: "It's a museum"
    },
    {
        name: "Art Museum",
        img: "https://picsum.photos/1600/600",
        description: "It's a museum"
    },
    {
        name: "Art Museum",
        img: "https://picsum.photos/1600/600",
        description: "It's a museum"
    }
]

// EXPORTS

export { PlaceContentItem, placesContentData }