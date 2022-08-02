import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function FirstPost() {
  return (
    <>
      <h1 className={styles.title}>First Post</h1>
      <h2 className={styles.title}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}