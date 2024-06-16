import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

const Media = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.javascript.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiJavascript />
          </a>
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiNodedotjs />
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiNextdotjs />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiTypescript />
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiExpress />
          </a>
          <a
            href="https://graphql.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <GrGraphQl />
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiMongodb />
          </a>
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiMysql />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
