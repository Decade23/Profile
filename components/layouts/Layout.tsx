import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Seo from "./Seo";
import NavbarFooter from "./NavbarFooter";

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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center
                 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105
                 border border-slate-200 dark:border-slate-700"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105">
              <span className="text-white dark:text-slate-900 font-bold text-sm">
                DF
              </span>
            </div>
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
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Seo title={title} {...seo} />

      {/* Header with theme toggle */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 pt-14 sm:pt-16 pb-20 sm:pb-24">
          <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </main>

        {/* Bottom Navigation */}
        <NavbarFooter />
      </div>
    </div>
  );
}
