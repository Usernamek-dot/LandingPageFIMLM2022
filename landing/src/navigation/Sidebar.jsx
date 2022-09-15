import { Box, Drawer, Toolbar } from "@mui/material";
import { useState } from "react";
import { DrawerSidebar } from "./DrawerSidebar";
import { Navbar } from "./Navbar";

export const Sidebar = (props) => {
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="options menu"
      >
        {/* mobile */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              // bgcolor: "primary.contrast",
            },
          }}
        >
          <DrawerSidebar />
        </Drawer>
        {/* desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerSidebar />
        </Drawer>
      </Box>

      {/* views come here */}
    </Box>
  );
};
