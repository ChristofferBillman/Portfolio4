import Page from './Page'
import '../styles/Animations.css'

/*
 * The landing page. The first page you see when the site loads.
 * Takes no props.
 */

export default function Landing() {
	return (
		<div>
			<Page img={['img/landing.png']} navigationButtons={false} id='landing' useGallery={false} contentSide='left'>
				<div className='inner-content-container'>

					<h1 className='fadeIn stagger-1'>Christoffer <br />Billman</h1>

					<div style={{backgroundColor: 'var(--white)'}}>

					<h3 className='fadeIn stagger-2'>Civilingenjörsstudent</h3>

					<h4 className='justify-text fadeIn stagger-3'>
						Studerar Civingenjör Interaktion och Design vid Umeå Universitet.
						Grafisk design, programmering och webbutveckling är saker som intresserar!
					</h4>

					<div className='vertical-spacing' />

					<div className='link-container fadeIn stagger-4'>
						<a
							href='https://github.com/ChristofferBillman'
							target='_blank'
							rel='noreferrer'
						>
							GitHub
						</a>
						<a
							href='https://www.linkedin.com/in/christoffer-billman-840029212/'
							target='_blank'
							rel='noreferrer'
						>
							LinkedIn
						</a>
						<a
							href='CV.pdf'
							download
						>
							Hämta CV
						</a>
					</div>

					<div className='vertical-spacing' />

					<div className='center fadeIn stagger-5'>
						<p className='attention-text'>Skrolla!</p>
					</div>
					</div>
				</div>
			</Page>
		</div>
	);
}