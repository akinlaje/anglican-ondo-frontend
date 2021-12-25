import styles from './UpcomingPodcast.module.css';

const upcomingPodcast = () => {
	return (
		<div className={styles.Container}>
			<h2 className={styles.Heading}>Podcasts</h2>
			<ul className={styles.List}>
				{[...Array(10)].map((_, i) => (
					<li key={i} className={styles.Podcast}>
						<img alt='Live Program' className={styles.PodcastImg} />
						<div className={styles.PodcastInfo}>
							<div>
								<h3 className={styles.PodcastTitle}>The efficacy of the holy spirit</h3>
								<div className={styles.PodcastAuthor}>The Rt. Revd. S. A. Oni</div>
							</div>
							<button className={styles.ControlButton}>
								
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default upcomingPodcast;