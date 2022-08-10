import Card from "@components/layouts/Card";
import Layout from "@components/layouts/Layout";
import BlurImage from "@components/layouts/BlurImage";
import Project from "@components/Project";
import Repo from "@components/Repo";
import Medsos from "@components/Medsos";
import Educational from "@components/Educational";


export default function Home() {
  return (
    <Layout title="Home">
      <section id="home" className="relative pb-20">
        {/* me */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full rotate-180 -z-10 h-28">
            <BlurImage src="/assets/images/wavesNegative.svg" alt="wave" />
          </div>
          <div className="container relative flex flex-row items-center gap-5 mb-2">
            <div className="relative w-16 h-16 overflow-hidden rounded-full shadow-lg">
              <BlurImage src="/assets/images/dedi.png" />
            </div>
            <div className="flex flex-col items-start font-medium text-white">
              <h3>
                Dedi <span className="text-yellow-300">Fardiyanto</span>
              </h3>
              <h5>
                <span className="text-yellow-300">Fullstack</span> Developer
              </h5>
            </div>
          </div>
        </div>
        {/* end of me */}

        {/* activity */}
        <div className="container relative mb-5">
          <h5 className="mb-5 font-medium tracking-widest">Activity</h5>
          <Card img="/assets/images/porto/adira.png">
            <div className="text-base font-medium tracking-widest">
              Adira Finance
            </div>
            <div className="text-xs">Fullstack Developer</div>
          </Card>
        </div>
        {/* end of activity */}

        {/* projects */}
        <Project />
        {/* end of projects */}

        {/* education */}
        <Educational />
        {/* end of education */}

        {/* repo */}
        <Repo />
        {/* end of repo */}

        {/* Medsos */}
        <Medsos />
        {/* end of medsos */}
      </section>
    </Layout>
  );
}
