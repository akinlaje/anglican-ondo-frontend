import Image from 'next/image' 
import Link from 'next/link';
import styles from './Article.module.css';
import { HiMenuAlt3 as MenuIcon } from 'react-icons/hi'
import { FaRegCalendarAlt as CalendarIcon } from 'react-icons/fa'
import { MdLocationOn as LocationIcon } from 'react-icons/md'
import { BsClock as ClockIcon } from 'react-icons/bs'

const Article = ({ id, title, details, imageUrl, date, time, location }) => {
	return (
		<div className={styles.Container}>
			<div className={styles.Top}>
				<div>News</div>
				<p className={styles.Desc}>{title}</p>
				<div>{date}</div>
			</div>
			<div className={styles.Image}>
				<Image alt='article' src={imageUrl} layout='fill' objectFit='contain' />
			</div>
			<div className={styles.Bottom}>
				<Link href={'/news-and-events/' + id}>
					<a>Read More</a>
				</Link>
				<MenuIcon size='30px' color='#555' />
			</div>

			{details && (
				<p className={styles.Details}>{details.substring(0, 100) + '...'}</p>
			)}

			{date && (
				<div 
					className={styles.Info}
				>
					<CalendarIcon 
						size='30px' 
						color='#555' 
						className={styles.InfoIcon} 
					/>
					{date}
				</div>
			)}

			{location && (
				<div 
					className={styles.Info}
				>
					<LocationIcon 
						size='30px' 
						color='#555' 
						className={styles.InfoIcon} 
					/>
					{location}
				</div>
			)}

			{time && (
				<div 
					className={styles.Info}
				>
					<ClockIcon 
						size='30px' 
						color='#555' 
						className={styles.InfoIcon} 
					/>
					{time}
				</div>
			)}
		</div>
	)
}

export default Article;