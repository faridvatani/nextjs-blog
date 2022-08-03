import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';
import Script from 'next/script';


export default function FirstPost() {
  return (
      <Layout>
      <Head>
        <title>First Post</title>
      </Head>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
        />

      <h1 className={styles.title}>First Post</h1>
      <h2 className={styles.title}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </Layout>
  );
}