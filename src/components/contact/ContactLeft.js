import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Varship Pokal</h3>
        <p className="text-lg font-normal text-gray-400">Backend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Experienced backend developer with a proven track record in Node.js
          and REST API development. Proficient in creating scalable and
          efficient server-side applications, integrating third-party APIs, and
          optimizing performance.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9638112309</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">pokalvarship5@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/varship-pokal"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://github.com/pokal-varship"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaGithub />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
