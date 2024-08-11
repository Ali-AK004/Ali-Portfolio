import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { style } from "../style";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef();
  const handleNav = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("openMenu");
      setOpenNav(!openNav);
    }
  };
  return (
    <nav
      className={`${style.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo({
              top: 0,
              left: 0,
            });
          }}
          className="flex items-center gap-3"
        >
          <img
            src="/logo.svg"
            alt="logo"
            className="h-10 w-10 object-contain"
          />
          <p className="block text-[18px] font-bold text-white">
            AliMo<span className="text-identity">.</span>
          </p>
        </Link>
        <ul className="hidden items-center gap-10 sm:flex">
          {navLinks.map(({ title, id }) => (
            <li
              key={id}
              className={`${active === title ? "text-white" : "text-white/[.7]"} transition duration-300 hover:text-white`}
              onClick={() => setActive(title)}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>

        <div className="relative flex sm:hidden">
          <div
            className="menuBtn relative h-6 w-7 cursor-pointer flex-col"
            onClick={handleNav}
            ref={navRef}
          >
            <span className="absolute top-0 block h-1 w-full rounded-full bg-white"></span>
            <span className="absolute top-[50%] block h-1 w-full -translate-y-[50%] rounded-full bg-white"></span>
            <span className="absolute bottom-0 block h-1 w-full rounded-full bg-white" />
          </div>

          <div
            className={`${openNav ? "black-gradient slideIn_animate absolute right-0 top-8 z-10 my-2 min-w-[140px] rounded-xl p-6" : "hidden"} `}
          >
            <ul className="flex flex-col items-start justify-end gap-4">
              {navLinks.map(({ title, id }) => (
                <li
                  key={id}
                  className={`${active === title ? "text-white" : "text-white/[.7]"} font-poppins transition duration-300 hover:text-white`}
                  onClick={() => {
                    setActive(title);
                    setOpenNav(!openNav);
                    navRef.current.classList.remove("openMenu");
                  }}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
