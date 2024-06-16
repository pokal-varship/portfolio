import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Node js Developer"
            subTitle="surat,Gujrat,India. - (Jun 2023 - Present)"
            result="Pixer Digital"
            des="Working as backend developer."
            utl="https://www.pixer.io/"
          />
          <ResumeCard
            title="Web Development Intern"
            subTitle="surat,Gujrat,India. - (Dec 2022 - May 2023)"
            result="Digitattva Technolabs"
            des="With extensive experience in API development and implementation, I have contributed significantly to enhancing application functionality and security. My proficiency in Node.js, Express.js, and various security measures ensures robust and efficient backend solutions."
            url="https://www.digitattva.in/"
          />
           <ResumeCard
            title="Web Development Intern"
            subTitle="surat,Gujrat,India. - (May 2022 - June 2022)"
            result="Netsol IT Solutions Pvt. Ltd."
            des="Learn Skills:- JavaScript, HTML5, Cascading Style Sheets (CSS)"
            url="https://netsolitsolution.com/"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
