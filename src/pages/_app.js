import "../styles/globals.css";
import "highlight.js/styles/github.css";
import "github-markdown-css/github-markdown.css";
import DefaultLayout from "../components/layout";
import NavHeader from "@/components/NavHeader";
import PageFooter from "@/components/PageFooter";

export default function App({ Component, pageProps }) {
  const Layout = Component.layoutProps?.Layout || DefaultLayout;

  return (
    <>
      <NavHeader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <PageFooter />
    </>
  );
}
