import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";

const ExperienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ color: "#fff", background: "#1d1836" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={icon}
            alt={company_name}
            className="h-[70%] w-[70%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{title}</h3>
        <span className="block text-[16px] font-semibold text-secondary">
          {company_name}
        </span>
      </div>

      <ul className="my-5 ml-5 list-disc space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-[14px] tracking-wider text-white-100">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company_name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconBg: PropTypes.string,
  date: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceCard;
