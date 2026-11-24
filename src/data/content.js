export const profile = {
  name: "Samiuzzaman Sahil",
  shortName: "Sami",
  initials: "SS",
  role: "Full-Stack Developer",
  tagline: "I build clean, reliable web applications — from database to interface.",
  intro:
    "Computer Science & Engineering student at Uttara University and a full-stack developer. I turn ideas into working products with React on the front end, and Node.js, Express and relational databases behind them.",
  location: "Dhaka, Bangladesh",
  timezone: "Asia/Dhaka",
  email: "samisahil186@gmail.com",
  github: "https://github.com/SamiSahil",
  githubUser: "SamiSahil",
  linkedin: "https://www.linkedin.com/in/samiuzzaman-sahil-11a833385/",
  linkedinUser: "samiuzzaman-sahil",
  website: "https://samisahil.github.io/portfolio/",
  resume: "resume.pdf",
  university: "Uttara University",
  degree: "B.Sc. in Computer Science & Engineering",
  period: "2023 — Present",
  availability: "Open to internships & junior roles",
};

export const nav = [
  { label: "About", href: "#bio" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: "edusyspro",
    name: "EduSysPro",
    subtitle: "School Management System",
    scope: "Full-stack · Education",
    description:
      "A platform that streamlines daily school operations with role-based portals for students, teachers, accountants and staff — secured with JWT authentication.",
    tags: ["JavaScript", "Express", "MongoDB", "JWT"],
    cover: "edusys",
    accent: "#38bdf8",
    links: {
      code: "https://github.com/SamiSahil/edusysv1",
    },
  },
  {
    id: "aic-inventory",
    name: "AIC Inventory",
    subtitle: "Stock & Order Management",
    scope: "Frontend · Inventory",
    description:
      "An inventory dashboard for tracking stock levels, customer orders, profitability and delivery logistics, with interactive charts and Google sign-in.",
    tags: ["React", "Vite", "ApexCharts", "Google OAuth"],
    cover: "aic",
    accent: "#2dd4bf",
    links: {
      live: "https://SamiSahil.github.io/aicinventory",
      code: "https://github.com/SamiSahil/aicinventory",
    },
  },
  {
    id: "attendance",
    name: "Attendance System",
    subtitle: "Student Attendance Tracker",
    scope: "Frontend · Education",
    description:
      "An attendance tool for recording student presence, absences and leave, with clear monthly reports that make tracking effortless.",
    tags: ["React", "Vite", "React Router", "React Icons"],
    cover: "attendance",
    accent: "#3b82f6",
    links: {
      live: "https://SamiSahil.github.io/attendance",
      code: "https://github.com/SamiSahil/attendance",
    },
  },
  {
    id: "portfolio",
    name: "Portfolio v1",
    subtitle: "First Developer Site",
    scope: "Frontend · Personal",
    description:
      "The first version of my personal site — an animated hero, typewriter introduction and a clean showcase of selected work.",
    tags: ["React", "Framer Motion", "Typewriter"],
    cover: "portfolio",
    accent: "#d99a6c",
    links: {
      live: "https://samisahil.github.io/samiprofile/",
      code: "https://github.com/SamiSahil/samiprofile",
    },
  },
];

export const stack = [
  {
    title: "Frontend",
    caption: "Interfaces that stay out of the way",
    icon: "layout",
    items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Framer Motion"],
  },
  {
    title: "Backend",
    caption: "APIs and data that hold up",
    icon: "server",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "JWT"],
  },
  {
    title: "Tools",
    caption: "A small, sharp everyday toolkit",
    icon: "wrench",
    items: ["Git", "GitHub", "Docker", "VS Code", "Vercel", "Netlify"],
  },
];

export const focusAreas = [
  "Full-stack web development",
  "Database design",
  "Clean, accessible interfaces",
  "Shipping real products",
];

export const overview = [
  { key: "role", label: "Role", value: "Full-Stack Developer" },
  { key: "location", label: "Location", value: profile.location },
  { key: "email", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { key: "github", label: "GitHub", value: `@${profile.githubUser}`, href: profile.github },
  { key: "linkedin", label: "LinkedIn", value: `in/${profile.linkedinUser}`, href: profile.linkedin },
  { key: "website", label: "Website", value: "samisahil.github.io/portfolio", href: profile.website },
  { key: "education", label: "Education", value: "B.Sc. CSE · Uttara University" },
  { key: "time", label: "Local time", value: "" },
];
