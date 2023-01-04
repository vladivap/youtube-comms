import './styles.css'
import { YoutubeEmbed } from "../YoutubeEmbed"

export const VideoContainer = ({ embedId, title }) => {
	return <div className="video-container">
		<YoutubeEmbed embedId={embedId} title={title} />
		<h3 className='video-title'>*тут должно быть название*</h3>
	</div>
}