import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Seo from "./Seo";
import NavbarFooter from "./NavbarFooter";

const ChatBot = dynamic(() => import("../ChatBot"), {
  ssr: false,
  loading: () => null,
});

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
  seo?: Partial<SeoProps>;
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center
                 active:bg-slate-200 dark:active:bg-slate-700 transition-colors duration-150
                 border border-slate-200 dark:border-slate-700
                 touch-manipulation select-none cursor-pointer"
      style={{ WebkitTapHighlightColor: "transparent" }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        // Sun icon for light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-slate-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-slate-900/70">
      <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand - Links to Home */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-150 active:scale-95 touch-manipulation"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="Back to homepage"
            >
              <Image
                src="/logo_df.webp"
                alt="Dedi Fardiyanto Logo"
                width={40}
                height={40}
                priority
                unoptimized
                className="drop-shadow-none dark:drop-shadow-[0_0_7px_rgba(14,165,233,0.55)]"
              />
            </Link>
          </div>

          {/* Right side - Theme Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Layout({ title, children, seo = {} }: LayoutProps) {
  const [isChatbotReady, setIsChatbotReady] = useState(false);

  useEffect(() => {
    const idleCallback = (window as any).requestIdleCallback as
      | ((cb: () => void) => number)
      | undefined;
    const cancelIdleCallback = (window as any).cancelIdleCallback as
      | ((id: number) => void)
      | undefined;
    let idleId: number | null = null;
    let timeoutId: number | null = null;

    const scheduleChatbot = () => setIsChatbotReady(true);

    if (idleCallback) {
      idleId = idleCallback(scheduleChatbot);
    } else {
      timeoutId = window.setTimeout(scheduleChatbot, 1500);
    }

    return () => {
      if (idleId !== null && cancelIdleCallback) {
        cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-150">
      <Seo title={title} {...seo} />

      {/* Header with theme toggle */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 pt-14 sm:pt-16 pb-20 sm:pb-24">
          <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </main>

        {/* Bottom Navigation */}
        <NavbarFooter />

        {/* AI ChatBot */}
        {isChatbotReady && <ChatBot />}
      </div>
    </div>
  );
}
