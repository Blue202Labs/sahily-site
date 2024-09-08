"use client";

import Link from "next/link";
import { SahilyLogo } from "./SahilyLogo";
import { useState } from "react";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed top-0 w-full py-3 md:py-4 md:h-20 z-50 bg-stone-100">
      <div className="z-50 relative w-full max-w-6xl mx-auto flex justify-between items-center px-4 md:px-0">
        <SahilyLogo />
        <button
          className="md:hidden p-2"
          onClick={() => setToggleMenu(!toggleMenu)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#334155"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav
          className={`${
            toggleMenu ? "opacity-100 max-h-none" : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100 absolute md:static top-12 left-0 bg-stone-100 p-4 md:p-0 md:flex md:flex-row md:gap-8 
          md:font-bold md:text-lg text-stone-600 w-full md:w-fit py-4 md:py-0 text-center transition-all duration-200`}
        >
          <Link
            href="/about-us"
            onClick={() => setToggleMenu(false)}
            className="block py-4 md:py-2"
          >
            About Us
          </Link>
          <Link
            onClick={() => setToggleMenu(false)}
            href="/contact"
            className="block py-4 md:py-2"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
