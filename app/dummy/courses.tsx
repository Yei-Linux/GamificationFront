import { DUMMY_TUTOR } from "./tutor";

export const DUMMY_THEME_COURSES = [
  {
    title: "IA",
    description: "Basic models",
  },
  {
    title: "Structure Programmimng",
    description: "Loops and conditionals",
  },
  {
    title: "OOP Programming",
    description: "Polimorphism",
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
      themeType: "sky" as const,
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
      themeType: "skin" as const,
    },
  ],
  summary: [
    {
      id: "1",
      name: "Testing Beautiful Soup lib",
    },
    {
      id: "2",
      name: "Developing daily task",
    },
    {
      id: "3",
      name: "Show important data",
    },
  ],
};
