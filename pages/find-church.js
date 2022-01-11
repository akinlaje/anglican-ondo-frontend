import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/FindChurch.module.css';
import SearchChurches from '../components/SearchChurches/SearchChurches';
import Locations from '../components/Locations/Locations';

const FindChurch = ({ churches }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchedTerm, setSearchedTerm] = useState('')

	return (
		<>
			<header className={styles.Header}>
        <Head>
          <title>Find a church | Anglican Diocese of Ondo</title>
          <meta name="description" content="Churches of the Anglican diocese of Ondo" />
          <link rel="icon" href="/images/diocese-logo.png" />
        </Head>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Welcome</h1>
					<p>to Our Gallery, Explore</p>
				</div>
			</header>
			<section className={styles.SearchChurches}>
				<SearchChurches searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchedTerm />
			</section>
			<section className={styles.LocationsSection}>
				<Locations locations={churches} searchTerm={searchTerm} setSearchedTerm={setSearchedTerm} />
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
      name: 'All Saints Anglican Church. Headquarters of Ondo Archdeaconry',
      location: 'Ogbonkowo, Ondo',
      image: 'all-saints-church-2.jpg',
      imageUrl: '/images/all-saints-church-2.jpg'
    },
    {
      id: '2',
      name: 'St. Peters Anglican Church. Headquarters of Araromi Archdeaconry',
      location: 'Araromi Obu',
      image: 'st-peters-church.jpg',
      imageUrl: '/images/st-peters-church.jpg'
    },
  ];

  return {
    props: {
      churches
    }
  }

}