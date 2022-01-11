import styles from './Pagination.module.css';

const Pagination = ({ page, setPage, numPerPage, numItems }) => {

	const numPages = Math.ceil(numItems / numPerPage)

	const isFirstPage = page === 1

	const isLastPage = page === numPages

	const prev = () => isFirstPage ? null : setPage(page - 1)

	const next = () => isLastPage ? null : setPage(page + 1)

	return (
		<div className={styles.Container}>
			<span 
				onClick={prev} 
				style={{ opacity: isFirstPage ? '0.5' : '1' }}
			>Prev</span>
			<div>Page {page} of {numPages}</div>
			<span 
				onClick={next}
				style={{ opacity: isLastPage ? '0.5' : '1' }}
			>Next</span>
		</div>
	)
}

export default Pagination;