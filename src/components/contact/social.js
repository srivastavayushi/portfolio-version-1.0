import React from "react";
import { motion } from "framer-motion";

export default function Social() {
  return (
    <motion.div
      className="fixed bottom-24 right-8 space-y-4 flex flex-col xl:visible invisible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.9,
        duration: 1.5,
      }}
    >
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
    </motion.div>
  );
}
