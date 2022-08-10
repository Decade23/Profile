import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
//import navbar from "../../data/navbar";

const data = [
  {
    title: "Home",
    link: "/",
    img: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
  },
  {
    title: "Profile",
    link: "/profile",
    img: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "History",
    link: "/history",
    img: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Contact",
    link: "/contact",
    img: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
      />
    ),
  },
];
export default function NavbarFooter() {
  const [navbar, setNavbar] = useState(data);
  const router = useRouter();

  return (
    <div className="fixed w-full h-16 shadow-gray-700 shadow-2xl bg-white bottom-0 flex flex-row items-center justify-evenly">
      {navbar.length > 0 &&
        navbar.map((v, i) => {
          return (
            <div className="flex flex-col items-center cursor-pointer" key={i}>
              <Link href={v.link} key={i}>
                <a
                  key={i}
                  className={`${v.link === router.pathname ? "text-fuchsia-600" : ""} flex flex-col items-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      v.link === router.pathname ? "text-fuchsia-600" : ""
                    } h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {v.img}
                  </svg>
                  {v.title}
                </a>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
