// IMPORTS

import { useEffect, useState } from "react"

// COMPONENTS

const Responsive = ({ render }) => {
    // Store screen dimensions
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handler = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener("resize", handler)

        // Prevent memory leak from unclosed listener
        return () => { window.removeEventListener("resize", handler) }
    })

    // Rerender on screen dimensions change with most recent dimensions
    return render({ width, height })
}

// EXPORTS

export default Responsive