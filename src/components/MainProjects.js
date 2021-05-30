import React from "react";
import image from "../assets/expense-tracker-1.png";

export default function MainProjects() {
  const projects = [
    {
      key: 1,
      name: "Expense Tracker",
      category: "ReactJs Node.js MongoDB Express",
      about:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      image: image,
      github: "https://github.com/srivastavayushi/Expense-Tracker",
      deployOn: "https://expense-tracker-full-stack.herokuapp.com/",
    },
    {
      key: 2,
      name: "Expense Tracker",
      category: "ReactJs Node.js MongoDB Express",
      about:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      image: image,
      github: "https://github.com/srivastavayushi/Expense-Tracker",
      deployOn: "https://expense-tracker-full-stack.herokuapp.com/",
    },
    {
      key: 3,
      name: "Expense Tracker",
      category: "ReactJs Node.js MongoDB Express",
      about:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      image: image,
      github: "https://github.com/srivastavayushi/Expense-Tracker",
      deployOn: "https://expense-tracker-full-stack.herokuapp.com/",
    },
  ];
  return (
    <>
      <section className=" text-coolGray-100 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl py-12">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">
              Some things I've built
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => {
              return (
                <div className="p-4 md:w-1/3" key={project.key}>
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden bg-coolGray-900 shadow-lg">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={project.image}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 ">
                        {project.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.name}
                      </h1>
                      <p className="leading-relaxed mb-3">{project.about}</p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          className="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0"
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
                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <a href={project.github}>
                            <i className="fab fa-github fa-lg text-coolGray-400 w-4 h-4 mr-1" />
                          </a>
                        </span>
                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                          <a href={project.deployOn}>
                            {" "}
                            <i className="far fa-browser fa-lg text-coolGray-400 w-4 h-4 mr-1" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
