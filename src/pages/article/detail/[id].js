import MarkdownNavbar from "markdown-navbar";
import { articelDetail, fetchArticles } from "@/services";

export default function ArticleDetail({ post }) {
  return (
    <div className=" flex p-4">
      <div className="article-detail w-0 flex-1">
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
