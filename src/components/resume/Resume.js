import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { saveAs } from "file-saver";

const Resume = () => {
  const [experienceData, setExperienceData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [educationData, setEducationData] = useState(false);

  const downloadPDF = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/varship_resume.pdf`;
    saveAs(pdfUrl, "varship_resume.pdf");
  };
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1.5+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>

          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
        </ul>
      </div>
      {experienceData && <Experience />}
      {skillData && <Skills />}
      {educationData && <Education />}
      <div className="flex justify-center mt-10">
        <button
          className="w-full h-12 bg-red-500 rounded-lg text-base text-white tracking-wider uppercase hover:text-white hover:border-[1px] hover:border-white border-transparent active:border-white"
          onClick={downloadPDF}
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;
