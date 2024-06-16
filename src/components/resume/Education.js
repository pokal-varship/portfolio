import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 "
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="w-full border-l-[6px]  border-l-black border-opacity-30">
          <ResumeCard
            title="Bachelor of Technology - BTech in Computer Engineering"
            subTitle="Uka Tarsadia University (2019 - 2023)"
            result="CGPA 7/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            url="https://utu.ac.in/"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
