import React from "react";
import { motion } from "framer-motion";

function LineL() {
  return (
    <motion.div
      className="border  fixed left-10 bottom-0 h-20 border-basic-blue invisible xl:visible "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.6,
        duration: 0.5,
      }}
    ></motion.div>
  );
}
function LineR() {
  return (
    <motion.div
      className="border fixed right-12 bottom-0 h-20 border-basic-blue invisible xl:visible "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.6,
        duration: 0.5,
      }}
    ></motion.div>
  );
}

export { LineL, LineR };
