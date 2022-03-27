import React, { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import WireframeImage from "../assets/images/wireframe.png"

const TopBar = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handler = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handler)

        return () => window.removeEventListener("resize", handler)
    }, [])

    return (
        <header>
            <Link className={"top-bar-option"} to={"/"}>
                <img className={"top-bar-logo"} src={WireframeImage} alt={"Brotherly Love Logo Portal"} />
            </Link>
            {
                width > 600 ? (
                    <React.Fragment>
                        <Link className={"top-bar-option option-hover"} to={"/places"}>
                            <label>Places</label>
                            <aside>
                                <img width={300} height={200} src={WireframeImage} alt={"Places Page Preview"} />
                            </aside>
                        </Link>
                        <Link className={"top-bar-option option-hover"} to={"/people"}>
                            <label>People</label>
                            <aside>
                                <img width={300} height={200} src={WireframeImage} alt={"People Page Preview"} />
                            </aside>
                        </Link>
                        <Link className={"top-bar-option option-hover"} to={"/culture"}>
                            <label>Culture</label>
                            <aside>
                                <img width={300} height={200} src={WireframeImage} alt={"Culture Page Preview"} />
                            </aside>
                        </Link>
                        <Link className={"top-bar-option option-hover"} to={"/sports"}>
                            <label>Sports</label>
                            <aside>
                                <img width={300} height={200} src={WireframeImage} alt={"Sports Page Preview"} />
                            </aside>
                        </Link>
                        <Link className={"top-bar-option option-hover"} to={"/about"}>
                            <label>About</label>
                            <aside>
                                <img width={300} height={200} src={WireframeImage} alt={"About Page Preview"} />
                            </aside>
                        </Link>
                    </React.Fragment>
                ) : (
                    // TODO: hamburger nav icon and fullscreen dropdown menu
                    null
                )
            }
        </header>
    )
}

export default TopBar