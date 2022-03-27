import React, { useRef, useEffect, useState } from "react"

const HorizontalFade = ({ verticalFocus, verticalBoundPadding, direction, children }) => {
    const ref = useRef()

    const [active, setActive] = useState(false)

    const handler = () => {
        const boundingBox = ref.current.getBoundingClientRect()
        const y = 0.5 * boundingBox.top + 0.5 * boundingBox.bottom
        setActive(
            y < verticalFocus + verticalBoundPadding &&
            y > verticalFocus - verticalBoundPadding
        )
    }
    useEffect(() => {
        window.addEventListener("scroll", handler)

        return () => window.removeEventListener("scroll", handler)
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
    const ref = useRef()

    const [active, setActive] = useState(false)

    const handler = () => {
        const boundingBox = ref.current.getBoundingClientRect()
        setActive(boundingBox.bottom < verticalFocus)
    }

    useEffect(() => {
        window.addEventListener("scroll", handler)

        return () => window.removeEventListener("scroll", handler)
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

export { HorizontalFade, VerticalFade }