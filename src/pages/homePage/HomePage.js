import { ImageSlider } from "../../components/imageSlider/ImageSlider"
import slide from "../../img/slide.jpg"
import { ProductList } from "../../components/productList/ProductList"
import './homePage.css'

export const HomePage = () => {
  const images = [slide, slide]

  return (
    <div>
      <h1 className="title">Welcome to Nice Gadgets store!</h1>
			<ImageSlider/>
      <ProductList title={"Brand new models"}/>
    </div>
  )
}
