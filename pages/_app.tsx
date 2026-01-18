import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "../components/ErrorBoundary";
import { ThemeProvider } from "next-themes";

// Optimized font loading with next/font
// Inter - Clean, readable body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Poppins - Modern, geometric font for headings
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

// NProgress configuration
NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 300,
  showSpinner: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        NProgress.start();
      }
    };

    const handleComplete = () => {
      NProgress.done();
    };

    const handleError = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
    };
  }, [router]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ErrorBoundary>
        <main className={`${inter.variable} ${poppins.variable} font-sans`}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default MyApp;
