import Link from "next/link";
import { useRouter } from "next/router";

interface NavItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    link: "/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
  {
    title: "Profile",
    link: "/profile",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
  {
    title: "History",
    link: "/history",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Contact",
    link: "/contact",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
];

export default function NavbarFooter() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 safe-bottom">
      {/* Glassmorphism background */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6 pb-2">
        <div className="glass rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-around py-2 px-2">
            {navItems.map((item, index) => {
              const isActive = item.link === router.pathname;

              return (
                <Link
                  href={item.link}
                  key={index}
                  className={`
                    relative flex flex-col items-center justify-center
                    min-w-[4rem] sm:min-w-[5rem] py-2 px-3 rounded-xl
                    transition-colors duration-150 group
                    touch-manipulation cursor-pointer select-none
                    ${
                      isActive
                        ? "bg-fuchsia-100 dark:bg-fuchsia-900/40 text-fuchsia-600 dark:text-fuchsia-400"
                        : "text-slate-500 dark:text-slate-400 active:text-fuchsia-600 dark:active:text-fuchsia-400 active:bg-slate-100 dark:active:bg-slate-800/50 [@media(hover:hover)]:hover:text-fuchsia-600 [@media(hover:hover)]:dark:hover:text-fuchsia-400 [@media(hover:hover)]:hover:bg-slate-100 [@media(hover:hover)]:dark:hover:bg-slate-800/50"
                    }
                  `}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full" />
                  )}

                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`
                      h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-150
                      ${isActive ? "scale-110" : "group-active:scale-110 [@media(hover:hover)]:group-hover:scale-110"}
                    `}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={isActive ? 2.5 : 2}
                  >
                    {item.icon}
                  </svg>

                  {/* Label */}
                  <span
                    className={`
                      mt-1 text-[10px] sm:text-xs font-medium
                      transition-opacity duration-150
                      ${isActive ? "opacity-100" : "opacity-70 group-active:opacity-100 [@media(hover:hover)]:group-hover:opacity-100"}
                    `}
                  >
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
