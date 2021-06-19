import React from "react";
import { motion } from "framer-motion";

export default function Email() {
  const email = "ayushi.srivastava18@student.amity.edu";
  return (
    <motion.div
      className="fixed bottom-24 left-8 vertical-rl invisible xl:visible "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.9,
        duration: 1.5,
      }}
    >
      <h1 className="  text-sm font-mono text-left transform rotate-180 text-slate-light">
        <a href={`mailto:${email}`}>{email}</a>
      </h1>
    </motion.div>
  );
}
