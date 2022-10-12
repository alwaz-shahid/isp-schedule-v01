import { DefaultSeo } from 'next-seo';
import '../src/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import SEO from '../next-seo.config';
import Layout from '../src/components/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <DefaultSeo {...SEO} />
        <ThemeProvider attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default MyApp;
