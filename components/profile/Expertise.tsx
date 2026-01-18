
const expertise = [
  { name: "Frontend Development", level: 95 },
  { name: "Backend Development", level: 90 },
  { name: "Database Design", level: 85 },
  { name: "Cloud & DevOps", level: 80 },
  { name: "System Architecture", level: 85 },
  { name: "Team Leadership", level: 80 },
];

export default function Expertise() {
  return (
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
  );
}
