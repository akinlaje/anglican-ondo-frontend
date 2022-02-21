import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Gallery.module.css';
import HorizontalSlider from '../components/HorizontalSlider/HorizontalSlider';
import Event from '../components/Event/Event';

import axios from 'axios'
import { BASE_URL as apiBaseUrl } from '../utils'

const Gallery = ({ events=[], recentEvents=[] }) => {
	console.log(events, recentEvents)
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
				{!events.length ? (
					<div style={{ textAlign: 'center', padding: '30px' }}></div>
				) : null}
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
  const { data: { msg } } = await axios.get(apiBaseUrl + 'read/gallery')
  console.log(msg);

  let events = []

  const isMonthInEventsArray = (month) => {
  	let index = null
  	for (let i = events.length - 1; i >= 0; i--) {
  		const eventGroupByMonth = events[i]
  		if (eventGroupByMonth.month === month) {
  			index = i
  			break
  		}
  	}
  	return index
  }

  for (let i = msg.length - 1; i >= 0; i--) {
  	const galleryItem = msg[i]
  	const { month } = galleryItem
  	const index = isMonthInEventsArray(month)
  	if (index === 0 || index) {
  		events[index].events.push(galleryItem)
  	} else {
  		events.push({
  			month,
  			events: [galleryItem]
  		})
  	}
  }

  console.log(events)

	const recentEvents = [...Array(7)].map((_, i) => {
		if (msg[i]) return msg[i]
		return null
	}).filter(v => v)

  return {
    props: {
      events: [],
      recentEvents
    }
  }

}