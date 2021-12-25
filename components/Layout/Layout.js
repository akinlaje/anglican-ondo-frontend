import styles from './Layout.module.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const layout = ({ children }) => {
	return (
		<>
			<Nav />
				<main className={styles.Main}>
					{ children }
				</main>
			<Footer />
		</>
	)
}

export default layout;