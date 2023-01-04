import { Comments } from "../Comments"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { VideoContainer } from "../VideoContainer"
import './styles.css'

export const Layout = () => {
	return <div>
		<Header />
		<div className="layout-content">
			<VideoContainer embedId={'u_pnia4Xhlw'} title="10 часов режу воду" />
			<Comments />
		</div>
		<Footer />
	</div>
}