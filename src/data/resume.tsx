import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhra Deep Barman",
  initials: "ADB",
  url: "https://google.com",
  location: "Siliguri, West Bengal",
  locationLink: "https://maps.app.goo.gl/VDmG9W6zQSu4mByi7",
  description:
    "Engineer | Developer | Student",
  summary:
    "I am IT'25 Undergrad student at Dr. B. C. Roy Engineering College. I am very passionate about improving my coding skills & developing web applications. I love building products that help people and create an impact in their lives. Working for myself to improve my skills.",
  avatarUrl: "/me.jpg",
  skills: [
    "C",
    "C++",
    "Java",
    "Python",
    "React.js",
    "NextJS",
    "Node.jS",
    "Express",
    "HTML",
    "CSS",
    "Javascript",
    "Tailwind CSS",
    "Bootstrap",
    "Docker",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Postman",
    "Redux",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhradeepbarman",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhradeepbarman/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/abhra_deep_brmn",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Celebal Technologies",
      href: "https://celebaltech.com/",
      badges: [],
      location: "Remote",
      title: "NodeJS Developer Intern",
      logoUrl: "/celebal.png",
      start: "May 2024",
      end: "Jul 2024",
      description:
        "During my internship, I gained hands-on experience in Backend development, collaborating with a team of developers to design and implement web applications. I actively participated in code reviews, feature planning, and debugging sessions, which sharpened my problem-solving skills and attention to detail. I was involved in both front-end and back-end tasks, working extensively with technologies like MongoDB, Express.js, React, and Node.js.",
    }
  ],
  education: [
    {
      school: "Dr. B. C. Roy Engineering College",
      href: "https://bcrec.ac.in/",
      degree: "B.Tech in Information Technology",
      logoUrl: "/bcrec.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Siliguri Boys' High School",
      href: "https://siliguriboyshighschool.in/",
      degree: "Higher Secondary",
      logoUrl: "/sbhs.jpeg",
      start: "2019",
      end: "2021",
    },
    
  ],
  projects: [
    {
      title: "Study Notion",
      href: "https://study-notion-ecru-eight.vercel.app/",
      dates: "March 2024 - Feb 2024",
      active: true,
      description:
        "An EdTech platform for instructors to create courses on 20+ course topics which enabled students to wishlist, purchase courses via Razorpay, and provide ratings and reviews",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "MongoDB",
        "Express JS",
        "Cloudinary",
        "Razorpay",
        "Redux",
        "React-hook-form"
      ],
      links: [
        {
          type: "Website",
          href: "https://study-notion-ecru-eight.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/studynotion.png",
      video: "",
    },
    {
      title: "Mern Holidays",
      href: "https://mernholidays.vercel.app/",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "A Hotel booking platform enabling users to list properties, search, sort, and filter hotels based on their need. Integrated Stripe payment gateway for seamless booking & JWT-token for authentication.",
      technologies: [
        "React.js",
        "Redux",
        "Tailwind CSS",
        "React Query",
        "MongoDB",
        "Mongoose",
        "Express JS",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://mernholidays.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mernholidays.png",
      video: "",
    },
    {
      title: "TubeX",
      href: "https://github.com/abhradeepbarman/youtube-twitter-backend",
      dates: "May 2024 - May 2024",
      active: true,
      description:
        "Developed a video streaming platform with features like video uploads, comments, likes. Other features includes create playlists, watch history, post tweets with secure token-based auth.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Cloudinary",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/abhradeepbarman/youtube-twitter-backend",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tubex.png",
      video: "",
    },
    {
      title: "Mega Blog",
      href: "https://mega-blog-xyz.netlify.app/",
      dates: "May 2024 - May 2024",
      active: true,
      description:
        "Developed a video streaming platform with features like video uploads, comments, likes. Other features includes create playlists, watch history, post tweets with secure token-based auth.",
      technologies: [
        "React.js",
        "Redux toolkit",
        "TinyMCE Editor",
        "Appwrite",
        "SaaS",
        "Tailwind CSS",
        "BaaS"
      ],
      links: [
        {
          type: "Website",
          href: "https://mega-blog-xyz.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/megablog.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
