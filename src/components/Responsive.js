import { useEffect, useState } from "react"

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

export default Responsive