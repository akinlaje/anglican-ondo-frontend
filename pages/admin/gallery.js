// import { useState } from 'react';
import styles from '../../styles/AdminGallery.module.css';
import UploadImage from '../../components/UploadImage/UploadImage';

const AddImage = () => {
	return (
		<div className={styles.UploadImageWrapper}>
			<UploadImage className={styles.UploadImage} />
			<input className={styles.Input} placeholder={'Add Title'} />
		</div>
	)
}

const Gallery = ({ admin }) => {
	// const [images, setImages] = useState();
	if (admin) console.log(admin);
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