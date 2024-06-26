import React from "react";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, url, technologies }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex flex-col justify-between"
      >
        <div className="w-full h-200px overflow-hidden rounded-lg">
          <img
            className="w-full h-400px  object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            src={src}
            alt="Project"
          />
        </div>
        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-normal">
                {title}
              </h3>
              <div className="flex gap-2">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor transition-colors duration-300 cursor-pointer">
                  <FaGlobe />
                </span>
              </div>
            </div>
            <p className="text-sm tracking-wide mt-3 hover:text-gray-100 transition-colors duration-300">
              {des}
            </p>
            <div className="flex gap-3 items-center flex-wrap mt-5">
              {technologies?.map((item) => (
                <>
                  <span className="text-xs bg-designColor p-1 rounded">
                    {item}
                  </span>
                </>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectsCard;
