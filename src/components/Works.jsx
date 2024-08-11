import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../constants";
import { Wrapper } from "../HigherOC";
import { style } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import WorkCard from "./WorkCard";

const Works = () => {
  const INITIAL_PROJECTS_COUNTS = 6;
  const LOAD_MORE_COUNTS = 6;
  const [displayProjects, setDisplayProjects] = useState(
    projects.slice(0, INITIAL_PROJECTS_COUNTS),
  );

  const handleProjectsAddition = () => {
    setDisplayProjects((prev) => {
      const nextIndex = prev.length;
      const nextProjects = projects.slice(
        nextIndex,
        nextIndex + LOAD_MORE_COUNTS,
      );
      return [...prev, ...nextProjects];
    });
  };
  return (
    <>
      <motion.div variants={textVariant()} className="text-center md:text-left">
        <span
          className={`${style.sectionSubText} block uppercase text-secondary`}
        >
          my work
        </span>
        <h2 className={`${style.sectionHeadText} uppercase`}>
          project<span className="text-identity">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 max-w-3xl text-center text-[17px] leading-[30px] text-secondary md:text-left"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className="mt-14 flex flex-wrap gap-7">
        {displayProjects.map(
          (
            {
              name,
              description,
              tags,
              image,
              source_code_link,
              demo_link,
              progress,
            },
            index,
          ) => (
            <WorkCard
              key={index}
              name={name}
              description={description}
              tags={tags}
              image={image}
              source_code_link={source_code_link}
              demo_link={demo_link}
              index={index}
              progress={progress}
            />
          ),
        )}
      </div>

      {displayProjects.length < projects.length && (
        <div className="mt-8 flex items-center justify-center">
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={handleProjectsAddition}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#2257bf_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-slate-950 px-7 py-1 text-[16px] font-medium text-white backdrop-blur-3xl">
              Load More.
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Wrapper(Works, "works");
