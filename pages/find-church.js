import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/FindChurch.module.css';
import SearchChurches from '../components/SearchChurches/SearchChurches';
import Locations from '../components/Locations/Locations';

import axios from 'axios'
import { BASE_URL as apiBaseUrl } from '../utils'

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

  const { data: { msg: churches } } = await axios.get(apiBaseUrl + 'read/churches')

  return {
    props: {
      churches
    }
  }

}