import Image from "next/image";
import logo from "../images/logo.png";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex  justify-center items-center">
      <div className="flex h-full justify-center items-center">
        <div className="flex flex-col mx-auto size-full">
          <header className="mb-10 flex justify-center z-50 w-full py-4">
            <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
              <a
                className="flex text-xl font-semibold dark:text-white"
                href="/"
                aria-label="Brand"
              >
                <Image src={logo} className="me-3" alt="Logo" width={40} />
                <p className="text-blue-600">Wisdomous</p>
              </a>
            </nav>
          </header>

          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
              404
            </h1>
            <h1 className="block text-2xl font-bold text-white"></h1>

            <p className="text-gray-600 dark:text-gray-400 mt-6 mb-12 text-xl">
              Sorry, we couldn't find your page.
            </p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <a
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back to Landing
              </a>
            </div>
          </div>
          <footer className="mt-14 text-center py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-gray-500">
                © All Rights Reserved. 2024.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
