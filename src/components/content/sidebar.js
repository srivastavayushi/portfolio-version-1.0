import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/#home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/#about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    path: "/#skills",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/#projects",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Experience",
    path: "/#experience",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/#contact",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
