import { Box, CssBaseline, Drawer } from "@mui/material";
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
  // const drawer = (
  //   <div>
  //     <Toolbar />
  //     <Divider />
  //     <List>
  //       <ListItem disablePadding>
  //         <ListItemButton>
  //           <ListItemIcon>
  //             <AccessibilityNewIcon />
  //           </ListItemIcon>
  //           <Link to="/Home">
  //             <ListItemText primary="Dashboard" />
  //           </Link>
  //         </ListItemButton>
  //       </ListItem>
  //     </List>
  //     <Divider />
  //     <List>
  //       <ListItem disablePadding>
  //         <ListItemButton>
  //           <ListItemIcon>
  //             <AccessibilityNewIcon />
  //           </ListItemIcon>
  //           <Link to="/About">
  //             <ListItemText primary="About" />
  //           </Link>
  //         </ListItemButton>
  //       </ListItem>
  //       <ListItem disablePadding>
  //         <ListItemButton>
  //           <ListItemIcon>
  //             <AccessibilityNewIcon />
  //           </ListItemIcon>
  //           <Link to="/Portfolio">
  //             <ListItemText primary="Portfolio" />
  //           </Link>
  //         </ListItemButton>
  //       </ListItem>
  //       <ListItem disablePadding>
  //         <ListItemButton>
  //           <ListItemIcon>
  //             <AccessibilityNewIcon />
  //           </ListItemIcon>
  //           <Link to="/Contact">
  //             <ListItemText primary="Contact/footer" />
  //           </Link>
  //         </ListItemButton>
  //       </ListItem>
  //       <ListItem disablePadding>
  //         <ListItemButton disabled>
  //           <ListItemIcon>
  //             <AccessibilityNewIcon />
  //           </ListItemIcon>
  //           <Link to="/">
  //             <ListItemText primary="Programming Languages" />
  //           </Link>
  //         </ListItemButton>
  //       </ListItem>
  //       <ListItem disablePadding>
  //         <ListItemButton disabled>
  //           <ListItemIcon>
  //             <AccessibilityNewIcon />
  //           </ListItemIcon>
  //           <Link to="/">
  //             <ListItemText primary="Study" />
  //           </Link>
  //         </ListItemButton>
  //       </ListItem>
  //       <ListItem disablePadding>
  //         <ListItemButton disabled>
  //           <ListItemIcon>
  //             <AccessibilityNewIcon />
  //           </ListItemIcon>
  //           <Link to="/">
  //             <ListItemText primary="Form" />
  //           </Link>
  //         </ListItemButton>
  //       </ListItem>
  //     </List>
  //   </div>
  // );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="options menu"
      >
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
            },
          }}
        >
          <DrawerSidebar />
          {/* {drawer} */}
        </Drawer>
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
          {/* {drawer} */}
        </Drawer>
      </Box>
    </Box>
  );
};
