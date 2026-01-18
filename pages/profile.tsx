import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layouts/Layout";
import dynamic from "next/dynamic";

const About = dynamic(() => import("../components/profile/About"));
const Values = dynamic(() => import("../components/profile/Values"));
const ProfileCTA = dynamic(() => import("../components/profile/ProfileCTA"));

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
            <About />
            <Values />
            <ProfileCTA whatsappLink={whatsappLink} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
