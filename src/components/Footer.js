import Page from './Page'
import { scrollToElement } from '../utils/util';

import '../styles/Footer.css'

/*
 * Footer
 */

export default function Footer() {
	return (
		<Page contentSide='left' style={{ background: 'var(--black)' }}>
			<div className='footer-content'>
				<div>
					<h1 className='white'>Nu tog det slut</h1>
					<p className='clickable-text' onClick={() => scrollToElement('landing')}>Till toppen ^</p>
				</div>

				<div className='contact-section'>
					<h1 className='white'>Kontakt</h1>
					<div className='contact'>
						<h4 className='white nomargin'>Mejl</h4>
						<p className='white nomargin'>christofferbillman@gmail.com</p>
					</div>
					<div className='contact'>
						<h4 className='white nomargin'>Telefon</h4>
						<p className='white nomargin'>070 577 22 97</p>
					</div>
					<div className='contact'>
						<h4 className='white nomargin'>LinkedIn</h4>
						<p className='white nomargin'>Christoffer Billman</p>
					</div>
				</div>
			</div>
		</Page>
	);
}