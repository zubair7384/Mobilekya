import React from "react"
import { Rating } from "semantic-ui-react"
import Pricetag from "../priceTag"
import Viewspec from "../viewspec"
import Processor from "../../assets/svgs/processor.svg"
import Mcard from "../../assets/svgs/mcard.svg"
import "./showcaseCard.scss"
import Heart from "../heart"

export default function ShowcaseCard(props) {
  return (
    <div className={`showcase-card ${props.bgColor}`}>
      <div className="image-col">
        <img src={props.image} alt={props.image} />
      </div>
      <div className="desc-col">
        <h3>{props.name}</h3>
        <Rating
          maxRating={5}
          defaultRating={props.rating}
          icon="star"
          size="small"
        />
        <div className="showcase-spec">
          <img src={Mcard} alt="mcard" />
          <p>{props.storage}</p>
        </div>
        <div className="showcase-spec">
          <img src={Processor} alt="Processor" />
          <p>{props.processor}</p>
        </div>
        <Pricetag price={props.price} />
        <Viewspec eyeTitle="view specs" />
        <Heart className="showcasw-heart" />
      </div>
    </div>
  )
}
