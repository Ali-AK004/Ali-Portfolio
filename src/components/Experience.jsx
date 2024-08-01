import { Wrapper } from "../HigherOC";
import { motion } from "framer-motion";
import { style } from "../style";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <span
          className={`block text-center uppercase md:text-left ${style.sectionSubText}`}
        >
          what i have done so far
        </span>
        <h2 className={`${style.sectionHeadText} text-center md:text-left`}>
          Work Experience<span className="text-identity">.</span>
        </h2>
      </motion.div>

      <div className="mt-12">
        <VerticalTimeline>
          {experiences.map(
            ({ title, company_name, icon, iconBg, date, points }, index) => (
              <ExperienceCard
                key={index}
                title={title}
                company_name={company_name}
                icon={icon}
                iconBg={iconBg}
                date={date}
                points={points}
              />
            ),
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Wrapper(Experience);
