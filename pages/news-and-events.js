import styles from '../styles/NewsAndEvents.module.css';
import Article from '../components/Article/Article';

const NewsAndEvents = () => {
	return (
		<>
			<header className={styles.Header}>
				<div className={styles.HeaderInner}>
					<h1 className={styles.Heading}>News & Events</h1>
					<p>Your source for all the latest news and events from within the diocese</p>
				</div>
			</header>
			<section>
				<div className={styles.SubHeadingWrapper}>
					<h2 className={styles.SubHeading}>LATEST NEWS</h2>
					<a href='/'>See all News</a>
				</div>
				<div className={styles.ArticleWrapper}>
					{[...Array(3)].map((article, i) => {
						return (
							<Article key={i} />
						)
					})}
				</div>
			</section>
			<section>
				<div className={styles.SubHeadingWrapper}>
					<h2 className={styles.SubHeading}>LATEST NEWS</h2>
					<a href='/'>See all News</a>
				</div>
				<div className={styles.ArticleWrapper}>
					{[...Array(3)].map((article, i) => {
						return (
							<Article key={i} />
						)
					})}
				</div>
			</section>
			<section>
				<div className={styles.SubHeadingWrapper}>
					<h2 className={styles.SubHeading}>WHATS ON?</h2>
					<a href='/'>See all News</a>
				</div>
				<div className={styles.ArticleWrapper}>
					{[...Array(3)].map((article, i) => {
						return (
							<Article key={i} />
						)
					})}
				</div>
			</section>
		</>
	)
}

export default NewsAndEvents;