import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
  return (
    <section className={[styles.Section, styles.WelcomeSection].join(' ')}>
      <h2 className={styles.SectionHeading}>WELCOME TO OUR OFFICIAL WEBSITE</h2>
      <p className={styles.WelcomeText}>
        <em>
          You are most welcome to the official website of the Diocese of Ondo
          (Anglican Communion). We are in the age of information where
          communication has been so enhanced by technology such that information
          flies within a twinkle of an eye to every nook and cranny of the
          globe.
        </em>
      </p>
      <p className={styles.WelcomeText}>
        <em>
          Our Diocese, one of the foremost and oldest Dioceses in Nigeria, is
          not lagging behind in terms of using technology to promote the Gospel
          and disseminate information. On our website, you will get to know more
          about our Diocese, our Vision and Mission statements, our core values
          and other necessary and sufficient information you need to know.
          Furthermore, news updates, online radio broadcast, live streamed
          videos of events in the Diocese and our periodicals shall be showcased
          and readily updated on this unique website.
        </em>
      </p>
      <div>
        <b>+ Rt. Revd. Stephen Adeniran Oni. PhD, Mcasson</b>
      </div>
    </section>
  );
};

export default WelcomeSection;
