import logo from "../images/logo.png";
import user from "../images/user.png";
import Image from "next/image";
import { useState } from "react";

export default function DashboardTemp() {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div className="flex h-full items-center">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a
                className="flex text-xl ms-4 font-semibold dark:text-white"
                href="/"
                aria-label="Brand"
              >
                <Image src={logo} className="me-3" alt="Logo" width={40} />
                <p className="text-blue-600">Wisdomous</p>
              </a>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    <Image
                      className="w-8 h-8 rounded-full"
                      src={user}
                      alt="User"
                    />
                  </button>
                </div>
                <div
                  className={`z-50 absolute top-8 right-5 ${
                    isDropdown ? "" : "hidden"
                  } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Adrine UWERA
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      a.uwera@alustudent.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="/play-ground"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="/account"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Account
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="application-sidebar"
        className="hs-overlay mt-14 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 "
      >
        <nav
          className="h-full hs-accordion-group p-6 w-full flex flex-col flex-wrap  justify-between"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li className="hs-accordion" id="users-accordion">
              <a
                href="/account"
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Account
              </a>
            </li>{" "}
            <li>
              <a
                className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 "
                href="/edit-profile"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
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
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
                Edit Profile
              </a>
            </li>
          </ul>
          <a
            href="/"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Log out
          </a>
        </nav>
        <div className="w-full flex flex-col flex-wrap"></div>
      </div>
      <div className="w-full h-[100vh] pt-20 px-4 sm:px-6 md:px-8 lg:ps-72">
        <p className="pb-6 text-2xl font-semibold text-blue-600">My Profile</p>
        <div className="w-full justify-around items-center px-4 py-8 flex ">
          <div className="w-[500px] bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold pb-5 text-gray-800">
                User Profile
              </h2>
              <p className="text-xl text-gray-500 mt-1 pb-5">
                Username: Adrine UWERA
              </p>
              <p className="text-xl text-gray-500 mt-1 pb-5">
                Email: a.uwera@alustudent.com
              </p>
              <p className="text-xl text-gray-500 mt-1">
                Location: Kigali, Rwanda
              </p>
            </div>
            <div className="bg-gray-100 py-6 px-4  border-t border-gray-200">
              <a
                href="/edit-profile"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Edit Profile
              </a>
            </div>
          </div>
          <div className="w-[500px] bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold pb-5 text-gray-800">
                Usage overview
              </h2>
              <p className="text-xl text-gray-500 mt-1 pb-5">
                Total optimized prompts: 27
              </p>
              <p className="text-xl text-gray-500 mt-1 pb-5">Streak: 14 🔥</p>
              <p className="text-xl text-gray-500 mt-1">
                Last used: Today, 10:30 a.m
              </p>
            </div>
            <div className="bg-gray-100 py-6 px-4  border-t border-gray-200">
              <a
                href="/play-ground"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Go the Playground
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
