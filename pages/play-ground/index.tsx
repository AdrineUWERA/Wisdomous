import Sidebar from "@/components/dash_sidebar";
import { FormEvent, useEffect, useState } from "react";
import JinaAI from "jinaai";
import axios from "axios";
import { isLoggedIn } from "@/helpers/auth";
import { useRouter } from "next/navigation";

interface ComponentsState {
  persona: boolean;
  context: boolean;
  task: boolean;
  format: boolean;
  exemplar: boolean;
  tone: boolean;
}

interface ComponentsTextState {
  persona: string;
  context: string;
  task: string;
  format: string;
  exemplar: string;
  tone: string;
}

interface SessionOptimization {
  originalPrompt: string;
  optimizedPrompts: {
    promptOptimized: string;
  }[];
}

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, []);
  const GENERATED_SECRET =
    process.env.NEXT_PUBLIC_PROMPT_PREFECT_API_SECRET_KEY;
  const [originalPrompt, setOriginalPrompt] = useState<string>("");
  const [allSessionOptimizations, setAllSessionOptimizations] = useState<
    SessionOptimization[]
  >([]);
  const [optimized_prompt, setOptimizedPrompt] = useState<
    { promptOptimized: string }[]
  >([]);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [components, setComponents] = useState<ComponentsState>({
    task: false,
    context: false,
    exemplar: false,
    persona: false,
    format: false,
    tone: false,
  });

  const [componentsText, setComponentsText] = useState<ComponentsTextState>({
    task: "",
    context: "",
    exemplar: "",
    persona: "",
    format: "",
    tone: "",
  });

  const handleCheckboxChange = (component: keyof ComponentsState) => {
    setComponents((prevComponents) => ({
      ...prevComponents,
      [component]: !prevComponents[component],
    }));

    if (!components[component]) {
      setComponentsText((prev) => ({
        ...prev,
        [component]: "",
      }));
    }

    generateConsolidatedPrompt();
  };

  const prompts: any[] = [];

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const optimize_prompt = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.promptperfect.jina.ai/optimize",
        {
          data: {
            prompt: originalPrompt,
            targetModel: "chatgpt",
            // resultCount: 4,
          },
        },
        {
          headers: {
            "x-api-key": `token ${GENERATED_SECRET}`,
            "content-type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.error("Error:", error);

      let error_message = "";
      if (error.message) {
        error_message = "Error: " + error.message;
      } else {
        error_message = error.response.data.error.message;
      }
      setErrorMessage(error_message);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
        setErrorMessage("");
      }, 10000);
    } finally {
      setLoading(false);
    }
  };

  const generateConsolidatedPrompt = () => {
    const orderedComponents: (keyof ComponentsState)[] = [
      "persona",
      "context",
      "task",
      "exemplar",
      "format",
      "tone",
    ];

    let consolidatedPrompt: string = "";

    orderedComponents.forEach((component) => {
      if (components[component] && componentsText[component]) {
        consolidatedPrompt += `${
          component.charAt(0).toUpperCase() + component.slice(1)
        }: ${componentsText[component]}\n`;
      }
    });

    setOriginalPrompt(consolidatedPrompt.trim());
  };

  const handleSubmit = async () => {
    const opt = await optimize_prompt();
    if (opt && opt.result && opt.result.results) {
      setOptimizedPrompt((prevState) => [...prevState, ...opt.result.results]);
      setAllSessionOptimizations((prevOptimizations) => [
        ...prevOptimizations,
        {
          originalPrompt: originalPrompt,
          optimizedPrompts: opt.result.results,
        },
      ]);
    }

    const scrollToElement = document.getElementById("scrollTarget");
    if (scrollToElement) {
      scrollToElement.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  useEffect(() => {
    generateConsolidatedPrompt();
  }, [componentsText, components]);

  return (
    <div>
      <Sidebar />
      <div className="sm:ml-64 h-[100vh] flex flex-col justify-between ">
        {isCopied && (
          <div
            className="absolute z-50 top-16 -translate-y-1/2 translate-x-1/2 right-1/2 p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <span className="font-medium">Copied to the clipboard</span>
          </div>
        )}
        {!loading && isError && errorMessage && (
          <div className="absolute z-50 top-16 -translate-y-1/2 translate-x-1/2 right-1/2 p-4 mb-4 text-sm  rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 text-red-500">
            <span className="font-medium">{errorMessage}</span>
          </div>
        )}

        <div className="h-full overflow-auto pt-20 flex flex-col gap-y-6">
          {allSessionOptimizations.map((session, sessionIndex) => (
            <div key={sessionIndex} className="flex flex-col">
              {session.optimizedPrompts.length > 0 && (
                <div className="mx-4 bg-white mb-3">
                  <div className="text-sm font-medium text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap border-b">
                      {session.optimizedPrompts.map((prompt, index) => (
                        <li className="me-2" key={index}>
                          <a
                            href="#"
                            className={`inline-block p-4 ${
                              activeTab === index
                                ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                                : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            }`}
                            onClick={() => handleTabClick(index)}
                          >
                            {index + 1}
                          </a>
                        </li>
                      ))}

                      <li className="me-2">
                        <a
                          href="#"
                          className={`inline-block p-4 ${
                            activeTab === session.optimizedPrompts.length
                              ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                              : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                          }`}
                          onClick={() =>
                            handleTabClick(session.optimizedPrompts.length)
                          }
                        >
                          Original Prompt
                        </a>
                      </li>
                    </ul>

                    <div className="mx-4 bg-white">
                      <div className="text-sm font-medium text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        {activeTab !== session.optimizedPrompts.length ? (
                          <div className="w-full text-left p-4">
                            {
                              session.optimizedPrompts[activeTab][
                                "promptOptimized"
                              ]
                            }
                          </div>
                        ) : (
                          <div className="w-full text-left p-4">
                            {session.originalPrompt}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full flex flex-row items-center p-4 gap-x-2">
                      <button
                        onClick={() =>
                          copyToClipboard(
                            session.optimizedPrompts[activeTab].promptOptimized
                          )
                        }
                        type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          fill="#000000"
                          className="flex-shrink-0 size-7"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 270.92 270.92"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fil0"
                            d="M64.52 191.12l0 -139.81c0,-6.11 4.97,-11.09 11.08,-11.09l72.12 0c1.53,0 2.94,0.6 4,1.66l24.82 24.94c1.07,1.07 1.65,2.47 1.65,3.97l0 120.33c0,6.1 -4.97,11.07 -11.08,11.07l-91.51 0c-6.11,0 -11.08,-4.97 -11.08,-11.07zm132.68 -129.72c-0.46,-0.03 -3.17,-0.04 -4.27,-0.04l-0.36 3.52 0.38 3.53c0.91,0 3.08,-0.01 3.54,0.01 5.57,0.57 9.91,5.58 9.91,11.38l0 139.8c0,6.12 -4.96,11.08 -11.06,11.08l-91.53 0c-5.65,0 -10.39,-4.22 -11,-9.8 -0.04,-0.71 -0.07,-4.04 -0.07,-4.53 0,-1.94 -1.58,-3.53 -3.51,-3.53 -1.97,0 -3.53,1.59 -3.53,3.53 0,0.6 0.03,4.71 0.09,5.25 1.02,9.21 8.75,16.14 18.02,16.14l91.53 0c9.98,0 18.12,-8.14 18.12,-18.14l0 -139.8c0,-9.39 -7.13,-17.47 -16.26,-18.4zm-23.56 8.99c0,-1.95 -1.59,-3.52 -3.53,-3.52l-18.45 0 0 -19.44c0,-1.95 -1.57,-3.52 -3.52,-3.52 -1.95,0 -3.53,1.57 -3.53,3.52l0 22.96c0,1.95 1.58,3.53 3.53,3.53l21.97 0c1.94,0 3.53,-1.58 3.53,-3.53zm11.61 120.73l0 -120.33c0,-3.38 -1.31,-6.54 -3.69,-8.94l-24.84 -24.94c-2.4,-2.4 -5.6,-3.74 -9,-3.74l-72.12 0c-10,0 -18.14,8.14 -18.14,18.14l0 139.81c0,9.99 8.14,18.13 18.14,18.13l91.51 0c10,0 18.14,-8.14 18.14,-18.13z"
                          />
                        </svg>
                      </button>
                      {/* <button
                        type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900 dark:hover:text-blue-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 size-5"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 472.615 472.615"
                        >
                          <path
                            d="M236.308,0C168.221,0,103.915,29.376,59.324,79.742V0.357H40.048v116.907h116.907V97.989H69.176
			c41.066-49.558,102.195-78.713,167.131-78.713c119.674,0,217.032,97.358,217.032,217.032S355.982,453.34,236.308,453.34
			S19.276,355.982,19.276,236.308c0-18.081,2.231-36.071,6.635-53.47l-18.692-4.725C2.429,197.055,0,216.636,0,236.308
			c0,130.3,106.008,236.308,236.308,236.308s236.308-106.008,236.308-236.308S366.608,0,236.308,0z"
                          />
                        </svg>
                      </button> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {allSessionOptimizations.length == 0 && (
            <div className="h-full flex flex-col justify-center items-center">
              <p className="text-4xl font-medium text-center mb-12 text-gray-500 ">
                Input your prompt below{" "}
              </p>
              <p className="inline-block animate-bounce rounded-full p-4 bg-blue-600 text-white text-sm">
                <svg
                  className="w-6 h-6 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </p>
            </div>
          )}
          <div id="scrollTarget"></div>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                New Optimization
              </button>

              {loading ? (
                <div className="h-9 flex items-center justify-center text-blue-600 text-center bg-blue-200 rounded-lg animate-pulse dark:bg-blue-600 dark:text-blue-200">
                  <span className="font-sm leading-none px-7">Loading...</span>
                </div>
              ) : (
                <button
                  onClick={handleSubmit}
                  type="button"
                  disabled={originalPrompt.length == 0}
                  className={`inline-flex flex-shrink-0 justify-center items-center h-9 px-4 py-3 rounded-lg text-white ${
                    originalPrompt.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  }`}
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
              )}
            </div>

            <div className="relative flex h-36  flex-row gap-x-6">
              <div className="w-[48%] overflow-auto pb-3 flex flex-col gap-y-3">
                {Object.keys(components).map((component) => (
                  <div
                    key={component}
                    className="mx-2 pb-3 flex flex-col items-center justify-start border border-gray-200 rounded dark:border-gray-700"
                  >
                    <div className="w-full flex flex-row items-center justify-start ps-4 pt-3">
                      <input
                        type="checkbox"
                        checked={components[component as keyof ComponentsState]}
                        onChange={() =>
                          handleCheckboxChange(
                            component as keyof ComponentsState
                          )
                        }
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={component}
                        className=" capitalize w-full ms-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                      >
                        {component}
                      </label>
                    </div>
                    {components[component as keyof ComponentsState] && (
                      <textarea
                        placeholder={`Enter ${component}`}
                        onChange={(e) => {
                          setComponentsText((prev) => ({
                            ...prev,
                            [component]: e.target.value,
                          }));
                          generateConsolidatedPrompt();
                        }}
                        className="block w-[95%] mt-3 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    )}
                  </div>
                ))}
              </div>
              <textarea
                onChange={(e) => setOriginalPrompt(e.target.value)}
                value={originalPrompt}
                className="p-4 w-[48%] h-36 block border border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder={
                  Object.values(components).some((value) => value)
                    ? ""
                    : "Enter your original prompt..."
                }
                disabled={Object.values(components).some((value) => value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
