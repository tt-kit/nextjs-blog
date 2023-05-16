
import Link from "next/link";

export default function ArtilcleListItem(props) {
  const { post } = props;
  return (
    <li
      key={post.uuid}
      className=" p-4 mb-2 border-b border-slate-200 hover:bg-slate-100"
    >
      <Link href={`/article/detail/${post.uuid}`}>
        <div className=" text-lg font-bold mb-2">{post.title}</div>
        <div className=" text-gray-700 font-normal">{post.excerpt}</div>
      </Link>
    </li>
  );
}
