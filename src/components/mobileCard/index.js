import React from "react"
import { Rating } from "semantic-ui-react"
import Heart from "../heart"
import Pricetag from "../priceTag"
import Viewspec from "../viewspec"
import "./mobileCard.scss"

function MobileCard(props) {
  return (
    <div className="mobile-card">
      <div className="mobile-content">
        <img className="mobile-image" src={props.image} alt="Mobile1" />
        <h3>{props.name}</h3>
        <Rating
          maxRating={5}
          defaultRating={props.mRating}
          icon="star"
          size="small"
        />
        <Pricetag
          style={props.pTag}
          className="price-tag"
          price={props.price}
        />
        <Viewspec eyeTitle="view specs" />
        <Heart className="mobile-heart" />
      </div>
    </div>
  )
}

export default MobileCard
