import Link from "next/link";

export default function ArticleRankingList({ posts = [] }) {
  return (
    <div className="p-4 border-b border-gray-100 max-md sticky top-12 dark:border-slate-500">
      <ul>
        {posts.map((post, index) => (
          <li className="flex mb-3 items-center" key={index}>
            <span className=" h-5 w-5 mr-2 bg-slate-100 text-center leading-5 text-xs dark:text-white dark:bg-base-theme-100">
              {index + 1}
            </span>
            <Link
              className=" w-0 flex-1 text-slate-700 truncate hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
              href={`/article/detail/${post.uuid}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
