import Link from 'next/link';
import styles from '../../styles/NewsAndEvents.module.css';
import Article from '../../components/Article/Article';

const NewsAndEvents = ({ latestNews, whatsOn }) => {
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
					<Link href='/'>
					<a className={styles.SeeAllLink}>See all News</a>
					</Link>
				</div>
				<div className={styles.ArticleWrapper}>
					{latestNews.map((article, i) => {
						return (
							<Article key={i} {...article} />
						)
					})}
				</div>
			</section>
			<section>
				<div className={styles.SubHeadingWrapper}>
					<h2 className={styles.SubHeading}>WHATS ON?</h2>
					<Link href='/'>
					<a className={styles.SeeAllLink}>See all News</a>
					</Link>
				</div>
				<div className={styles.ArticleWrapper}>
					{whatsOn.map((article, i) => {
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
  console.log(news);
  // get latest news and whats on here

  const latestNews = [
    {
      id: '1',
      title: 'Lorem Ipsum...Lorem Ipsum...',
      image: '/images/ae.jpg',
    },
    {
      id: '2',
      title: 'Lorem Ipsum...Lorem Ipsum...',
      image: '/images/ae.jpg',
    },
    {
      id: '3',
      title: 'Lorem Ipsum...Lorem Ipsum...',
      image: '/images/ae.jpg',
    },
  ]

  const whatsOn = [
    {
      id: '1',
      title: 'Lorem Ipsum...Lorem Ipsum...',
      details: `Lorem ipsum dolor sit amet, consetetur sadipscing
		elitr, sed diam nonumy eirmod tempor invidunt ut
		labore et dolore magna aliquyam erat, sed diam
		voluptua. At vero eos et accusam et justo duo dolores
		et ea rebum. Stet clita kasd gubergren, no sea`,
      image: '/images/ae.jpg',
      date: '13th December, 2021',
      time: '10:00 pm',
      location: 'ST. Stephen Cathedral'
    },
    {
      id: '2',
      title: 'Lorem Ipsum...Lorem Ipsum...',
      details: `Lorem ipsum dolor sit amet, consetetur sadipscing
		elitr, sed diam nonumy eirmod tempor invidunt ut
		labore et dolore magna aliquyam erat, sed diam
		voluptua. At vero eos et accusam et justo duo dolores
		et ea rebum. Stet clita kasd gubergren, no sea`,
      image: '/images/ae.jpg',
      date: '13th December, 2021',
      time: '10:00 pm',
      location: 'ST. Stephen Cathedral'
    },
    {
      id: '3',
      title: 'Lorem Ipsum...Lorem Ipsum...',
      details: `Lorem ipsum dolor sit amet, consetetur sadipscing
		elitr, sed diam nonumy eirmod tempor invidunt ut
		labore et dolore magna aliquyam erat, sed diam
		voluptua. At vero eos et accusam et justo duo dolores
		et ea rebum. Stet clita kasd gubergren, no sea`,
      image: '/images/ae.jpg',
      date: '13th December, 2021',
      time: '10:00 pm',
      location: 'ST. Stephen Cathedral'
    },
  ]

  return {
    props: {
      latestNews, whatsOn
    }
  }

}