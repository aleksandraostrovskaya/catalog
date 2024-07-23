import { Slider } from '../components/Slider/Slider'
import slide from '../img/slider.jpg'

export const HomePage = () => {

	return (
		<div>
			<h1>HomePage</h1>
			<Slider>
				<img className='slider-img' src={slide}/>
				<img  className='slider-img' src={slide}/>
				<img  className='slider-img' src={slide}/>
			</Slider>
		</div>
	)
}