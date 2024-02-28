import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import articles from "../../images/articles_cover.jpg";
import videos from "../../images/video_thumb.png";
import Image from "next/image";

export default function Resources() {
  return (
    <div className="min-h-screen">
      <div className="relative isolate overflow-hidden bg-white lg:overflow-visible lg:px-0 ">
        <Navbar
          isLanding={false}
          isAbout={false}
          isResource={true}
          isLogIn={false}
        />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="px-16 py-10 sm:px-12 lg:px-24 lg:py-14 mx-auto">
          <h2 className="lg:text-4xl text-2xl pb-10 font-semibold text-blue-600 dark:text-blue-500">
            Resources Hub
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <a
              className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/resources/videos"
            >
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full lg:h-[500px] h-[260px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                <Image
                  className="size-full absolute top-0 start-0 object-cover"
                  src={videos}
                  alt="Image Description"
                />
              </div>

              <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                    Video Tutorials
                  </h3>
                  <p className="mt-2 text-white/[.8]">
                    Immerse yourself in our collection of informative and
                    engaging videos.
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/resources/articles"
            >
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[260px] lg:h-[500px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                <Image
                  className="size-full absolute top-0 start-0 object-cover"
                  src={articles}
                  alt="Image Description"
                />
              </div>

              <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                    Articles
                  </h3>
                  <p className="mt-2 text-white/[.8]">
                    Explore our repository of articles
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
