import React from 'react'
import "./label.scss"

export default function Label() {
    return (
        <div className="container-label">
            {
                [
                    "Xiaomi",
                    "Realmi",
                    "Oppo",
                    "Nokia",
                    "Samsung",
                    "Apple",
                    "Huawei",
                    "Vivo",
                    "Oneplus",
                    "Infinix",
                    "Leveno",
                    "Sony",
                    "Alcatel",
                    "Qmobile",
                    "Techno",
                    "Haier",
                    "Motorola",
                    "Honor",
                ].map((i, index) => {
                    return <div className="label" key={index}>{i}</div>
                })
            }
        </div>
    )
}
