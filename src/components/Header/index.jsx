import './styles.css'

const LOGO_LINK = process.env.PUBLIC_URL + '/logo.png' 

export const Header = () => {
	return <header className="header-container">
		<img className='header-logo' src={LOGO_LINK} alt="Youpoop logo" />
		<h1 className='header-title'>
			Youpoop
		</h1>
	</header>
}