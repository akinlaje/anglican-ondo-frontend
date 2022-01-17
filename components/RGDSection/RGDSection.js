import Image from 'next/image'
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
              <Image layout='fill' objectFit='cover' alt='radio' src="/images/radio-RGD.png" />
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
              <Image layout='fill' objectFit='cover' alt='gallery' style={{ paddingTop: '20px' }} src="/images/gallery-RGD.png" />
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
              <Image layout='fill' objectFit='cover' alt='download' src="/images/download-RGD.png" />
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