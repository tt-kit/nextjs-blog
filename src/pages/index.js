import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { fetchArticles } from "@/services";
import ArtilcleListItem from "@/components/ArticleListItem";
import ArticleRankingList from "@/components/ArticleRankingList";

export default function Home({ posts }) {
  return (
    <div className=" flex">
      <Head>
        <title>博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" border-gray-100 flex-1">
        <ul className=" p-2.5">
          {posts.map((post) => (
            <ArtilcleListItem post={post} key={post.uuid}/>
          ))}
        </ul>
      </div>
      <div className="w-4/12 hidden relative sm:block">
       {/* 推荐文章 */}
       <ArticleRankingList posts={posts} />
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
