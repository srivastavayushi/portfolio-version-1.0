import React, { useEffect } from "react";
import { sideProjects } from "./content/projects";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SideProjects() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: 30,     
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div>
      <section className=" body-font" id="sideprojects">
        <div className="container px-8 py-8 mx-auto">
          <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl py-12">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">
              Other Noteworthy Projects
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            {sideProjects.map((project) => {
              return (
                <div key={project.key} className="p-4 lg:w-1/3">
                  <motion.div
                    className="h-full bg-opacity-30 bg-project-yellow hover:bg-opacity-90 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg  hover:-translate-y-1 transform transition"
                    ref={ref}
                    animate={animation}
                  >
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 bg-basic-yellowLight text-basic-blue p-2 rounded-md">
                      {project.category}
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white m-3">
                      {project.name}
                    </h1>

                    <p className="leading-relaxed mb-3">{project.about}</p>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                        <a href={project.github}>
                          <i className="fab fa-github fa-lg text-coolGray-400 w-4 h-4 mr-1" />
                        </a>
                      </span>
                      <span className="text-gray-500 inline-flex items-center leading-none text-sm ml-0">
                        <a href={project.deployOn}>
                          <i className="far fa-browser fa-lg text-coolGray-400 w-4 h-4 mr-1" />
                        </a>
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
