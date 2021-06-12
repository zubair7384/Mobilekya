import React from "react"
import ShowcaseCard from "../showcaseCard"
import Oneplus from "../../images/oneplus8.svg"
import Note10 from "../../images/note10.svg"
import K30 from "../../images/k30.svg"
import "./showcase.scss"

export default function Showcase() {
  return (
    <div className="showcase">
      <div className="showcase-row">
        {[
          {
            rating: 5,
            name: "OnePlus 8",
            image: Oneplus,
            storage: "128GB/256GB storage",
            processor: "Snapdragon 865",
            price: "119,000 PKR",
          },
          {
            rating: 4,
            bgColor: "galaxy",
            name: "Galaxy Note 20",
            image: Note10,
            storage: "128GB/256GB storage",
            processor: "Snapdragon 865",
            price: "165,000 PKR",
          },
          {
            rating: 3,
            bgColor: "k30",
            name: "Xiaomi Redmi K30 Ultra",
            image: K30,
            storage: "128GB/256GB storage",
            processor: "Snapdragon 865",
            price: "89,000 PKR",
          },
        ].map((i, index) => {
          return (
            <ShowcaseCard
              key={index}
              rating={i.rating}
              bgColor={i.bgColor}
              name={i.name}
              image={i.image}
              processor={i.processor}
              storage={i.storage}
              price={i.price}
            />
          )
        })}
      </div>
    </div>
  )
}
