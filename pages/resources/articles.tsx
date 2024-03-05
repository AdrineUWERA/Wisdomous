import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
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
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-[80%]">
          <div className=" mx-auto mb-10">
            <h2 className="lg:text-4xl text-2xl font-semibold text-blue-600 dark:text-blue-500">
              Article Resources
            </h2>
          </div>

          <div className="  mx-auto">
            <div>
              <p className="lg:text-2xl pb-4 text-lg font-bold text-gray-600 dark:text-gray-500">
                Prompt engineering 101
              </p>
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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

                  <div>
                    <a
                      className="underline"
                      target="_blank"
                      href="https://www.educative.io/blog/what-is-prompt-engineering"
                    >
                      <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        What Is Prompt Engineering? Definition and best
                        practices
                      </h3>
                    </a>
                    <p className="mt-1 text-gray-500">
                      This comprehensive guide provides an in-depth
                      understanding of prompt engineering techniques. It covers
                      various aspects, including how to design effective prompts
                      for language models, fine-tuning strategies, and practical
                      examples.
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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

                  <div>
                    <a
                      className="underline"
                      target="_blank"
                      href="https://www.ibm.com/topics/prompt-engineering"
                    >
                      <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        What is prompt engineering?
                      </h3>
                    </a>
                    <p className="mt-1 text-gray-500">
                      You’ll discover advanced prompt engineering practices.
                      Learn how to tailor prompts to achieve specific outcomes,
                      optimize model responses, and address common challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10">
              <p className="lg:text-2xl pb-4 text-lg font-bold text-gray-600 dark:text-gray-500">
                Prompting ChatGPT
              </p>
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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

                  <div>
                    <a
                      className="underline"
                      target="_blank"
                      href="https://medium.com/@karankakwani/mastering-prompt-engineering-for-chatgpt-tips-tricks-and-best-practices-a2d01b703dab"
                    >
                      <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Mastering Prompt Engineering for ChatGPT: Tips, Tricks,
                        and Best Practices
                      </h3>
                    </a>
                    <p className="mt-1 text-gray-500">
                      This article dives into the world of prompt engineering
                      within the context of ChatGPT. It provides expert
                      strategies for crafting effective prompts to unlock the
                      full potential of ChatGPT, covering clarity, system
                      messages, and prompt formats..
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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

                  <div>
                    <a
                      className="underline"
                      target="_blank"
                      href="https://www.unite.ai/prompt-engineering-in-chatgpt/"
                    >
                      <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        The Essential Guide to Prompt Engineering in ChatGPT
                      </h3>
                    </a>
                    <p className="mt-1 text-gray-500">
                      This article delves into the world of prompt engineering
                      within the context of ChatGPT. It explains how prompt
                      engineering plays a pivotal role in ChatGPT’s impressive
                      performance and versatility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
