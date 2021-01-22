import React, { Component } from "react"
import Slider from "react-slick"
import ArrowLeft from "../../assets/svgs/slider-arrow-left.svg"
import ArrowRight from "../../assets/svgs/slider-arrow-right.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./mobileSlider.scss"

function SampleNextArrow(props) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src={ArrowRight} alt="arrow-right" />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src={ArrowLeft} alt="arrow-left" />
    </div>
  )
}

class MobileSlider extends Component {
  render(props) {
    const settings = {
      dots: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      infinite: true,
      speed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <div className="mobile-slider">
        <Slider {...settings}>{this.props.children}</Slider>
      </div>
    )
  }
}

export default MobileSlider
