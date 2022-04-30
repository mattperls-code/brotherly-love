// IMPORTS

import { useEffect, useState } from "react"

// COMPONENTS

const Responsive = ({ render }) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handler = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener("resize", handler)

        return () => window.removeEventListener("resize", handler)
    })

    return render({ width, height })
}

// EXPORTS

export default Responsive