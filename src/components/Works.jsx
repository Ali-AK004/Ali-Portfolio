import { Wrapper } from "../HigherOC";
import { motion } from "framer-motion";
import { style } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import WorkCard from "./WorkCard";

const Works = () => {
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

      <div className="mt-14 flex flex-wrap gap-5">
        {projects.map(
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
    </>
  );
};

export default Wrapper(Works, "works");
