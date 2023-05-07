import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ul>
          <li>
            <Link href="/article/121212">文章标题</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
