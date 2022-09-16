import { useEffect, useState } from "react"
import { scrollTo } from '../utils/util';

const UPDATE_INTERVAL = 1000;

export default function ScrollIndicator({ length, orientation, viewRef, offset }) {

	if (offset === undefined) offset = 0

	const [currentPage, setCurrentPage] = useState(0)

	// Runs on currentPage change.
	useEffect(() => {
		let scrollDistance = 0;
		if (orientation === 'vertical') {
			scrollDistance = viewRef.current.clientHeight * currentPage + offset
		}
		else {
			scrollDistance = viewRef.current.clientWidth * currentPage + offset
		}
		scrollTo(scrollDistance, viewRef, orientation)
	}, [currentPage, offset, orientation, viewRef])

	// Runs on first render.
	useEffect(() => {
		let lastKnownScrollPosition = 0;
		let ticking = false;
		let widthOrHeight = 0;

		viewRef.current.addEventListener('scroll', () => {
			if (orientation === 'vertical') {
				lastKnownScrollPosition = viewRef.current.scrollTop
				widthOrHeight = viewRef.current.clientHeight
			}
			else {
				lastKnownScrollPosition = viewRef.current.scrollLeft
				widthOrHeight = viewRef.current.clientWidth
			}

			// since the scroll event fires very often, we need to debounce it.
			if (!ticking) {
				window.setTimeout(() => {
					setCurrentPage(Math.floor(lastKnownScrollPosition / widthOrHeight))
					ticking = false;
				}, UPDATE_INTERVAL);

				ticking = true;
			}
		})
	}, [orientation, viewRef])

	const getScrollIndicators = () => {
		const scrollIndicators = []

		for (let i = 0; i < length; i++) {
			scrollIndicators.push(
				<div
					key={i}
					style={{ padding: '1rem 1rem 1rem 1rem' }}
					onClick={() => setCurrentPage(i)}
				>
					<div
						className={
							`scroll-indicator ${Number(currentPage) === i ?
								'scroll-indicator-current' :
								''
							}`}
					/>
				</div>
			)
		}

		return scrollIndicators
	}

	return (
		<div
			className={
				orientation === 'vertical' ?
					'scroll-indicator-container' :
					'scroll-indicator-container row'
			}>
			{getScrollIndicators()}
		</div>
	)
}