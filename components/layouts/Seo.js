import { NextSeo } from "next-seo";
export default function Seo(seo) {
  return (
    <NextSeo
      title="Dedi Fardiyanto"
      description="whenever you wanna build a some web or apps. just text me here"
      canonical="https://dedi.asia/"
      openGraph={{
        url: "https://dedi.asia/",
        title: "Dedi Fardiyanto",
        description: "whenever you wanna build a some web or apps. just text me here",
        images: [
          {
            url: "https://dedi.asia/assets/images/dedi.png",
            width: 800,
            height: 600,
            alt: "Dedi Fardiyanto",
            type: "image/png",
          },
          {
            url: "https://dedi.asia/assets/images/dedi.png",
            width: 900,
            height: 800,
            alt: "Dedi Fardiyanto",
            type: "image/png",
          },
          { url: "https://dedi.asia/assets/images/dedi.png" },
          { url: "https://dedi.asia/assets/images/dedi.png" },
        ],
        site_name: "Dedi Fardiyanto | Profile",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
}
