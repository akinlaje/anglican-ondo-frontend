import { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import WelcomeSection from '../components/WelcomeSection/WelcomeSection'
import ContactForm from '../components/ContactForm/ContactForm'
import RGDSection from '../components/RGDSection/RGDSection'
import TreasurySection from '../components/TreasurySection/TreasurySection'
import BookEventSection from '../components/BookEventSection/BookEventSection'

export default function Home() {
  const [amplitudeLoaded, setAmplitudeLoaded] = useState(false);

  useEffect(() => {
    if (!amplitudeLoaded) return
    Amplitude.init({
      "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
      },
      songs: [
        {
          "name": "Radio",
          "artist": "",
          "album": "",
          // "url": "https://sirius.shoutca.st:2199/start/anglicanondo",
          // "url": "https://sirius.shoutca.st:8445/index.html?sid=1",
          // "url": "https://sirius.shoutca.st:8445/index.html/stream",
          "url": "http://sirius.shoutca.st:8445/index.html/stream?type=http&nocache=1972",
          "cover_art_url": ""
        }
      ],
      playlists: {
        "radio": {
          songs: [0],
          title: 'Radio'
        } 
      },
    });
  console.log('Amplitude loaded');
  }, [amplitudeLoaded])

  return (
    <>
      <Script 
        type="text/javascript" 
        src="https://cdn.jsdelivr.net/npm/amplitudejs@5.2.0/dist/amplitude.js" 
        strategy='afterInteractive'
        onLoad={() => setAmplitudeLoaded(true)}
        onError={(e) => {
          console.log('Error: ', e);
        }}
      />
      <div className={styles.Container}>
        <Head>
          <title>Anglican Diocese of Ondo</title>
          <meta name="description" content="Anglican diocese of Ondo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <HomeHeader />
          <WelcomeSection />
          {/* <section class="section carousel-1-section"> */}
          {/*   <div class="carousel"> */}
          {/*     <div class="carousel-item"> */}
          {/*       <img class="carousel-1-item-image" /> */}
          {/*       <div> */}
          {/*         <h2 class="carousel-1-item-title">Archdeaconries</h2> */}
          {/*         <p> */}
          {/*           Check out the archdeaconries and the Archdeacons with the Churches under them and the Priest in Charge */}
          {/*         </p> */}
          {/*       </div> */}
          {/*     </div> */}
          {/*     <div class="carousel-indicator-wrapper"> */}
          {/*       <div  class="carousel-indicator"></div> */}
          {/*       <div  class="carousel-indicator"></div> */}
          {/*       <div  class="carousel-indicator active"></div> */}
          {/*       <div  class="carousel-indicator"></div> */}
          {/*       <div  class="carousel-indicator"></div> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </section> */}
          {/* <section class="section carousel-2-section"> */}
          {/*   <h2 class="section-heading">EVENTS</h2> */}
          {/*   <p class="carousel-2-section-subheading">Upcoming Events & Programs</p> */}
          {/*   <div class="carousel"> */}
          {/*     <div class="carousel-item"> */}
          {/*       <img class="carousel-2-item-image" /> */}
          {/*     </div> */}
          {/*     <div class="carousel-indicator-wrapper"> */}
          {/*       <div  class="carousel-indicator"></div> */}
          {/*       <div  class="carousel-indicator"></div> */}
          {/*       <div  class="carousel-indicator active"></div> */}
          {/*       <div  class="carousel-indicator"></div> */}
          {/*       <div  class="carousel-indicator"></div> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </section> */}
          <ContactForm />
          <RGDSection />
          <TreasurySection />
          <BookEventSection />
        </main>
      </div>
    </>
  )
}
