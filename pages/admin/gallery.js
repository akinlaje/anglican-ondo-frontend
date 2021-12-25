// import { useState } from 'react';
import styles from '../../styles/AdminGallery.module.css';
import UploadImage from '../../../components/UploadImage/UploadImage';

const AddImage = () => {
	return (
		<div className={styles.UploadImageWrapper}>
			<UploadImage className={styles.UploadImage} />
			<input className={styles.Input} placeholder={'Add Title'} />
		</div>
	)
}

const Gallery = () => {
	// const [images, setImages] = useState();

	return (
		<div className={styles.Container}>
			<div className={styles.AddImageContainer}>
				{[...Array(9)].map((_, i) => {
					return (
						<AddImage key={i} />
					)
				})}
			</div>
		</div>
	)
}

export default Gallery;