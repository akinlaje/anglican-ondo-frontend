import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Women.module.css';

const Women = () => {
	return (
		<>
			<header className={styles.Header}>
        <Head>
          <title>Women | Anglican Diocese of Ondo</title>
          <meta name="description" content="Anglican diocese of Ondo Women" />
          <link rel="icon" href="/images/diocese-logo.png" />
        </Head>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>Women</h1>
					<p className={styles.HeadingText}>
						Women union and women guild
					</p>
				</div>
			</header>
			<section>
				<h2 className={styles.SectionHeading}>MOTHERS UNION</h2>
				<div className={styles.Articles}>
					<div className={styles.Article}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Our Vision</h2>
							<p className={styles.Content}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' alt='Women' src='/images/women.png'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.Article}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Our Mission</h2>
							<p className={styles.Content}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' alt='Women' src='/images/women.png'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.Article}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Our Works</h2>
							<p className={styles.Content}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' alt='Women' src='/images/women.png'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.Article}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>News and Events</h2>
							<p className={styles.Content}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' alt='Women' src='/images/women.png'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section>
				<h2 className={styles.SectionHeading}>MOTHERS UNION</h2>
				<div className={styles.Articles}>
					<div className={styles.Article}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Our Vision</h2>
							<p className={styles.Content}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' alt='Women' src='/images/women.png'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.Article}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Our Mission</h2>
							<p className={styles.Content}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' alt='Women' src='/images/women.png'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.Article}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Our Works</h2>
							<p className={styles.Content}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' alt='Women' src='/images/women.png'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.Article}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Events</h2>
							<p className={styles.Content}>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore
								magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' alt='Women' src='/images/women.png'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Women;