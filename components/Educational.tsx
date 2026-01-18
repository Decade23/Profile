import { useState } from "react";

interface EducationItem {
  name: string;
  isActive: boolean;
  from: string;
  to: string;
  shorDesc: string;
  major: string;
  isCurrent?: boolean;
}

const initialEdu: EducationItem[] = [
  {
    name: "STMIK Muhammadiyah Jakarta",
    isActive: true,
    from: "2014",
    to: "2018",
    shorDesc: "the best graduation",
    major: "Systems Information",
    isCurrent: false,
  },
  {
    name: "SMK Kampung Jawa",
    isActive: true,
    from: "2008",
    to: "2011",
    shorDesc: "",
    major: "Otomotif",
  },
  {
    name: "SMPN 137 Jakarta",
    isActive: true,
    from: "2005",
    to: "2008",
    shorDesc: "",
    major: "",
  },
  {
    name: "SDN Kramat 04 Petang",
    isActive: true,
    from: "1999",
    to: "2005",
    shorDesc: "",
    major: "",
  },
];

export default function Educational() {
  const [edu] = useState<EducationItem[]>(initialEdu);
  const activeEdu = edu.filter((e) => e.isActive);

  return (
    <div className="max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
      {/* Section Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-8 lg:mb-10">
        Education
      </h2>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-slate-200 dark:bg-slate-700" />

        {/* Items */}
        <div className="space-y-6 lg:space-y-8">
          {activeEdu.map((item, index) => (
            <div key={index} className="relative pl-10 sm:pl-12">
              {/* Dot */}
              <div
                className={`absolute left-0 top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center
                  ${
                    index === 0
                      ? "bg-fuchsia-500"
                      : "bg-slate-300 dark:bg-slate-600"
                  }`}
              >
                <span
                  className={`text-xs sm:text-sm font-bold ${
                    index === 0
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {index + 1}
                </span>
              </div>

              {/* Card */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300
                  ${
                    index === 0
                      ? "bg-fuchsia-50 dark:bg-fuchsia-950/30 border-fuchsia-200 dark:border-fuchsia-800/50"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                        {item.name}
                      </h3>
                      {index === 0 && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-fuchsia-500 text-white uppercase tracking-wide">
                          Latest
                        </span>
                      )}
                    </div>

                    {item.major && (
                      <p className="mt-1 text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400">
                        {item.major}
                      </p>
                    )}

                    {item.shorDesc && (
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 italic">
                        "{item.shorDesc}"
                      </p>
                    )}
                  </div>

                  {/* Year */}
                  <div className="flex-shrink-0">
                    <span
                      className={`inline-block px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold
                        ${
                          index === 0
                            ? "bg-fuchsia-500 text-white"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                        }`}
                    >
                      {item.from} - {item.to}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
