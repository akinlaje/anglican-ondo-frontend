import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './AdminLayout.module.css';

const Sidebar = ({ admin, router }) => {

	const pathnames = ['home', 'news', 'events', 'women', 'gallery', 'radio', 'churches', 'priests', 'members'];

	const capitalize = ([firstLetter, ...rest]) => firstLetter.toUpperCase() + rest.join('');

	return (
		<nav className={styles.Sidebar}>
			<h1 className={styles.SidebarHeading}>
				WELCOME{' '}{admin?.id ? admin.username : 'ADMIN'}
			</h1>
			<ul className={styles.SidebarInner}>
				{pathnames.map(pathname => {
					const isActive = router.pathname === ('/admin/' + pathname);
					return (
						<li 
							key={pathname} 
							className={styles.SidebarItem}>
							<Link 
								href={pathname}
							>
								<a
									className={[
							        	styles.SidebarLink,
							        	isActive ? styles.Active : ''
							        ].join(' ')}
							   	>
									{ capitalize(pathname).replace(' ', '-') }								
								</a>
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

const AdminLayout = ({ children, admin }) => {
	const router = useRouter();

	let hideSidebar;
	if (router.pathname === '/admin/login') {
		hideSidebar = true;
	}

	let style = {}
	if (hideSidebar) {
		style = {
			marginLeft: '0px'
		}
	}
	return (
		<div className={styles.Container}>
			{/* <Nav /> */}
			{!hideSidebar && <Sidebar admin={admin} router={router} />}
			<main 
				style={style}
				className={styles.Main}>
				{ children }
			</main>
		</div>
	)
}

export default AdminLayout;