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
import { pages } from "../../database/pages";

export const DrawerSidebar = () => {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link to="/Home">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityNewIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {pages.map((page) => (
          <Link key={page.id} to={page.to}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccessibilityNewIcon />
                </ListItemIcon>
                <ListItemText primary={page.primary} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
