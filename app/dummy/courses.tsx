import { DUMMY_TUTOR } from "./tutor";

export const DUMMY_THEME_COURSES = [
  {
    title: "IA",
    description: "Basic models",
    id: "2",
  },
  {
    title: "Structure Programmimng",
    description: "Loops and conditionals",
    id: "3",
  },
  {
    title: "OOP Programming",
    description: "Polimorphism",
    id: "4",
  },
];

export const DUMMY_COURSE_DETAIL = {
  id: "1",
  title: "IA",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  tutor: DUMMY_TUTOR,
  achievements: [
    {
      title: "Scrapping",
      description: "Get web content",
      icondId: "preview",
      themeType: "warm" as const,
    },
    {
      title: "Scrapping",
      description: "Get web content",
      icondId: "preview",
      themeType: "warm" as const,
    },
    {
      title: "Scrapping",
      description: "Get web content",
      icondId: "preview",
      themeType: "warm" as const,
    },
  ],
  summaries: [
    {
      id: "1",
      title: "Testing Beautiful Soup lib",
      description: "Learning some main topics",
    },
    {
      id: "2",
      title: "Testing Beautiful Soup lib",
      description: "Learning some main topics",
    },
    {
      id: "3",
      title: "Testing Beautiful Soup lib",
      description: "Learning some main topics",
    },
  ],
};
