import React from "react"

import Section from "./Section"
import TopBar from "./TopBar"

const FrontSection = ({ currentPage, children }) => {
    return (
        <Section>
            <TopBar currentPage={currentPage} />
            <div className={"front-section"}>
                {
                    children
                }
            </div>
        </Section>
    )
}

export default FrontSection