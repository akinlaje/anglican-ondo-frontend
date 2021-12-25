import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout'
import AdminLayout from '../components/AdminLayout/AdminLayout'
import '../styles/globals.css'
import { IconContext } from 'react-icons';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

	let page;
  if (router.pathname.includes('/admin')) {
    page = (
      <AdminLayout>
        <Component {...pageProps} />
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
