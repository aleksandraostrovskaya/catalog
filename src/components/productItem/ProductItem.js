import phoneSilver from "../../img/phone-silver.png"
import phoneGold from "../../img/phone-gold.png"
import "./productItem.css"
import favsIcon from "../../img/favsIcon.png"

export const ProductItem = ({phone}) => {

	return (
	<div class="product-card">
		<img src={phone.img} alt="Apple iPhone 14 Pro 128GB Silver (MQ023)" class="product-image"/>
		<h3 class="product-title">{phone.model}</h3>
		<p class="product-price">{'$' + phone.price}</p>
		<div class="product-specs">
			<div class="spec">
				<span class="spec-label">Screen</span>
				<span class="spec-value">{phone.screenSize}</span>
			</div>
			<div class="spec">
				<span class="spec-label">Capacity</span>
				<span class="spec-value">{phone.capacity}</span>
			</div>
			<div class="spec">
				<span class="spec-label">RAM</span>
				<span class="spec-value">{phone.ram}</span>
			</div>
		</div>
		<div class="product-actions">
			<button class="add-to-cart">Add to cart</button>
			<button class="wishlist"><img src={favsIcon} alt="wishlist button" /></button>
		</div>
	</div>
	)
}