import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import PropTypes from "prop-types";

const ServiceCard = ({ icon, title, index }) => {
  return (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <motion.div
          options={{
            max: 45,
            speed: 450,
            scale: 1,
          }}
          className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h4 className="text- text-center text-[20px] font-bold">{title}</h4>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ServiceCard;
