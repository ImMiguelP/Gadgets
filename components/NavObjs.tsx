import {
  CalendarIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export const navPages = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Weather", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "List", href: "#", icon: DocumentDuplicateIcon, current: false },
];

export const navContact = [
  { id: 1, name: "Email", href: "#", initial: "E", current: false },
  { id: 2, name: "GitHub", href: "#", initial: "G", current: false },
  { id: 3, name: "LinkedIn", href: "#", initial: "L", current: false },
];
