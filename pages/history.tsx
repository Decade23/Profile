import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layouts/Layout";

interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  period: string;
  location: string;
  type: "fulltime" | "freelance" | "contract";
  isCurrent: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

const workHistory: WorkExperience[] = [
  {
    company: "Adira Finance",
    logo: "/assets/images/porto/adira.png",
    position: "Senior Fullstack Developer",
    period: "2021 - Present",
    location: "Jakarta, Indonesia",
    type: "fulltime",
    isCurrent: true,
    description:
      "Leading development of internal systems and customer-facing applications for one of Indonesia's largest financial services companies.",
    achievements: [
      "Architected and developed microservices handling 1M+ daily transactions",
      "Led a team of 5 developers in modernizing legacy systems",
      "Reduced system downtime by 40% through improved monitoring",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: [
      "React",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "Green Pramuka City",
    logo: "/assets/images/porto/gpc.webp",
    position: "Fullstack Developer",
    period: "2020 - 2021",
    location: "Jakarta, Indonesia",
    type: "freelance",
    isCurrent: false,
    description:
      "Developed marketing website and property management system for one of Jakarta's largest apartment complexes.",
    achievements: [
      "Built responsive marketing website increasing online inquiries by 150%",
      "Developed tenant management portal serving 10,000+ residents",
      "Integrated payment gateway for online rent collection",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
  },
  {
    company: "Koki Apps",
    logo: "/assets/images/porto/koki.png",
    position: "Lead Developer",
    period: "2019 - 2020",
    location: "Jakarta, Indonesia",
    type: "contract",
    isCurrent: false,
    description:
      "Led development of food delivery platform connecting home cooks with customers.",
    achievements: [
      "Built scalable platform handling 500+ daily orders",
      "Developed real-time order tracking system",
      "Created CMS for managing cooks and menu items",
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Firebase"],
  },
  {
    company: "Palembang Kito",
    logo: "/assets/images/porto/plb_kito.jpeg",
    position: "Fullstack Developer",
    period: "2018 - 2019",
    location: "Remote",
    type: "freelance",
    isCurrent: false,
    description:
      "Developed content management system for regional news and community platform.",
    achievements: [
      "Built CMS supporting 50+ content creators",
      "Implemented SEO optimizations increasing organic traffic by 200%",
      "Developed mobile-responsive design for 70% mobile user base",
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
  },
  {
    company: "Ellen May Institute",
    logo: "/assets/images/porto/emi.png",
    position: "Web Developer",
    period: "2017 - 2018",
    location: "Jakarta, Indonesia",
    type: "contract",
    isCurrent: false,
    description:
      "Developed educational platform and CMS for stock trading courses and webinars.",
    achievements: [
      "Built learning management system for 1000+ students",
      "Integrated payment system for course purchases",
      "Developed webinar scheduling and notification system",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "jQuery", "Bootstrap"],
  },
];

const stats = [
  { label: "Years of Experience", value: "7+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Companies Worked", value: "10+" },
  { label: "Happy Clients", value: "20+" },
];

export default function History() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <Layout title="Work History">
      <section id="history" className="relative">
        {/* Hero Section */}
        <div className="relative bg-white dark:bg-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-96 h-96 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-20 w-72 h-72 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="relative px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
            <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white">
                Work History
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A journey through my professional career, from early projects to
                leading development teams at major companies.
              </p>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-slate-50 dark:bg-slate-800/50">
          <div className="px-4 sm:px-6 py-16 sm:py-20">
            <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-12 text-center">
                Experience Timeline
              </h2>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500 via-violet-500 to-slate-300 dark:to-slate-600" />

                {/* Timeline Items */}
                <div className="space-y-12">
                  {workHistory.map((job, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col sm:flex-row gap-8 ${
                        index % 2 === 0 ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-fuchsia-500 shadow-lg z-10">
                        {job.isCurrent && (
                          <span className="absolute inset-0 rounded-full bg-fuchsia-400 animate-ping opacity-50" />
                        )}
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 ml-8 sm:ml-0 ${
                          index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
                        }`}
                      >
                        <div
                          className={`p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer ${
                            job.isCurrent
                              ? "ring-2 ring-fuchsia-500 ring-offset-2 dark:ring-offset-slate-900"
                              : ""
                          }`}
                          onClick={() =>
                            setExpandedIndex(
                              expandedIndex === index ? null : index,
                            )
                          }
                        >
                          {/* Header */}
                          <div className="flex items-start gap-4">
                            <div className="relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                              <Image
                                src={job.logo}
                                alt={job.company}
                                fill
                                className="object-contain p-2"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                  {job.company}
                                </h3>
                                {job.isCurrent && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 uppercase">
                                    Current
                                  </span>
                                )}
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                    job.type === "fulltime"
                                      ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400"
                                      : job.type === "freelance"
                                        ? "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400"
                                        : "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400"
                                  }`}
                                >
                                  {job.type}
                                </span>
                              </div>
                              <p className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">
                                {job.position}
                              </p>
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-slate-500 dark:text-slate-400">
                                <span>{job.period}</span>
                                <span>•</span>
                                <span>{job.location}</span>
                              </div>
                            </div>
                            {/* Expand Icon */}
                            <button className="flex-shrink-0 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                              <svg
                                className={`w-5 h-5 transition-transform duration-300 ${
                                  expandedIndex === index ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          </div>

                          {/* Expanded Content */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              expandedIndex === index
                                ? "max-h-[500px] opacity-100 mt-4"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                              {job.description}
                            </p>

                            {/* Achievements */}
                            <div className="mb-4">
                              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                                Key Achievements
                              </h4>
                              <ul className="space-y-1.5">
                                {job.achievements.map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                                  >
                                    <svg
                                      className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {job.technologies.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden sm:block flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white dark:bg-slate-900">
          <div className="px-4 sm:px-6 py-16 sm:py-20">
            <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
              <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-center">
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                  Want to Add Your Company Here?
                </h2>
                <p className="text-fuchsia-100 max-w-lg mx-auto mb-8">
                  I'm always looking for exciting new opportunities. Let's
                  discuss how I can contribute to your team's success.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/6285693380123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-fuchsia-600 font-bold hover:bg-fuchsia-50 transition-colors shadow-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Let's Talk
                  </a>
                  <Link
                    href="/profile"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent text-white font-bold border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
