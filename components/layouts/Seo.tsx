import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function Seo({
  title = "Dedi Fardiyanto",
  description = "Fullstack Developer - Whenever you want to build web or apps, just contact me here",
  image = "https://dedi.asia/assets/images/dedi.png",
  url = "https://dedi.asia/",
}: SeoProps) {
  return (
    <Head>
      <title>{`${title} | Dedi Fardiyanto`}</title>
      <meta name="description" content={description} />

      {/* Favicon Links */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon_df.png" />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dedi Fardiyanto | Profile" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <meta
        name="keywords"
        content="Dedi Fardiyanto, Fullstack Developer, Web Developer, React, Next.js, JavaScript, Indonesia"
      />
      <meta name="author" content="Dedi Fardiyanto" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Dedi Fardiyanto",
            jobTitle: "Fullstack Developer",
            url: "https://dedi.asia",
            image: "https://dedi.asia/assets/images/dedi.png",
            email: "dedif15@gmail.com",
            worksFor: {
              "@type": "Organization",
              name: "Bank Tabungan Negara (BTN)",
            },
            sameAs: [
              "https://github.com/Decade23",
              "https://gitlab.com/dante23",
              "https://bitbucket.org/_dedi",
            ],
          }),
        }}
      />
    </Head>
  );
}
