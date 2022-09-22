import { Box, Container, Typography } from "@mui/material";
import { TitlePage } from "../../common/components/TitlePage";
import { SwipableStepper } from "../components/SwipableStepper";

export const Studies = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 10,
        ml: { sm: "35vh", md: "47vh" },
      }}
    >
      <TitlePage title="Studies" />
      <SwipableStepper />
    </Box>
  );
};
