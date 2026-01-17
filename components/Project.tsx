import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import projectsData from "../data/projects.json";
import type { ProjectData } from "../types";

export default function Project() {
  const [projects] = useState<ProjectData[]>(projectsData);
  const activeProjects = projects.filter((p) => p.isActive);

  return (
    <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          Projects
        </h2>
        <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
          {activeProjects.length} works
        </span>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative -mx-4 sm:-mx-6 px-4 sm:px-6">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
          {activeProjects.map((project, index) => (
            <ProjectCard key={project.label + index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectData;
}

function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = project.link !== "";

  return (
    <div
      className="group flex-shrink-0 w-72 sm:w-80 snap-start
                 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden
                 border border-slate-200 dark:border-slate-700
                 hover:border-slate-300 dark:hover:border-slate-600
                 transition-all duration-300 hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <Image
          src={project.img.src}
          alt={project.img.alt}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL={project.img.src}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Title */}
        <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg capitalize line-clamp-2 mb-3">
          {project.label}
        </h3>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Category */}
          <span
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                       bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
          >
            {project.shortDesc}
          </span>

          {/* Action */}
          {hasLink ? (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold
                         text-fuchsia-600 dark:text-fuchsia-400
                         hover:text-fuchsia-700 dark:hover:text-fuchsia-300
                         transition-colors"
            >
              Visit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          ) : (
            <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
              Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
