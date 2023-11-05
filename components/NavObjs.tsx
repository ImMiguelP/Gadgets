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
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Weather", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "List", href: "#", icon: DocumentDuplicateIcon, current: false },
];

export const navContact = [
  { id: 1, name: "Email", href: "#", icon: AiOutlineMail, current: false },
  { id: 2, name: "GitHub", href: "#", icon: AiOutlineGithub, current: false },
  {
    id: 3,
    name: "LinkedIn",
    href: "#",
    icon: AiOutlineLinkedin,
    current: false,
  },
];
