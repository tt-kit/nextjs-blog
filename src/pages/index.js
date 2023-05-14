import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { fetchArticles } from "@/services";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.uuid}>
              <Link href={`/article/detail/${post.uuid}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchArticles();
  const posts = res?.data?.data || [];
  console.log("posts", posts);
  return {
    props: {
      posts,
    },
  };
}
