import { Download, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";

export const icons = [
  {
    id: 1,
    arialabel: "whatsapp",
    tooltip: "Chat with me",
    icon: WhatsApp,
    href: "https://wa.me/573106165949?text=Hola%20estoy%20interesad@%20en%20tu%20trabajo%20.",
  },
  {
    id: 2,
    arialabel: "github",
    tooltip: "View my github profile",
    icon: GitHub,
    href: "https://github.com/Usernamek-dot",
  },
  {
    id: 3,
    arialabel: "linkedin",
    tooltip: "View my linkedin profile",
    icon: LinkedIn,
    href: "https://www.linkedin.com/in/karol-pacheco-8418161a7",
  },
  {
    id: 4,
    arialabel: "curriculum vitae",
    tooltip: "Download Resume",
    icon: Download,
    href: "./cv.pdf",
  },
];
