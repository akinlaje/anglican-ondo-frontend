import styles from './HorizontalSlider.module.css';

const HorizontalSlider = ({ children }) => {
	return (
		<div className={styles.Container}>
			<div className={styles.Inner}>
				{ children }
			</div>
		</div>
	)
}

export default HorizontalSlider;