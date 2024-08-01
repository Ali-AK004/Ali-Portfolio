import PropTypes from "prop-types";
import { external_link, github } from "../assets";
import { Tilt } from "react-tilt";

const WorkCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
  progress,
}) => {
  return (
    <Tilt
      options={{
        max: 30,
        scale: 1,
        speed: 450,
      }}
      className="z-30 flex w-full flex-col rounded-2xl bg-tertiary p-5 sm:w-[360px]"
    >
      <div className="relative h-[230px] w-full">
        <img
          src={image}
          alt={name}
          className="block h-full w-full rounded-2xl object-cover"
        />

        <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
          <div className="flex gap-2">
            {source_code_link ? (
              <a
                href={source_code_link}
                target="_blank"
                className="black-gradient h-10 w-10 rounded-full p-2"
              >
                <img src={github} alt={name} />
              </a>
            ) : (
              ""
            )}

            {demo_link ? (
              <a
                href={demo_link}
                target="_blank"
                className="black-gradient h-10 w-10 rounded-full p-[9px]"
              >
                <img src={external_link} alt={name} />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <span className="block text-[24px] font-bold text-white">
          {name}{" "}
          {progress ? (
            <span className="text-[14px] text-gray-500">(In Progress)</span>
          ) : (
            ""
          )}
        </span>
        <p className="text-[14px] leading-[23px] text-secondary">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-start gap-3 text-[14px]">
          {tags.map(({ name, color }, index) => (
            <p className={`${color}`} key={index}>
              #{name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
};

WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string,
  demo_link: PropTypes.string,
  index: PropTypes.number.isRequired,
  progress: PropTypes.bool,
};

export default WorkCard;
