import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Pdf from "../assets/OS.pdf";

export default function Nav() {
  return (
    <>
      <header className="p-4  text-coolGray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
            <Link
              to="/home"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <img src={logo} className="w-8 h-8 text-violet-400" alt="" />
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <Link
                  to="/about"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-violet-400 hover:border-violet-400"
                >
                  About
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/skills"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-violet-400 hover:border-violet-400"
                >
                  Skills
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/projects"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-violet-400 hover:border-violet-400"
                >
                  Projects
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/community"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-violet-400 hover:border-violet-400"
                >
                  Communities
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/contact"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-violet-400 hover:border-violet-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <a href={Pdf} target="_blank" rel="noreferrer">
              <button className="px-8 py-3 font-semibold rounded border-2 border-violet-400 text-violet-400">
                Resume
              </button>
            </a>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-coolGray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
