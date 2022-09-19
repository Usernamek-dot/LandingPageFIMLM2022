import { Download, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

export const SocialMedia = () => {
  return (
    <Box sx={{ mr: 10 }}>
      <Tooltip title="Chat with me">
        <IconButton
          color="primary"
          href="https://wa.me/573106165949?text=Hola%20estoy%20interesad@%20en%20tu%20trabajo%20."
          aria-label="whatsapp"
        >
          <WhatsApp />
        </IconButton>
      </Tooltip>
      <Tooltip title="View my github profile">
        <IconButton
          color="primary"
          href="https://github.com/Usernamek-dot"
          aria-label="github"
        >
          <GitHub />
        </IconButton>
      </Tooltip>
      <Tooltip color="primary" title="View my linkedin profile">
        <IconButton
          href="https://www.linkedin.com/in/karol-pacheco-8418161a7"
          aria-label="Linkedin"
        >
          <LinkedIn />
        </IconButton>
      </Tooltip>
      <Tooltip title="Download Resume">
        <IconButton color="primary" href="./cv.pdf" aria-label="download">
          <Download />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
