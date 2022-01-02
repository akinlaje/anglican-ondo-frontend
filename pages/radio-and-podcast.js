// import { useState, useEffect } from 'react'
import styles from '../styles/RadioAndPodcast.module.css';
import LiveRadio from '../components/LiveRadio/LiveRadio';
import UpcomingPodcasts from '../components/UpcomingPodcasts/UpcomingPodcasts';
import PreviousPodcasts from '../components/PreviousPodcasts/PreviousPodcasts';
// import cloneDeep from 'lodash/cloneDeep';

const RadioAndPodcast = ({ liveProgram={}, upcomingPrograms=[], upcomingPodcasts=[], previousPodcasts=[] }) => {
// 	const [liveProgram, setLiveProgram] = useState(props.liveProgram)
// 
// 	const { upcomingPrograms, setAmplitudeData, amplitudeData } = props
	
// 	useEffect(() => {
// 		setAmplitudeData(data => {
// 			const { bindings, songs, playlists } = data
// 			const addToAmplitudeData = (program) => {
// 				const { anchor, streamUrl } = program
// 				const title = program.title.replaceAll(' ', '_')
// 				const newSongs = [
// 					{
// 		        "name": title,
// 		        "artist": anchor,
// 		        "album": "",
// 		        "url": streamUrl,
// 		        "cover_art_url": ""
// 		      }
// 				]
// 
// 				const songIndex = songs.length
// 
// 				const newPlaylists = {
// 		      [title]: {
// 		        songs: [songIndex],
// 		        title,
// 		      } 
// 		    }
// 		    return { songIndex, playlistName: title, newSongs, newPlaylists }
// 			}
// 
// 			const { songIndex, playlistName, newSongs, newPlaylists } = addToAmplitudeData(props.liveProgram)
// 
// 	    setLiveProgram(v => ({
// 	    	...v,
// 	    	amplitudeSongIndex: songIndex, 
// 	    	amplitudePlaylistName: playlistName,
// 	    }))
// 			return {
// 				bindings: cloneDeep(bindings),
// 				songs: [...cloneDeep(songs), ...newSongs],
// 				playlists: {
// 					...cloneDeep(playlists),
// 					...newPlaylists
// 				}
// 			}
// 		})
// 	}, [])

	return (
		<>
			<header className={styles.Header}>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Welcome</h1>
					<p>to Our Online Radio and Podcast Station</p>
				</div>
			</header>
			<section className={styles.LiveRadioSection}>
				<LiveRadio liveProgram={liveProgram} upcomingPrograms={upcomingPrograms} />
			</section>
			<section className={styles.PodcastSection}>
				<UpcomingPodcasts upcomingPodcasts={upcomingPodcasts} />
				<PreviousPodcasts previousPodcasts={previousPodcasts} />
			</section>
		</>
	)
}

export default RadioAndPodcast;

export async function getServerSideProps (context) {

  // get live and upcoming programs and podcasts events here

	const liveProgram = {
		id: '1',
		title: 'The efficacy of the holy spirit',
		anchor: 'The Rt. Revd. S. A. Oni',
		image: '/images/ae.jpg',
		amplitudePlaylistName: 'radio',
		amplitudeSongIndex: '0' 
	}

	const upcomingPrograms = [
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg'
		}
	]

	const upcomingPodcasts = [
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
		{
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0'
		},
	]

	const previousPodcasts = [
		{
			id: '1',
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0' 
		},
		{
			id: '1',
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0' 
		},
		{
			id: '1',
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0' 
		},
		{
			id: '1',
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0' 
		},
		{
			id: '1',
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0' 
		},
		{
			id: '1',
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0' 
		},
		{
			id: '1',
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0' 
		},
		{
			id: '1',
			title: 'The efficacy of the holy spirit',
			anchor: 'The Rt. Revd. S. A. Oni',
			image: '/images/ae.jpg',
			amplitudePlaylistName: 'radio',
			amplitudeSongIndex: '0' 
		},
	]

  return {
    props: {
      liveProgram, upcomingPrograms, upcomingPodcasts, previousPodcasts
    }
  }

}