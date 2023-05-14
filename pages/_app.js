import Script from 'next/script';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import AdminLayout from '../components/AdminLayout/AdminLayout';
import AdminRouteGuard from '../components/AdminRouteGuard/AdminRouteGuard';
import '../styles/globals.css';
import { IconContext } from 'react-icons';
import { BASE_URL } from '../utils';

function MyApp({ Component, pageProps }) {
  const [admin, setAdmin] = useState({});
  const [authToken, setAuthToken] = useState('');
  const [amplitudeLoaded, setAmplitudeLoaded] = useState(false);
  const [amplitudeData, setAmplitudeData] = useState({
    bindings: {
      37: 'prev',
      39: 'next',
      32: 'play_pause',
    },
    songs: [
      {
        name: 'Radio',
        artist: '',
        album: '',
        url: 'https://anglicanondo.radioca.st/stream?type=http&nocache=22',
        cover_art_url: '',
      },
    ],
    playlists: {
      radio: {
        songs: [0],
        title: 'Radio',
      },
    },
  });

  useEffect(() => {
    const savedAdmin = JSON.parse(window.localStorage.getItem('admin')) || {};
    setAdmin(savedAdmin);
  }, []);

  useEffect(() => {
    const savedAuthToken =
      JSON.parse(window.localStorage.getItem('authToken')) || '';
    setAuthToken(savedAuthToken);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('admin', JSON.stringify(admin));
  }, [admin]);

  useEffect(() => {
    window.localStorage.setItem('authToken', JSON.stringify(authToken));
  }, [authToken]);

  useEffect(() => {
    if (!amplitudeLoaded) return;
    Amplitude.init(amplitudeData);
  }, [amplitudeLoaded, amplitudeData]);

  const router = useRouter();

  let page;
  if (router.pathname.includes('/admin')) {
    let adminProps = { ...pageProps, admin, authToken, apiBaseUrl: BASE_URL };
    if (router.pathname.includes('/login')) {
      adminProps = { ...pageProps, ...adminProps, setAdmin, setAuthToken };
    }
    page = (
      <AdminLayout admin={admin}>
        <AdminRouteGuard admin={admin}>
          <Component {...adminProps} />
        </AdminRouteGuard>
      </AdminLayout>
    );
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
    );
  }
  return (
    <>
      <Script
        type='text/javascript'
        src='https://cdn.jsdelivr.net/npm/amplitudejs@5.2.0/dist/amplitude.js'
        strategy='afterInteractive'
        onLoad={() => setAmplitudeLoaded(true)}
        onError={(e) => {
          console.log('Error: ', e);
        }}
      />
      <IconContext.Provider value={{ color: 'var(--pri)' }}>
        {page}
      </IconContext.Provider>
    </>
  );
}

export default MyApp;