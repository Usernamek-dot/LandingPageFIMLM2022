import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Delete, Download, GitHub, Mail, WhatsApp } from "@mui/icons-material";

export const Navbar = ({ drawerWidth, handleDrawerToggle }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          position="fixed"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Landing
            </Typography>
            <Box sx={{ mr: 10 }}>
              <IconButton aria-label="whatsapp">
                <WhatsApp />
              </IconButton>
              <IconButton aria-label="github">
                <GitHub />
              </IconButton>
              <IconButton aria-label="mail">
                <Mail />
              </IconButton>
              <Tooltip title="Download CV">
                <IconButton aria-label="dowload">
                  <Download />
                </IconButton>
              </Tooltip>
            </Box>
            <Avatar alt="avatar" src="/avatarlogo.svg" />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
