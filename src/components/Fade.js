import React, { useRef, useEffect, useState } from "react"

const Fade = ({ verticalFocus, verticalBoundPadding, direction, children }) => {
    const ref = useRef()

    const [active, setActive] = useState(false)

    const scrollHandler = () => {
        const boundingBox = ref.current.getBoundingClientRect()
        const y = 0.5 * boundingBox.top + 0.5 * boundingBox.bottom
        setActive(
            y < verticalFocus + verticalBoundPadding &&
            y > verticalFocus - verticalBoundPadding
        )
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)
    })

    return (
        <div ref={ref} className={"fade-container"}>
            <div className={active ? "fade-active" : `fade-${direction}-inactive`}>
                {
                    children
                }
            </div>
        </div>
    )
}

export default Fade