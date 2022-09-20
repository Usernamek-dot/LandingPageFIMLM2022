import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SocialMedia } from "./components/SocialMedia";

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
            <SocialMedia />
            <Avatar sx={{ ml: 4 }} alt="avatar" src="/avatarlogo.svg" />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
