import styles from '../styles/FindChurch.module.css';
import SearchChurches from '../components/SearchChurches/SearchChurches';
import Locations from '../components/Locations/Locations';

const FindChurch = () => {
	return (
		<>
			<header className={styles.Header}>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Welcome</h1>
					<p>to Our Gallery, Explore</p>
				</div>
			</header>
			<section className={styles.SearchChurches}>
				<SearchChurches />
			</section>
			<section className={styles.LocationsSection}>
				<Locations />
			</section>
		</>
	)
}

export default FindChurch;