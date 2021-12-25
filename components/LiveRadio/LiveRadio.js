import styles from './LiveRadio.module.css';

const LiveRadio = () => {
	return (
		<div>
			<h2 className={styles.Heading}>LIVE RADIO</h2>
			<div className={[
					styles.RadioProgram, 
					styles.Live
				].join(' ')}
			>
				<img alt='Live Program' className={styles.RadioProgramImg} />
				<div className={styles.RadioProgramInfo}>
					<div>
						<h3 className={styles.RadioProgramTitle}>The efficacy of the holy spirit</h3>
						<div className={styles.RadioProgramAuthor}>The Rt. Revd. S. A. Oni</div>
					</div>
					<button className={styles.ControlButton}>
						
					</button>
				</div>
			</div>
			<h3 className={styles.Heading}>COMING UP NEXT</h3>
			<ul className={styles.UpcomingRadioProgramList}>
				<li className={styles.RadioProgram}>
					<img alt='NEXT Program' className={styles.RadioProgramImg} />
					<div>
						<h3 className={styles.RadioProgramTitle}>The efficacy of the holy spirit</h3>
						<div className={styles.RadioProgramAuthor}>The Rt. Revd. S. A. Oni</div>
					</div>
				</li>
				<li className={styles.RadioProgram}>
					<img alt='NEXT Program' className={styles.RadioProgramImg} />
					<div>
						<h3 className={styles.RadioProgramTitle}>The efficacy of the holy spirit</h3>
						<div className={styles.RadioProgramAuthor}>The Rt. Revd. S. A. Oni</div>
					</div>
				</li>
				<li className={styles.RadioProgram}>
					<img alt='NEXT Program' className={styles.RadioProgramImg} />
					<div>
						<h3 className={styles.RadioProgramTitle}>The efficacy of the holy spirit</h3>
						<div className={styles.RadioProgramAuthor}>The Rt. Revd. S. A. Oni</div>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default LiveRadio;