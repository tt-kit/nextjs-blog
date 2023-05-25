import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { articelDetail, fetchArticles } from "@/services";

export default function ArticleDetail({ post }) {
  return (
    <div className=" flex dark:text-white">
      <div className="article-detail w-0 flex-1 p-4">
        <h2 className=" mb-4 text-3xl  font-bold dark:text-slate-500">
          {post.title}
        </h2>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
      <div className=" relative hidden w-4/12 sm:hidden md:block">
        <div className="navgation sticky top-12">
          <div className=" text-md text-gray-600 flex items-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            文章目录
          </div>
          <MarkdownNavbar source={post.markdown} ordered={false} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetchArticles();
  const posts = res?.data?.data || [];
  const paths = posts.map((post) => ({
    params: { id: post.uuid },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await articelDetail(id);
  const post = res.data;
  return { props: { post } };
}
