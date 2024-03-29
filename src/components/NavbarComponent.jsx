import React from "react";
import logo from "../assets/images/logo.png"

export default function NavbarComponent() {
  return (
    <div className="absolute top-0 w-full">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href=""
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              class="h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Podcast
            </span>
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              class="text-sm  text-gray-500 dark:text-white barre"
            >
              (+225) 0797674576
            </a>
            <a
              href="#"
              class="text-sm  text-blue-600 dark:text-blue-500 barre"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#home"
                  class="text-gray-900 dark:text-white barre"
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#podcast"
                  class="text-gray-900 dark:text-white barre"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  class="text-gray-900 dark:text-white barre"
                >
                  Équipe
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  class="text-gray-900 dark:text-white barre"
                >
                  Nouveautés
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
