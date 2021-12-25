import styles from '../styles/RadioAndPodcast.module.css';
import LiveRadio from '../components/LiveRadio/LiveRadio';
import UpcomingPodcasts from '../components/UpcomingPodcasts/UpcomingPodcasts';
import PreviousPodcasts from '../components/PreviousPodcasts/PreviousPodcasts';

const RadioAndPodcast = () => {
	return (
		<>
			<header className={styles.Header}>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Welcome</h1>
					<p>to Our Online Radio and Podcast Station</p>
				</div>
			</header>
			<section className={styles.LiveRadioSection}>
				<LiveRadio />
			</section>
			<section className={styles.PodcastSection}>
				<UpcomingPodcasts />
				<PreviousPodcasts />
			</section>
		</>
	)
}

export default RadioAndPodcast;