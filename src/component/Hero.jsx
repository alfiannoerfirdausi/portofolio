import imgHero from "../assets/undraw_developer-activity_4zqd.svg";
import { MdFileDownload } from "react-icons/md";
import { sosmed } from "../data";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 p-15 m-5">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          Hi, I’m Alfian 👋
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Frontend Developer based in Jakarta, Indonesia
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-6">
          I specialize in building responsive, user-friendly web interfaces
          using React, Tailwind CSS, and modern frontend tools. Let’s turn your
          ideas into pixel-perfect products.
        </p>
        <a
          href="#"
          className="p-2 mt-2 w-36 flex rounded-2xl bg-primary text-white font-semibold "
        >
          Download CV <MdFileDownload className="text-2xl" />
        </a>
        <div className="flex mt-2 p-2">
          {sosmed.map((sosmed1, index) => (
            <a href="#" key={index}>
              <img src={sosmed1.img} alt={sosmed1.nama} className="size-8" />
            </a>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
      >
        <img
          src={imgHero}
          alt="developer activity"
          className="size-96 m-auto"
        />
      </motion.div>
    </div>
  );
}
