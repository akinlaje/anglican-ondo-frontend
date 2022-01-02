import Image from 'next/image' 
import Link from 'next/link';
import styles from './Article.module.css';

const Article = ({ id, title, details, image, date, time }) => {
	return (
		<div className={styles.Container}>
			<div className={styles.Info}>
				<div>News</div>
				<p className={styles.Desc}>{title}</p>
				<div>{date}</div>
			</div>
			<div className={styles.Image}>
				<Image alt='article' src={'/uploads/' + image} layout='fill' objectFit='contain' />
			</div>
			<div className={styles.Bottom}>
				<Link href={'/new-and-events/' + id}>
					<a>Read More</a>
				</Link>
			</div>
		</div>
	)
}

export default Article;