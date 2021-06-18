import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import Pdf from "../assets/OS.pdf";

export default function Nav() {
  return (
    <>
      <header className="px-4 text-basic-blue  bg-basic-gray fixed w-screen ">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
            <Link to="/#home" className="flex items-center p-2">
              <motion.span
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <img src={logo} className="w-8 h-8 text-basic-yellow" alt="" />
              </motion.span>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/#about"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-basic-yellow hover:border-basic-yellow"
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
                className="flex"
              >
                <Link
                  to="/#skills"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-basic-yellow hover:border-basic-yellow"
                >
                  Skills
                </Link>
              </motion.li>
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/#projects"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-basic-yellow hover:border-basic-yellow"
                >
                  Projects
                </Link>
              </motion.li>
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/#experience"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-basic-yellow hover:border-basic-yellow"
                >
                  Communities
                </Link>
              </motion.li>
              <motion.li
                className="flex"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <Link
                  to="/#contact"
                  className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-basic-yellow hover:border-basic-yellow"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <a href={Pdf} target="_blank" rel="noreferrer">
              <button className="px-8 py-3 font-semibold rounded border-2 border-basic-blue text-basic-blue">
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
