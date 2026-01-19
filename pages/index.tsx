import Layout from "@components/layouts/Layout";
import BlurImage from "@components/layouts/BlurImage";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

const Project = dynamic(() => import("@components/Project"));
const Repo = dynamic(() => import("@components/Repo"));
const Medsos = dynamic(() => import("@components/Medsos"));
const Educational = dynamic(() => import("@components/Educational"));

// Tech stack data - compact categories
const techCategories = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "Laravel", "Golang", "REST API"],
  },
  {
    name: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "GCP", "DigitalOcean", "VPS", "Docker", "Git"],
  },
];

// Animated counter component
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Home({ projects, repos }) {
  const router = useRouter();
  const whatsappNumber = "6285693380123";
  const whatsappMessage = encodeURIComponent(
    "Hi Dedi, I'm interested in discussing a project with you.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const connection = (navigator as any).connection;
    const shouldSkip =
      connection?.saveData ||
      ["slow-2g", "2g"].includes(connection?.effectiveType);

    if (shouldSkip) {
      return;
    }

    const idleCallback = (window as any).requestIdleCallback as
      | ((cb: () => void) => number)
      | undefined;
    const cancelIdleCallback = (window as any).cancelIdleCallback as
      | ((id: number) => void)
      | undefined;
    let idleId: number | null = null;
    let timeoutId: number | null = null;

    const prefetchProfile = () => {
      router.prefetch("/profile").catch(() => {});
    };

    if (idleCallback) {
      idleId = idleCallback(prefetchProfile);
    } else {
      timeoutId = window.setTimeout(prefetchProfile, 1200);
    }

    return () => {
      if (idleId !== null && cancelIdleCallback) {
        cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [router]);

  return (
    <Layout title="Home">
      <section id="home" className="relative pb-8">
        {/* Hero Section - White with Wave Accent */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900">
          {/* Subtle Wave Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.05]"
              viewBox="0 0 1440 800"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                className="text-fuchsia-500"
                d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
              <path
                fill="currentColor"
                className="text-violet-500"
                d="M0,320L48,298.7C96,277,192,235,288,234.7C384,235,480,277,576,298.7C672,320,768,320,864,298.7C960,277,1056,235,1152,229.3C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-20 -left-20 w-72 h-72 bg-fuchsia-200 dark:bg-fuchsia-900/30 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-violet-200 dark:bg-violet-900/30 rounded-full blur-3xl opacity-30" />

          {/* Hero Content */}
          <div className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32 2xl:pt-40 2xl:pb-40">
            <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative group mb-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full opacity-70 blur group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 2xl:w-52 2xl:h-52 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                    <BlurImage src="/assets/images/dedi.png" />
                  </div>
                  {/* Status Dot */}
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-800 shadow-lg">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </div>
                </div>

                {/* Name & Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
                  Dedi Fardiyanto
                </h1>
                <p className="mt-3 text-lg sm:text-xl lg:text-2xl text-fuchsia-600 dark:text-fuchsia-400 font-semibold tracking-wide">
                  Senior Fullstack Developer
                </p>

                {/* Brief Description */}
                <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl lg:max-w-2xl leading-relaxed">
                  Building scalable web solutions with 7+ years of experience.
                  Specialized in high-performance applications and technical
                  leadership.
                </p>

                {/* Stats */}
                <div className="mt-10 lg:mt-14 flex items-center gap-8 sm:gap-12 lg:gap-16">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                      <AnimatedCounter target={7} suffix="+" />
                    </div>
                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                      Years
                    </div>
                  </div>
                  <div className="w-px h-12 lg:h-16 bg-slate-200 dark:bg-slate-700" />
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                      <AnimatedCounter target={50} suffix="+" />
                    </div>
                    <div className="mt-1 text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                      Projects
                    </div>
                  </div>
                  <div className="w-px h-12 lg:h-16 bg-slate-200 dark:bg-slate-700" />
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                      <AnimatedCounter target={20} suffix="+" />
                    </div>
                    <div className="mt-1 text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                      Clients
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 lg:mt-14 flex flex-wrap justify-center gap-4 lg:gap-6">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                             bg-gradient-to-r from-fuchsia-400 to-violet-500 dark:from-fuchsia-500 dark:to-violet-600
                             text-white font-bold text-sm
                             hover:from-fuchsia-500 hover:to-violet-600 dark:hover:from-fuchsia-400 dark:hover:to-violet-500
                             transform hover:-translate-y-0.5
                             transition-all duration-300 shadow-lg shadow-fuchsia-500/25
                             hover:shadow-xl hover:shadow-fuchsia-500/30"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Hire Me
                  </a>
                  <Link
                    href="/profile"
                    className="px-8 py-3.5 rounded-full bg-transparent text-slate-900 dark:text-white font-bold text-sm
                             border-2 border-slate-200 dark:border-slate-700
                             hover:border-slate-300 dark:hover:border-slate-600
                             hover:bg-slate-50 dark:hover:bg-slate-800/50
                             transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              className="w-full h-16 sm:h-20"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                className="text-slate-50 dark:text-slate-800/50"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative bg-slate-50 dark:bg-slate-800/50">
          <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Status Card - Available for Work */}
            <section>
              <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
                <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/20 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[size:20px_20px]" />
                  </div>

                  <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                          Ready to Build Your Next Project?
                        </h2>
                      </div>
                      <p className="text-emerald-100 text-base sm:text-lg lg:text-xl mb-5">
                        I'm currently{" "}
                        <span className="font-bold text-white">
                          available for new opportunities
                        </span>
                        . Whether you need a full-stack developer, technical
                        consultant, or team lead — let's create something
                        amazing together.
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Full-time Position",
                          "Freelance Project",
                          "Technical Consulting",
                          "Team Leadership",
                        ].map((item) => (
                          <span
                            key={item}
                            className="px-4 py-2 rounded-full text-sm font-semibold
                                     bg-white/20 text-white backdrop-blur-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl
                                 bg-white text-emerald-600 font-bold text-base
                                 hover:bg-emerald-50 transition-colors shadow-lg"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Stack Section - Compact */}
            <section>
              <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-8 lg:mb-10">
                  Tech Stack
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {techCategories.map((category) => (
                    <div
                      key={category.name}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                      <h3 className="text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-wider mb-3">
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium
                                     bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <Project projects={projects} />
            </section>

            {/* Education Section */}
            <section>
              <Educational />
            </section>

            {/* Repository Section */}
            <section>
              <Repo repos={repos} />
            </section>

            {/* Social Media Section */}
            <section>
              <Medsos />
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import fs from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const projectsFilePath = path.join(process.cwd(), "data", "projects.json");
  const reposFilePath = path.join(process.cwd(), "data", "repos.json");

  const projectsJson = await fs.readFile(projectsFilePath, "utf-8");
  const reposJson = await fs.readFile(reposFilePath, "utf-8");

  const projects = JSON.parse(projectsJson);
  const repos = JSON.parse(reposJson);

  return {
    props: {
      projects,
      repos,
    },
  };
}
