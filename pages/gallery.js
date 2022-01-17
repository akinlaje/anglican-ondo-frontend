import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Gallery.module.css';
import HorizontalSlider from '../components/HorizontalSlider/HorizontalSlider';
import Event from '../components/Event/Event';

const Gallery = ({ events=[], recentEvents=[] }) => {
	return (
		<>
			<header className={styles.Header}>
        <Head>
          <title>Gallery | Anglican Diocese of Ondo</title>
          <meta name="description" content="Gallery of the Anglican diocese of Ondo" />
          <link rel="icon" href="/images/diocese-logo.png" />
        </Head>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Welcome</h1>
					<p>to Our Gallery, Explore</p>
				</div>
			</header>
			<section>
				<h2 className={styles.SubHeading}>EVENT IMAGE</h2>
				<HorizontalSlider>
					{recentEvents.map((event, i) => {
						return (
							<div key={i} className={styles.ImageWrapper}>
								<Image 
									layout='fill' 
									objectFit='cover' 
									className={styles.Image} 
									alt='event' 
									src={event.imageUrl} 
								/>	
							</div>
						)
					})}
				</HorizontalSlider>
				{events.map(({ month, events }, i) => (
					<div key={i} className={styles.Month}>
						<h2 className={styles.MonthName}>{month}</h2>
						<ul className={styles.EventList}>
							{events.map((event, i) => (
								<li key={i} className={styles.EventListItem}>
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

export async function getServerSideProps (context) {

  // get events and recent events here
  
	const events = [
		{
			month: 'October',
			events: [
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
			]
		},
		{
			month: 'November',
			events: [
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
			]
		},
		{
			month: 'December',
			events: [
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
				{
					title: 'Synod 2020',
					desc: 'Who are you?',
					image: 'synod.png',
					imageUrl: '/images/synod.png'
				},
			]
		},
	]

	const recentEvents = [
		{
			image: 'event-page-scroll.png',
			imageUrl: '/images/event-page-scroll.png'
		},
		{
			image: 'event-page-scroll.png',
			imageUrl: '/images/event-page-scroll.png'
		},
		{
			image: 'event-page-scroll.png',
			imageUrl: '/images/event-page-scroll.png'
		},
		{
			image: 'event-page-scroll.png',
			imageUrl: '/images/event-page-scroll.png'
		},
		{
			image: 'event-page-scroll.png',
			imageUrl: '/images/event-page-scroll.png'
		},
		{
			image: 'event-page-scroll.png',
			imageUrl: '/images/event-page-scroll.png'
		},
		{
			image: 'event-page-scroll.png',
			imageUrl: '/images/event-page-scroll.png'
		},
	]

  return {
    props: {
      events,
      recentEvents
    }
  }

}