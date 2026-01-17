export interface ProjectData {
  label: string;
  img: {
    src: string;
    alt: string;
  };
  link: string;
  shortDesc: string;
  isActive: boolean;
}

export interface RepoData {
  name: string;
  link: string;
  color: string;
  path: string;
  alt: string;
  isActive: boolean;
}
