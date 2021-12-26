import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout'
import AdminLayout from '../components/AdminLayout/AdminLayout'
import '../styles/globals.css'
import { IconContext } from 'react-icons';

function MyApp({ Component, pageProps }) {
  const [admin, setAdmin] = useState();
  const [authToken, setAuthToken] = useState('');

  const router = useRouter();

	let page;
  if (router.pathname.includes('/admin')) {
    let adminProps = { ...pageProps, admin, authToken };
    if (
      router.pathname.includes('/login') || 
      router.pathname.includes('/sign-up')
    ) {
      adminProps = { ...pageProps, setAdmin, setAuthToken };
    }
    page = (
      <AdminLayout admin={admin} >
        <Component {...adminProps} />
      </AdminLayout>
    )
  } else {
    page = (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    )
  }
  return (
    <IconContext.Provider
      value={{ color: 'var(--pri)' }}
    >
      {page}
    </IconContext.Provider>
)
}

export default MyApp
