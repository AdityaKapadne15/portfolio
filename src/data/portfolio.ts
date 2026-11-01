export type Skill = {
  name: string;
  icon?: string;
};

export type SkillGroup = {
  name: string;
  description: string;
  skills: Skill[];
};

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const skillIcons: Record<string, string> = {
  "React.js": new URL("../../assets/icons/icons8-react-native-480.png", import.meta.url).href,
  "Angular 12": new URL("../../assets/icons/icons8-angularjs-480.png", import.meta.url).href,
  HTML: new URL("../../assets/icons/icons8-html-5-480.png", import.meta.url).href,
  CSS: new URL("../../assets/icons/icons8-css-480.png", import.meta.url).href,
  Sass: new URL("../../assets/icons/icons8-sass-avatar-480.png", import.meta.url).href,
  "Tailwind CSS": new URL("../../assets/icons/icons8-tailwind-css-480.png", import.meta.url).href,
  JavaScript: new URL("../../assets/icons/icons8-javascript-480.png", import.meta.url).href,
  TypeScript: new URL("../../assets/icons/icons8-typescript-480.png", import.meta.url).href,
  "Core Java": new URL("../../assets/icons/icons8-java-480.png", import.meta.url).href,
  "REST APIs": new URL("../../assets/icons/icons8-api-96.png", import.meta.url).href,
  Python: new URL("../../assets/icons/icons8-python-480.png", import.meta.url).href,
  "Node.js": new URL("../../assets/icons/icons8-nodejs-480.png", import.meta.url).href,
  "Power BI": new URL("../../assets/icons/icons8-power-bi-144.png", import.meta.url).href,
  "AWS EC2": new URL("../../assets/icons/icons8-aws-480.png", import.meta.url).href,
  "AWS S3": new URL("../../assets/icons/icons8-aws-480.png", import.meta.url).href,
  "Azure fundamentals": new URL("../../assets/icons/icons8-azure-480.png", import.meta.url).href,
  MongoDB: new URL("../../assets/icons/MongoDB_icon.webp", import.meta.url).href,
  MySQL: new URL("../../assets/icons/sql.png", import.meta.url).href,
  Git: new URL("../../assets/icons/icons8-git-480.png", import.meta.url).href,
  GitHub: new URL("../../assets/icons/icons8-github-480.png", import.meta.url).href,
  Docker: new URL("../../assets/icons/docker.png", import.meta.url).href,
  Kubernetes: new URL("../../assets/icons/kubernetes.png", import.meta.url).href,
  Postman: new URL("../../assets/icons/postman_icon.png", import.meta.url).href,
  "Red Hat Enterprise Linux": new URL("../../assets/icons/redhat-icon.png", import.meta.url).href,
  Ubuntu: new URL("../../assets/icons/icons8-ubuntu-96.png", import.meta.url).href,
  "Raspberry Pi OS": new URL("../../assets/icons/icons8-raspberry-pi-144.png", import.meta.url).href,
  "Windows OS": new URL("../../assets/icons/icons8-windows8-480.png", import.meta.url).href,
};

function createSkills(names: string[]): Skill[] {
  return names.map((name) => ({ name, icon: skillIcons[name] }));
}

