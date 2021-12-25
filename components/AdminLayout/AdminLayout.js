import Link from 'next/link';
import styles from './AdminLayout.module.css';

const Sidebar = () => {
	const pageNames = ['home', 'news', 'events', 'women', 'gallery', 'radio', 'churches', 'priests', 'members'];

	const capitalize = ([firstLetter, ...rest]) => firstLetter.toUpperCase() + rest.join('');

	return (
		<nav className={styles.Sidebar}>
			<h1 className={styles.SidebarHeading}>WELCOME ADMIN</h1>
			<ul className={styles.SidebarInner}>
				{pageNames.map(pageName => (
					<li 
						key={pageName} 
						className={styles.SidebarItem}>
						<Link 
							href={pageName}
							className={({ isActive }) => [
			        	styles.SidebarLink,
			        	isActive ? styles.Active : ''
			        ].join(' ')}
						>
							<a>
								{ capitalize(pageName).replace(' ', '-') }								
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

const AdminLayout = ({ children }) => {
	return (
		<div className={styles.Container}>
			{/* <Nav /> */}
			<Sidebar />
			<main className={styles.Main}>
				{ children }
			</main>
		</div>
	)
}

export default AdminLayout;