import Link from "next/link";
import { useState } from "react";
import reposData from "../data/repos.json";

interface RepoItem {
  name: string;
  link: string;
  color: string;
  path: string;
  alt: string;
  isActive: boolean;
}

const repoIcons: Record<string, React.ReactNode> = {
  github: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  gitlab: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M4.845.904c-.435 0-.82.28-.955.692C2.639 5.449 1.246 9.728.07 13.335a1.437 1.437 0 00.522 1.607l11.071 8.045c.2.145.472.144.67-.004l11.073-8.04a1.436 1.436 0 00.522-1.61c-1.285-3.942-2.683-8.256-3.817-11.746a1.004 1.004 0 00-.957-.684.987.987 0 00-.949.69l-2.405 7.408H8.203l-2.41-7.408a.987.987 0 00-.942-.69h-.006z" />
    </svg>
  ),
  bitbucket: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891L.778 1.213zM14.52 15.53H9.522L8.17 8.466h7.561l-1.211 7.064z" />
    </svg>
  ),
};

export default function Repo() {
  const [repos] = useState<RepoItem[]>(reposData);
  const activeRepos = repos.filter((r) => r.isActive);

  return (
    <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
      {/* Section Header */}
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-6">
        Repositories
      </h2>

      {/* Repo Links - Inline like Connect section */}
      <div className="flex flex-wrap gap-3">
        {activeRepos.map((repo, index) => (
          <Link
            key={index}
            href={repo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-3 rounded-full
                     bg-slate-100 dark:bg-slate-800
                     border border-slate-200 dark:border-slate-700
                     hover:border-fuchsia-500 dark:hover:border-fuchsia-500
                     hover:bg-white dark:hover:bg-slate-700
                     transition-all duration-300"
            aria-label={`View ${repo.name} profile`}
          >
            <span className="text-slate-600 dark:text-slate-400 group-hover:text-fuchsia-500 dark:group-hover:text-fuchsia-400 transition-colors">
              {repoIcons[repo.name.toLowerCase()] || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              )}
            </span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors capitalize">
              {repo.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