export const navigationItems = [
  { label: "Dossier", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Archive", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const careerTimeline = [
  {
    role: "Software Intern",
    organization: "Persistent Systems Limited",
    period: "Feb 2022 — Jul 2022",
  },
  {
    role: "Software Engineer",
    organization: "Persistent Systems Limited",
    period: "Jul 2022 — Jul 2024",
  },
  {
    role: "Senior Software Engineer",
    organization: "Persistent Systems Limited",
    period: "Jul 2024 — Dec 2025",
  },
  {
    role: "Lead Software Engineer",
    organization: "Persistent Systems Limited",
    period: "Dec 2025 — Present",
  },
];

export const projects = [
  {
    name: "Hospital Management System",
    classification: "PROJECT FILE / 001",
    description:
      "A web-based hospital management project bringing operational workflows into one interface.",
    image: publicAsset("assets/hospital_animation.gif"),
    imageAlt: "Preview of the Hospital Management System project",
    repository:
      "https://github.com/AdityaKapadne15/hospital-management-system",
    demo: "https://adityakapadne15.github.io/hospital-management-system/",
    tags: ["Web application", "Healthcare"],
  },
  {
    name: "Movie Recommendation App",
    classification: "PROJECT FILE / 002",
    description:
      "A movie discovery project built to help visitors explore titles and find something new to watch.",
    image: publicAsset("assets/movie_animation.gif"),
    imageAlt: "Preview of the Movie Recommendation App project",
    repository:
      "https://github.com/AdityaKapadne15/movie-recommendation-app",
    demo: "https://adityakapadne15.github.io/movie-recommendation-app",
    tags: ["Web application", "Recommendations"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Interface systems",
    description: "Frontend frameworks, languages, and styling systems.",
    skills: createSkills([
      "React.js",
      "Angular 12",
      "HTML",
      "CSS",
      "Material UI",
      "Sass",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
    ]),
  },
  {
    name: "Application backend",
    description: "Services, APIs, authentication, and server-side languages.",
    skills: createSkills([
      "Spring Boot",
      "Spring MVC",
      "JPA",
      "JWT",
      "OAuth",
      "Core Java",
      "REST APIs",
      "Python",
      "Node.js",
    ]),
  },
  {
    name: "Data & cloud",
    description: "Business intelligence, observability, and data platforms.",
    skills: createSkills([
      "Power BI",
      "Instana",
      "Turbonomic",
      "SevOne",
      "ETL pipelines",
      "AWS EC2",
      "AWS S3",
      "Azure fundamentals",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "OracleDB",
    ]),
  },
  {
    name: "Delivery & runtime",
    description: "Build and collaboration tools, containers, and operating systems.",
    skills: createSkills([
      "Git",
      "GitHub",
      "Bitbucket",
      "Bamboo",
      "ArgoCD",
      "Docker",
      "Kubernetes",
      "Confluence",
      "Postman",
      "DBeaver",
      "Red Hat Enterprise Linux",
      "Ubuntu",
      "Raspberry Pi OS",
      "Windows OS",
    ]),
  },
];

export const achievements = [
  {
    title: "Top Talent Award 2024",
    image: publicAsset("assets/cert_imgs/top_talent_2024.png"),
  },
  {
    title: "Bravo Award",
    image: publicAsset("assets/cert_imgs/Bravo_Award.png"),
  },
  {
    title: "Microsoft Azure AZ-900",
    image: publicAsset("assets/cert_imgs/AZ-900_certification.jpg"),
  },
  {
    title: "Call for Code 2023",
    image: publicAsset("assets/cert_imgs/call_for_code_2023.png"),
  },
  {
    title: "IBM Instana",
    image: publicAsset("assets/cert_imgs/IBM_instana.png"),
  },
  {
    title: "IBM Instana Intermediate",
    image: publicAsset("assets/cert_imgs/IBM_instana_Intermediate.png"),
  },
  {
    title: "AWS course certificate",
    image: publicAsset("assets/cert_imgs/aws_udemy.png"),
  },
  {
    title: "HTML course certificate",
    image: publicAsset("assets/cert_imgs/HTML_udemy.png"),
  },
  {
    title: "CSS course certificate",
    image: publicAsset("assets/cert_imgs/CSS_udemy.png"),
  },
  {
    title: "TypeScript course certificate",
    image: publicAsset("assets/cert_imgs/TS_udemy.png"),
  },
  {
    title: "Node.js course certificate",
    image: publicAsset("assets/cert_imgs/nodejs_udemy.png"),
  },
  {
    title: "Git course certificate",
    image: publicAsset("assets/cert_imgs/git_udemy.png"),
  },
  {
    title: "Docker course certificate",
    image: publicAsset("assets/cert_imgs/docker_udemy.png"),
  },
  {
    title: "DevOps course certificate",
    image: publicAsset("assets/cert_imgs/devops_udemy.png"),
  },
  {
    title: "PowerShell course certificate",
    image: publicAsset("assets/cert_imgs/powershell_udemy.png"),
  },
  {
    title: "MongoDB course certificate",
    image: publicAsset("assets/cert_imgs/mongo_udemy.png"),
  },
];

export const socialLinks = {
  email: "mailto:adityakapadne149@gmail.com",
  emailLabel: "adityakapadne149@gmail.com",
  linkedin: "https://www.linkedin.com/in/aditya-kapadne-301b38219",
  github: "https://github.com/AdityaKapadne15",
  resume: publicAsset("assets/Aditya_Kapadne_Lead_Software_Engineer.pdf"),
};
