import styles from '../styles/ClergyMen.module.css';

const ClergyMen = ({ venerables, canons, reverends }) => {
	return (
		<>
			<header className={styles.Header}>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Clergy Men</h1>
					<p>The Priest in the Diocese of Ondo</p>
				</div>
			</header>
			<section>
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyList}>
					{venerables.map((bishop, i) => (
						<div key={i} className={styles.Clergy}>
							<img alt='clergy' className={styles.ClergyImage} />
							<h4 className={styles.ClergyName}>{bishop.name}</h4>
							<div className='faded'>{bishop.position}</div>
						</div>
					))}
				</div>
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyList}>
					{canons.map((bishop, i) => (
						<div key={i} className={styles.Clergy}>
							<img alt='clergy' className={styles.ClergyImage} />
							<h4 className={styles.ClergyName}>{bishop.name}</h4>
							<div className='faded'>{bishop.position}</div>
						</div>
					))}
				</div>
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyList}>
					{reverends.map((bishop, i) => (
						<div key={i} className={styles.Clergy}>
							<img alt='clergy' className={styles.ClergyImage} />
							<h4 className={styles.ClergyName}>{bishop.name}</h4>
							<div className='faded'>{bishop.position}</div>
						</div>
					))}
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
	  position: 'Ondo Archdeaconry'
	}))

	const canons = [...Array(9)].map(_ => ({
	  name: 'Ven S. O. Adeleye',
	  position: 'Ondo Archdeaconry'
	}))

	const reverends = [...Array(9)].map(_ => ({
	  name: 'Ven S. O. Adeleye',
	  position: 'Ondo Archdeaconry'
	}))

  return {
    props: {
      venerables, canons, reverends
    }
  }

}