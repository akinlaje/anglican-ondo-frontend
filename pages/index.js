import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import ContactForm from '../components/ContactForm/ContactForm';
import RGDSection from '../components/RGDSection/RGDSection';
import TreasurySection from '../components/TreasurySection/TreasurySection';
import BookEventSection from '../components/BookEventSection/BookEventSection';
import Carousel from '../components/Carousel/Carousel';

import axios from 'axios';
import { BASE_URL as apiBaseUrl } from '../utils';

export default function Home({ events = [] }) {
  return (
    <>
      <div className={styles.Container}>
        <Head>
          <title>Anglican Diocese of Ondo</title>
          <meta name='description' content='Anglican diocese of Ondo' />
          <meta
            httpEquiv='Content-Security-Policy'
            content='upgrade-insecure-requests'
          />
          <link rel='icon' href='/images/diocese-logo.png' />
        </Head>
        <main>
          <HomeHeader />
          <WelcomeSection />
          <section className={styles.CarouselSection}>
            <p className={[styles.CarouselItemHeading, styles.cs].join(' ')}>
              Our Archdeaconries
            </p>
            <Carousel className={styles.Carousel}>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselItemImageWrapper}>
                  <Image
                    className={styles.CarouselItemImage}
                    height='500px'
                    width='500px'
                    src='/images/ven11.jpeg'
                    alt='Logo'
                  />
                </div>
                <div className={styles.CarouselItemText}>
                  <h2 className={styles.CarouselItemHeading}>
                    Ven D.O. Akinyemi
                  </h2>
                  <p>Ondo North East</p>
                </div>
              </div>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselItemImageWrapper}>
                  <Image
                    className={styles.CarouselItemImage}
                    height='500px'
                    width='500px'
                    src='/images/ven2.jpeg'
                    alt='Logo'
                  />
                </div>
                <div className={styles.CarouselItemText}>
                  <h2 className={styles.CarouselItemHeading}>
                    Ven Dr. J.S. Ojewunmi
                  </h2>
                  <p>Ondo West</p>
                </div>
              </div>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselItemImageWrapper}>
                  <Image
                    className={styles.CarouselItemImage}
                    height='500px'
                    width='500px'
                    src='/images/ven4.jpeg'
                    alt='Logo'
                  />
                </div>
                <div className={styles.CarouselItemText}>
                  <h2 className={styles.CarouselItemHeading}>Ven. J.O. Ese</h2>
                  <p>Ondo</p>
                </div>
              </div>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselItemImageWrapper}>
                  <Image
                    className={styles.CarouselItemImage}
                    height='500px'
                    width='500px'
                    src='/images/ven5.jpeg'
                    alt='Logo'
                  />
                </div>
                <div className={styles.CarouselItemText}>
                  <h2 className={styles.CarouselItemHeading}>
                    Ven. S.O. Abajingin
                  </h2>
                  <p>Araromi Obu</p>
                </div>
              </div>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselItemImageWrapper}>
                  <Image
                    className={styles.CarouselItemImage}
                    height='500px'
                    width='500px'
                    src='/images/ven6.jpeg'
                    alt='Logo'
                  />
                </div>
                <div className={styles.CarouselItemText}>
                  <h2 className={styles.CarouselItemHeading}>
                    Ven. S.O. Adeloye
                  </h2>
                  <p>Cathedral</p>
                </div>
              </div>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselItemImageWrapper}>
                  <Image
                    className={styles.CarouselItemImage}
                    height='500px'
                    width='500px'
                    src='/images/ven7.jpeg'
                    alt='Logo'
                  />
                </div>
                <div className={styles.CarouselItemText}>
                  <h2 className={styles.CarouselItemHeading}>
                    Ven. S.O. Ogunmiluyi
                  </h2>
                  <p>Ondo North</p>
                </div>
              </div>
              <div className={styles.CarouselItem}>
                <div className={styles.CarouselItemImageWrapper}>
                  <Image
                    className={styles.CarouselItemImage}
                    height='500px'
                    width='500px'
                    src='/images/ven3.jpeg'
                    alt='Logo'
                  />
                </div>
                <div className={styles.CarouselItemText}>
                  <h2 className={styles.CarouselItemHeading}>
                    Ven. Dr. S.O. Olowosusi
                  </h2>
                  <p>Ajue</p>
                </div>
              </div>
            </Carousel>
          </section>
          <section
            className={[styles.CarouselSection, styles.EventSection].join(' ')}
          >
            <h2 className={styles.EventCarouselTitle}>
              Upcoming Events and Programs
            </h2>
            {events.length ? (
              <Carousel
                className={[styles.Carousel, styles.EventCarousel].join(' ')}
                indicatorColor='var(--pri)'
                iconClassName={[styles.NextIcon, styles.EventCarouselIcon].join(
                  ' '
                )}
              >
                {events.map((event, i) => {
                  return (
                    <div key={i} className={styles.EventCarouselItem}>
                      <div className={styles.EventImageWrapper}>
                        <Image
                          className={styles.EventsImage}
                          layout='fill'
                          objectFit='contain'
                          src={event.imageUrl}
                          alt={event.title}
                        />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            ) : (
              <h3 style={{ textAlign: 'center' }}>
                No Upcoming Events at the moment
              </h3>
            )}
          </section>
          <ContactForm />
          <RGDSection />
          <TreasurySection />
          <BookEventSection />
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(apiBaseUrl);
  // get upcoming events here
  const {
    data: { msg: events },
  } = await axios.get(apiBaseUrl + 'read/events');
  console.log(events);

  return {
    props: {
      events,
    },
  };
}
