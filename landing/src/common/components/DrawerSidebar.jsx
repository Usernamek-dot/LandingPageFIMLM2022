import { Link } from "react-router-dom";
import {
  Divider,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
} from "@mui/material";
import { pages } from "../../../database/pages";
import { useState } from "react";
import { Loader } from "./Loader";
import { Label } from "@mui/icons-material";

export const DrawerSidebar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoader = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <List>
        <Link to="/Home">
          <ListItem disablePadding>
            <ListItemButton onClick={handleLoader}>
              <ListItemIcon sx={{ color: "secondary.main" }}>
                <Label />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "primary.main" }}
                primary="Dashboard"
              />
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
                <ListItemIcon sx={{ color: "secondary.main" }}>
                  <Label />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "primary.main" }}
                  primary={page.primary}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};
