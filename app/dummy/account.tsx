export const DUMMY__METRICS = [
  {
    numberTasks: "75%",
    title: "Daily Task solved per Week",
  },
  {
    numberTasks: "15h",
    title: "Average time to learn a module",
  },
  {
    numberTasks: "15pts",
    title: "Average score uploaded per month",
  },
];

export const DUMMY__BADGES = [
  {
    title: "In Exams",
    icons: [
      {
        name: "strategy" as const,
        lvl: 1,
      },
      {
        name: "faster" as const,
        lvl: 3,
      },
      {
        name: "winner" as const,
        lvl: 1,
      },
    ],
  },
  {
    title: "In Exercises",
    icons: [],
  },
  {
    title: "In Courses",
    icons: [
      {
        name: "strategy" as const,
        lvl: 2,
      },
      {
        name: "faster" as const,
        lvl: 1,
      },
    ],
  },
];

export const DUMMY__SKILLS = [
  {
    title: "Javascript",
    description: "Basic Lvl",
    percent: 90,
    name: "books_folder",
  },
  {
    title: "Javascript",
    description: "Middle Lvl",
    name: "books_folder",
    percent: 75,
  },
  {
    title: "Python",
    description: "Basic Lvl",
    name: "books_folder",
    percent: 15,
  },
];

export const DUMMY__SCORE__POSITION = [
  {
    position: 15,
    avatar: "https://iconape.com/wp-content/png_logo_vector/avatar-6.png",
    userName: "YeiLinux",
    lvl: 7,
    score: 1500,
  },
  {
    position: 16,
    avatar: "https://iconape.com/wp-content/png_logo_vector/avatar-6.png",
    userName: "YeiLinux",
    lvl: 7,
    score: 1480,
  },
  {
    position: 17,
    avatar: "https://iconape.com/wp-content/png_logo_vector/avatar-6.png",
    userName: "YeiLinux",
    lvl: 7,
    score: 1470,
  },
  {
    position: 18,
    avatar: "https://iconape.com/wp-content/png_logo_vector/avatar-6.png",
    userName: "YeiLinux",
    lvl: 7,
    score: 1460,
  },
];

export const DUMMY__ACCOUNT__PROFILE = {
  photo: "https://iconape.com/wp-content/png_logo_vector/avatar-6.png",
  userName: "YeiLinux",
  role: "Frontend Developer",
  lvl: 7,
  scorePercentBar: 70,
  score: 1500,
  scoreToNextLvl: 50,
  socialNetworks: [
    {
      iconId: "github",
      url: "https://github.com/Yei-Linux",
    },
    {
      iconId: "twitter",
      url: "https://twitter.com/LinuxYei",
    },
    {
      iconId: "linkedin",
      url:
        "https://www.linkedin.com/in/cesar-jesus-alberto-alvan-huarcaya-0a6584194/",
    },
  ],
};

export const DUMMY__ACCOUNT__INFORMATION = {
  account: DUMMY__ACCOUNT__PROFILE,
  metrics: DUMMY__METRICS,
  badges: DUMMY__BADGES,
  skills: DUMMY__SKILLS,
  userPositions: DUMMY__SCORE__POSITION,
};
