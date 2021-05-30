import React from "react";
import profile from "../assets/profile.svg";
import github from "../assets/github.svg";

export default function Home() {
  return (
    <>
      <section className="text-coolGray-100">
        <div className="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Hi I'm
              <span className="text-violet-400">&nbsp;Ayushi</span>&nbsp;kkkkk
              kkkkkkkk
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href="/"
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-coolGray-900"
              >
                Let's Connect
              </a>
              <a
                href="https://github.com/srivastavayushi"
                className="px-8 py-3 text-lg font-semibold border rounded border-coolGray-100"
              >
                <div>
                  <img src={github} alt="github" className="float-right mx-1" />
                  Github
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={profile}
              alt=""
              className="object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </>
  );
}
