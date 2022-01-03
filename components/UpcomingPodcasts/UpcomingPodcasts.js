import Image from 'next/image';
import styles from './UpcomingPodcast.module.css';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton'

const upcomingPodcast = ({ upcomingPodcasts }) => {
	return (
		<div className={styles.Container}>
			<h2 className={styles.Heading}>Podcasts</h2>
			<ul className={styles.List}>
				{upcomingPodcasts.map((podcast, i) => (
					<li key={i} className={styles.Podcast}>
						<div className={styles.PodcastImg}>
							<Image 
								layout='fill'
								objectFit='cover'
								alt={podcast.title || 'Live Program'} 
								src={podcast.imageUrl} 
							/>
						</div>						
						<div className={styles.PodcastInfo}>
							<div>
								<h3 className={styles.PodcastTitle}>{podcast.title}</h3>
								<div className={styles.PodcastAuthor}>{podcast.anchor}</div>
							</div>
							<PlayPauseButton 
								amplitudeSongIndex={podcast.amplitudeSongIndex}
								amplitudePlaylistName={podcast.amplitudePlaylistName}
								className={styles.ControlButton}
								iconClassName={styles.ControlButtonIcon}
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default upcomingPodcast;