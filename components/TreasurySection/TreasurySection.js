import { useRouter } from 'next/router';
import styles from './TreasurySection.module.css';

const TreasurySection = () => {
  const router = useRouter();

  const treasury = () => router.push('/treasury');

  return (
    <section className={styles.TreasurySection}>
      <h2
        className={[styles.SectionHeading, styles.TreasurySectionHeading].join(
          ' '
        )}
      >
        <span>DIOCESAN TREASURY</span>
      </h2>
      <ol className={styles.TreasuryList}>
        <li className={styles.TreasuryItem}>
          <div
            className={[styles.TreasuryItemText, styles.TextCenter].join(' ')}
          >
            Payable accounts
          </div>
          <button
            className={styles.TreasuryItemButton}
            onClick={() => treasury()}
          >
            View
          </button>
        </li>
        <li className={styles.TreasuryItem}>
          <div
            className={[styles.TreasuryItemText, styles.TextCenter].join(' ')}
          >
            Accounting system
          </div>
          <button className={styles.TreasuryItemButton}>Download</button>
        </li>
        <li className={styles.TreasuryItem}>
          <div
            className={[styles.TreasuryItemText, styles.TextCenter].join(' ')}
          >
            Donate
          </div>
          <button className={styles.TreasuryItemButton}>Donate</button>
        </li>
      </ol>
    </section>
  );
};

export default TreasurySection;
