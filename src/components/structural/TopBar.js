// IMPORTS

import React, { useState } from "react"

import Responsive from "./Responsive"

import { Link } from "react-router-dom"
import Tilty from "react-tilty"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

import LogoImage from "../../assets/images/logo.png"

// COMPONENTS

const TopBar = ({ current }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <Responsive render={({ width }) => {
            return (
                <React.Fragment>
                    <nav>
                        <Tilty max={40} perspective={200}>
                            <Link className={"top-bar-option"} to={"/"}>
                                <img className={"top-bar-logo"} src={LogoImage} alt={"Brotherly Love Logo Portal"} />
                            </Link>
                        </Tilty>
                        {
                            width > 600 ? (
                                <React.Fragment>
                                    <Link className={"top-bar-option option-hover" + (current == "Home" ? " current" : "")} to={"/"}>
                                        <label>
                                            Home
                                            <div className={"animated-underline-container"}><div className={"animated-underline-bar"} /></div>
                                        </label>
                                    </Link>
                                    <Link className={"top-bar-option option-hover" + (current == "Places" ? " current" : "")} to={"/places"}>
                                        <label>
                                            Places
                                            <div className={"animated-underline-container"}><div className={"animated-underline-bar"} /></div>
                                        </label>
                                    </Link>
                                    <Link className={"top-bar-option option-hover" + (current == "People" ? " current" : "")} to={"/people"}>
                                        <label>People</label>
                                        <div className={"animated-underline-container"}><div className={"animated-underline-bar"} /></div>
                                    </Link>
                                    <Link className={"top-bar-option option-hover" + (current == "Sports" ? " current" : "")} to={"/sports"}>
                                        <label>Sports</label>
                                        <div className={"animated-underline-container"}><div className={"animated-underline-bar"} /></div>
                                    </Link>
                                    <Link className={"top-bar-option option-hover" + (current == "About" ? " current" : "")} to={"/about"}>
                                        <label>About</label>
                                        <div className={"animated-underline-container"}><div className={"animated-underline-bar"} /></div>
                                    </Link>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <h1>
                                        {
                                            current
                                        }
                                    </h1>
                                    <div className={"top-bar-option option-hover menu-button"} onClick={() => {
                                        setShowMobileMenu(!showMobileMenu)
                                    }}>
                                        <label>
                                            <FontAwesomeIcon icon={showMobileMenu ? faXmark : faBars} />
                                        </label>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    </nav>
                    {
                        width <= 600 && showMobileMenu && (
                            <React.Fragment>
                                <Link className={"nav-menu-option" + (current == "Home" ? " current" : "")} to={"/"}>
                                    <label>Home</label>
                                </Link>
                                <Link className={"nav-menu-option" + (current == "Places" ? " current" : "")} to={"/places"}>
                                    <label>Places</label>
                                </Link>
                                <Link className={"nav-menu-option" + (current == "People" ? " current" : "")} to={"/people"}>
                                    <label>People</label>
                                </Link>
                                <Link className={"nav-menu-option" + (current == "Sports" ? " current" : "")} to={"/sports"}>
                                    <label>Sports</label>
                                </Link>
                                <Link className={"nav-menu-option" + (current == "About" ? " current" : "")} to={"/about"}>
                                    <label>About</label>
                                </Link>
                            </React.Fragment>
                        )
                    }
                </React.Fragment>
            )
        }} />
    )
}

// EXPORTS

export default TopBar