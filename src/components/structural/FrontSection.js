// IMPORTS

import React from "react"

import TopBar from "./TopBar"

// COMPONENTS

const FrontSection = ({ current, children }) => {
    return (
        <section>
            <TopBar current={current} />
            <div className={"front-section"}>
                {
                    children
                }
            </div>
        </section>
    )
}

// EXPORTS

export default FrontSection