import Image from 'next/image'
import styles from './LiveRadio.module.css'
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton'

const LiveRadio = ({ liveProgram, upcomingPrograms }) => {
	console.log(liveProgram)
	return (
		<div>
			<h2 className={styles.Heading}>LIVE RADIO</h2>
			<div 
				className={[
					styles.RadioProgram, 
					styles.Live
				].join(' ')}
			>
				<div className={styles.RadioProgramImgWrapper}>
					<Image 
						src={'/uploads/' + liveProgram.image}
						layout='fill'
						objectFit='cover'
						alt={liveProgram.title || 'Live Program'}
						className={styles.RadioProgramImg}
					/>
				</div>
				<div className={styles.RadioProgramInfo}>
					<div>
						<h3 className={styles.RadioProgramTitle}>{liveProgram.title}</h3>
						<div className={styles.RadioProgramAuthor}>{liveProgram.anchor}</div>
					</div>
					<PlayPauseButton 
						amplitudeSongIndex={liveProgram.amplitudeSongIndex}
						amplitudePlaylistName={liveProgram.amplitudePlaylistName}
						className={styles.ControlButton}
						iconClassName={styles.ControlButtonIcon}
					/>
				</div>
			</div>
			<h3 className={styles.Heading}>COMING UP NEXT</h3>
			<ul className={styles.UpcomingRadioProgramList}>
				{upcomingPrograms.map((program, i) => {
					return (
						<li key={i} className={styles.RadioProgram}>
							<div className={styles.RadioProgramImgWrapper}>
								<Image layout='fill' alt='NEXT Program' className={styles.RadioProgramImg} src={'/uploads/' + program.image} />
							</div>
							<div>
								<h3 className={styles.RadioProgramTitle}>{program.title}</h3>
								<div className={styles.RadioProgramAuthor}>{program.anchor}</div>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default LiveRadio;