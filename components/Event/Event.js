import Image from 'next/image';
import styles from './Event.module.css';

const Event = ({ title, desc, imageUrl, image }) => {
	return (
		<div className={styles.Container}>
			<div className={styles.Image}>
				<Image 
					layout='fill'
					objectFit='cover'
					src={imageUrl}
					alt={title}
				/>
			</div>
			<h3 className={styles.Title}>2020 Synod</h3>
			<p>Who are you?</p>
		</div>
	)
}

export default Event;