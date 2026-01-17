import { LabelActive, LabelFinished } from "@components/Label";
import { useState } from "react";
import Layout from "../components/layouts/Layout";

interface HistoryProject {
  label: string;
  img: {
    src: string;
    alt: string;
  };
  link: string;
  shorDesc: string;
  isActive: boolean;
  isProgress?: boolean;
}

const initProjects: HistoryProject[] = [
  {
    label: "Adira Finance",
    img: {
      src: "/assets/images/porto/adira.png",
      alt: "Adira Finance",
    },
    link: "https",
    shorDesc: "cms",
    isActive: true,
    isProgress: true,
  },
  {
    label: "apartemen green pramuka",
    img: {
      src: "/assets/images/porto/gpc.webp",
      alt: "apartemen green pramuka",
    },
    link: "https://greenpramukacityjakarta.id",
    shorDesc: "marketing",
    isActive: true,
  },
  {
    label: "koki apps website",
    img: { src: "/assets/images/porto/koki.png", alt: "koki apps" },
    link: "https://koki-machiato.vercel.app",
    shorDesc: "marketing",
    isActive: true,
  },
  {
    label: "koki CMS website",
    img: { src: "/assets/images/porto/koki.png", alt: "koki CMS website" },
    link: "",
    shorDesc: "cms",
    isActive: true,
  },
  {
    label: "Palembang Kito CMS Website",
    img: { src: "/assets/images/porto/plb_kito.jpeg", alt: "palembang kito" },
    link: "",
    shorDesc: "cms",
    isActive: true,
  },
  {
    label: "Ellen May CMS Website",
    img: { src: "/assets/images/porto/emi.png", alt: "ellen may institude" },
    link: "",
    shorDesc: "cms",
    isActive: true,
  },
];

export default function History() {
  const [projects, setProjects] = useState<HistoryProject[]>(initProjects);
  return (
    <Layout title="history">
      <section id="history" className="relative pb-20">
        {projects.length > 0 &&
          projects.map((v, i) => {
            return (
              v.isActive && (
                <div
                  key={i}
                  className={`container flex flex-row items-start justify-between py-5 ${
                    i % 2 === 0 ? "bg-slate-50" : "bg-fuchsia-200"
                  }`}
                >
                  <h3 className={`text-sm font-medium`}>{v.label}</h3>
                  {v.isProgress ? <LabelActive /> : <LabelFinished />}
                </div>
              )
            );
          })}
      </section>
    </Layout>
  );
}
