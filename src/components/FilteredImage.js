import React from "react"

const FilteredImage = ({ className, src, alt, filters }) => {
    let filter = ""
    if(typeof filters == "object"){
        Object.entries(filters).forEach((entry) => {
            filter += `${entry[0]}(${entry[1]}%) `
        })
        filter = filter.trim()
    }
    
    return (
        <img className={className} style={{ filter, WebkitFilter: filter }} src={src} alt={alt} />
    )
}

export default FilteredImage