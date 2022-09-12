import { Link } from "react-router-dom";
import {
  Divider,
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
} from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

export const DrawerSidebar = () => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon color="primary">
              <AccessibilityNewIcon />
            </ListItemIcon>
            <Link to="/Home">
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <Link to="/About">
              <ListItemText primary="About" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <Link to="/Portfolio">
              <ListItemText primary="Portfolio" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <Link to="/Contact">
              <ListItemText primary="Contact  (footer)" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Programming Languages" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Study" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Form" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};
