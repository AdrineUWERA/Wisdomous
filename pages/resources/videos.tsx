import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import YouTubeVideo from "@/components/youtube_video";
import axios from "axios";

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
          <h2 className="lg:text-4xl text-2xl pb-2 font-semibold text-blue-600 dark:text-blue-500">
            Video Resources
          </h2>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="pb-10">
              <p className="lg:text-2xl pb-4 text-lg font-bold text-gray-600 dark:text-gray-500">
                Prompt engineering 101
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <YouTubeVideo videoId={"TMdH8uP0NXE"} />
                  </div>
                </a>
                <a
                  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <YouTubeVideo videoId={"ydjRYmM19DY"} />
                  </div>
                </a>
              </div>
            </div>
            <div>
              <p className="lg:text-2xl pb-4 text-lg font-bold text-gray-600 dark:text-gray-500">
                Prompting ChatGPT
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <YouTubeVideo videoId={"jC4v5AS4RIM"} />
                  </div>
                </a>
                <a
                  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <YouTubeVideo videoId={"yu27PWzJI_Y"} />
                  </div>
                </a>
                <a
                  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <YouTubeVideo videoId={"6hqExG7mL5c"} />
                  </div>
                </a>
                <a
                  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                    <YouTubeVideo videoId={"lTI4FyO0ul8"} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
