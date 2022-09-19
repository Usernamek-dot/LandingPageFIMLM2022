import { Link } from "react-router-dom";
import {
  Divider,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
} from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { pages } from "../../../database/pages";
import { useState } from "react";
import { Loader } from "./Loader";

export const DrawerSidebar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoader = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <List>
        <Link to="/Home">
          <ListItem disablePadding>
            <ListItemButton onClick={handleLoader}>
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
              <ListItemButton onClick={handleLoader}>
                <ListItemIcon>
                  <AccessibilityNewIcon />
                </ListItemIcon>
                <ListItemText primary={page.primary} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};
