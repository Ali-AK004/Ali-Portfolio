import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { Wrapper } from "../HigherOC";

const Tech = () => {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {technologies.map(({ name, icon }) => (
          <div key={name} className="h-28 w-28">
            <BallCanvas icon={icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wrapper(Tech, "tech");
