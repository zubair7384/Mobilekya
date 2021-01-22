import React from "react"
import Viewspec from "../viewspec"
import Share from "../../assets/svgs/share.svg"
import "./postCard.scss"

function PostCard(props) {
  return (
    <div className="post-card">
      <img className="post-card-image" src={props.image} alt={props.alt} />
      <div className="details">
        <h3 className="details-title">{props.title}</h3>
        <hr />
        <p className="details-para">{props.details}</p>
        <div className="details-footer">
          <div className="read-more">
            <Viewspec eyeTitle="Read More" />
          </div>
          <div className="share">
            <span>1 day ago</span>
            <img className="share-image" src={Share} alt="share-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
