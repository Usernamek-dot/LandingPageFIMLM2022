import { Box, Container, Typography } from "@mui/material";
import { SwipableStepper } from "../components/SwipableStepper";

export const Studies = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 10,
        ml: { sm: "75vh" },
      }}
    >
      <Typography sx={{ ml: "95vh" }} variant="h6">
        Studies
      </Typography>
      <SwipableStepper />
    </Box>
  );
};
