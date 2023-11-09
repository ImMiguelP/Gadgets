import {
  CalendarIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const navPages = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Weather", href: "/weather", icon: FolderIcon },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon },
  { name: "List", href: "/list", icon: DocumentDuplicateIcon },
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
