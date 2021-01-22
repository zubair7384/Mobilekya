import React from "react"
import MobileCard from "../mobileCard"
import Mobile1 from "../../images/OppoReno3Pro256GB-b.jpg"
import Mobile2 from "../../images/oppo-reno-4.jpg"
import Mobile3 from "../../images/realme-x3.jpg"
import Mobile4 from "../../images/iphone-se.jpg"
import Mobile5 from "../../images/vevo-v19.jpg"
import Eye from "../../assets/svgs/latest-eye.svg"
import Arrow from "../../assets/svgs/Arrow-right.svg"
import "./latestMobiles.scss"

function LatestMobiles() {
  return (
    <div className="latest-mobiles">
      <div className="latest-mobile-card">
        <p>Explore Amazing</p>
        <img src={Arrow} alt="arrow" />
        <h2>Latest Mobile Phones & Price</h2>
        <div className="discover">
          {" "}
          <img src={Eye} alt="eye" /> Discover more
        </div>
      </div>
      {[
        {
          image: Mobile1,
          name: "Oppo Reno 3 Pro",
          price: "64,999 PKR",
        },
        {
          image: Mobile2,
          name: "Oppo Reno 4",
          price: "59,999 PKR",
        },
        {
          image: Mobile3,
          name: "Realme X3 Super Zoom",
          price: "79,999 PKR",
        },
        {
          image: Mobile4,
          name: "Apple iPhone SE 2020",
          price: "101,800 PKR",
        },
        {
          image: Mobile5,
          name: "Vovo V19 ",
          price: "54,999 PKR",
        },
      ].map((i, index) => {
        return (
          <MobileCard
            key={index}
            image={i.image}
            name={i.name}
            price={i.price}
          />
        )
      })}
    </div>
  )
}

export default LatestMobiles
