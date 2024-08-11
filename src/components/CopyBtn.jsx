import PropTypes from "prop-types";

const CopyBtn = ({ title, icon, copyFunc, full }) => {
  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none ${full && "w-full"}`}
      onClick={copyFunc}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#2257bf_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {icon}
        {title}
      </span>
    </button>
  );
};

CopyBtn.propTypes = {
  title: PropTypes.string.isRequired,
  copyFunc: PropTypes.func.isRequired,
  icon: PropTypes.element,
  full: PropTypes.bool,
};
export default CopyBtn;
