import Image from 'next/image'
import styles from '../../styles/FullNews.module.css'
import { FaRegCalendarAlt as CalendarIcon } from 'react-icons/fa'
import { MdLocationOn as LocationIcon } from 'react-icons/md'
import { BsClock as ClockIcon } from 'react-icons/bs'

const FullNews = ({ id, title, details, image, imageUrl, date, time, location }) => {
	return (
		<>
			<div className={styles.Image}>
				<Image layout='fill' objectFit='cover' src={imageUrl} alt={title || 'News title'} />			
			</div>
			<div className={styles.Container}>
				<h1 className={styles.Title}>{title}</h1>
				<div className={styles.InfoWrapper}>
					{time && (
						<span className={styles.Info}>
							<ClockIcon 
								size='20px' 
								color='#555' 
								className={styles.InfoIcon} 
							/>
							{time}
						</span>
					)}
					{date && (
						<span className={styles.Info}>
							<CalendarIcon 
								size='20px' 
								color='#555' 
								className={styles.InfoIcon} 
							/>
							{date}
						</span>
					)}
					{location && (
						<span className={styles.Info}>
							<LocationIcon 
								size='20px' 
								color='#555' 
								className={styles.InfoIcon} 
							/>
							{location}
						</span>
					)}
				</div>
				<p>{details}</p>
			</div>
		</>
	)
}

export default FullNews

export async function getServerSideProps (context) {
	const id = context.params.id

  // get complete news here

  const fullNews = {
      id: '1',
      title: 'Lorem Ipsum...Lorem Ipsum...',
      details: `Lorem ipsum dolor sit amet, consetetur sadipscing
		elitr, sed diam nonumy eirmod tempor invidunt ut
		labore et dolore magna aliquyam erat, sed diam
		voluptua. At vero eos et accusam et justo duo dolores
		et ea rebum. Stet clita kasd gubergren, no sea`,
      imageUrl: '/images/ae.jpg',
      date: '13th December, 2021',
      time: '10:00 pm',
    }

  return {
    props: {
      ...fullNews
    }
  }

}