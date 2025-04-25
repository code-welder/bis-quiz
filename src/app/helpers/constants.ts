import { NavListItem } from "@/app/components/NavList";

export const SECTION_IDS = {
  features: "features",
};

export const NAV_LIST: NavListItem[] = [
  { title: "Возможности", link: `#${SECTION_IDS.features}` },
  { title: "Тарифы", link: "#" },
  { title: "Отзывы", link: "#" },
  { title: "Контакты", link: "#" },
];

export const SOCIALS_LIST: NavListItem[] = [
  { title: "VK", link: "#" },
  { title: "Дзен", link: "#" },
  { title: "Telegram", link: "#" },
  { title: "Instagram", link: "#" },
];
