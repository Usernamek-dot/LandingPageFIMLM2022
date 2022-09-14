import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export const Navbar = ({ drawerWidth, handleDrawerToggle }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "primary.main",
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
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Landing
          </Typography>
          <Avatar alt="avatar" src="/avatarlogo.svg" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
