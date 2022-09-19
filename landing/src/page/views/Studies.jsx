import { Box, Container, Typography } from "@mui/material";
import { SwipableStepper } from "../components/SwipableStepper";

export const Studies = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 10,
        ml: { sm: "35vh", md: "36vh" },
      }}
    >
      <Typography m={5} textAlign="center" variant="h5">
        Studies
      </Typography>
      <SwipableStepper />
    </Box>
  );
};
