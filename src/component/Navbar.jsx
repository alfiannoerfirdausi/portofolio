import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full flex flex-wrap items-center justify-between fixed top-0 left-0  z-50 transition-all ${
        scrolled ? " backdrop-blur-lg rounded-2xl shadow-md" : " bg-transparent"
      }`}
    >
      <div className="p-10">
        <h1 className="font-bold text-xl text-primary">Portofolio</h1>
      </div>
      <ul className="sm:flex items-center gap-3 p-10 hidden ">
        <li>
          <a href="#service" className="text-lg hover:text-primary ">
            Service
          </a>
        </li>
        <li>
          <a href="#myproject" className="text-lg  hover:text-primary">
            Project
          </a>
        </li>
        <li>
          <a href="#contactme" className="text-lg  hover:text-primary">
            Contact
          </a>
        </li>
      </ul>
      <CiMenuBurger
        className=" ml-5  text-2xl sm:hidden cursor-pointer hover:text-primary"
        onClick={() => setShow((on) => !on)}
      />
      {show && (
        <ul className="w-full flex flex-col sm:hidden items-center justify-center gap-3">
          <li>
            <a href="" className="text-lg hover:text-primary ">
              Service
            </a>
          </li>
          <li>
            <a href="" className="text-lg  hover:text-primary">
              Project
            </a>
          </li>
          <li>
            <a href="" className="text-lg  hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
