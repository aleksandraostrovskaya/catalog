import { ProductItem } from "../productItem/ProductItem"
import Slider from "react-slick";

import leftArrow from "../../img/leftArrow.svg";
import rightArrow from "../../img/rightArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productList.css"

import phoneSilver from "../../img/phone-silver.png"
import phoneGold from "../../img/phone-gold.png"
import phonePurple from "../../img/phone-purple.png"
import phoneRed from "../../img/phone-red.png"

export const ProductList = ({title}) => {
	const phones = [
		{
			img: phoneSilver,
			model: "Apple iPhone 14 Pro 128GB Silver MQ023",
			price: 999,
			screenSize: "6.1\" OLED",
			capacity: "128 GB",
			ram: "6 GB"
		},
		{
			img: phoneGold,
			model: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)",
			price: 1099,
			screenSize: "6.1\" OLED",
			capacity: "256 GB",
			ram: "6 GB"
		},
		{
			img: phonePurple,
			model: "Apple iPhone 14 Pro 128GB Gold (MQ083)",
			price: 999,
			screenSize: "6.1\" OLED",
			capacity: "128 GB",
			ram: "6 GB"
		},
		{
			img: phoneRed,
			model: "Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)",
			price: 1099,
			screenSize: "6.7\" OLED",
			capacity: "256 GB",
			ram: "6 GB"
		},
		{
			img: phoneSilver,
			model: "Apple iPhone 14 Pro 128GB Silver (MQ023)",
			price: 999,
			screenSize: "6.1\" OLED",
			capacity: "128 GB",
			ram: "6 GB"
		},
		{
			img: phoneGold,
			model: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)",
			price: 1099,
			screenSize: "6.1\" OLED",
			capacity: "256 GB",
			ram: "6 GB"
		},
		{
			img: phonePurple,
			model: "Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)",
			price: 999,
			screenSize: "6.1\" OLED",
			capacity: "128 GB",
			ram: "6 GB"
		},
		{
			img: phoneRed,
			model: "Apple iPhone 14 Pro 128GB Silver (MQ023)",
			price: 1099,
			screenSize: "6.1\" OLED",
			capacity: "256 GB",
			ram: "6 GB"
		},
		{
			img: phoneSilver,
			model: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)",
			price: 859,
			screenSize: "6.7\" OLED",
			capacity: "128 GB",
			ram: "6 GB"
		},
		{
			img: phoneGold,
			model: "Apple iPhone 14 Pro 128GB Gold (MQ083)",
			screenSize: "6.7\" OLED",
			capacity: "256 GB",
			ram: "6 GB"
		},
		{
			img: phonePurple,
			model: "Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)",
			price: 859,
			screenSize: "6.7\" OLED",
			capacity: "128 GB",
			ram: "6 GB"
		},
		{
			img: phoneRed,
			model: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)",
			price: 959,
			screenSize: "6.7\" OLED",
			capacity: "256 GB",
			ram: "6 GB"
		},
		{
			img: phoneSilver,
			model: "Apple iPhone 14 Pro 128GB Silver (MQ023)",
			price: 859,
			screenSize: "6.7\" OLED",
			capacity: "128 GB",
			ram: "6 GB"
		},
		{
			img: phoneGold,
			model: "Apple iPhone 14 Pro 128GB Gold (MQ083)",
			price: 959,
			screenSize: "6.7\" OLED",
			capacity: "256 GB",
			ram: "6 GB"
		},
		{
			img: phonePurple,
			model: "Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)",
			price: 859,
			screenSize: "6.7\" OLED",
			capacity: "128 GB",
			ram: "6 GB"
		},
		{
			img: phoneRed,
			model: "Apple iPhone 14 Pro 128GB Silver (MQ023)",
			price: 959,
			screenSize: "6.7\" OLED",
			capacity: "256 GB",
			ram: "6 GB"
		}
	]

	return (
		<div className="products">
			<h2 className="products__title">{title}</h2>
			<ProductSlider phones={phones}/>
		</div>

	)
}

export const ProductSlider = ({phones}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
		dots: false,
		centerMode: false,
  }

  return (
    <Slider {...settings}>
			{phones.map(phone => <ProductItem phone={phone}/>)}
    </Slider>
  );
}