import React from "react";

export default function Contact() {
  const email = "ayushi.srivastava18@student.amity.edu";
  return (
    <div className="" id="contact">
      <h2 className="text-4xl font-extrabold text-center text-basic-blue slashed-zero mb-4">
        Contact Me
      </h2>
      <h2 className="text-md font-extralight text-center text-basic-blue slashed-zero sm:max-w-sm mx-auto md:max-w-md px-4">
        My inbox is always open. Whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </h2>

      <div className="flex flex-row space-x-4 justify-center pb-16 mt-4">
        <a href="https://twitter.com/srivayushi12">
          <i className="fab fa-twitter fa-2x " />
        </a>
        <a href="https://www.instagram.com/_ayyuuuu_/">
          <i className="fab fa-instagram fa-2x " />
        </a>
        <a href="https://medium.com/@ayushimanoj1201">
          <i className="fab fa-medium fa-2x " />
        </a>
        <a href="https://www.linkedin.com/in/srivayushi/">
          <i className="fab fa-linkedin fa-2x " />
        </a>

        <a href="https://www.hackerrank.com/Ayushi31">
          <i className="fab fa-hackerrank fa-2x " />
        </a>
        <a href="https://github.com/srivastavayushi">
          <i className="fab fa-github fa-2x " />
        </a>
        <a href={`mailto:${email}`}>
          <i className="far fa-envelope fa-2x " />
        </a>
      </div>
    </div>
  );
}
