import React from "react"

const Page = ({ title, children }) => {
    document.title = `Brotherly Love - ${title}`

    return children
}

export default Page