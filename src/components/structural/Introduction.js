// IMPORTS

import React from "react"

import Responsive from "./Responsive"

// COMPONENTS

const Introduction = ({ children, title }) => {
    return (
        // Render title conditionally depending on screen width and render children regardless
        <Responsive render={({ width }) => {
            return (
                <div className={"introduction-container"}>
                    {
                        width > 600 && (
                            <h1>
                                {
                                    title
                                }
                            </h1>
                        )
                    }
                    {
                        children
                    }
                </div>
            )
        }} />
    )
}

// EXPORTS

export default Introduction