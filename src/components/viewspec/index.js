import React from "react"
import Eye from "../../assets/svgs/eye-icon.svg"
import "./viewspec.scss"

export default function Viewspec(props) {
  return (
    <div className="viewspec">
      <img src={Eye} alt="eye" />
      <p>{props.eyeTitle}</p>
    </div>
  )
}
