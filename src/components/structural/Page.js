// IMPORTS

import React, { useState, useEffect } from "react"

import Responsive from "./Responsive"
import BottomBar from "./BottomBar"

import Particles from "../stylistic/Particles"

// COMPONENTS

const Page = ({ title, quote, quotee, focusTime, pushBottomBar, children }) => {
    const [showOverlay, setShowOverlay] = useState(true)
    const [mountOverlay, setMountOverlay] = useState(true)

    useEffect(() => {
        let isMounted = true

        document.title = `Brotherly Love - ${title}`
        
        // Disable scrolling when component mounts
        document.body.style.overflow = "hidden"

        // Show overlay for the provided focusTime, wait 0.3 seconds then reenable scrolling
        window.setTimeout(() => {
            if(isMounted){
                setShowOverlay(false)
                window.setTimeout(() => {
                    if(isMounted){
                        document.body.style.overflow = "visible"
                        setMountOverlay(false)
                    }
                }, 300)
            }
        }, focusTime)

        // Prevent memory leak from state change to unmounted component
        return () => { isMounted = false }
    }, [])

    return (
        <React.Fragment>
            {
                children
            }
            {
                // Responds to changes in screen width so bottom bar can be shifted left conditionally
            }
            <Responsive render={({ width }) => {
                return (
                    <BottomBar leftOffset={(pushBottomBar && width > 900) ? 300 : 0} />
                )
            }} />
            {
                mountOverlay && (
                    <div className={"overlay-wrapper"}>
                        <div className={showOverlay ? "overlay-container show" : "overlay-container hide"}>
                            <div className={"overlay-background"}>
                                <h1>
                                    {
                                        title
                                    }
                                </h1>
                                <div className={"quote"}>
                                    {
                                        quote
                                    }
                                </div>
                                <div className={"quotee"}>
                                    {
                                        "- " + quotee
                                    }
                                </div>
                            </div>
                            <Particles count={30} height={window.innerHeight} />
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
}

// EXPORTS

export default Page