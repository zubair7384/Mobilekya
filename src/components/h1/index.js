import React from 'react'
import "./h1.scss"

export default function H1({ text }) {
    return (
        <div>
            <h1 className="heading-one">{text}</h1>
        </div>
    )
}
