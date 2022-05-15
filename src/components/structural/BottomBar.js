// IMPORTS

import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

// COMPONENTS

const BottomBar = ({ leftOffset }) => {
    return (
        <footer style={{ paddingLeft: leftOffset, width: `calc(100vw - ${leftOffset})px` }}>
            <div className={"links"}>
                <a className={"bottom-bar-option"} href={"https://www.instagram.com/mattperls.code"} target={"_blank"}>
                    <div className={"bottom-bar-icon"}>
                        <FontAwesomeIcon icon={faInstagram} className={"icon-svg"} />
                    </div>
                </a>
                <a className={"bottom-bar-option"} href={"https://github.com/mattperls-code"} target={"_blank"}>
                    <div className={"bottom-bar-icon"}>
                        <FontAwesomeIcon icon={faGithub} className={"icon-svg"} />
                    </div>
                </a>
                <a className={"bottom-bar-option"} href={"mailto:mattperls.code@gmail.com"} target={"_blank"}>
                    <div className={"bottom-bar-icon"}>
                        <FontAwesomeIcon icon={faEnvelope} className={"icon-svg"} />
                    </div>
                </a>
            </div>
            <label>Matthew Perlman © 2022<div className={"animated-underline-container"}><div className={"animated-underline-bar"} /></div></label>
        </footer>
    )
}

// EXPORTS

export default BottomBar