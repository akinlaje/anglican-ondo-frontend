import Image from 'next/image'
import styles from './Locations.module.css';
import Pagination from '../Pagination/Pagination';

const Location = ({ id, name, image, location, imageUrl }) => {
	return (
		<div className={styles.Location}> + 
			<div className={styles.Info}>
				<h3 className={styles.LocationName}>{name}</h3>
				<div>{location}</div>
			</div>
			<div className={styles.LocationImage}>
				<Image alt={name} src={imageUrl} layout='fill' objectFit='cover' />
			</div>
		</div>
	)
}

const Locations = ({ locations }) => {
	return (
		<div className={styles.Container}>
			{locations.map((location, i) => (
				<Location key={i} {...location} />
			))}
			<Pagination />
		</div>
	)
}

export default Locations;