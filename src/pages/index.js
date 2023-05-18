import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { fetchArticles } from "@/services";
import ArtilcleListItem from "@/components/ArticleListItem";

export default function Home({ posts }) {
  return (
    <div className=" flex">
      <Head>
        <title>博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" border-gray-100 w-8/12 border-r">
        <ul className=" p-2.5">
          {posts.map((post) => (
            <ArtilcleListItem post={post} key={post.uuid}/>
          ))}
        </ul>
      </div>
      <div className=" flex-auto relative">
        <div className="p-4 border-b border-gray-100 max-md sticky top-12">
          <div className=" text-xl">1asdfsfaa</div>
        </div>
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
