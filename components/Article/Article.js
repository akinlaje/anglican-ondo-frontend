import styles from './Article.module.css';

const Article = () => {
	return (
		<div className={styles.Container}>
			<div className={styles.Info}>
				<div>News</div>
				<p className={styles.Desc}>Lorem Ipsum... Lorem Ipsum...</p>
				<div>Dec 2, 2021</div>
			</div>
			<img alt='article' className={styles.Image} />
			<div className={styles.Bottom}>
				<a href='/'>Read More</a>
			</div>
		</div>
	)
}

export default Article;