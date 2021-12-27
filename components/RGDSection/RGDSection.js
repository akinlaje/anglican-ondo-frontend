import Link from 'next/link';
import styles from './RGDSection.module.css';

const RGDSection = () => {

	return (
		<section className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.Item}>
          <Link href='radio'>
            <a 
              className={styles.ImageWrapper}
            >
              <img className={styles.Image} src="/images/svgs/radio.svg" />
            </a>
          </Link>
          <h3 className={styles.Heading}>Radio</h3>
          <p className={styles.Text}>
            Listen to our Radio Programs, Sermon,
            interactive sessions and many more
          </p>
        </div>
        <div className={styles.Item}>
          <Link href='/gallery'>
            <a 
              className={[
                styles.ImageWrapper,
                styles.Gallery
              ].join(' ')}
            >
              <img style={{ paddingTop: '20px' }} className={styles.Image} src="/images/svgs/image.svg" />
            </a>
          </Link>
          <h3 className={styles.Heading}>Gallery</h3>
          <p className={styles.Text}>
            Explore the Dioceses Previous Events,
            Ceremonies, Programs, Synods,
            Conventions and many more
          </p>
        </div>
        <div className={styles.Item}>
          <Link href='/download'>
            <a  
              style={{
                backgroundPositionX: 'right'
              }} 
              className={styles.ImageWrapper}
            >
              <img className={styles.Image} src="/images/svgs/cloud-download.svg" />
            </a>
          </Link>
          <h3 className={styles.Heading}>Download</h3>
          <p className={styles.Text}>
            Download Sermon, Exhortations and
            word of Knowledge that will enrich
            your soul
          </p>
        </div>
      </div>
    </section>
	)
}

export default RGDSection;