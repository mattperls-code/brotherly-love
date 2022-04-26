import React from "react"

import TopBar from "./TopBar"

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

export default FrontSection