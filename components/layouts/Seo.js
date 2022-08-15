// import { NextSeo } from "next-seo";
// import SEO from "../../next-seo.config";
export default function Seo(seo) {
  return (
    // <>
    //   <DefaultSeo {...SEO} />
    //   <NextSeo
    //     title="Dedi Fardiyanto"
    //     description="whenever you wanna build a some web or apps. just text me here"
    //     canonical="https://dedi.asia/"
    //     openGraph={{
    //       url: "https://dedi.asia/",
    //       title: "Dedi Fardiyanto",
    //       description:
    //         "whenever you wanna build a some web or apps. just text me here",
    //       images: [
    //         {
    //           url: "https://dedi.asia/assets/images/dedi.png",
    //           width: 800,
    //           height: 600,
    //           alt: "Dedi Fardiyanto",
    //           type: "image/png",
    //         },
    //         {
    //           url: "https://dedi.asia/assets/images/dedi.png",
    //           width: 900,
    //           height: 800,
    //           alt: "Dedi Fardiyanto",
    //           type: "image/png",
    //         },
    //         { url: "https://dedi.asia/assets/images/dedi.png" },
    //         { url: "https://dedi.asia/assets/images/dedi.png" },
    //       ],
    //       site_name: "Dedi Fardiyanto | Profile",
    //     }}
    //     twitter={{
    //       handle: "@handle",
    //       site: "@site",
    //       cardType: "summary_large_image",
    //     }}
    //   />
    // </>
    <>
      <meta name="title" content="Dedi Fardiyanto" />
      <meta
        name="description"
        content="whenever you wanna build a some web or apps. just text me here"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dedi.asia/" />
      <meta property="og:title" content="Dedi Fardiyanto" />
      <meta
        property="og:description"
        content="whenever you wanna build a some web or apps. just text me here"
      />
      <meta property="og:image" content="https://dedi.asia/assets/images/dedi.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dedi.asia/" />
      <meta property="twitter:title" content="Dedi Fardiyanto" />
      <meta
        property="twitter:description"
        content="whenever you wanna build a some web or apps. just text me here"
      />
      <meta property="twitter:image" content="https://dedi.asia/assets/images/dedi.png" />
    </>
  );
}
