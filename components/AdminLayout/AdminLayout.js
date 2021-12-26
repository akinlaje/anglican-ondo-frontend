import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './AdminLayout.module.css';

const Sidebar = ({ admin }) => {
	const router = useRouter();

	const pathNames = ['home', 'news', 'events', 'women', 'gallery', 'radio', 'churches', 'priests', 'members'];

	const capitalize = ([firstLetter, ...rest]) => firstLetter.toUpperCase() + rest.join('');

	return (
		<nav className={styles.Sidebar}>
			<h1 className={styles.SidebarHeading}>
				WELCOME{' '}{admin?.id ? admin.username : 'ADMIN'}
			</h1>
			<ul className={styles.SidebarInner}>
				{pathNames.map(pathName => {
					const isActive = router.pathname === ('/admin/' + pathName);
					return (
						<li 
							key={pathName} 
							className={styles.SidebarItem}>
							<Link 
								href={pathName}
							>
								<a
									className={[
							        	styles.SidebarLink,
							        	isActive ? styles.Active : ''
							        ].join(' ')}
							   	>
									{ capitalize(pathName).replace(' ', '-') }								
								</a>
							</Link>
						</li>
					)
				})}
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