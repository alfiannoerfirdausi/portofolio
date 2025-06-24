import sosmed1 from "../src/assets/sosial media/github.png";
import sosmed2 from "../src/assets/sosial media/gmail.png";
import sosmed3 from "../src/assets/sosial media/instagram.png";
import sosmed4 from "../src/assets/sosial media/linkedin.png";
import sosmed5 from "../src/assets/sosial media/whatsapp.png";

export const sosmed = [
  {
    nama: "Github",
    img: sosmed1,
  },
  {
    nama: "Gmail",
    img: sosmed2,
  },
  {
    nama: "Instagram",
    img: sosmed3,
  },
  {
    nama: "Linkedin",
    img: sosmed4,
  },
  {
    nama: "Whatsapp",
    img: sosmed5,
  },
];

import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";

export const services = [
  {
    icon: RiComputerLine,
    judul: "UI/UX Design",
    deskripsi:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemoaut sequi quibusdam facilis ipsam doloribus accusantium advoluptatibus reprehenderit necessitatibus quisquam officia explicabo repudiandae eveniet ipsa voluptatem odit consequatur!",
  },
  {
    icon: CiMobile3,
    judul: "Mobile Developer",
    deskripsi:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemoaut sequi quibusdam facilis ipsam doloribus accusantium advoluptatibus reprehenderit necessitatibus quisquam officia explicabo repudiandae eveniet ipsa voluptatem odit consequatur!",
  },
  {
    icon: CgWebsite,
    judul: "Web Developer",
    deskripsi:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemoaut sequi quibusdam facilis ipsam doloribus accusantium advoluptatibus reprehenderit necessitatibus quisquam officia explicabo repudiandae eveniet ipsa voluptatem odit consequatur!",
  },
];

import project1 from "../src/assets/proyek/proyek1.webp";
import project2 from "../src/assets/proyek/proyek2.webp";
import project3 from "../src/assets/proyek/proyek3.webp";
import project4 from "../src/assets/proyek/proyek4.webp";
import project5 from "../src/assets/proyek/proyek5.webp";
import project6 from "../src/assets/proyek/proyek6.webp";
export const projects = [
  {
    img: project1,
    nama: "Landing Page Coffee shop",
    tools: ["React", "Tailwind", "Framer Motion"],
  },
  {
    img: project2,
    nama: "Website LMS data dummy",
    tools: ["React", "Tailwind", "Framer Motion", "Express Js", "MongoDB"],
  },
  {
    img: project3,
    nama: "Tokopedia",
    tools: ["React", "Tailwind", "Framer Motion", "Swiperjs"],
  },
  {
    img: project4,
    nama: "Search App Dengan Sistem AI",
    tools: ["React Native", "Bootstrap", "Lokomotive scroll"],
  },
  {
    img: project5,
    nama: "Shop App Dengan Single World",
    tools: ["React", "Tailwind", "Framer Motion"],
  },
  {
    img: project6,
    nama: "Chat GPT",
    tools: ["React", "Tailwind", "Framer Motion"],
  },
];
