import { motion } from "framer-motion";
import { style } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Wrapper } from "../HigherOC";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center md:text-left">
        <div className="max-w-[600px]">
          <span className={`block ${style.sectionSubText}`}>introduction</span>
          <h2 className={`${style.sectionHeadText} text-white`}>
            overview<span className="text-identity">.</span>
          </h2>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-center text-[17px] leading-[30px] text-secondary md:text-left"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next.JS, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, and user-friendly solutions that solve real-world
        problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:mt-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map(({ title, icon }, index) => (
          <ServiceCard title={title} icon={icon} index={index} key={index} />
        ))}
      </div>
    </>
  );
};

export default Wrapper(About, "about");
