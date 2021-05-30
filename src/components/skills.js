import React from "react";
import Cpp from "../assets/cpp.svg";
import Java from "../assets/java.svg";
import JavaScript from "../assets/javascript.svg";

export default function Skills() {
  const skills = [
    {
      key: 1,
      language: "C++",
      icon: Cpp,
    },
    {
      key: 2,
      language: "Java",
      icon: Java,
    },
    {
      key: 3,
      language: "JavaScript",
      icon: JavaScript,
    },
    {
      key: 4,
      language: "JavaScript",
      icon: JavaScript,
    },
  ];
  // const frameworks = [
  //   {
  //     name: "ReactJs",
  //     icon: "react",
  //     onHover: "text-purple-600",
  //   },
  //   {
  //     name: "ReactJs",
  //     icon: "node",
  //     onHover: "text-purple-600",
  //   },
  //   {
  //     name: "ReactJs",
  //     icon: "node",
  //     onHover: "text-purple-600",
  //   },
  //   {
  //     name: "ReactJs",
  //     icon: "bootstrap",
  //     onHover: "text-purple-600",
  //   },
  //   {
  //     name: "ReactJs",
  //     icon: "node",
  //     onHover: "text-purple-600",
  //   },
  //   {
  //     name: "ReactJs",
  //     icon: "npm",
  //     onHover: "text-purple-600",
  //   },
  //   {
  //     name: "ReactJs",
  //     icon: "node",
  //     onHover: "text-purple-600",
  //   },
  //   {
  //     name: "ReactJs",
  //     icon: "node",
  //     onHover: "text-purple-600",
  //   },
  // ];
  return (
    <>
      <section className="p-6 my-6 bg-coolGray-800 text-coolGray-100">
        <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl py-12">
          <h3 className="text-3xl font-bold leading-none sm:text-4xl">
            Languages
          </h3>
        </div>
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill) => {
            return (
              <div
                className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-coolGray-900 text-coolGray-100"
                key={skill.key}
              >
                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                  <img src={skill.icon} alt="" />
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <p className="text-3xl font-semibold leading-none">
                    {skill.language}
                  </p>
                  <p className="capitalize">Orders</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* FRAMEWORKS AND TECHS */}
      <section className="bg-coolGray-800 text-coolGray-100">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-3xl font-bold">Libraries / Frameworks</h2>
          <div className="flex flex-wrap justify-center lg:justify-between">
            {/* {frameworks.map((framework) => {
              var str1 =
                "fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 ";
              var str2 = `${framework.name} hover:${framework.onHover}`;
              var res = str1.concat(str2);
              return <i classNameName={res} />;
            })} */}
            <i className="fab fa-react fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 hover:text-purple-600" />
            <i className="fab fa-node-js fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 hover:text-purple-600" />
            <i className="fab fa-node-js fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 hover:text-purple-600" />
            <i className="fab fa-bootstrap fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 hover:text-purple-600" />
            <i className="fab fa-node-js fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 hover:text-purple-600" />
            <i className="fab fa-npm fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 hover:text-purple-600" />
            <i className="fab fa-node-js fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 hover:text-purple-600" />
            <i className="fab fa-node-js fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 hover:text-purple-600" />{" "}
            <i className="fab fa-node-js fa-3x text-coolGray-400 mx-10 my-6 fill-current md:mx-12 lg:m-0 w-12 h-12 hover:text-purple-600" />{" "}
          </div>
        </div>
      </section>
    </>
  );
}
