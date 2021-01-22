import React from "react"
import "./pricetag.scss"

export default function Pricetag(props) {
  return (
    <div style={props.style} className={`price-tag ${props.className}`}>
      <h4>{props.price}</h4>
    </div>
  )
}
