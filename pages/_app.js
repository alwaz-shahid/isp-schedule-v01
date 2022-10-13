import { DefaultSeo } from 'next-seo';
import '../src/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import SEO from '../next-seo.config';
import Layout from '../src/components/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <Layout>
          {/* <DefaultSeo {...SEO} /> */}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
