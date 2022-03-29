import React from "react"

import Section from "./Section"
import TopBar from "./TopBar"

const FrontSection = ({ current, children }) => {
    return (
        <Section>
            <TopBar current={current} />
            <div className={"front-section"}>
                {
                    children
                }
            </div>
        </Section>
    )
}

export default FrontSection