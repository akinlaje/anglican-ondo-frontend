import styles from '../styles/FindChurch.module.css';
import SearchChurches from '../components/SearchChurches/SearchChurches';
import Locations from '../components/Locations/Locations';

const FindChurch = ({ churches }) => {
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
				<Locations locations={churches} />
			</section>
		</>
	)
}

export default FindChurch;

export async function getServerSideProps (context) {

  // get upcoming events here

  const churches = [
    {
    	id: '1',
      name: 'ST Stephen Cathedral',
      image: 'church.jpg',
      location: 'No 32, Oke Aluko Street, Ondo',
    },
    {
    	id: '2',
      name: 'ST Stephen Cathedral',
      image: 'church.jpg',
      location: 'No 32, Oke Aluko Street, Ondo',
    },
    {
    	id: '3',
      name: 'ST Stephen Cathedral',
      image: 'church.jpg',
      location: 'No 32, Oke Aluko Street, Ondo',
    },
  ]

  return {
    props: {
      events
    }
  }

}