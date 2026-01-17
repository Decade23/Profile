import Image from "next/image";
import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt?: string;
  customProp?: any;
}

export default function BlurImage({ src, alt = 'image', customProp }: BlurImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      className={`${
        loading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      }`}
      onLoad={() => setLoading(false)}
      fill
      alt={alt} {...customProp}
    />
  );
}
