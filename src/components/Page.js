import React, { useState, useEffect } from "react"

import Particles from "./Particles"

const Page = ({ title, quote, quotee, focusTime, children }) => {
    const [showOverlay, setShowOverlay] = useState(true)
    const [mountOverlay, setMountOverlay] = useState(true)

    useEffect(() => {
        let isMounted = true

        document.title = `Brotherly Love - ${title}`
        document.body.style.overflow = "hidden"

        window.setTimeout(() => {
            if(isMounted){
                setShowOverlay(false)
                window.setTimeout(() => {
                    if(isMounted){
                        document.body.style.overflow = "visible"
                        setMountOverlay(false)
                    }
                }, 1000)
            }
        }, focusTime)

        return () => { isMounted = false }
    }, [])

    return (
        <React.Fragment>
            {
                children
            }
            {
                mountOverlay && (
                    <div className={"overlay-wrapper"}>
                        <div className={showOverlay ? "overlay-container show" : "overlay-container hide"}>
                            <div className={"overlay-background"}>
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

export default Page