import TextBox from "@components/profile/TextBox";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/layouts/Layout";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  return (
    <Layout title="profile">
      <section id="profile" className="relative pb-20">
        <div className="container mb-5">
          <div className={`relative rounded-2xl overflow-hidden mb-5 w-full h-96 ${loading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}`}>
            <Image
              alt="Dedi Fardiyanto"
              src="/assets/images/dedi.png"
              placeholder="blur"
              blurDataURL="/assets/images/dedi.png"
              quality={loading ? 10 : 70}
              priority
              onLoad={() => setLoading(false)}
              fill
              className="object-contain"
            />
          </div>
          <TextBox name="Name" value="Dedi Fardiyanto" />
          <TextBox name="Was Born" value="Jakarta, 23 Dec" />
          <TextBox
            name="Currently"
            value="Fullstack Developer At ADIRA FINANCE"
            className="items-center font-thin"
          />
          <TextBox name="Work Since" value="2011" />
          <TextBox name="Interest On IT Since" value="2013" />
        </div>
      </section>
    </Layout>
  );
}
