import Layout from "../components/layouts/Layout";

export default function Contact() {
  return (
    <Layout title="contact">
      <section id="contact" className={`relative pb-20 bg-blue-50 min-h-screen`}>
        <div className="container">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center px-2 py-4 text-center shadow-xl bg-rose-50 rounded-xl max-w-md">
              <h3 className="text-sm mb-2">
                whenever you wanna build a some web or apps.
              </h3>
              <h4 className="flex text-sm mb-4">
                just text me here &nbsp; <p className="animate-bounce">...</p>
              </h4>
              <a
                href="mailto:dedif15@gmail.com"
                className="font-semibold leading-relaxed tracking-widest text-transparent bg-gradient-to-br from-fuchsia-400 via-violet-500 to-rose-600 bg-clip-text"
              >
                dedif15@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
