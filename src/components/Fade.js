import React, { useRef, useEffect, useLayoutEffect, useState } from "react"

const HorizontalFade = ({ verticalFocus, direction, children }) => {
    const ref = useRef()

    const [active, setActive] = useState(false)

    const handler = () => {
        const boundingBox = ref.current.getBoundingClientRect()
        setActive(boundingBox.bottom < verticalFocus)
    }

    useLayoutEffect(handler, [])

    useEffect(() => {
        let isMounted = true

        window.addEventListener("scroll", () => {
            if(isMounted){
                handler()
            }
        })

        return () => { isMounted = false }
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

    useLayoutEffect(handler, [])

    useEffect(() => {
        let isMounted = true

        window.addEventListener("scroll", () => {
            if(isMounted){
                handler()
            }
        })
        
        return () => { isMounted = false }
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