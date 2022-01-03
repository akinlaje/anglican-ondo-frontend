import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/About.module.css';

const About = () => {
	return (
		<>
			<header className={styles.Header}>
        <Head>
          <title>About | Anglican Diocese of Ondo</title>
          <meta name="description" content="About the Anglican diocese of Ondo" />
          <link rel="icon" href="/images/diocese-logo.png" />
        </Head>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>About the Church</h1>
					<p className={styles.HeadingText}>
						Learn more about the Church - our services, history and our values
					</p>
				</div>
			</header>
			<section>
				<div className={styles.AboutArticles}>
					<div className={styles.AboutArticle}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Our Vision</h2>
							<p className={styles.Content}>
								{`To be a leading Diocese in the Church of Nigeria (Anglican Communion)
								in the proclamation of the Gospel and populating of God's Kingdom`}
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' src='/images/church.jpeg' alt='Church'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.AboutArticle}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Our Mission</h2>
							<p className={styles.Content}>
								A &apos;Cruce Salus&apos; (safety of the cross) is our watchword and will continue to be 
								our guide.
							</p>
							<p className={styles.Content}>
								We shall point the way to the Cross of Christ; the source of our Salvation.
							</p>
							<p className={styles.Content}>
								We shall through lip and life endeavour to proclaim our Risen Lord Jesus to every
								 land and clime through the spread of the Good News.
							</p>
							<p className={styles.Content}>
								We shall focus on Missions and Evangelism.
							</p>
							<p className={styles.Content}>
								We shall motivate and inspire all to fulfill their God-given potentials.
							</p>
							<p className={styles.Content}>
								We shall seek to lead people to our ultimate goal, i. e. tomake heaven as they seek things
								 that are above and not below.
							</p>
						</div>
						<div className={styles.Image}>
							<Image layout='fill' objectFit='cover' src='/images/church.jpeg' alt='Church'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.AboutArticle}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>Ministery</h2>
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
							<Image layout='fill' objectFit='cover' src='/images/church.jpeg' alt='Church'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.AboutArticle}>
						<div className={styles.ArticleInfo}>
							<h2 className={styles.ContentHeading}>History</h2>
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
							<Image layout='fill' objectFit='cover' src='/images/church.jpeg' alt='Church'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.AboutArticle}>
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
							<Image layout='fill' objectFit='cover' src='/images/church.jpeg' alt='Church'/>
						</div>
						<div className={styles.Bottom}>
							<Link href='/'>
								<a>Read More</a>
							</Link>
						</div>
					</div>
					<div className={styles.AboutArticle}>
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
							<Image layout='fill' objectFit='cover' src='/images/church.jpeg' alt='Church'/>
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

export default About;