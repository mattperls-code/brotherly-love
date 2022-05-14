// IMPORTS

import React, { useRef, useEffect, useLayoutEffect, useState } from "react"

// COMPONENTS

const HorizontalFade = ({ verticalFocus, direction, children }) => {
    // Reference to the fade bounding box so its position can be tracked
    const ref = useRef()

    const [active, setActive] = useState(false)

    // If the bottom of the fade bounding box is below the provided focus height, hide it
    const handler = () => {
        const boundingBox = ref.current.getBoundingClientRect()
        setActive(boundingBox.bottom < verticalFocus)
    }

    // On initial page render, hide if out of view
    useLayoutEffect(handler, [])

    useEffect(() => {
        window.addEventListener("scroll", handler)

        // Prevent memory leak from unclosed listener
        return () => { window.removeEventListener("scroll", handler) }
    }, [])

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

const VerticalFade = ({ verticalFocus, children }) => {
    // Reference to the fade bounding box so its position can be tracked
    const ref = useRef()

    // If the bottom of the fade bounding box is below the provided focus height, hide it
    const [active, setActive] = useState(false)

    const handler = () => {
        const boundingBox = ref.current.getBoundingClientRect()
        setActive(boundingBox.bottom < verticalFocus)
    }

    // On initial page render, hide if out of view
    useLayoutEffect(handler, [])

    useEffect(() => {
        window.addEventListener("scroll", handler)

        // Prevent memory leak from unclosed listener
        return () => { window.removeEventListener("scroll", handler) }
    }, [])

    return (
        <div ref={ref} className={"fade-container"}>
            <div className={active ? "fade-active" : "fade-vertical-inactive"}>
                {
                    children
                }
            </div>
        </div>
    )
}

// EXPORTS

export { HorizontalFade, VerticalFade }