import React, { useState } from "react";

import experience from "./content/experience";
import cap from "../assets/cap.svg";

export default function Communities() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className=" body-font" id="experience">
      <div className="container px-5 py-16 mx-auto flex flex-wrap flex-col">
        <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl py-4 ">
          <h2 className="text-2xl font-bold leading-none sm:text-4xl">
            Work Experience
          </h2>
        </div>
        <div className="flex mx-auto flex-wrap mb-8">
          {experience.map(({ key, name, logo }) => {
            return (
              <button
                key={key}
                className={
                  toggleState === key
                    ? "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-4 title-font text-lg font-medium inline-flex items-center leading-none border-basic-yellow text-basic-yellow tracking-wider rounded-t focus:outline-none pointer-events-auto"
                    : "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font text-lg font-medium inline-flex items-center leading-none tracking-wider focus:outline-none pointer-events-auto"
                }
                onClick={() => toggleTab(key)}
              >
                <img src={logo} alt=" " className="w-5 h-5 mr-3" />

                {name}
              </button>
            );
          })}
        </div>
        {experience.map(({ key, jobName, work, time }) => {
          return (
            <div
              key={key}
              className={
                toggleState === key
                  ? "flex flex-col  w-full  "
                  : "flex flex-col  w-full hidden "
              }
            >
              <div className="w-full px-2 mt-0 sm:w-1/2 xl:w-1/2 md:w-4/5 xl:mt-0 mx-auto ">
                <div
                  className="relative flex items-center px-5 py-6 overflow-hidden rounded-md shadow-sm bg-basic-white
                "
                >
                  <span className="absolute top-0 -left-4 w-3 h-full bg-gradient-to-b from-gradient-blue to-gradient-cream"></span>

                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-basic-blue">
                      {jobName}
                    </h4>

                    <div className="text-basic-yellow mb-4">{time}</div>
                    <div className="flex flex-row content-center">
                      <img
                        src={cap}
                        alt=" "
                        className="h-5 w-5 mr-2 text-basic-yellow"
                      />
                      <div className="text-basic-blue float-right">
                        {work.one}
                      </div>
                    </div>
                    <div className="flex flex-row content-center">
                      <img src={cap} alt=" " className="h-5 w-5 mr-2 " />
                      <div className="text-basic-blue float-right">
                        {work.two}
                      </div>
                    </div>
                    <div className="flex flex-row content-center">
                      <img src={cap} alt=" " className="h-5 w-5 mr-2 " />
                      <div className="text-basic-blue float-right">
                        {work.three}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
