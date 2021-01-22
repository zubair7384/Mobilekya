import React from 'react'
import Eye from "../../assets/svgs/eye-icon.svg"
import "./viewspec.scss"

export default function Viewspec() {
    return (
        <div className="viewspec">
            <img src={Eye} alt="eye" />
            <p>view specs</p>
        </div>
    )
}
