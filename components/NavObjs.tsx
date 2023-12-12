import {
  CalendarIcon,
  CloudIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const navPages = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
    description: "Learn how to integrate our tools with your app.",
  },
  {
    name: "Weather",
    href: "/weather",
    icon: CloudIcon,
    description: "Learn how to integrate our tools with your app.",
  },
  // { name: "Calendar", href: "/calendar", icon: CalendarIcon },
  {
    name: "List",
    href: "/list",
    icon: DocumentDuplicateIcon,
    description: "Learn how to integrate our tools with your app.",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Cog6ToothIcon,
    description: "Learn how to integrate our tools with your app.",
  },
];

export const navContact = [
  { id: 1, name: "Email", href: "#", icon: AiOutlineMail, current: false },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/ImMiguelP",
    icon: AiOutlineGithub,
    current: false,
  },
  {
    id: 3,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/miguelpedreguera/",
    icon: AiOutlineLinkedin,
    current: false,
  },
];
