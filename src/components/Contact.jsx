import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import Lottie from "react-lottie";
import { Typewriter } from "react-simple-typewriter";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimationData from "../constants/confetti";
import { Wrapper } from "../HigherOC";
import { style } from "../style";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import CopyBtn from "./CopyBtn";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Ali",
          to_email: "aak842653@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank you!, Your message was sent successfully.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ali.webdevx@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <>
      <div className="flex flex-col-reverse items-center overflow-hidden xl:mt-12 xl:flex-row">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Slide
          className="top-20"
        />
        <motion.div
          className="flex w-full flex-1 flex-col"
          variants={slideIn("left", "tween", 0.2, 1)}
        >
          <div className="flex w-full flex-col rounded-2xl bg-black-100 p-8">
            <div className="flex flex-col">
              <span
                className={`uppercase text-secondary ${style.sectionSubText}`}
              >
                get in touch
              </span>
              <h2 className={`${style.sectionHeadText}`}>
                Contact<span className="text-identity">.</span>
              </h2>
            </div>

            <form
              className="mt-12 flex w-full flex-col gap-8"
              onSubmit={handleSubmit}
            >
              <div className="input-effect relative flex">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-tertiary px-6 py-4 focus:outline-none"
                  required
                />
                <label className="absolute py-4 pl-6 text-white/[.7]">
                  Your Name
                </label>
              </div>

              <div className="input-effect relative flex">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-tertiary px-6 py-4 focus:outline-none"
                  required
                />
                <label className="absolute py-4 pl-6 text-white/[.7]">
                  Your mail
                </label>
              </div>

              <div className="input-effect relative flex">
                <textarea
                  rows={7}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex-1 rounded-lg bg-tertiary px-6 py-4 focus:outline-none"
                  required
                />
                <label className="absolute py-4 pl-6 text-white/[.7]">
                  Your Message
                </label>
              </div>

              {error ? (
                <p className="text-[16px] font-semibold text-red-500">
                  Something Went Wrong!, Please Contact me on
                  aak842653@gmail.com
                </p>
              ) : (
                ""
              )}

              <button
                type="submit"
                className={`mt-5 rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none ${loading ? "cursor-wait" : "cursor-pointer"}`}
              >
                {loading ? (
                  <>
                    Sending
                    <Typewriter
                      words={[". . ."]}
                      loop
                      typeSpeed={90}
                      deleteSpeed={70}
                    />
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>

          <div className="relative flex flex-col">
            <div className="z-20 flex items-center justify-center py-10 text-center text-black before:absolute before:left-0 before:z-[-2] before:h-[1px] before:w-full before:items-center before:bg-white/[.6] after:absolute after:z-[-1] after:h-10 after:w-10 after:items-center after:justify-center after:rounded-full after:bg-white/[.95]">
              Or
            </div>

            <div className="relative flex w-full items-center justify-center">
              <div
                className={`absolute bottom-12 left-[50%] translate-x-[-50%] ${copied ? "block" : "hidden"}`}
              >
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: AnimationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  width={400}
                  height={200}
                />
              </div>
              <CopyBtn
                icon={
                  copied ? <FaCheck className="text-green-500" /> : <FiCopy />
                }
                title={copied ? "Email Copied" : "Copy Email"}
                copyFunc={copyEmail}
                full
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default Wrapper(Contact, "contact");
