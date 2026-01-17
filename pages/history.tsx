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
    company: "Bank Tabungan Negara (BTN)",
    logo: "/assets/images/porto/btn.png",
    position: "Tech Lead",
    period: "2024 - Present",
    location: "Jakarta, Indonesia",
    type: "fulltime",
    isCurrent: true,
    description:
      "Leading technology initiatives and managing squad for mobile banking and digital products at one of Indonesia's largest state-owned banks.",
    achievements: [
      "Manage Squad with 5 personnel (Android, iOS, Web Backend, SQA)",
      "Handle Project Bale (Mobile Banking), Virtual Expo and other digital products",
      "Architecting Microservices and Monolithic Architecture solutions",
      "Implementing best practices for software development lifecycle",
    ],
    technologies: [
      "Java Spring Boot",
      "React",
      "Kotlin",
      "Swift",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
    ],
  },
  {
    company: "PT Adira Dinamika Multi Finance",
    logo: "/assets/images/porto/adira.png",
    position: "Senior Fullstack Developer",
    period: "2021 - 2024",
    location: "Jakarta, Indonesia",
    type: "fulltime",
    isCurrent: false,
    description:
      "Developed internal applications using modern tech stack for one of Indonesia's largest financial services companies.",
    achievements: [
      "Built internal applications using Laravel, NextJS, and ReactJS",
      "Implemented Microservices and Monolithic Architecture",
      "Integrated with MySQL, MongoDB for data management",
      "Deployed applications using GitLab CI/CD and AWS",
    ],
    technologies: [
      "Laravel",
      "NextJS",
      "ReactJS",
      "MySQL",
      "MongoDB",
      "GitLab",
      "AWS",
    ],
  },
  {
    company: "PT Koki Teknologi Indonesia",
    logo: "/assets/images/porto/koki.png",
    position: "Web / Fullstack Developer",
    period: "2020 - 2021",
    location: "Jakarta, Indonesia",
    type: "fulltime",
    isCurrent: false,
    description:
      "Developed internal applications for food delivery platform connecting home cooks with customers.",
    achievements: [
      "Built internal applications using Laravel, NextJS, ReactJS",
      "Implemented Monolithic and Microservices Architecture",
      "Integrated with MySQL, MongoDB databases",
      "Deployed using GitLab and AWS infrastructure",
    ],
    technologies: [
      "Laravel",
      "NextJS",
      "ReactJS",
      "Golang",
      "MySQL",
      "MongoDB",
      "GitLab",
      "AWS",
    ],
  },
  {
    company: "Ellen May Institute",
    logo: "/assets/images/porto/emi.png",
    position: "Backend Programmer",
    period: "2019 - 2020",
    location: "Jakarta, Indonesia",
    type: "fulltime",
    isCurrent: false,
    description:
      "Developed internal applications for Indonesia's prominent stock market school using various integrations.",
    achievements: [
      "Built internal applications using Laravel framework",
      "Integrated with InfusionSoft, ClickFunnels, Firebase",
      "Implemented Damcorp Whatsapp and Pepipost Email integration",
      "Developed RESTful APIs with Monolithic Architecture",
    ],
    technologies: [
      "Laravel",
      "Golang",
      "MySQL",
      "GitLab",
      "AWS",
      "Firebase",
      "REST API",
    ],
  },
  {
    company: "PT Indonusa Telemedia (Transvision)",
    logo: "/assets/images/porto/transvision.png",
    position: "Senior MIS Database & Automation System",
    period: "2015 - 2019",
    location: "Jakarta, Indonesia",
    type: "fulltime",
    isCurrent: false,
    description:
      "Managed database systems and developed internal applications for Indonesia's leading pay-TV provider.",
    achievements: [
      "Built internal applications for daily operations and reporting",
      "Maintained database from Bank Mega for telesales team",
      "Maintained internal servers and infrastructure",
      "Provided MySQL/Database training to team members",
    ],
    technologies: ["PHP", "MySQL", "VBA", "Excel", "SQL Server"],
  },
  {
    company: "PT Proxsis",
    logo: "/assets/images/porto/proxsis.png",
    position: "IT Support",
    period: "2013 - 2015",
    location: "Jakarta, Indonesia",
    type: "fulltime",
    isCurrent: false,
    description:
      "Provided IT support and maintenance for enterprise consulting company.",
    achievements: [
      "Maintained PCs and resolved software troubleshooting",
      "Handled OS reinstallation, printer, and network issues",
      "Maintained email and internet services",
      "Managed provider payments and subscriptions",
    ],
    technologies: ["Windows", "Network", "Hardware", "Email Systems"],
  },
  {
    company: "PT ACA (Asuransi Central Asia)",
    logo: "/assets/images/porto/aca.jpg",
    position: "MIS / Admin Support",
    period: "2012 - 2013",
    location: "Jakarta, Indonesia",
    type: "fulltime",
    isCurrent: false,
    description:
      "Created reports and provided system training for telesales operations at major insurance company.",
    achievements: [
      "Created daily, weekly, monthly, and yearly telesales reports",
      "Developed commission reports for telesales team",
      "Provided system training to new telesales members",
    ],
    technologies: ["Excel", "VBA", "SQL", "Reporting Tools"],
  },
];

const stats = [
  { label: "Years of Experience", value: "13+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Companies Worked", value: "7" },
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
                <div className="absolute left-5 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500 via-violet-500 to-slate-300 dark:to-slate-600" />

                {/* Timeline Items */}
                <div className="space-y-12">
                  {workHistory.map((job, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col sm:flex-row gap-8 ${
                        index % 2 === 0 ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Timeline Bullet - Improved Design */}
                      <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 z-10">
                        {/* Year Badge */}
                        <div
                          className={`relative flex items-center justify-center w-10 h-10 rounded-xl shadow-lg transition-all duration-300 ${
                            job.isCurrent
                              ? "bg-gradient-to-br from-fuchsia-500 to-violet-600"
                              : "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600"
                          }`}
                        >
                          {/* Icon */}
                          <svg
                            className={`w-5 h-5 ${job.isCurrent ? "text-white" : "text-fuchsia-500 dark:text-fuchsia-400"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {/* Pulse Animation for Current */}
                          {job.isCurrent && (
                            <>
                              <span className="absolute inset-0 rounded-xl bg-fuchsia-400 animate-ping opacity-30" />
                              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800" />
                            </>
                          )}
                        </div>
                        {/* Year Label - Hidden on mobile, shown on desktop */}
                        <div
                          className={`hidden sm:block absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap`}
                        >
                          <span
                            className={`text-xs font-bold px-2 py-1 rounded-md ${
                              job.isCurrent
                                ? "bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300"
                                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                            }`}
                          >
                            {job.period.split(" - ")[0]}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 ml-14 sm:ml-0 ${
                          index % 2 === 0 ? "sm:pr-16" : "sm:pl-16"
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
