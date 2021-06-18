import React from "react";

export default function Contact() {
  return (
    <div className=" w-screen">
      <h2 className="text-4xl font-extrabold text-center text-basic-blue slashed-zero mb-4">
        02. Contact Me
      </h2>
      <h2 className="text-md font-thin text-center text-basic-blue slashed-zero sm:max-w-sm mx-auto md:max-w-md p-2">
        My inbox is always open. Whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </h2>

      <div className="flex flex-row justify-center mt-1 invisible xl:visible">
        <i className="far fa-envelope fa-3x " />
      </div>

      <div className="flex flex-row space-x-4 justify-center pb-16 visible xl:invisible">
        <i className="fab fa-twitter fa-2x " />
        <i className="fab fa-instagram fa-2x " />
        <i className="fab fa-medium fa-2x " />
        <i className="fab fa-linkedin fa-2x " />
        <i className="fab fa-hackerrank fa-2x " />
        <i className="fab fa-github fa-2x " />
        <i className="far fa-envelope fa-2x " />
      </div>
    </div>
  );
}
