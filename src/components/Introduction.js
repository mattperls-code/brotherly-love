import React from "react"

import Responsive from "./Responsive"

const Introduction = ({ children, title }) => {
    return (
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

export default Introduction