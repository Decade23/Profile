import Image from "next/image";
import { useState } from "react";

export default function BlurImage({src, alt = 'image', customProp}) {
  const [loading, setLoading] = useState(true);

  return (
    <Image
            src={src}
            className={`${
              loading
                ? "grayscale blur-2xl scale-110"
                : "grayscale-0 blur-0 scale-100"
            }`}
            onLoadingComplete={() => setLoading(false)}
            layout="fill"
            alt={alt}  {...customProp}
          />
  )
}
