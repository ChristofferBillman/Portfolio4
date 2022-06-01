import { useState } from 'react';

/*
 * TODO: Connect actual scroll position to the scroll indicator
 */

export default function ScrollIndicator({ posts }) {

	const [currentPage, setCurrentPage] = useState(-1);

	const getScrollIndicators = (posts) => {
		const scrollIndicators = []

		scrollIndicators.push(
			<div
				style={{ padding: '1rem 3rem 1rem 1rem' }}
				onClick={() => { scrollToElement('landing') }}
			>
				<div
					className={`scroll-indicator ${Number(currentPage) === -1 ? 'scroll-indicator-current' : ''}`}
					key={100}
				/>
			</div>
		)

		posts.forEach((posts, index) => {
			scrollIndicators.push(
				<div
					style={{ padding: '1rem 3rem 1rem 1rem' }}
					onClick={() => { scrollToElement(`post-${index}`) }}
				>
					<div
						className={`scroll-indicator ${Number(currentPage) === index ? 'scroll-indicator-current' : ''}`}
						key={index}
					/>
				</div>
			)
		})
		return scrollIndicators
	}

	const scrollToElement = id => {
		const el = document.getElementById(id)
		el.scrollIntoView({ behavior: 'smooth', block: 'start' })
		if (id === 'landing') setCurrentPage(-1)
		else setCurrentPage(id.split('-')[1])
	}

	return (
		<div className='scroll-indicator-container fadeIn stagger-1'>
			<p
				className={`attention-text ${currentPage !== -1 ? 'opacity-0' : 'opacity-1'}`}
				style={{ display: 'absolute', transform: 'translateX(60px) translateY(46px)' }}
			>
				Du är här!
			</p>
			{getScrollIndicators(posts)}
		</div>
	);
}