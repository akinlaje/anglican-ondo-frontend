
const CustomPlayButton = ({ className }) => {
	return (
		<button 
			id="playButton" 
			className={["amplitude-play-pause header-play-button", className].join(' ')} 
			data-amplitude-song-index="0" 
			data-amplitude-playlist="radio"
		>
			<div className="play-pause-img-container">
				<div className="control-button-background">
					<img className="play-img control-button" src="/images/svgs/play.svg" />
					<img  className="pause-img control-button" src="/images/svgs/pause.svg" />
				</div>
			</div>
		</button>
	)
}

export default CustomPlayButton;