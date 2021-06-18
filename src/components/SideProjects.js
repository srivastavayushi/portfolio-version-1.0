import React from "react";
import { sideProjects } from "./content/projects";
import styled from "styled-components";

const ProjectCard = styled.div`
  // background-image: url(${sideProjects});
`;
export default function SideProjects() {
  return (
    <div>
      <section className=" body-font" id="sideprojects">
        <div className="container px-5 py-8 mx-auto">
          <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl py-12">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">
              Other Noteworthy Projects
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            {sideProjects.map((project) => {
              return (
                <div key={project.key} className="p-4 lg:w-1/3 ">
                  <ProjectCard className="h-full bg-opacity-0 bg-fixed bg-contain bg-center px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg  hover:-translate-y-1 transform transition">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      {project.category}
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                      {project.name}
                    </h1>

                    <p className="leading-relaxed mb-3">{project.about}</p>
                    <a
                      className="text-purple-400 inline-flex items-center"
                      href="/"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                        <a href={project.github}>
                          <i className="fab fa-github fa-lg text-coolGray-400 w-4 h-4 mr-1" />
                        </a>
                      </span>
                      <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                        <a href={project.deployOn}>
                          <i className="far fa-browser fa-lg text-coolGray-400 w-4 h-4 mr-1" />
                        </a>
                      </span>
                    </div>
                  </ProjectCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
