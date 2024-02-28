import Sidebar from "@/components/dash_sidebar";
import { FormEvent, useState } from "react";
import JinaAI from "jinaai";

export default function Dashboard() {
  const GENERATED_SECRET =
    "24a94760dfe00c8522c9090df66cd674:e197d296ca2fdb82a7fe2b79df5d35c6cc71c891b9ac713a8ec9c202e1376576";
  console.log(GENERATED_SECRET);
  const jinaai = new JinaAI({
    secrets: {
      "promptperfect-secret": GENERATED_SECRET,
    },
  });
  const [original_prompt, setOriginalPrompt] = useState("");
  const [optimized_prompt, setOptimizedPrompt] = useState("");

  const optimize_prompt = async () => {
    const response = await jinaai.optimize(original_prompt);

    return response;
  };

  const handleSubmit = async () => {
    console.log(original_prompt);
    const opt = await optimize_prompt();
    // setOptimizedPromp(opt);
    console.log("opt", opt);
    setOptimizedPrompt(opt.results[0].output);
  };

  return (
    <div>
      <Sidebar />
      <div className="sm:ml-64 h-[100vh] flex flex-col justify-between ">
        <div className="h-full overflow-auto pt-20 flex flex-col gap-y-6">
          {optimized_prompt && (
            <div className="mx-4 bg-white">
              <div className="text-sm font-medium text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap border-b">
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      aria-current="page"
                    >
                      1
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    >
                      2
                    </a>
                  </li>

                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    >
                      Original Prompt
                    </a>
                  </li>
                </ul>
                <div className="w-full text-left p-4">{optimized_prompt}</div>
              </div>
            </div>
          )}
          {!optimized_prompt && (
            <div className="h-full flex flex-col justify-center items-center">
              <p className="text-4xl font-medium text-center mb-12 text-gray-500 ">Input your prompt below </p>
              <p className="inline-block animate-bounce rounded-full p-4 bg-blue-600 text-white text-sm">
                <svg
                  className="w-6 h-6 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </p>
            </div>
          )}
        </div>
        <div className="sticky bottom-0 right-0 z-10 bg-white border-t border-gray-200 pt-2 pb-3 sm:pt-4 sm:pb-6 dark:bg-slate-900 dark:border-gray-700">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-3">
              <button
                type="button"
                className="inline-flex justify-center items-center gap-x-2 rounded-lg font-medium text-gray-800 hover:text-blue-600 text-xs sm:text-sm dark:text-gray-200 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                New Optimization
              </button>

              <button
                onClick={handleSubmit}
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center h-9 px-4 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
                <span className="ps-2">Optimize</span>
              </button>
            </div>

            <div className="relative">
              <textarea
                onChange={(e) => setOriginalPrompt(e.target.value)}
                className="p-4 h-28 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-white-600"
                placeholder="Enter your original prompt..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
