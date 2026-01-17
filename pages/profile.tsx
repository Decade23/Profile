import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layouts/Layout";

interface InfoItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const personalInfo: InfoItem[] = [
  {
    label: "Full Name",
    value: "Dedi Fardiyanto",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Jakarta, Indonesia",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Birthday",
    value: "December 23",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
        />
      </svg>
    ),
  },
  {
    label: "Experience",
    value: "7+ Years in IT",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
  },
  {
    label: "Status",
    value: "Available for Work",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "Languages",
    value: "Indonesian, English",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
  },
];

const expertise = [
  { name: "Frontend Development", level: 95 },
  { name: "Backend Development", level: 90 },
  { name: "Database Design", level: 85 },
  { name: "Cloud & DevOps", level: 80 },
  { name: "System Architecture", level: 85 },
  { name: "Team Leadership", level: 80 },
];

export default function Profile() {
  const [imageLoading, setImageLoading] = useState(true);

  const whatsappNumber = "6285693380123";
  const whatsappMessage = encodeURIComponent(
    "Hi Dedi, I'm interested in discussing a project with you.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Layout title="Profile">
      <section id="profile" className="relative">
        {/* Hero Section */}
        <div className="relative bg-white dark:bg-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
            <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 bg-gradient-to-br from-fuchsia-500 to-violet-500 rounded-3xl opacity-20 blur-lg" />
                  <div
                    className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-700 ${
                      imageLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
                    }`}
                  >
                    <Image
                      alt="Dedi Fardiyanto"
                      src="/assets/images/dedi.png"
                      fill
                      priority
                      onLoad={() => setImageLoading(false)}
                      className="object-cover"
                    />
                  </div>
                  {/* Status Badge */}
                  <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    Available
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
                    Dedi Fardiyanto
                  </h1>
                  <p className="mt-2 text-lg sm:text-xl text-fuchsia-600 dark:text-fuchsia-400 font-semibold">
                    Senior Fullstack Developer
                  </p>
                  <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                    Passionate software engineer with 7+ years of experience
                    building scalable web applications. I specialize in creating
                    high-performance solutions and leading technical teams to
                    deliver exceptional products.
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-500 dark:from-fuchsia-500 dark:to-violet-600 text-white font-bold text-sm hover:from-fuchsia-500 hover:to-violet-600 dark:hover:from-fuchsia-400 dark:hover:to-violet-500 transition-all duration-300 shadow-lg shadow-fuchsia-500/25 hover:shadow-xl hover:shadow-fuchsia-500/30"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Contact Me
                    </a>
                    <a
                      href="mailto:dedif15@gmail.com"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent text-slate-900 dark:text-white font-bold text-sm border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-slate-50 dark:bg-slate-800/50">
          <div className="px-4 sm:px-6 py-16 sm:py-20 space-y-16">
            {/* Personal Info Grid */}
            <section>
              <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-8">
                  About Me
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {personalInfo.map((info, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                            {info.label}
                          </p>
                          <p className="text-base font-bold text-slate-900 dark:text-white">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Expertise Section */}
            <section>
              <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-8">
                  Expertise
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {expertise.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section>
              <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-8">
                  What I Value
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Clean Code",
                      description:
                        "Writing maintainable, readable, and well-documented code that stands the test of time.",
                      icon: (
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "User Experience",
                      description:
                        "Creating intuitive interfaces that users love and find easy to navigate.",
                      icon: (
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Continuous Learning",
                      description:
                        "Always exploring new technologies and best practices to stay ahead.",
                      icon: (
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      ),
                    },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section>
              <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
                <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 dark:bg-slate-800 text-center">
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                    Let's Build Something Great Together
                  </h2>
                  <p className="text-slate-400 max-w-lg mx-auto mb-8">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Start a Conversation
                    </a>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent text-white font-bold border-2 border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all"
                    >
                      View My Work
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
