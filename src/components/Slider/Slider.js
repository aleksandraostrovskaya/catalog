import { Children, cloneElement, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './slider.css'

export const Slider = ({children}) => {
	const PAGE_WIDTH = 1040;
	const [pages, setPages] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		setPages(Children.map(children, (page) => {
				return cloneElement(page, {
						style: {
								height: '100%',
								minWidth: `${PAGE_WIDTH}px`,
								maxWidth: `${PAGE_WIDTH}px`,
						}
				})
		}))
	}, []);

	function handleLeftClick() {
		console.log('click')
	}
	function handleRightClick() {
		console.log('click')
	}
	return (
		<div className="slider-container">
			<FaChevronLeft className='arrow' onClick={handleLeftClick}/>
			<div className="window">
				<div className="slide-items">
					{children}
				</div>
			</div>
			<FaChevronRight className='arrow' onClick={handleRightClick}/>
		</div>
	)
}