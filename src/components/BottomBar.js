import React from "react"

import { Link } from "react-router-dom"

const BottomBar = () => {
    return (
        <footer>
            <Link className={"bottom-bar-option"} to={"mailto:mattperls.code@gmail.com"}>
                <div className={"bottom-bar-icon"}>ig logo</div>
                <label>Instagram</label>
            </Link>
            <Link className={"bottom-bar-option"} to={"https://github.com/mattperls-code"}>
                <div className={"bottom-bar-icon"}>gh logo</div>
                <label>Github</label>
            </Link>
            <Link className={"bottom-bar-option"} to={"https://www.instagram.com/mattperls.code"}>
                <div className={"bottom-bar-icon"}>email logo</div>
                <label>Email</label>
            </Link>
        </footer>
    )
}

export default BottomBar