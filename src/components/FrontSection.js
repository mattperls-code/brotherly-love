import React from "react"

import TopBar from "./TopBar"

const FrontSection = ({ current, clip, children }) => {
    return (
        <section>
            <TopBar current={current} />
            <div style={{ overflowY: clip ? "hidden" : "scroll" }} className={"front-section"}>
                {
                    children
                }
            </div>
        </section>
    )
}

export default FrontSection