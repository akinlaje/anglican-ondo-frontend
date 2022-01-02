import { BsPlayFill as PlayIcon, BsPauseFill as PauseIcon } from 'react-icons/bs'
import styles from './PlayPauseButton.module.css'

const PlayPauseButton = ({ amplitudeSongIndex, amplitudePlaylistName, className, iconClassName }) => {
	return (
		<button 
			className={["amplitude-play-pause", className].join(' ')}
			data-amplitude-song-index={amplitudeSongIndex}
			data-amplitude-playlist={amplitudePlaylistName}
		>
			<PlayIcon color='#fff' size='2em' className={["play-img", iconClassName].join(' ')} />
			<PauseIcon color='#fff' size='2em'className={["pause-img", iconClassName].join(' ')}  />
		</button>
	)
}

export default PlayPauseButton