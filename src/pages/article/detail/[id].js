import { articelDetail, fetchArticles } from "@/services";

export default function ArticleDetail({post}) {
  return <div className=" p-4 bg-white">
    <h2 className=" text-3xl font-bold mb-4">{post.title}</h2>
    <div className="markdown-body" dangerouslySetInnerHTML={{__html:post.content}}></div>
  </div>;
}

export async function getStaticPaths() {
  const res = await fetchArticles();
  const posts = res?.data?.data || [];
  const paths = posts.map((post) => ({
    params: { id: post.uuid },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await articelDetail(id);
  const post = res.data;
  return { props: { post } };
}
