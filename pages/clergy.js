import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/ClergyMen.module.css';

const ClergyMen = ({ venerables, canons, reverends }) => {
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
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyListWrapper}>
					<div className={styles.ClergyList}>
						{venerables.map((bishop, i) => (
							<div key={i} className={styles.Clergy}>
								<div className={styles.ClergyImage} >
									<Image 
										layout='fill'
										objectFit='cover'
										alt={bishop.name}
										src={bishop.imageUrl}
									/>
								</div>
								<h4 className={styles.ClergyName}>{bishop.name}</h4>
								<div className='faded'>{bishop.position}</div>
							</div>
						))}
					</div>
				</div>
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyListWrapper}>
					<div className={styles.ClergyList}>
						{canons.map((bishop, i) => (
							<div key={i} className={styles.Clergy}>
								<div className={styles.ClergyImage} >
									<Image 
										layout='fill'
										objectFit='cover'
										alt={bishop.name}
										src={bishop.imageUrl}
									/>
								</div>
								<h4 className={styles.ClergyName}>{bishop.name}</h4>
								<div className='faded'>{bishop.position}</div>
							</div>
						))}
					</div>
				</div>
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyListWrapper}>
					<div className={styles.ClergyList}>
						{reverends.map((bishop, i) => (
							<div key={i} className={styles.Clergy}>
								<div className={styles.ClergyImage} >
									<Image 
										layout='fill'
										objectFit='cover'
										alt={bishop.name}
										src={bishop.imageUrl}
									/>
								</div>
								<h4 className={styles.ClergyName}>{bishop.name}</h4>
								<div className='faded'>{bishop.position}</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default ClergyMen;

export async function getServerSideProps (context) {

  // get venerables, canons and reverends here

  const venerables = [...Array(9)].map(_ => ({
	  name: 'Ven S. O. Adeleye',
	  position: 'Ondo Archdeaconry',
	  imageUrl: '/images/bishop.jpeg',
	  image: 'bishop.jpeg',
	}))

	const canons = [...Array(9)].map(_ => ({
	  name: 'Ven S. O. Adeleye',
	  position: 'Ondo Archdeaconry',
	  imageUrl: '/images/bishop.jpeg',
	  image: 'bishop.jpeg',
	}))

	const reverends = [...Array(9)].map(_ => ({
	  name: 'Ven S. O. Adeleye',
	  position: 'Ondo Archdeaconry',
	  imageUrl: '/images/bishop.jpeg',
	  image: 'bishop.jpeg',
	}))

  return {
    props: {
      venerables, canons, reverends
    }
  }

}