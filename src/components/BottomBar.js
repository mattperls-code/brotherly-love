import React from "react"

const BottomBar = () => {
    return (
        <footer>
            <a className={"bottom-bar-option"} href={"mailto:mattperls.code@gmail.com"} target={"_blank"}>
                <div className={"bottom-bar-icon"}>ig logo</div>
                <label>Instagram</label>
            </a>
            <a className={"bottom-bar-option"} href={"https://github.com/mattperls-code"} target={"_blank"}>
                <div className={"bottom-bar-icon"}>gh logo</div>
                <label>Github</label>
            </a>
            <a className={"bottom-bar-option"} href={"https://www.instagram.com/mattperls.code"} target={"_blank"}>
                <div className={"bottom-bar-icon"}>email logo</div>
                <label>Email</label>
            </a>
        </footer>
    )
}

export default BottomBar