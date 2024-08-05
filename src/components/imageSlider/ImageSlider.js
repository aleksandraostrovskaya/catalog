import { useState } from "react"
import Slider from "react-slick";
import slide from "../../img/slide.jpg"
import leftArrow from "../../img/leftArrow.svg"
import rightArrow from "../../img/rightArrow.svg"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './imageSlider.css'


const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <img src={leftArrow} alt="Previous" />
    </div>
  )
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <img src={rightArrow} alt="Next" />
    </div>
  )
}

export const ImageSlider = () => {
		const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
    prevArrow: <PrevArrow /> ,
		autoplay: true, 
		autoplaySpeed: 3000,
		pauseOnHover: true, 
	}
	

  return (
    <Slider {...settings}>
      <div>
        <img src={slide} style={{margin: '0 auto'}} alt="banner iPhone 14 pro" />
      </div>
      <div>
        <img src={slide} style={{margin: '0 auto'}} alt="banner iPhone 14 pro" />
      </div>
			<div>
        <img src={slide} style={{margin: '0 auto'}} alt="banner iPhone 14 pro" />
      </div>
    </Slider>
  )
}
