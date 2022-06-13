import { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import Page from './Page';

/*
 * A post. A wrapper for a Page, which takes props related to a post instead of children.
 * 
 * Usage:
 * <Post {...post}/>
 * 
 * Where post is an object with the props.
 * 
 */
export default function Post({ name, img, title, subtitle, body, images, ghlink, tags, year, id }) {

	const [galleryIsOpen, setGalleryIsOpen] = useState(false)
	const isMobile = useIsMobile()

	return (
		<div className='layout-grid-container' id={id}>
			<Page
				name={name}
				img={images}
				navigationButtons={false}
				useGallery={true}
				contentSide='left'
				galleryIsOpen={galleryIsOpen}
				setGalleryIsOpen={setGalleryIsOpen}
			>

				<div className='inner-content-container'>
					<h1>{title}</h1>
					<div className='link-container'>
						<h3>{subtitle}</h3>
						<h4>{year}</h4>
					</div>
					<div className='link-container'>
						{tags ? tags.map(tag => <p className='attention-text'>{tag}</p>) : ''}
					</div>

					<p className='justify-text'>{body}</p>

					<div className='row'>
						{ghlink ? <a href={ghlink} target='__blank'>Källkod</a> : ''}
						{isMobile ? (
							<p className='clickable-text nomargin' onClick={() => setGalleryIsOpen(true)}>Visa bilder</p>
						) : null}
					</div>


				</div>
			</Page>
		</div >
	);
}