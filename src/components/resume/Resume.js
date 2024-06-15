import React, { useState } from 'react';
import Title from '../layouts/Title';
import Experience from './Experience';
import { saveAs } from 'file-saver';

const Resume = () => {
  const [experienceData, setExperienceData] = useState(false);

  const downloadPDF = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/varship_resume.pdf`;
    saveAs(pdfUrl, 'varship_resume.pdf');
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => setExperienceData(true)}
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {experienceData && <Experience />}
      <div className="flex justify-center mt-10">
        <button
          className="bg-designColor text-white px-6 py-2 rounded-lg"
          onClick={downloadPDF}
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;