// IMPORTS

import React, { useState, useEffect } from "react"

// COMPONENTS

const HorizontalRevolver = ({ itemData, render, direction, focusTime }) => {
    // Overall item index, used functionally as opposed to the revolutions state that stores similar information
    const [index, setIndex] = useState(0)
    // Index of item being rendered on the first side
    const [frontIndex, setFrontIndex] = useState(0)
    // Index of item being rendered on the back side
    const [backIndex, setBackIndex] = useState(1)

    // Rotation of the entire revolver
    const [rotation, setRotation] = useState(0)

    // Number of revolutions, exclusively used as a trigger
    const [revolutions, setRevolutions] = useState(0)

    useEffect(() => {
        let isMounted = true

        setTimeout(() => {
            if(isMounted){
                setRevolutions(revolutions + 1)
            }
        }, focusTime)

        // Prevent memory leak from state change to unmounted component
        return () => { isMounted = false }
    }, [])

    useEffect(() => {
        let isMounted = true

        if(revolutions != 0){
            setIndex(index + 1)
            setRotation(rotation + 180 * (direction == "left" ? 1 : -1))

            window.setTimeout(() => {
                if(isMounted){
                    // Update front or back image while it is not being rendered, allows for seamless infinite rotations
                    if(index % 2 == 0){
                        setFrontIndex((frontIndex + 2) % itemData.length)
                    } else {
                        setBackIndex((backIndex + 2) % itemData.length)
                    }

                    // Trigger another revolution after waiting the provided focusTime
                    window.setTimeout(() => {
                        if(isMounted){
                            setRevolutions(revolutions + 1)
                        }
                    }, focusTime)
                }
            }, 1000)
        }

        // Prevent memory leak from state change to unmounted component
        return () => { isMounted = false }
    }, [revolutions])

    return (
        <React.Fragment>
            <div style={{ transform: `rotateY(${rotation}deg)` }} className={"revolve"}>
                {
                    render(itemData[frontIndex])
                }
            </div>
            <div style={{ transform: `rotateY(${rotation + (direction == "left" ? -1 : 1) * 180}deg)` }} className={"revolve"}>
                {
                    render(itemData[backIndex])
                }
            </div>
        </React.Fragment>
    )
}

const VerticalRevolver = ({ itemData, render, focusTime }) => {
    // Overall item index, used functionally as opposed to the revolutions state that stores similar information
    const [index, setIndex] = useState(0)
    // Index of item being rendered on the first side
    const [frontIndex, setFrontIndex] = useState(0)
    // Index of item being rendered on the back side
    const [backIndex, setBackIndex] = useState(1)

    // Rotation of the entire revolver
    const [rotation, setRotation] = useState(0)

    // Number of revolutions, exclusively used as a trigger
    const [revolutions, setRevolutions] = useState(0)

    useEffect(() => {
        let isMounted = true

        window.setTimeout(() => {
            if(isMounted){
                setRevolutions(revolutions + 1)
            }
        }, focusTime)

        // Prevent memory leak from state change to unmounted component
        return () => { isMounted = false }
    }, [])

    useEffect(() => {
        let isMounted = true

        if(revolutions != 0){
            setIndex(index + 1)
            setRotation(rotation - 180)

            window.setTimeout(() => {
                if(isMounted){
                    // Update front or back image while it is not being rendered, allows for seamless infinite rotations
                    if(index % 2 == 0){
                        setFrontIndex((frontIndex + 2) % itemData.length)
                    } else {
                        setBackIndex((backIndex + 2) % itemData.length)
                    }
    
                    // Trigger another revolution after waiting the provided focusTime
                    window.setTimeout(() => {
                        if(isMounted){
                            setRevolutions(revolutions + 1)
                        }
                    }, focusTime)
                }
            }, 1000)
        }

        // Prevent memory leak from state change to unmounted component
        return () => { isMounted = false }
    }, [revolutions])

    return (
        <React.Fragment>
            <div style={{ transform: `rotateX(${rotation}deg)` }} className={"revolve"}>
                {
                    render(itemData[frontIndex])
                }
            </div>
            <div style={{ transform: `rotateX(${rotation - 180}deg)` }} className={"revolve"}>
                {
                    render(itemData[backIndex])
                }
            </div>
        </React.Fragment>
    )
}

// COMPONENTS

export { HorizontalRevolver, VerticalRevolver }