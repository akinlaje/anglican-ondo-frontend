import { useState, useEffect } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout'
import AdminLayout from '../components/AdminLayout/AdminLayout'
import AdminRouteGuard from '../components/AdminRouteGuard/AdminRouteGuard'
import '../styles/globals.css'
import { IconContext } from 'react-icons';

function MyApp({ Component, pageProps }) {
  const [admin, setAdmin] = useState({});
  const [authToken, setAuthToken] = useState('');
  const [amplitudeLoaded, setAmplitudeLoaded] = useState(false);
  const [amplitudeData, setAmplitudeData] = useState({
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
        "url": "https://sirius.shoutca.st:2199/start/anglicanondo/stream?type=http&nocache=1972",
        // "url": "https://sirius.shoutca.st:8445/index.html?sid=1",
        // "url": "https://sirius.shoutca.st:8445/index.html/stream",
        // "url": "http://sirius.shoutca.st:8445/index.html/stream?type=http&nocache=1972",
        "cover_art_url": ""
      }
    ],
    playlists: {
      "radio": {
        songs: [0],
        title: 'Radio'
      } 
    },
  })

  useEffect(() => {
    console.log(admin)
  }, [admin])

  useEffect(() => {
    if (!amplitudeLoaded) return
    Amplitude.init(amplitudeData);
    console.log('Amplitude loaded');
  }, [amplitudeLoaded, amplitudeData])

  const router = useRouter();

	let page;
  if (router.pathname.includes('/admin')) {
    let adminProps = { ...pageProps, admin, authToken };
    if (router.pathname.includes('/login')) {
      adminProps = { ...pageProps, ...adminProps, setAdmin, setAuthToken };
    } 
    page = (
      <AdminLayout admin={admin} >
        <AdminRouteGuard admin={admin}>
          <Component {...adminProps} />
        </AdminRouteGuard>
      </AdminLayout>
    )
  } else {
    page = (
      <Layout>
        <Component 
          {...pageProps} 
          amplitudeLoaded={amplitudeLoaded} 
          setAmplitudeLoaded={setAmplitudeLoaded} 
          amplitudeData={amplitudeData}
          setAmplitudeData={setAmplitudeData}
        />
      </Layout>
    )
  }
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
      <IconContext.Provider
        value={{ color: 'var(--pri)' }}
      >
        {page}
      </IconContext.Provider>
    </>
)
}

export default MyApp
