import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { fetchArticles, fetchTopArticles } from "@/services";
import ArtilcleListItem from "@/components/ArticleListItem";
import ArticleRankingList from "@/components/ArticleRankingList";
import { useEffect, useState } from "react";
const pageSize = 10;
export default function Home({ posts, topPosts }) {
  const [articles, setArticles] = useState(posts);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    if (pageNo > 1) {
      getArticles();
    }

    async function getArticles() {
      const res = await fetchArticles({ pageSize: pageSize, pageNo });
      const posts = res?.data?.data || [];
      setArticles([...articles, ...posts]);
    }
  }, [pageNo]);

  const onLoadNextPageData = () => {
    setPageNo(pageNo + 1);
  };
  return (
    <div className=" flex">
      <Head>
        <title>博客</title>
        <link rel="icon" href="/helogo.png" />
      </Head>
      <div className=" border-gray-100 flex-1">
        <ul className=" p-2.5">
          {articles.map((post) => (
            <ArtilcleListItem post={post} key={post.uuid} />
          ))}
        </ul>
        <div
          onClick={onLoadNextPageData}
          className=" bg-blue-200 p-2 text-center text-gray-500 rounded-md cursor-pointer"
        >
          加载更多
        </div>
      </div>
      <div className="w-4/12 hidden relative sm:block">
        {/* 推荐文章 */}
        <ArticleRankingList posts={topPosts} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchArticles({ pageSize: pageSize });
  const topRes = await fetchTopArticles();
  const posts = res?.data?.data || [];
  const topPosts = topRes?.data || [];
  // console.log('top',topPosts)
  // console.log("posts", posts);
  return {
    props: {
      posts,
      topPosts,
    },
  };
}
