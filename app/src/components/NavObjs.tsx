import {
  AdjustmentsHorizontalIcon,
  CalendarIcon,
  CloudIcon,
  DocumentDuplicateIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const navPages = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Weather", href: "/weather", icon: CloudIcon },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon },
  { name: "List", href: "/list", icon: DocumentDuplicateIcon },
  { name: "Settings", href: "/settings", icon: AdjustmentsHorizontalIcon },
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
