import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './AdminLayout.module.css';
import { 
	AiOutlineClose as CloseIcon,
	AiOutlineMenu as MenuIcon, 
} from 'react-icons/ai'

const Sidebar = ({ admin, router, closeSidebar, open, openSidebar }) => {
	const pathnames = [
	'home', 'news', 'events', 'women', 'gallery', 'radio', 'churches', 'priests', 'members'];

	const capitalize = ([firstLetter, ...rest]) => firstLetter.toUpperCase() + rest.join('');

	return (
		<>
			{open && <div className={styles.Backdrop} onClick={closeSidebar}></div>}
			<nav 
				className={[styles.Sidebar, open ? styles.Open : ''].join(' ')} 
			>
				<div 
					className={styles.NavMenuOpener} 
				>
					{open ? (
						<CloseIcon 
							color='#fff' 
							size='2em' 
							onClick={closeSidebar} 
						/>
					) : (
						<MenuIcon 
							color='var(--pri)' 
							size='2em' 
							onClick={openSidebar} 
						/>
					)}
				</div>
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
										onClick={closeSidebar}
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
		</>
	)
}

const AdminLayout = ({ children, admin }) => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		console.log(open)
	}, [open])

	const router = useRouter();

	const openSidebar = () => setOpen(true)
	const closeSidebar = () => setOpen(false)

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
			{!hideSidebar && (
				<>
					<Sidebar 
						admin={admin} 
						router={router} 
						openSidebar={openSidebar}
						closeSidebar={closeSidebar} 
						open={open}
					/>
				</>
			)}
			<main 
				style={style}
				className={styles.Main}>
				{ children }
			</main>
		</div>
	)
}

export default AdminLayout;