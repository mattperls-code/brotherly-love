import React, { useState, useEffect } from "react"

const HorizontalRevolver = ({ itemData, render, direction, focusTime }) => {
    const [index, setIndex] = useState(0)
    const [frontIndex, setFrontIndex] = useState(0)
    const [backIndex, setBackIndex] = useState(1)

    const [rotation, setRotation] = useState(0)

    const [triggerRevolve, setTriggerRevolve] = useState(false)

    useEffect(() => {
        let isMounted = true

        window.setTimeout(() => {
            if(isMounted){
                setTriggerRevolve(true)
            }
        }, focusTime)

        return () => { isMounted = false }
    }, [])

    useEffect(() => {
        let isMounted = true

        if(triggerRevolve){
            setTriggerRevolve(false)

            setIndex(index + 1)
            setRotation(rotation + 180 * (direction == "left" ? 1 : -1))

            window.setTimeout(() => {
                if(isMounted){
                    if(index % 2 == 0){
                        setFrontIndex((frontIndex + 2) % itemData.length)
                    } else {
                        setBackIndex((backIndex + 2) % itemData.length)
                    }
    
                    window.setTimeout(() => {
                        if(isMounted){
                            setTriggerRevolve(true)
                        }
                    }, focusTime)
                }
            }, 1000)
        }

        return () => { isMounted = false }
    }, [triggerRevolve])

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
    const [index, setIndex] = useState(0)
    const [frontIndex, setFrontIndex] = useState(0)
    const [backIndex, setBackIndex] = useState(1)

    const [rotation, setRotation] = useState(0)

    const [triggerRevolve, setTriggerRevolve] = useState(false)

    useEffect(() => {
        let isMounted = true

        window.setTimeout(() => {
            if(isMounted){
                setTriggerRevolve(true)
            }
        }, focusTime)

        return () => { isMounted = false }
    }, [])

    useEffect(() => {
        let isMounted = true

        if(triggerRevolve){
            setTriggerRevolve(false)

            setIndex(index + 1)
            setRotation(rotation - 180)

            window.setTimeout(() => {
                if(isMounted){
                    if(index % 2 == 0){
                        setFrontIndex((frontIndex + 2) % itemData.length)
                    } else {
                        setBackIndex((backIndex + 2) % itemData.length)
                    }
    
                    window.setTimeout(() => {
                        if(isMounted){
                            setTriggerRevolve(true)
                        }
                    }, focusTime)
                }
            }, 1000)
        }

        return () => { isMounted = false }
    }, [triggerRevolve])

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

export { HorizontalRevolver, VerticalRevolver }