import React from 'react'
import "./button.scss"

export default function Button(props) {
    return (
        <div>
            <button style={props.style} className={`button ${props.className}`}>
                <img src={props.icon} style={{ paddingRight: "10px" }} />
                {` ${props.text}`}
            </button>
        </div>
    )
}
