import Link from 'next/link';
import styles from '../../styles/NewsAndEvents.module.css';
import Article from '../../components/Article/Article';

const NewsAndEvents = ({ news }) => {
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
					<h2 className={styles.SubHeading}>NEWS</h2>
					<Link href='/'>
					<a className={styles.SeeAllLink}>See all News</a>
					</Link>
				</div>
				<div className={styles.ArticleWrapper}>
					{news.map((article, i) => {
						return (
							<Article key={i} {...article} />
						)
					})}
				</div>
			</section>
		</>
	)
}

export default NewsAndEvents;

export async function getServerSideProps (context) {

	const { data: { msg: news } } = await axios.get(apiBaseUrl + 'read/news')

  return {
    props: {
      news
    }
  }

}