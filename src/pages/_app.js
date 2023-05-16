import "../styles/globals.css";
import "highlight.js/styles/github.css";
import "github-markdown-css/github-markdown.css";
import DefaultLayout from "../components/layout";

export default function App({ Component, pageProps }) {
  const Layout = Component.layoutProps?.Layout || DefaultLayout

  return (
    <div>
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="container mx-auto h-12 flex items-center">
        1
      </div>
    </div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}
