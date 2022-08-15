import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const initProjects = [
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
export default function Project() {
  const [projects, setProjects] = useState(initProjects);

  return (
    <div className="relative mb-5">
          <h5 className="container mb-2 font-medium tracking-widest">
            Projects
          </h5>
          <div className="container relative flex items-center w-full h-full ">
            <div className="w-full h-full overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide">
              {projects.map((v) => {
                return (
                  v.isActive && (
                    <div
                      className="relative inline-block w-40 mr-5 border shadow-sm rounded-xl last:mr-0 border-slate-200 h-52"
                      key={v}
                    >
                      <div className="relative flex flex-col w-full h-full">
                        <div className="rounded-lg shadow-md">
                          <Image
                            src={v.img.src}
                            alt={v.img.alt}
                            width={1920}
                            height={1080}
                            layout="responsive"
                            objectFit="contain"
                            placeholder="blur"
                            blurDataURL={v.img.src}
                          />
                        </div>
                        <div className="flex flex-col w-full h-full px-1 py-1 whitespace-normal">
                          <h5 className="flex-1 mb-2 text-sm capitalize">
                            {v.label}
                          </h5>
                          <p className="px-1 py-1 text-center self-start rounded-md mb-1 bg-fuchsia-100 text-black font-semibold text-[0.6em]">
                            {v.shorDesc}
                          </p>
                          {v.link !== "" ? (
                            <Link href={v.link}>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-1 py-1 text-xs font-semibold text-center bg-teal-100 rounded-md text-stone-900"
                              >
                                visit
                              </a>
                            </Link>
                          ) : (
                            <p className="px-1 py-1 text-xs font-semibold text-center rounded-md text-stone-900 bg-rose-300">
                              {`can't visit`}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
  )
}
