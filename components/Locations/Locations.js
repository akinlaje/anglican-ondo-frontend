import styles from './Locations.module.css';
import Pagination from '../Pagination/Pagination';

const Location = () => {
	return (
		<div className={styles.Location}>
			<div className={styles.Info}>
				<h3 className={styles.LocationName}>ST. Stephen Cathedral</h3>
				<div>No 32 Oke Aluko Street Ondo</div>
			</div>
			<img alt='location' className={styles.LocationImage} />
		</div>
	)
}

const Locations = () => {
	return (
		<div className={styles.Container}>
			{[...Array(6)].map((location, i) => (
				<Location key={i} />
			))}
			<Pagination />
		</div>
	)
}

export default Locations;