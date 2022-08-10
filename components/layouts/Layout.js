import Head from "next/head";
import NavbarFooter from "@components/layouts/NavbarFooter";
import Seo from "./Seo";

export default function Layout({ title, children, seo }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <Seo />
      </Head>
      <div className="flex flex-col h-screen">
        <div className="max-w-2xl sm:mx-auto flex-1 overflow-y-auto scrollbar-hide">
          {children}
        </div>
        <NavbarFooter />
      </div>
    </div>
  );
}
