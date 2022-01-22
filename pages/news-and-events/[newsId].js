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
	const { data: { msg: fullNews } } = await axios.post(apiBaseUrl + 'single/news', { id })
  console.log(fullNews);

  return {
    props: {
      ...fullNews
    }
  }

}