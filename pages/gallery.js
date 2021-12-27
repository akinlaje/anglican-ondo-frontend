import styles from '../styles/Gallery.module.css';
import HorizontalSlider from '../components/HorizontalSlider/HorizontalSlider';
import Event from '../components/Event/Event';

const Gallery = () => {
	const events = [
		{
			month: 'October',
			events: [
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
			]
		},
		{
			month: 'November',
			events: [
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
			]
		},
		{
			month: 'December',
			events: [
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?'
				},
			]
		},
	]

	return (
		<>
			<header className={styles.Header}>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Welcome</h1>
					<p>to Our Gallery, Explore</p>
				</div>
			</header>
			<section>
				<h2 className={styles.SubHeading}>EVENT IMAGE</h2>
				<HorizontalSlider>
					<img className={styles.Image} alt='event' />
					<img className={styles.Image} alt='event' />
					<img className={styles.Image} alt='event' />
					<img className={styles.Image} alt='event' />	
				</HorizontalSlider>
				{events.map(({ month, events }, i) => (
					<div key={i} className={styles.Month}>
						<h2 className={styles.MonthName}>{month}</h2>
						<ul className={styles.EventList}>
							{events.map((event, i) => (
								<li key={i}>
									<Event {...event} />
								</li>
							))}
						</ul>
					</div>
				))}
			</section>
		</>
	)
}

export default Gallery;