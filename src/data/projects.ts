export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Project One",
    description: "A full-stack web application for managing tasks and projects.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.example.com"
  },
  {
    name: "Project Two",
    description: "Real-time chat application with video calling capabilities.",
    technologies: ["Vue.js", "WebRTC", "Firebase"],
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "https://project-two.example.com"
  },
  {
    name: "Project Three",
    description: "Mobile-first e-commerce platform with payment integration.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project-three"
  }
];