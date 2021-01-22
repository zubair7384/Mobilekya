import React from "react"
import Button from "../button"
import PostCard from "../postCard"
import Plus from "../../assets/svgs/plus-icon.svg"
import Vevo from "../../images/vevo-post.jpg"
import Poco from "../../images/poco-post.jpg"
import "./featuredPost.scss"

function FeaturedPost() {
  return (
    <div className="featured-post">
      <div className="featured-post-row">
        <h2>News, Reviews & Updates</h2>
        <Button icon={Plus} text="View more" />
      </div>
      <div className="featured-post-container">
        <PostCard
          image={Vevo}
          title="New Poco 3 Phone Released"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          porttitor placerat. Duis nec maximus mi, id faucibus tortor.
          Suspendisse tortor quam, fermentum at quam."
        />
        <PostCard
          image={Poco}
          title="New Vivo V20 Review"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          porttitor placerat. Duis nec maximus mi, id faucibus tortor.
          Suspendisse tortor quam, fermentum at quam."
        />
      </div>
    </div>
  )
}
export default FeaturedPost
