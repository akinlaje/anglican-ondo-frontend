import styles from './BookEventSection.module.css';

const BookEventSection = () => {
	return (
		<section className={styles.BookEventSection}>
      <div className={styles.BookEvent}>
        <h2 className={styles.BookEventHeading}>
          BOOK OUR EVENT
          <div className={styles.BookEventHeadingStyledText}>CENTER</div>
        </h2>
        <p className={styles.BookEventText}>
          Do you have an Upcoming event or Program, You can
          book the diocese event center and get the utmost
          Satisfaction for your events.
        </p>
      </div>
    </section>
	)
}

export default BookEventSection;