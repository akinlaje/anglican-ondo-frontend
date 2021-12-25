import styles from './Pagination.module.css';

const Pagination = () => {
	return (
		<div className={styles.Container}>
			<span>Prev</span>
			<div>Page 1 of 40</div>
			<span>Next</span>
		</div>
	)
}

export default Pagination;