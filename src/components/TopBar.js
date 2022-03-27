import React from "react"

import { Link } from "react-router-dom"

import WireframeImage from "../assets/images/wireframe.png"

const TopBar = ({ currentPage }) => {
    return (
        <header>
            <Link className={"top-bar-option"} to={"/"}>
                <img className={"top-bar-logo"} src={WireframeImage} alt={"Brotherly Love Logo Portal"} />
            </Link>
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
        </header>
    )
}

export default TopBar