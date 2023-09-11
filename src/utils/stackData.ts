import imgStyled from "../public/static/img/stack/styled.png";
import imgPython from "../public/static/img/stack/python.png";
import imgPostgresql from "../public/static/img/stack/postgresql.png";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

export const stackData = [
  {
    title: "HTML",
    img: SiHtml5,
  },
  {
    title: "CSS",
    img: SiCss3,
  },
  {
    title: "JS",
    img: SiJavascript,
  },
  {
    title: "Node.js",
    img: SiNodedotjs,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: SiReact,
  },
  { title: "Vite", img: SiVite },
  { title: "Next.js", img: SiNextdotjs },
  { title: "TypeScript", img: SiTypescript },
  { title: "Python", img: SiPython },
  { title: "PostgreSQL", img: SiPostgresql },
];
