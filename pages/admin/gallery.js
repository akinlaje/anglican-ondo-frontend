import { useState, useEffect } from 'react';
import styles from '../../styles/AdminGallery.module.css';
import UploadImage from '../../components/UploadImage/UploadImage';
import cloneDeep from 'lodash/cloneDeep';

const AddImage = ({ image, setImage }) => {
	return (
		<div className={styles.ImageWrapper}>
			<UploadImage className={styles.Image} file={image} setFile={setImage} />
			<input className={styles.Input} placeholder={'Add Title'} />
		</div>
	)
}

const Gallery = ({ admin }) => {
	const [images, setImages] = useState()
	const [image, setImage] = useState();

	useEffect(() => {
		const getImages = async () => {
			// get images from backend
			const images = []
			setImages(images)
		}

		getImages();
	}, [])
	
	const saveImage = async () => {
		// save the image to backend


		setImages(v => [...cloneDeep(v), image]);
	}

	return (
		<div className={styles.Container}>
			<div className={styles.AddImageContainer}>
				{images.map((file, i) => (
					<div className={styles.ImageWrapper}>
						<Image className={styles.Image} height='500px' width='500px' alt={file.name} />
					</div>
					
				))}
				<AddImage key={i} image={image} setImage={image} />
			</div>
		</div>
	)
}

export default Gallery;