import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { style } from "../style";

const Wrapper = (Section, SectionId) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        className={`${style.padding} relative z-0 mx-auto max-w-7xl`}
      >
        <span id={SectionId} className="hash-span" />
        <Section />
      </motion.section>
    );
  };

export default Wrapper;
