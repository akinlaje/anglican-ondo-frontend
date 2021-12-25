import styles from './Event.module.css';

const Event = ({ title, desc }) => {
	return (
		<div className={styles.Container}>
			<img className={styles.Image} alt='title'/>
			<h3 className={styles.Title}>2020 Synod</h3>
			<p>Who are you?</p>
		</div>
	)
}

export default Event;