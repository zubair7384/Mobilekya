import React from "react"
import Button from "../button"
import MobileSlider from "../mobileSlider"
import Plus from "../../assets/svgs/plus-icon.svg"
import MobileCard from "../mobileCard"
import "./mobileSection.scss"

function MobileSection({ title, data }) {
  return (
    <div className="mobile-section">
      <div className="mobile-section-row">
        <h2>{title}</h2>
        <Button icon={Plus} text="View more" />
      </div>
      <MobileSlider>
        {data.map((i, index) => {
          return (
            <MobileCard
              pTag={{ background: "#0544E0" }}
              key={index}
              image={i.image}
              name={i.name}
              price={
                i.price &&
                i.price.toLocaleString("PKR", {
                  style: "currency",
                  currency: "PKR",
                })
              }
            />
          )
        })}
      </MobileSlider>
    </div>
  )
}
export default MobileSection
