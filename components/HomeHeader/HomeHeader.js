// import Image from 'next/image'
import Link from 'next/link';
import styles from './HomeHeader.module.css';
import CustomPlayButton from '../CustomPlayButton/CustomPlayButton';
import { GoLocation as LocationIcon } from 'react-icons/go'

const HomeHeader = () => {
  // const router = useRouter()

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderInner}>
        <h1>PLACE OF WORSHIP</h1>
        <p className={styles.HeaderText}>Worship with Us</p>
        <div className={styles.HeaderButtons}>
          <Link href='/find-church'>
            <a className={styles.HeaderButton}>
              <LocationIcon
                color='#fff'
                className={styles.ButtonIcon}
                size='24px'
              />
              Find a Church
            </a>
          </Link>
          <CustomPlayButton className={styles.PlayPauseButton} />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
