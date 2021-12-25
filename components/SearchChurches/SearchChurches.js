import styles from './SearchChurches.module.css'

const SearchChurches = () => {
	return (
		<div className={styles.Container}>
			<input placeholder='Find a church near me' className={styles.Input} />
			<button className={styles.Button}>Search</button>
		</div>
	)
}

export default SearchChurches;