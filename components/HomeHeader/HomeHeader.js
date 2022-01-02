// import Image from 'next/image'
import Link from 'next/router'
import styles from './HomeHeader.module.css';
import CustomPlayButton from '../CustomPlayButton/CustomPlayButton';

const HomeHeader = () => {
  const router = useRouter()

	return (
    <header className={styles.Header}>
      <div className={styles.HeaderInner}>
        <h1>PLACE OF WORSHIP</h1>
        <p className={styles.HeaderText}>Worship with Us</p>
        <div className={styles.HeaderButtons}>
          <Link href='/find-church'>
            <a className={styles.HeaderButton} >
              <img 
                src='/images/svgs/location.svg' 
                className={styles.ButtonIcon} 
                alt='find a church' 
                height='24px'
                width='24px'
              />
              Find a Church
            </a>
          </Link>
          <CustomPlayButton className={styles.PlayPauseButton} />
        </div>
        <div className={styles.Socials}>
          <img 
            className={styles.SocialIcon} 
            src='/images/svgs/facebook.svg' 
            height='24px'
            width='24px'
          />
          <img 
            className={styles.SocialIcon} 
            src='/images/svgs/instagram.svg' 
            height='24px'
            width='24px'
          />
          <img 
            className={styles.SocialIcon} 
            src='/images/svgs/twitter.svg' 
            height='24px'
            width='24px'
          />
          <img 
            className={[styles.SocialIcon, styles.YTIcon].join(' ')} 
            src='/images/svgs/youtube.svg' 
            height='24px'
            width='24px'
          />
        </div>
      </div>
    </header>
	)
}

export default HomeHeader