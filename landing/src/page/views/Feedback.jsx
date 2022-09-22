import { Box, Button, Typography } from "@mui/material";
import { Form } from "../components";

export const Feedback = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 10,
        ml: { sm: "40vh" },
      }}
    >
      <Typography color="primary" m={5} textAlign="center" variant="h5">
        Feedback form
      </Typography>
      <Form />
    </Box>
  );
};
