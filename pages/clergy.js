import styles from '../styles/ClergyMen.module.css';

const ClergyMen = () => {
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
					{[...Array(9)].map((bishop, i) => (
						<div key={i} className={styles.Clergy}>
							<img alt='clergy' className={styles.ClergyImage} />
							<h4 className={styles.ClergyName}>Ven. S. O. Adeleye</h4>
							<div className='faded'>Ondo Archdeaconry</div>
						</div>
					))}
				</div>
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyList}>
					{[...Array(9)].map((bishop, i) => (
						<div key={i} className={styles.Clergy}>
							<img alt='clergy' className={styles.ClergyImage} />
							<h4 className={styles.ClergyName}>Ven. S. O. Adeleye</h4>
							<div className='faded'>Ondo Archdeaconry</div>
						</div>
					))}
				</div>
				<h3 className={styles.SubHeading}>Former Bishops</h3>
				<div className={styles.ClergyList}>
					{[...Array(9)].map((bishop, i) => (
						<div key={i} className={styles.Clergy}>
							<img alt='clergy' className={styles.ClergyImage} />
							<h4 className={styles.ClergyName}>Ven. S. O. Adeleye</h4>
							<div className='faded'>Ondo Archdeaconry</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default ClergyMen;