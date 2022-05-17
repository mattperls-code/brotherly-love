// IMPORTS

import React from "react"

import Responsive from "./Responsive"

import { VerticalFade } from "../stylistic/Fade"

// COMPONENTS

const Introduction = ({ children, title, fadeIn }) => {
    return fadeIn ? (
        <Responsive render={({ width, height }) => {
            // Responds to changes in screen height so fade trigger changes dynamically
            return (
                <VerticalFade verticalFocus={height + 100}>
                    <div className={"introduction-container"}>
                        {
                            // Render title conditionally depending on screen width and render children regardless
                        }
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
                </VerticalFade>
            )
        }} />
    ) : (
        <Responsive render={({ width }) => {
            return (
                <div className={"introduction-container"}>
                    {
                        // Render title conditionally depending on screen width and render children regardless
                    }
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