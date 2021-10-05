import { DUMMY_CLASS_NOTES } from "./notes";
import { DUMMY_TUTOR } from "./tutor";

export const DUMMY_CLASS = {
  id: "1",
  title: "Scraping with Scrapy",
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
  notes: DUMMY_CLASS_NOTES,
  urlVideo:
    "https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164",
};

export const DUMMY_CLASS_CHAT = [
  {
    isMe: false,
    author: {
      username: "Lucas",
      id: "464eaa3c-1159-499a-b862-2da7a04930f8",
      avatarUrl: "https://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
    },
    textDetail: [
      {
        type: "text",
        text: "Hi, im a newbie dev",
        timestamp: 1578366389250,
      },
    ],
  },
  {
    isMe: true,
    author: null,
    textDetail: [
      {
        type: "text",
        text: "Hey man, me too",
        timestamp: 1578366389250,
      },
    ],
  },
  {
    isMe: false,
    author: {
      username: "Lucas",
      id: "464eaa3c-1159-499a-b862-2da7a04930f8",
      avatarUrl: "https://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
    },
    textDetail: [
      {
        type: "text",
        text: "This course is so interesting",
        timestamp: 1578366389250,
      },
      {
        type: "text",
        text: "i will expect learn too much about styled components",
        timestamp: 1578366389250,
      },
    ],
  },
];
