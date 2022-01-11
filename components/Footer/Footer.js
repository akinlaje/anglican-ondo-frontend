import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.LogoContainer}>
				<Image
					className={styles.Logo} 
					alt='Church Logo' 
					src='/images/diocese-logo.png' 
					height='60px'
					width='60px'
				/>
			</div>
			<div className={styles.Top}>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>News</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Events</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Blogs</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Synod</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Programs</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>Watch</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Youtube</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Radio</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Podcast</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Gallery</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>Give</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Payable Accounts</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Donate</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Dues</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Accounting System</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>Ministries</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Youth</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Children</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Women</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Men</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.FooterListWrapper}>
					<h3 className={styles.FooterListHeading}>Churches</h3>
					<ul className={styles.FooterList}>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Archdeaconries</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Archdeacons</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Parish Churches</a>
							</Link>
						</li>
						<li className={styles.FooterListItem}>
							<Link href='/'>
								<a className={styles.FooterLink}>Priests</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.Credit}>
				Made by{' '}
				<Link href='https://davakconsult.com.ng'>
					Davak Consult
				</Link>
			</div>
		</footer>
	)
}

export default footer;