import Image from "next/image";
export default function Card({ children, img, className, classImg = '', imgWidth = 'w-40', imgHeight = 'h-full'  }) {
  return (
    <div
      className={`relative before:h-full before:w-20 before:rounded-r-full before:absolute before:top-0 before:left-0 px-4 py-5 h-20 rounded-xl flex flex-row items-center justify-between bg-fuchsia-100 before:bg-yellow-300 overflow-hidden 
    ${className}`}
    >
      <div className="flex flex-col z-10">{children}</div>
      <div className={`relative ${imgWidth} ${imgHeight} ${classImg}`}>
        <Image src={img} layout="fill" objectFit="cover" alt="adira" priority />
      </div>
    </div>
  );
}
