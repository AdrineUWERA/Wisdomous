import logo from "../images/logo.png";
import user from "../images/user.png";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div>
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
                        href="/dashboard"
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
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-[3.6rem] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between overflow-y-auto bg-white dark:bg-gray-800">
          <div className="px-6 overflow-auto pt-4">
            <p className="text-gray-900 pb-2 font-medium dark:text-white">
              Today
            </p>
            <ul className="pb-4">
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 1
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 2
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 3
                  </p>
                </a>
              </li>
            </ul>
            <p className="text-gray-900 pb-2 font-medium dark:text-white">
              Previous 7 Days
            </p>
            <ul className="pb-4">
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 1
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 2
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 3
                  </p>
                </a>
              </li>
            </ul>

            <p className="text-gray-900 pb-2 font-medium dark:text-white">
              Previous 30 Days
            </p>
            <ul className="pb-4">
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 1
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 2
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 3
                  </p>
                </a>
              </li>
            </ul>
            <p className="text-gray-900 pb-2 font-medium dark:text-white">
              The Rest
            </p>
            <ul className="pb-4">
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 1
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 2
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 text-grey-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p className="flex-1 ps-4 whitespace-nowrap">
                    Optimization 3
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 h-16 flex justify-start px-6 items-center">
            <a
              href="/"
              className="flex items-center p-2 text-blue-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 rotate-180 w-5 h-5 text-blue-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
