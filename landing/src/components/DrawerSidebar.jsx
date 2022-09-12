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
        <Link to="/Home">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon color="primary">
                <AccessibilityNewIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/About">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityNewIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/Portfolio">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityNewIcon />
              </ListItemIcon>
              <ListItemText primary="Portfolio" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/Contact">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityNewIcon />
              </ListItemIcon>
              <ListItemText primary="Contact  (footer)" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemIcon>
                <AccessibilityNewIcon />
              </ListItemIcon>
              <ListItemText primary="Programming Languages" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemIcon>
                <AccessibilityNewIcon />
              </ListItemIcon>
              <ListItemText primary="Study" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/Form">
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemIcon>
                <AccessibilityNewIcon />
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );
};
