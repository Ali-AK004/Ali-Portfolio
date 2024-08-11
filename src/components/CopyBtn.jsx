import PropTypes from "prop-types";

const CopyBtn = ({ title, icon, copyFunc, full }) => {
  return (
    <button
      className={`${full && "w-full"} flex items-center justify-center gap-3 rounded-2xl border border-identity bg-black-100 py-3`}
      onClick={copyFunc}
    >
      {icon}
      {title}
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
