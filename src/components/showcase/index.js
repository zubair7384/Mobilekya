import React from 'react'
import ShowcaseCard from "../showcaseCard"
import Oneplus from "../../images/oneplus8.svg"
import Note10 from "../../images/note10.svg"
import K30 from "../../images/k30.svg"
import "./showcase.scss"

export default function Showcase() {
    return (
        <div className="showcase">
            <div className="showcase-row">
                <ShowcaseCard mRating={5} mobileName="OnePlus 8" mobileImage={Oneplus} storage="128GB/256GB storage" processor="Snapdragon 865" price="119,000 PKR" />
                <ShowcaseCard mRating={4} bgColor="galaxy" mobileName="Galaxy Note 20" mobileImage={Note10} storage="128GB/256GB storage" processor="Snapdragon 865" price="165,000 PKR" />
                <ShowcaseCard mRating={3} bgColor="k30" mobileName="Xiaomi Redmi K30 Ultra" mobileImage={K30} storage="128GB/256GB storage" processor="Snapdragon 865" price="89,000 PKR" />
            </div>
        </div>
    )
}
