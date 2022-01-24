import { Fragment } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/ClergyMen.module.css';

import axios from 'axios'
import { BASE_URL as apiBaseUrl } from '../utils'

const ClergyMen = ({ clergyMen=[] }) => {
	return (
		<>
			<header className={styles.Header}>
        <Head>
          <title>Clergy | Anglican Diocese of Ondo</title>
          <meta name="description" content="Clergy of Anglican diocese of Ondo" />
          <link rel="icon" href="/images/diocese-logo.png" />
        </Head>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Clergy Men</h1>
					<p>The Priest in the Diocese of Ondo</p>
				</div>
			</header>
			<section className={styles.Section}>
				{!clergyMen.length ? (
					<div style={{ textAlign: 'center', padding: '30px' }}>No Clergy information yet</div>
				) : null}
				{clergyMen.map((clergyGroup, i) => {
					const { position, priests } = clergyGroup
					return (
						<Fragment key={i}>
							<h3 className={styles.SubHeading}>{position}</h3>
							<div className={styles.ClergyListWrapper}>
								<div className={styles.ClergyList}>
									{priests.map((priest, i) => (
										<div key={i} className={styles.Clergy}>
											<div className={styles.ClergyImage} >
												<Image 
													layout='fill'
													objectFit='cover'
													alt={priest.name}
													src={priest.imageUrl}
												/>
											</div>
											<h4 className={styles.ClergyName}>{priest.name}</h4>
											<div className='faded'>{priest.position}</div>
										</div>
									))}
								</div>
							</div>
						</Fragment>
					)
				})}
			</section>
		</>
	)
}

export default ClergyMen;

export async function getServerSideProps (context) {
	const { data: { msg } } = await axios.get(apiBaseUrl + 'read/priests')
  console.log(msg);

  let clergyMen = []

  const isPositionInClergyMenArray = (position) => {
  	let index = null
  	for (let i = clergyMen.length - 1; i >= 0; i--) {
  		const priestGroupByPosition = clergyMen[i]
  		if (priestGroupByPosition.position === position) {
  			index = i
  			break
  		}
  	}
  	return index
  }

  for (let i = msg.length - 1; i >= 0; i--) {
  	const priest = msg[i]
  	const { position } = priest
  	const index = isPositionInClergyMenArray(position)
  	if (index === 0 || index) {
  		clergyMen[index].priests.push(priest)
  	} else {
  		clergyMen.push({
  			position,
  			priests: [priest]
  		})
  	}
  }

  console.log(clergyMen)

  return {
    props: {
      clergyMen
    }
  }

}