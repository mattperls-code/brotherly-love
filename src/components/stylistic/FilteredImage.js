// IMPORTS

import React from "react"

// COMPONENTS

const FilteredImage = ({ className, src, alt, filters, onClick }) => {
    let filter = ""
    if(typeof filters == "object"){
        Object.entries(filters).forEach((entry) => {
            filter += `${entry[0]}(${entry[1]}%) `
        })
        filter = filter.trim()
    }
    
    return (
        <img className={className} style={{ filter, WebkitFilter: filter }} src={src} alt={alt} onClick={() => {
            if(typeof onClick == "function"){
                onClick()
            }
        }} />
    )
}

// EXPORTS

export default FilteredImage