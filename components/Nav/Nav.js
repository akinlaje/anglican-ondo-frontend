import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Nav.module.css';
import { FaSearch as SearchIcon } from 'react-icons/fa';

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const router = useRouter();

	const openMenu = () => {
		if (menuOpen) return
		setMenuOpen(true)
	}

	const closeMenu = () => {
		if (!menuOpen) return
		setMenuOpen(false)
	}

	const topLinks = [
		{
			href: '/find-church',
			display: 'Find a Church'
		},
		{
			href: '/redress',
			display: 'Redress'
		},
		{
			href: '/#contact-us',
			display: 'Contact Us'
		},
		{
			href: '/clergy',
			display: 'Clergy Men'
		},
	]

	const bottomLinks = [
		{
			href: '/events',
			display: 'Life Events'
		},
		{
			href: '/news-and-events',
			display: 'News & Events'
		},
		{
			href: '/about',
			display: 'About the Diocese'
		},
		{
			href: '/women',
			display: 'Women[M.U & W.G]'
		},
		{
			href: '/meet-bishop',
			display: 'Meet the Bishop'
		},
	]

	return (	
		<nav 
			className={[
				styles.Nav,
				menuOpen ? styles.OpenMenu : ''
			].join(' ')}>
			{ menuOpen && <div className={styles.Backdrop} onClick={closeMenu}></div> }
			<Link href='/'>
				<a className={styles.NavBrandLink}>
					<div className={styles.NavBrand}>
					<div className={styles.NavBrandImgWrapper}>
						<Image 
							className={styles.NavBrandImg} 
							alt='Church Logo' 
							src='/images/diocese-logo.png' 
							height='60px'
							width='60px'
						/>
					</div>
					<div className={styles.NavBrandText}>
						DIOCESE OF ONDO
						<div>[Anglican Communion]</div>
					</div>
				</div>
				</a>
			</Link>
			<div className={styles.NavInner}>
				<div className={styles.NavMenuCloser} onClick={closeMenu}></div>
				<div className={styles.Top}>
					<ul className={styles.TopNavItemsList}>
						
						{/* 	<NavLink  */}
						{/* 		onClick={() => setMenuOpen(false)} */}
						{/* 		to='/find-church' */}
						{/* 		className={({ isActive }) => [ */}
				  {/*       	styles.TopNavLink, */}
				  {/*       	isActive ? styles.Active : '' */}
				  {/*       ].join(' ')} */}
						{/* 	>Find a Church</NavLink> */}
						{/* </li> */}
							{topLinks.map(({ href, display }) => {
								const isActive = router.pathname === href;
								return (
									<li key={display} className={styles.TopNavItem}>
										<Link href={href} >
											<a 
												onClick={() => setMenuOpen(false)}
												className={[
													styles.TopNavLink, 
													isActive ? styles.Active : ''
												].join(' ')}
											>
												{display}
											</a>
										</Link>
									</li>
								)
							})}
					</ul>
				</div>
				<div className={styles.Bottom}>
					<div className={styles.NavSearch}>
						<input className={styles.NavSearchInput} placeholder="Search" />
						<button className={styles.NavSearchButton}>
							<SearchIcon size='1.3em' className={styles.NavSearchIcon} alt='Search Icon' />
						</button>
					</div>
					<ul className={styles.NavItemsList}>
						{bottomLinks.map(({ href, display }) => {
							const isActive = router.pathname === href;
							return (
								<li key={display} className={styles.NavItem}>
									<Link 
										href={href}
									>
										<a
											onClick={() => setMenuOpen(false)}
											className={[
							        	styles.NavLink,
							        	isActive ? styles.Active : ''
							        ].join(' ')}
										>
											{display}										
										</a>
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			<div className={styles.NavMenuOpener} onClick={openMenu}>
				<div className={styles.Bar}></div>
				<div className={styles.Bar}></div>
				<div className={styles.Bar}></div>
			</div>
		</nav>
	)
}

export default Nav;