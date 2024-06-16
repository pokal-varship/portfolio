import React from "react";
import Title from "../layouts/Title";
import {
  teamcamp,
  anchorUSD,
  aiyyna,
  copro,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projectsData = [
    {
      title: "TeamCamp",
      des: "Simply project management, time tracking & invoice",
      role: "Backend integration",
      tech: "Node js, Next js, TypeScript, One Signal, MongoDB Atlas, GraphQL, Firebase",
      src: teamcamp,
      url: "https://www.teamcamp.app/",
    },
    {
      title: "Anchor USD",
      des: "Help to contact your bank within your bank track your all transaction",
      role: "Backend integration",
      tech: "TypeScript, Next js, Graphql, One signal, Mongodb Atlas",
      src: anchorUSD,
      url: "",
    },
    {
      title: "Aiyyna",
      des: "Digital Infrastructure for Textile Business and provide Auto Reconciliation service",
      role: "Backend integration",
      tech: "Node js, Express js, TypeScript, Redis, MongoDB",
      src: aiyyna,
      url: "https://www.aiyyna.com/",
    },
    {
      title: "Copro",
      des: "Hire subcontractors and purchase construction materials online.",
      role: "Backend integration",
      tech: "Node js, Express js, MongoDB",
      src: copro,
      url: "https://copro.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            role={project.role}
            tech={project.tech}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
