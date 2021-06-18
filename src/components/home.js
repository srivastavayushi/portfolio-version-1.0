import React from "react";
import profile from "../assets/profile.svg";
import github from "../assets/github.svg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div id="home">
      <section className="text-basic-blue pt-16 ">
        <div className="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <motion.h1
              className="text-5xl font-bold leading-none sm:text-6xl "
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.5,
                duration: 1,
                type: "spring",
                stiffness: 25,
              }}
            >
              Hey,&nbsp; I'm
              <motion.span
                className="text-basic-yellow"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                &nbsp;Ayushi
              </motion.span>
              <br />I speak
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("JavaScript")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("C++")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Java")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Python")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </motion.h1>
            <motion.p
              className="mt-10 text-lg font-mono font-thin tracking-wide"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.7,
                duration: 1,
                type: "spring",
                stiffness: 25,
              }}
            >
              Have a look at my{" "}
              <a
                href="https://ayushi-resume.netlify.app/"
                className="underline"
              >
                live-resume
              </a>{" "}
              !
            </motion.p>
            <motion.p
              className="mt-6 mb-8 text-lg sm:mb-12 "
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.0,
                duration: 1,
                type: "spring",
                stiffness: 25,
              }}
            >
              I'm a self-taught MERN Stack developer who specializes in building
              exceptional web applications.
              <br className="hidden md:inline lg:hidden" />
              <motion.span
                className="mt-6 text-lg "
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.3,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                &nbsp;Currently, I'm learning Redux and focussing on building
                highly interactive and user-friendly products.
              </motion.span>
            </motion.p>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <motion.a
                href="/"
                className="px-8 py-3 text-lg font-semibold rounded bg-basic-yellow text-basic-blue"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.5,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                Let's Connect
              </motion.a>
              <motion.a
                href="https://github.com/srivastavayushi"
                className="px-8 py-3 text-lg font-semibold border rounded border-basic-blue"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.7,
                  duration: 1,
                  type: "spring",
                  stiffness: 25,
                }}
              >
                <div>
                  <img
                    src={github}
                    alt="github"
                    className="float-right mx-1 text-basic-blue"
                  />
                  Github
                </div>
              </motion.a>
            </div>
          </div>
          <motion.div
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.4,
              duration: 1,
              type: "spring",
              stiffness: 25,
            }}
          >
            <img
              src={profile}
              alt=""
              className="object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 text-basic-yellow"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
