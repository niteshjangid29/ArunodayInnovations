import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { navbarItems } from "../Data/navbarData";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-50 shadow w-full font-[poppins]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full justify-between">
              <div className="flex-shrink-0 ml-0 lg:ml-2">
                <Link to="/">
                  <img
                    className="h-12"
                    src="./images/logo.png"
                    alt="LOGO"
                    draggable="false"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-5">
                  {navbarItems.map((navbarItem, index) => {
                    return (
                      <Link
                        to={navbarItem.itemUrl}
                        key={index}
                        className="hover:bg-orange-400 hover:-translate-y-0.5 transition-all delay-75 text-black hover:text-white px-2 lg:px-3 py-2 rounded-md text-md font-medium"
                      >
                        {navbarItem.itemName}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-400 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navbarItems.map((navbarItem, index) => {
                  return (
                    <Link
                      to={navbarItem.itemUrl}
                      className=" hover:bg-orange-400 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {navbarItem.itemName}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </main> */}
    </div>
  );
}

export default Nav;
