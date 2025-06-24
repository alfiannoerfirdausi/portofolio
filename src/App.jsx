import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/card";

import { services, projects } from "./data";
import { motion } from "motion/react";

function App() {
  const MotionCard = motion(Card);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 1 },
    }),
  };
  return (
    <div>
      <header className="mb-10 p-5 mt-16">
        {/* navbar */}
        <Navbar />
        {/* navbar end */}

        {/* hero start */}
        <Hero />
        {/* hero end */}

        {/* logo start */}
        <div className="relative overflow-hidden whitespace-nowrap bg-black text-white py-4 h-15">
          <motion.span
            initial={{ x: "150%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="mx-4 text-xl font-semibold inline-block absolute"
          >
            React ⚛️ • Tailwind CSS 💨 • JavaScript ⚡ • Frontend Developer 💻 •
            UI/UX ✨ • Freelancer 🔧 •
          </motion.span>
          <motion.span
            initial={{ x: "150%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 10,
              delay: 4.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mx-4 text-xl font-semibold inline-block absolute"
          >
            React ⚛️ • Tailwind CSS 💨 • JavaScript ⚡ • Frontend Developer 💻 •
            UI/UX ✨ • Freelancer 🔧 •
          </motion.span>
        </div>

        {/* logo end */}
      </header>
      <section id="service" className="mt-10 p-10 scroll-mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 mb-10 font-bold text-4xl text-center"
        >
          What i do ?
        </motion.h1>
        <div className="container-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <MotionCard
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
                custom={i}
                Icon={<Icon />}
                judul={service.judul}
                deskripsi={service.deskripsi}
              />
            );
          })}
        </div>
      </section>
      <section id="myproject" className=" mt-10 p-10 scroll-mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 mb-10 font-bold text-4xl text-center"
        >
          My Project
        </motion.h1>
        <div className="container-card grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={i}
              custom={i}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl p-6 transition hover:shadow-2xl hover:-translate-y-1 duration-300 border border-gray-200"
            >
              <img
                src={project.img}
                alt="project one"
                className="text-5xl text-primary mb-4 transition group-hover:scale-110"
              />
              <div className="mt-2 p-2">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition">
                  {project.nama}
                </h2>
                {project.tools.map((tool) => (
                  <span className="bg-white p-2 rounded-2xl border border-gray-200 shadow-md group-hover:shadow-lg">
                    {tool}
                  </span>
                ))}
              </div>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="contactme" className=" mt-10 p-10 scroll-mt-16">
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-gray-800"
          >
            Contact Me
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Input Nama */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="peer w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-gray-500 text-sm left-4 top-3 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Your Name
              </label>
            </div>

            {/* Input Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="peer w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-gray-500 text-sm left-4 top-3 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Email Address
              </label>
            </div>

            {/* Pesan */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="peer w-full px-4 pt-6 pb-2 text-gray-900 bg-transparent border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-gray-500  text-sm left-4 top-3 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400  peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Your Message
              </label>
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Alfian.dev</h2>
            <p className="text-sm text-gray-400">
              Frontend developer passionate about clean design & interactive UI.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                LinkedIn
              </a>
              <a href="#" className="hover:text-pink-400">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-300">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Alfian. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
