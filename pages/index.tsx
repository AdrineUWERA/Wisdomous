import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import axios from "axios";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
        <Navbar isLanding={true} isAbout={false} isResource={false} isLogIn={false} />{" "}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
              href="/resources"
            >
              Learn about Prompt Engineering
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">
                  Get started
                </span>
                <svg
                  className="flex-shrink-0 size-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Your Prompting Playground
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Wisdomous is your gateway to optimal AI interactions with
              precision prompts.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              href="/login"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
              Continue with Google
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-[10%]">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-base font-semibold leading-7 text-blue-600 ps-2 dark:text-blue-500">
            Benefits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why use Wisdomous
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your prompts into powerhouses of creativity and
            effectiveness! 
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
              <svg
                className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="10" height="14" x="3" y="8" rx="2" />
                <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                <path d="M8 18h.01" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Efficiency
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Instead of manually iterating through numerous iterations of
                prompts, the optimization tool automates and expedites the
                prompt refinement process. Users can quickly test and iterate
                different variations of prompts, accelerating the overall prompt
                engineering workflow and saving valuable time and effort.
              </p>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
              <svg
                className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Maximize AI Response Quality
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                The prompt optimization tool harnesses advanced algorithms and
                AI models to fine-tune prompts, ensuring they are optimized to
                elicit high-quality responses from AI systems. By leveraging the
                tool's capabilities, users can enhance the relevance, coherence,
                and accuracy of generated responses.
              </p>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
              <svg
                className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Educational Resources
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                The platform offers educational resources such as tutorials,
                best practices guides, and case studies to support you in
                mastering the art of crafting effective prompts. These resources
                empower you to expand their knowledge and skills in human-AI
                collaboration, driving continuous learning and improvement.
              </p>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
              <svg
                className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Automated A/B Testing
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                With built-in A/B testing capabilities, the tool automates the
                process of comparing different prompt variations to determine
                which ones yield the best results. This data-driven approach
                enables users to make informed decisions about which prompts to
                deploy, leading to improved outcomes and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
