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
		setOffset(prev => prev + PAGE_WIDTH);
	}
	function handleRightClick() {
		console.log('click')
		setOffset(prev => prev - PAGE_WIDTH);
	}
	return (
		<div className="slider-container">
			<FaChevronLeft className='arrow' onClick={handleLeftClick}/>
			<div className="slider-window">
				<div className="slider-items">
					{children}
				</div>
			</div>
			<FaChevronRight className='arrow' onClick={handleRightClick}/>
		</div>
	)
}